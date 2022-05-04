import React, { Dispatch, useEffect, useRef } from "react";

interface Props {
  setPage: Dispatch<React.SetStateAction<number>>;
}

const FetchMore = ({ setPage }: Props) => {
  // useRef는 document.querySelector라고 보면 됨.
  const fetchMoreTrigger = useRef(null);

  useEffect(() => {
    const fetchMoreObserver = new IntersectionObserver(
      ([{ isIntersecting }]) => {
        if (isIntersecting) setPage((prev) => prev + 1);
      }
    );
    fetchMoreObserver.observe(fetchMoreTrigger.current!);
    /*  return () => {
      fetchMoreObserver.unobserve(fetchMoreTrigger.current!);
    }; */
  }, [setPage]);

  return <div id="fetchMore" ref={fetchMoreTrigger}></div>;
};

export default FetchMore;
