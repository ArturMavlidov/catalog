import { FC, memo } from "react";
import { IProduct } from "../../types";

import styles from "./style.module.scss";

interface ProductItemProps {
  product: IProduct;
}

const ProductItem: FC<ProductItemProps> = memo(({ product }) => {
  return (
    <li className={styles.product}>
      <div className={styles.productTop}>
        <div className={styles.productAuthor}>
          created by <br /> <span>{product.created_by.display_name}</span>
        </div>
        <div className={styles.productName}>{product.name}</div>
      </div>
      <div className={styles.productBottom}>
        <div className={styles.productAvaliable}>
          available
          <span>
            {product.quantity_available} of {product.quantity}
          </span>
        </div>
        {product.initial_price && (
          <div className={styles.productPrice}>
            price
            <span>{product.initial_price} ETH</span>
          </div>
        )}
      </div>
    </li>
  );
});

export default ProductItem;
