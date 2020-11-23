import React, { Component, useEffect } from "react";
import Products from "../pages/Products/Products";
import axios from "axios";
import {useSelector,useDispatch}  from 'react-redux';
import {ProductList} from '../actions/ProductActions'
const HomeScreen = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);
const dispatch = useDispatch();
const productList =  useSelector(state => state.productList)
const {loading, error, products} = productList;

  useEffect(() => {
    dispatch(ProductList());
  }, []);

  return (
    <div>
      <Products loading={loading} products={products} error={error} />
    </div>
  );
};

export default HomeScreen;
