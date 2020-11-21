import React, { Component, useEffect, useState } from "react";
import Products from "../pages/Products/Products";
import axios from "axios";
const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get("/api/products");
        setLoading(false);
        setProducts(data);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetch();
  }, []);

  return (
    <div>
      <Products loading={loading} products={products} error={error} />
    </div>
  );
};

export default HomeScreen;
