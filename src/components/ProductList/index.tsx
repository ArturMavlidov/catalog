import { FC } from 'react'
import {IProduct} from '../../types'
import ProductItem from '../ProductItem';

import styles from './style.module.scss'

interface ProductListProps {
  products: IProduct[];
}

const ProductList: FC<ProductListProps> = ({ products }) => {

  return (
    <div className={styles.productList}>
      {
        products.map(product => <ProductItem product={product} key={product.product_id}/>)
      }
    </div>
  );
};

export default ProductList;