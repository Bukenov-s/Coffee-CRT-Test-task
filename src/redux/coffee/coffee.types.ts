export interface CoffeeOrder {
  sugar_included: boolean;
  cinnamon_included: boolean;
  takeout_included: boolean;
  syrup: string;
  bean_type: string;
}

export interface CoffeeState {
  is_pending: boolean;
  price: number;
  is_order_complete: boolean;
}
