import { createStore, applyMiddleware ,compose, combineReducers} from "redux";
import thunk from 'redux-thunk'
import data from './pages/Products/data'
import { ProductListReducer,productDetailsReducer} from './reducer/ProductReducer';

const intialstate = {};
const reducer = combineReducers(
    {
        productList : ProductListReducer,
        productDetails:productDetailsReducer,
    }
)
// create the saga middleware
const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__   || compose

// mount it on the Store
export default createStore(reducer,intialstate,composeEnhacer(applyMiddleware(thunk)));

// then run the saga
