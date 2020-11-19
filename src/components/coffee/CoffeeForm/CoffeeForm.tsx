import React, { FC } from 'react';
import Button from '~/components/ui/Button';
import { BEAN_TYPES, SYRUP_TYPES } from '~/redux/coffee/coffee.constants';
import { StyledForm } from './styles';

export const CoffeeForm: FC = () => {
  return (
    <StyledForm>
      <h1>Coffee terminal</h1>
      <div className="form-field">
        <label htmlFor="bean_type">Bean type</label>
        <select id="bean_type">
          {BEAN_TYPES.map((bean_type) => (
            <option key={bean_type.id} value={bean_type.id}>
              {bean_type.name} (${bean_type.price})
            </option>
          ))}
        </select>
      </div>
      <div style={{ display: 'flex' }}>
        <div className="form-field">
          <label htmlFor="sugar">Add sugar ($1)</label>
          <input type="checkbox" name="sugar" id="sugar" />
        </div>
        <div className="form-field">
          <label htmlFor="cinnamon">Add cinnamon ($1)</label>
          <input type="checkbox" name="cinnamon" id="cinnamon" />
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="syrup">Syrup?</label>
        <select id="syrup">
          <option value="no syrup">none</option>
          {SYRUP_TYPES.map((syrup_type) => (
            <option key={syrup_type.id} value={syrup_type.id}>
              {syrup_type.name} (${syrup_type.price})
            </option>
          ))}
        </select>
      </div>
      <div className="form-field">
        <label htmlFor="takeout">takeout ($1)</label>
        <input type="checkbox" name="takeout" id="takeout" />
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
