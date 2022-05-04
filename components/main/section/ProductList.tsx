import React, { useEffect, useState } from "react";
import Product from "../../reusable/Product";
import styles from "../../../styles/main/section/_productList.module.scss";
import axios from "axios";
import Skeleton from "../../reusable/Skeleton";
import fetchData from "./fetchData";

interface BrandProps {
  brand: string;
  page: number;
}

interface ListProps {
  brand: string;
  event: string;
  img: string;
  name: string;
  price: number;
}

// list를 받아서 Product형태로 보여줌
const ProductList = ({ brand, page }: BrandProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [list, setList] = useState<ListProps[]>([]);

  useEffect(() => {
    const fetch = async () => {
      setLoading((prev) => !prev);
      try {
        // const res = await axios.get('');
        const res = fetchData(0);
        setList(res);
      } catch (e) {
        console.error(e);
      }
      setLoading((prev) => !prev);
    };
    fetch();
  }, [brand]);

  useEffect(() => {
    const fetch = async () => {
      setLoading((prev) => !prev);
      try {
        // const res = axios.get('');
        const res = fetchData(page);
        setList((prev) => prev.concat(res));
        console.log(res);
      } catch (e) {
        console.error(e);
      }
      setLoading((prev) => !prev);
    };
    fetch();
  }, [page]);

  if (loading) {
    return <Skeleton></Skeleton>;
  }

  if (!list) {
    return null;
  }

  return (
    <>
      <span>{brand}</span>
      <div className={styles.productListWrapper}>
        {list.map((product: ListProps, idx: number) => {
          const { brand, event, img, name, price } = product;
          return (
            <Product
              key={idx}
              brand={brand}
              event={event}
              img={img}
              name={name}
              price={price}
            ></Product>
          );
        })}
      </div>
    </>
  );
};

export default ProductList;
