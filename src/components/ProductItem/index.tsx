import { FC, memo } from "react";
import { IProduct } from '../../types';

import styles from './style.module.scss'

interface ProductItemProps {
  product: IProduct
}

const ProductItem: FC<ProductItemProps> = memo(({ product }) => {
  return (
    <div className={styles.product}>
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
            {product.quantity_available} of {product.quantity_nfts_created}
          </span>
        </div>
        <div className={styles.productPrice}>
          price
          <span>
           {
            product.latest_price ? `${product.latest_price} ETH` : 'None'
           }
          </span>
        </div>
      </div>
    </div>
  );
});

export default ProductItem;