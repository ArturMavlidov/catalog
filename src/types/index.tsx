export interface IProduct {
  product_id: number,
  created_by: {
    display_name: string;
  };
  name: string;
  latest_price: number;
  quantity_available: number;
  quantity_nfts_created: number;
}