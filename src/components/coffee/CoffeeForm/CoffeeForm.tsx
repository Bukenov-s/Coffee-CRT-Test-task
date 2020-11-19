import React, {
  ChangeEventHandler,
  FC,
  FormEventHandler,
  useCallback,
  useState,
} from 'react';
import Button from '~/components/ui/Button';
import {
  BEAN_TYPES,
  CINNAMON_PRICE,
  SUGAR_PRICE,
  SYRUP_TYPES,
  TAKEOUT_PRICE,
} from '~/redux/coffee/coffee.constants';
import { CoffeeOrder } from '~/redux/coffee/coffee.types';
import { StyledForm } from './styles';

interface Props {
  calculateOrderPrice: (order: CoffeeOrder) => void;
}

export const CoffeeForm: FC<Props> = ({ calculateOrderPrice }) => {
  const [sugarIncluded, setSugarIncluded] = useState(false);
  const [takeoutIncluded, setTakeoutIncluded] = useState(false);
  const [cinnamonIncluded, setCinnamonIncluded] = useState(false);
  const [syrup, setSyrup] = useState('none');
  const [beanType, setBeanType] = useState('Arabica');

  const onCimmanonIncludedChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => setCinnamonIncluded(e.target.checked),
    [setCinnamonIncluded],
  );

  const onTakeoutIncludedChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => setTakeoutIncluded(e.target.checked),
    [setTakeoutIncluded],
  );

  const onSugarIncludedChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => setSugarIncluded(e.target.checked),
    [setSugarIncluded],
  );

  const onSyrupChange: ChangeEventHandler<HTMLSelectElement> = useCallback(
    (e) => setSyrup(e.target.value),
    [setSyrup],
  );

  const onBeanTypeChange: ChangeEventHandler<HTMLSelectElement> = useCallback(
    (e) => setBeanType(e.target.value),
    [setBeanType],
  );

  const onCoffeFormSubmit: FormEventHandler = useCallback(
    (e) => {
      e.preventDefault();

      console.table([
        ['sugar', sugarIncluded],
        ['cinnamon', cinnamonIncluded],
        ['takeout', takeoutIncluded],
        ['syrup', syrup],
        ['beanType', beanType],
      ]);

      calculateOrderPrice({
        sugarIncluded,
        cinnamonIncluded,
        takeoutIncluded,
        syrup,
        beanType,
      });
    },
    [sugarIncluded, cinnamonIncluded, takeoutIncluded, syrup],
  );

  return (
    <StyledForm onSubmit={onCoffeFormSubmit}>
      <h1>Coffee terminal</h1>
      <div className="form-field">
        <label htmlFor="bean_type">Bean type</label>
        <select id="bean_type" value={beanType} onChange={onBeanTypeChange}>
          {BEAN_TYPES.map((bean_type) => (
            <option key={bean_type.id} value={bean_type.id}>
              {bean_type.name} (${bean_type.price})
            </option>
          ))}
        </select>
      </div>
      <div style={{ display: 'flex' }}>
        <div className="form-field-checkbox">
          <input
            type="checkbox"
            name="sugar"
            id="sugar"
            checked={sugarIncluded}
            onChange={onSugarIncludedChange}
          />
          <label htmlFor="sugar">Add sugar (${SUGAR_PRICE})</label>
        </div>
        <div className="form-field-checkbox">
          <input
            type="checkbox"
            name="cinnamon"
            id="cinnamon"
            checked={cinnamonIncluded}
            onChange={onCimmanonIncludedChange}
          />
          <label htmlFor="cinnamon">Add cinnamon (${CINNAMON_PRICE})</label>
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="syrup">Syrup</label>
        <select id="syrup" onChange={onSyrupChange}>
          <option value="no syrup">none</option>
          {SYRUP_TYPES.map((syrup_type) => (
            <option key={syrup_type.id} value={syrup_type.id}>
              {syrup_type.name} (${syrup_type.price})
            </option>
          ))}
        </select>
      </div>
      <div className="form-field-checkbox">
        <input
          type="checkbox"
          name="takeout"
          id="takeout"
          checked={takeoutIncluded}
          onChange={onTakeoutIncludedChange}
        />
        <label htmlFor="takeout">takeout (${TAKEOUT_PRICE})</label>
      </div>
      <div className="form-field">
        <Button
          onClick={() => console.log('hi')}
          type="submit"
          text="Make Order"
          color_mode="dark"
        />
      </div>
    </StyledForm>
  );
};
