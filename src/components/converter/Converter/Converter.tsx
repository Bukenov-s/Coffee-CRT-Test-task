import React, { ChangeEventHandler, FC, useCallback, useState } from 'react';
import Button from '~/components/ui/Button';
import { RemainderModulosPair } from '~/redux/converter/converter.types';

interface Props {
  convertReminderModulosPairs: (
    reminderModulosPairs: RemainderModulosPair[],
  ) => void;
}

export const Converter: FC<Props> = ({ convertReminderModulosPairs }) => {
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

    setModulos(0);
    setRemainder(0);
  }, [
    setRemainderModulosPairs,
    remainderModulosPairs,
    modulos,
    remainder,
    setModulos,
    setRemainder,
  ]);

  return (
    <form>
      <div style={{ display: 'flex' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="modulos">Modulos</label>
          <input
            id="modulos"
            type="number"
            placeholder="modulos"
            value={modulos}
            onChange={onModulosChange}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="remainder">Remainder</label>
          <input
            id="remainder"
            type="number"
            placeholder="remainder"
            value={remainder}
            onChange={onRemainderChange}
          />
        </div>

        <Button
          type="button"
          onClick={onAddRemainderModulusPairClick}
          color_mode="dark"
          text="Add"
        />
        <Button
          type="button"
          onClick={() => convertReminderModulosPairs(remainderModulosPairs)}
          color_mode="light"
          text="Convert"
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
