import { useState, useEffect, useCallback } from "react";

export function useFilterProducts(v) {
  const [Products, setProducts] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch("/data/productsData.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  useEffect(() => {
    let value = v.toLowerCase();
    setResults(
      Products.filter(
        (item) =>
          item.Category.toLowerCase().includes(value) ||
          item.Name.toLowerCase().includes(value) ||
          item.Desp.toLowerCase().includes(value)
      )
    );
  }, [v, Products]);
  return results;
}
