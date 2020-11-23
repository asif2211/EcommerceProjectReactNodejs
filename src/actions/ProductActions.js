import { REQUEST_PRODUCT_LIST, REQUEST_PRODUCT_SUCCES, REQUEST_PRODUCT_FAIL } from "../constants/ProductConstants"
import axios from 'axios';

export const ProductList = () => async(dispath)=>{
    dispath({
        type:REQUEST_PRODUCT_LIST
    })
    try{
        const { data } = await axios.get("/api/products");
        dispath({
            type:REQUEST_PRODUCT_SUCCES, payload:data
        })
    }
    catch(err){
            dispath({
                type:REQUEST_PRODUCT_FAIL, payload:err.message,
            })
    }
}