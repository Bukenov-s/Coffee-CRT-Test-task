import React, { ChangeEventHandler, FC, useCallback, useState } from 'react';
import Button from '~/components/ui/Button';

export const Converter: FC = () => {
  const [modulosRemainderPairs, setModulosRemainderPairs] = useState<any>([]);

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

  const onAddModulusRemainderPairClick = useCallback(() => {
    setModulosRemainderPairs([
      ...modulosRemainderPairs,
      {
        modulos,
        remainder,
      },
    ]);
  }, [setModulosRemainderPairs, modulosRemainderPairs, modulos, remainder]);

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
          onClick={onAddModulusRemainderPairClick}
          color_mode="dark"
          text="Add"
        />
      </div>
      {modulosRemainderPairs.map((pair: any, pairIndex: number) => (
        <div key={pairIndex}>
          <span>{pair.modulos}</span>
          <span>{pair.remainder}</span>
        </div>
      ))}
    </form>
  );
};
