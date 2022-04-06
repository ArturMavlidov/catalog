import { FC } from "react";
import { IProduct } from "../../types";
import ProductItem from "../ProductItem";

import styles from "./style.module.scss";

interface ProductListProps {
  products: IProduct[];
}

const ProductList: FC<ProductListProps> = ({ products }) => {
  const renderProduct = (product: IProduct) => (
    <ProductItem product={product} key={product.product_id} />
  );

  return <ul className={styles.productList}>{products.map(renderProduct)}</ul>;
};

export default ProductList;
