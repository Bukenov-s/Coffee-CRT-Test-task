import { CoffeeState } from './redux/coffee/coffee.types';
import { ConverterState } from './redux/converter/converter.types';

export interface AppState {
  coffee: CoffeeState;
  converter: ConverterState;
}
