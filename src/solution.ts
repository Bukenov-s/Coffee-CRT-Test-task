import { RemainderModulosPair } from '~/redux/converter/converter.types';

export const resolveCorrectModulos = () => {};

export const calculateX = (
  remainderModulosPairArray: RemainderModulosPair[],
): number => {
  const remainders = remainderModulosPairArray.map((pair) => pair.remainder);
  const modulos = remainderModulosPairArray.map((pair) => pair.modulos);
  const m0 = modulos.reduce((mPrevious, mNext) => mPrevious * mNext);
  const otherMs = modulos.map((m) => m0 / m);

  const ys = otherMs.map((bigM, bigMIndex) => {
    let multiplier = 1;
    const firstTry = bigM % modulos[bigMIndex];
    let result = firstTry;

    while (result % modulos[bigMIndex] !== 1) {
      multiplier += 1;

      result = firstTry * multiplier;
    }

    if (multiplier !== 1) return multiplier;

    return result;
  });

  return (
    remainders.reduce((acc, numNext, numIndex) => {
      acc += numNext * otherMs[numIndex] * ys[numIndex];

      return acc;
    }, 0) % m0
  );
};
