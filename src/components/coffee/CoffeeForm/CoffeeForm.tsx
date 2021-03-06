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
  ROAST_TYPES,
  SUGAR_PRICE,
  SYRUP_TYPES,
  TAKEOUT_PRICE,
} from '~/redux/coffee/coffee.constants';
import { CoffeeOrder, CoffeeState } from '~/redux/coffee/coffee.types';
import { StyledForm } from './styles';

interface Props {
  calculateOrderPrice: (order: CoffeeOrder) => void;
  is_coffee_pending: CoffeeState['is_pending'];
}

export const CoffeeForm: FC<Props> = ({
  calculateOrderPrice,
  is_coffee_pending,
}) => {
  const [sugar_included, setSugarIncluded] = useState(false);
  const [takeout_included, setTakeoutIncluded] = useState(false);
  const [cinnamon_included, setCinnamonIncluded] = useState(false);
  const [syrup, setSyrup] = useState('none');
  const [roast_type, setRoastType] = useState('');
  const [bean_type, setBeanType] = useState('Arabica');

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

  const onRoastTypeChange: ChangeEventHandler<HTMLSelectElement> = useCallback(
    (e) => setRoastType(e.target.value),
    [setRoastType],
  );

  const resetCoffeeForm = useCallback(() => {
    setSugarIncluded(false);
    setTakeoutIncluded(false);
    setCinnamonIncluded(false);
    setSyrup('none');
    setBeanType('Arabica');
  }, []);

  const onCoffeFormSubmit: FormEventHandler = useCallback(
    (e) => {
      e.preventDefault();

      console.table([
        ['sugar', sugar_included],
        ['cinnamon', cinnamon_included],
        ['takeout', takeout_included],
        ['syrup', syrup],
        ['beanType', bean_type],
      ]);

      calculateOrderPrice({
        sugar_included,
        cinnamon_included,
        takeout_included,
        syrup,
        bean_type,
        roast_type,
      });

      resetCoffeeForm();
    },
    [
      sugar_included,
      cinnamon_included,
      takeout_included,
      roast_type,
      bean_type,
      syrup,
      resetCoffeeForm,
    ],
  );

  if (is_coffee_pending) {
    return (
      <StyledForm>
        <h1>...loading</h1>
      </StyledForm>
    );
  }

  return (
    <StyledForm onSubmit={onCoffeFormSubmit}>
      <h1>Coffee terminal</h1>
      <div className="form-field">
        <label htmlFor="bean_type">Bean type</label>
        <select id="bean_type" value={bean_type} onChange={onBeanTypeChange}>
          {BEAN_TYPES.map(({ id, name, price }) => (
            <option key={id} value={id}>
              {name} (${price})
            </option>
          ))}
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="roast">Roast</label>
        <select id="syrup" onChange={onRoastTypeChange}>
          {ROAST_TYPES.map(({ id, name, price }) => (
            <option key={id} value={id}>
              {name} (${price})
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
            checked={sugar_included}
            onChange={onSugarIncludedChange}
          />
          <label htmlFor="sugar">Add sugar (${SUGAR_PRICE})</label>
        </div>
        <div className="form-field-checkbox">
          <input
            type="checkbox"
            name="cinnamon"
            id="cinnamon"
            checked={cinnamon_included}
            onChange={onCimmanonIncludedChange}
          />
          <label htmlFor="cinnamon">Add cinnamon (${CINNAMON_PRICE})</label>
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="syrup">Syrup</label>
        <select id="syrup" onChange={onSyrupChange}>
          <option value="no syrup">none</option>
          {SYRUP_TYPES.map(({ id, name, price }) => (
            <option key={id} value={id}>
              {name} (${price})
            </option>
          ))}
        </select>
      </div>
      <div className="form-field-checkbox">
        <input
          type="checkbox"
          name="takeout"
          id="takeout"
          checked={takeout_included}
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
