import { FC, useEffect, useState } from "react";
import { IProduct } from "./types";
import { getProducts } from "./api";

import { Preloader, ProductList } from "./components";

import styles from "./app.module.scss";
import { useOnUpdate } from "./hooks";

const App: FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [onlyAvailable, setOnlyAvailable] = useState(false);

  const handleInputChange = () => {
    setOnlyAvailable(!onlyAvailable);
  };

  const getData = async () => {
    setLoading(true);
    try {
      const { data } = await getProducts();
      setProducts(data.data.products);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // кастомных хук, который не будет вызываться при первом рендере
  useOnUpdate(() => {
    if (onlyAvailable) {
      const filteredProducts = products.filter((item) =>
        Boolean(item.quantity_available)
      );
      setProducts(filteredProducts);
    } else {
      // Новый запрос вместо хранения в кэше старых данных, т.к. данные могут измениться в любой момент времени
      getData();
    }
  }, [onlyAvailable]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Explore</h1>
      <h2 className={styles.subtitle}>Buy and sell digital fashion NFT art</h2>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <label className={styles.label}>
            <input
              type="checkbox"
              checked={onlyAvailable}
              onChange={handleInputChange}
            />
            Filter by quantity available
          </label>

          <ProductList products={products} />
        </>
      )}
    </div>
  );
};

export default App;
