import { RemainderModulosPair } from '~/redux/converter/converter.types';

export const resolveCorrectModulos = (
  numberToConvert: number,
): RemainderModulosPair[] => {
  // ???
  return [] as RemainderModulosPair[];
};

export const calculateX = (
  remainderModulosPairArray: RemainderModulosPair[],
): number | string => {
  const remainders = remainderModulosPairArray.map((pair) => pair.remainder);
  const modulos = remainderModulosPairArray.map((pair) => pair.modulos);
  const m0 = modulos.reduce((mPrevious, mNext) => mPrevious * mNext);
  const otherMs = modulos.map((m) => m0 / m);
  let can_not_calculate = false;

  const ys = otherMs.map((bigM, bigMIndex) => {
    let multiplier = 1;
    const firstTry = bigM % modulos[bigMIndex];
    let result = firstTry;

    /* to prevent potential infinite loop, let's exit loop after ten attempts */
    while (result % modulos[bigMIndex] !== 1) {
      multiplier += 1;

      result = firstTry * multiplier;

      if (multiplier === 10) break;
    }

    if (multiplier === 10) {
      can_not_calculate = true;
    }

    if (multiplier !== 1) return multiplier;

    return result;
  });

  if (can_not_calculate) {
    return 'Couldnt calculate the result';
  }

  return (
    remainders.reduce((acc, numNext, numIndex) => {
      acc += numNext * otherMs[numIndex] * ys[numIndex];

      return acc;
    }, 0) % m0
  );
};
