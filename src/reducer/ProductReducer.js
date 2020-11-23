
import { REQUEST_PRODUCT_LIST, REQUEST_PRODUCT_SUCCES, REQUEST_PRODUCT_FAIL } from "../constants/ProductConstants";

export const ProductListReducer = (state = {loading:true,products:[]}, action ) => {
      
  switch (action.type) {
    
    case REQUEST_PRODUCT_LIST:
      return {loading:true};
    case REQUEST_PRODUCT_SUCCES:
      return {loading:false, products:action.payload}
    case REQUEST_PRODUCT_FAIL:
      return {loading:false, error:action.payload}
    default:
      return state;
  }
};