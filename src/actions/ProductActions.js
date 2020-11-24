import {
  REQUEST_PRODUCT_LIST,
  REQUEST_PRODUCT_SUCCES,
  REQUEST_PRODUCT_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
} from "../constants/ProductConstants";
import Axios from "axios";

export const ProductList = () => async (dispath) => {
  dispath({
    type: REQUEST_PRODUCT_LIST,
  });
  try {
    const { data } = await Axios.get("/api/products");
    dispath({
      type: REQUEST_PRODUCT_SUCCES,
      payload: data,
    });
  } catch (err) {
    dispath({
      type: REQUEST_PRODUCT_FAIL,
      payload: err.message,
    });
  }
};
export const detailsProduct = (productId) => async (dispatch) => {
  //console.log(productId);
  dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId });
  try {

    const { data } = await Axios.get(`/api/products/1`);
    console.log(data)
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
  
  