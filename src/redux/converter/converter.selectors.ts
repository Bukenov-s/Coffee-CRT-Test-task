import { AppState } from '~/types';
import { ConverterState } from './converter.types';

export const selectConverterIsPending = (
  state: AppState,
): ConverterState['is_pending'] => state.converter.is_pending;

export const selectConverterResult = (
  state: AppState,
): ConverterState['result'] => state.converter.result;

export const selectConverterCalculationComplete = (
  state: AppState,
): ConverterState['is_calculation_complete'] =>
  state.converter.is_calculation_complete;
