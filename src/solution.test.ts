import { RemainderModulosPair } from './redux/converter/converter.types';
import { calculateX } from './solution';

describe('calculateX', () => {
  it('should return 23', () => {
    const data: RemainderModulosPair[] = [
      { remainder: 2, modulos: 3 },
      { remainder: 3, modulos: 5 },
      { remainder: 2, modulos: 7 },
    ];

    expect(calculateX(data)).toBe(23);
  });

  it('should return 21', () => {
    const data: RemainderModulosPair[] = [
      { remainder: 0, modulos: 3 },
      { remainder: 1, modulos: 5 },
      { remainder: 0, modulos: 7 },
    ];

    expect(calculateX(data)).toBe(21);
  });

  it('should return 29', () => {
    const data: RemainderModulosPair[] = [
      { remainder: 1, modulos: 4 },
      { remainder: 4, modulos: 5 },
      { remainder: 1, modulos: 3 },
    ];

    expect(calculateX(data)).toBe(49);
  });

  // it('should return 29', () => {
  //   const data: RemainderModulosPair[] = [
  //     { remainder: 2, modulos: 5 },
  //     { remainder: 1, modulos: 7 },
  //     { remainder: 3, modulos: 11 },
  //     { remainder: 8, modulos: 13 },
  //   ];

  //   expect(calculateX(data)).toBe(2192);
  // });
});
