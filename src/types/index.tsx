export interface IProduct {
  product_id: number;
  created_by: {
    display_name: string;
  };
  name: string;
  initial_price: number;
  quantity_available: number;
  quantity: number;
}
