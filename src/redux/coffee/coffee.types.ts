export interface CoffeeOrder {
  sugarIncluded: boolean;
  cinnamonIncluded: boolean;
  takeoutIncluded: boolean;
  syrup: string;
  beanType: string;
}

export interface CoffeeState {
  is_pending: boolean;
  price: number;
  is_order_complete: boolean;
}
