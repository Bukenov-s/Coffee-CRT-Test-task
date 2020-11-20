export interface RemainderModulosPair {
  remainder: number;
  modulos: number;
}

export interface ConverterState {
  is_pending: boolean;
  result: number | RemainderModulosPair | null;
  is_calculation_complete: boolean;
}
