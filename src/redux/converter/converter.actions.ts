import { createAction } from '@reduxjs/toolkit';
import { RemainderModulosPair } from './converter.types';

export const convertReminderModulosPairs = createAction(
  '[converter ->] Convert reminder modulos pairs',
  (data: RemainderModulosPair[]) => ({
    payload: {
      data,
    },
  }),
);

export const reminderModulosPairsConverted = createAction(
  '[converter <-] Reminder modulos pairs converted',
  (result: number) => ({
    payload: {
      result,
    },
  }),
);

export const convertNumber = createAction(
  '[converter ->] Convert number',
  (data: number) => ({ payload: { data } }),
);

export const numberConverted = createAction(
  '[converter <-] Number converted',
  (result: RemainderModulosPair[]) => ({ payload: { result } }),
);

export const dataReset = createAction('[converter <-] Data reset');
