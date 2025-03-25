"use client";
import { useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";
import React from "react";
import Productcard from "../(components)/productcard/productcard";
import HeadingBar from "../(components)/headingBar/headingBar";
import { useFilterProducts } from "@/hooks/useFilterProducts";

const Page = () => {
  return (
    <>
      <div className="min-h-[50vh] flex flex-col gap-5 px-3 lg:px-20 py-5">
        <Suspense
          fallback={
            <p className="text-center font-bold text-4xl">
              Loading... Please Wait
            </p>
          }
        >
          <SusPart/>
        </Suspense>
      </div>
    </>
  );
};

const SusPart = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");
  const results = useFilterProducts(query);

  useEffect(() => {
    if (results) {
      handleSize(results.length);
    }
    console.log(results.length + " in result");
  }, [results]);

  const [size, setSize] = useState(true);
  const handleSize = (s) => {
    if (s > 0) {
      setSize(true);
    } else {
      setSize(false);
    }
  };
  return (
    <>
      <HeadingBar
        title="Searched Products"
        heading={query.charAt(0).toUpperCase() + query.slice(1)}
        className=""
      />
      {size ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {results.map((product) => (
            <Productcard key={product.ProductID} product={product} />
          ))}
        </div>
      ) : (
        <p>Product not available!!</p>
      )}
    </>
  );
};

export default Page;
