import React, { FC, useEffect, useState } from "react";
import axios from "axios";
import {IProduct} from './types'

import { ProductList } from "./components";

import styles from "./assets/scss/app.module.scss";

const App: FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isSortByQuantity, setIsSortByQuantity] = useState(false);

  const handleInputChange = () => {
    setIsSortByQuantity(!isSortByQuantity);
  }

  useEffect(() => {
    axios
      .get("https://artisant.io/api/products")
      .then(({ data }) => setProducts(data.data.products));
  }, []);

  useEffect(() => {
    if (!isSortByQuantity) return;

    const sortedProducts = products.sort((a, b) =>  b.quantity_available - a.quantity_available)
    setProducts(sortedProducts);
  }, [isSortByQuantity])


  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Explore</h1>
      <h2 className={styles.subtitle}>Buy and sell digital fashion NFT art</h2>

      <label className={styles.label}>
        <input type="checkbox" checked={isSortByQuantity} onChange={handleInputChange}/>
        Sort by quantity
      </label>

      <ProductList products={products} />
    </div>
  );
};

export default App;
