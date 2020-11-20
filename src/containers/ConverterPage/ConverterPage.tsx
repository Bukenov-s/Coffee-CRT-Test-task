import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import Converter from '~/components/converter/Converter';

export const ConverterPage: FC = () => {
  const dispatch = useDispatch();

  return (
    <section className="flex-center">
      <Converter />
    </section>
  );
};
