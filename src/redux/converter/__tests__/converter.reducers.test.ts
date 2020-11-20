import reducer from '../converter.reducers';
import {
  convertReminderModulosPairs,
  reminderModulosPairsConverted,
  dataReset,
} from '../converter.actions';
import { ConverterState, RemainderModulosPair } from '../converter.types';

describe('converter reducer', () => {
  it('should return initial state', () => {
    const initial_state = {} as ConverterState;

    expect(reducer(initial_state, { type: 'SOM_UNKNOWN_TYPE' })).toEqual(
      initial_state,
    );
  });

  it('should switch is_pending to true', () => {
    const initial_state = {
      is_pending: false,
    } as ConverterState;

    const result_state = {
      is_pending: true,
    } as ConverterState;

    expect(
      reducer(
        initial_state,
        convertReminderModulosPairs([] as RemainderModulosPair[]),
      ),
    ).toEqual(result_state);
  });

  it('should switch is_pending to false, assign result, and set calculation complete', () => {
    const initial_state = {
      is_pending: true,
      is_calculation_complete: false,
      result: null,
    } as ConverterState;

    const result_state = {
      is_pending: false,
      is_calculation_complete: true,
      result: 42,
    } as ConverterState;

    expect(reducer(initial_state, reminderModulosPairsConverted(42))).toEqual(
      result_state,
    );
  });

  it('should reset state to its initial shape', () => {
    const initial_state = {
      is_pending: false,
      is_calculation_complete: true,
      result: 42,
    } as ConverterState;

    const result_state = {
      is_pending: false,
      is_calculation_complete: false,
      result: null,
    } as ConverterState;

    expect(reducer(initial_state, dataReset())).toEqual(result_state);
  });
});
