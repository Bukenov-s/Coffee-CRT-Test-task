import React, { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Converter from '~/components/converter/Converter';
import Modal from '~/components/ui/Modal';
import * as converterActions from '~/redux/converter/converter.actions';
import {
  selectConverterCalculationComplete,
  selectConverterResult,
} from '~/redux/converter/converter.selectors';
import { RemainderModulosPair } from '~/redux/converter/converter.types';

export const ConverterPage: FC = () => {
  const dispatch = useDispatch();

  const is_converter_calculation_complete = useSelector(
    selectConverterCalculationComplete,
  );
  const converter_result = useSelector(selectConverterResult);

  const convertReminderModulosPairs = useCallback(
    (reminderModulosPairs: RemainderModulosPair[]) => {
      dispatch(
        converterActions.convertReminderModulosPairs(reminderModulosPairs),
      );
    },
    [dispatch],
  );

  const dataReset = useCallback(() => dispatch(converterActions.dataReset()), [
    dispatch,
  ]);

  return (
    <section className="flex-center">
      <Converter convertReminderModulosPairs={convertReminderModulosPairs} />
      {is_converter_calculation_complete && (
        <Modal onClose={dataReset}>Result: {converter_result}</Modal>
      )}
    </section>
  );
};
