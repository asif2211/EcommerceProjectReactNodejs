import {
  REQUEST_PRODUCT_LIST,
  REQUEST_PRODUCT_SUCCES,
  REQUEST_PRODUCT_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
} from "../constants/ProductConstants";

export const ProductListReducer = (
  state = { loading: true, products: [] },
  action
) => {
  switch (action.type) {
    case REQUEST_PRODUCT_LIST:
      return { loading: true };
    case REQUEST_PRODUCT_SUCCES:
      return { loading: false, products: action.payload };
    case REQUEST_PRODUCT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const productDetailsReducer = (state = { product : {}, loading: true  }, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { loading: true };
    case PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };
    case PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
