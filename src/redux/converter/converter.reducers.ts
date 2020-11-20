import { createReducer } from '@reduxjs/toolkit';
import {
  dataReset,
  convertReminderModulosPairs,
  reminderModulosPairsConverted,
} from './converter.actions';
import { ConverterState } from './converter.types';

const initial_state: ConverterState = {
  is_pending: false,
  result: null,
  is_calculation_complete: false,
};

export default createReducer(initial_state, (builder) => {
  builder
    .addCase(convertReminderModulosPairs, (state) => {
      state.is_pending = true;
    })
    .addCase(reminderModulosPairsConverted, (state, { payload }) => {
      state.is_pending = false;
      state.result = payload.result;
      state.is_calculation_complete = true;
    })
    .addCase(dataReset, (state) => {
      state.result = null;
      state.is_calculation_complete = false;
    })
    .addDefaultCase((state) => state);
});
