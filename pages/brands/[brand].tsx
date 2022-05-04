import { Router, useRouter } from "next/router";
import { useEffect, useState } from "react";
import fetch from "../../components/main/section/fetchData";
import FetchMore from "../../components/main/section/FetchMore";
import ProductList from "../../components/main/section/ProductList";
import Skeleton from "../../components/reusable/Skeleton";
import styles from "../../styles/main/section/_brandProductList.module.scss";

const BrandProductList = () => {
  const [page, setPage] = useState<number>(0);

  const router = useRouter();
  const query = router.query.brand as string;

  return (
    <section className={styles.productListWrapper}>
      <ProductList brand={query} page={page} />
      <FetchMore setPage={setPage} />
    </section>
  );
};

export default BrandProductList;
