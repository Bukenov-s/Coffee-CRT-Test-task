import React, { ChangeEventHandler, FC, useCallback, useState } from 'react';
import Button from '~/components/ui/Button';
import { RemainderModulosPair } from '~/redux/converter/converter.types';

export const Converter: FC = () => {
  const [remainderModulosPairs, setRemainderModulosPairs] = useState<
    RemainderModulosPair[]
  >([]);

  const [modulos, setModulos] = useState(0);
  const [remainder, setRemainder] = useState(0);

  const onModulosChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => setModulos(+e.target.value),
    [setModulos],
  );

  const onRemainderChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => setRemainder(+e.target.value),
    [setRemainder],
  );

  const onAddRemainderModulusPairClick = useCallback(() => {
    setRemainderModulosPairs([
      ...remainderModulosPairs,
      {
        modulos,
        remainder,
      },
    ]);
  }, [setRemainderModulosPairs, remainderModulosPairs, modulos, remainder]);

  return (
    <form>
      <div style={{ display: 'flex' }}>
        <input
          type="number"
          placeholder="modulos"
          value={modulos}
          onChange={onModulosChange}
        />
        <input
          type="number"
          placeholder="remainder"
          value={remainder}
          onChange={onRemainderChange}
        />
        <Button
          type="button"
          onClick={onAddRemainderModulusPairClick}
          color_mode="dark"
          text="Add"
        />
      </div>
      {remainderModulosPairs.map(({ remainder, modulos }, pairIndex) => (
        <div key={pairIndex}>
          <p>
            x = {remainder} (mod {modulos})
          </p>
        </div>
      ))}
    </form>
  );
};
