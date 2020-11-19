import React, { FC } from 'react';
import CoffeeForm from '~/components/coffee/CoffeeForm';

export const CoffeePage: FC = () => {
  return (
    <section
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CoffeeForm />
    </section>
  );
};
