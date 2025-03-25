"use client";
import React, { useContext, useCallback, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useEffect } from "react";
import Productcard from "../(components)/productcard/productcard";
import Description from "../(components)/description/description";
import HeadingBar from "../(components)/headingBar/headingBar";
import { ProductsContext } from "../layout";
const Page = () => {
  const Products = useContext(ProductsContext);

  return (
    <>
      <div className="px-5 lg:px-20 py-5">
        <SusPart/>
        <HeadingBar title="For you" heading="People also search for" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-10">
          {Products.map((product, index) => (
            <Productcard key={product.ProductID || index} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

const SusPart = () => {
  const searchParams = useSearchParams();
  const c = searchParams.get("id");
  const [results, setResults] = useState([]);
  const Products = useContext(ProductsContext);

  useEffect(() => {
    if (c) {
      handleSearch();
    }
  }, [c]);

  const handleSearch = useCallback(() => {
    let value = parseInt(c, 10);
    const filteredResults = Products.filter((item) => item.ID === value);
    setResults(filteredResults);
  }, [c]);
  return (
    <Suspense
      fallback={
        <p className="text-center font-bold text-4xl">Loading... Please Wait</p>
      }
    >
      <Description product={results[0]} />
    </Suspense>
  );
};

export default Page;
