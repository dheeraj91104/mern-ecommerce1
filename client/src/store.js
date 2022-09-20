import { addProductReducer, addProductReviewReducer, deleteProductReducer, getAllProductsReducer, getProductByIdReducer, updateProductReducer } from "./reducers/productReducer";
import {createStore , applyMiddleware,combineReducers} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import { cartReducer } from "./reducers/cartReducer";
import { deleteUserReducer, getAllUsersReducer, loginReducer, registerNewUserReducer, updateReducer } from "./reducers/userReducer";
import { getAllOrdersReducer, getOrderByIdReducer, getOrdersByUserIdReducer, placeOrderReducer } from "./reducers/orderReducer";

const finalReducer = combineReducers({

    getAllProductsReducer : getAllProductsReducer ,
    getProductByIdReducer : getProductByIdReducer ,
    cartReducer : cartReducer ,
    registerNewUserReducer : registerNewUserReducer,
    loginReducer : loginReducer,
    placeOrderReducer : placeOrderReducer,
    getProductByIdReducer : getProductByIdReducer,
    getOrdersByUserIdReducer : getOrdersByUserIdReducer,
    getOrderByIdReducer : getOrderByIdReducer,
    addProductReviewReducer : addProductReviewReducer,
    updateReducer : updateReducer,
    getAllUsersReducer : getAllUsersReducer,
    deleteUserReducer : deleteUserReducer , 
    deleteProductReducer : deleteProductReducer,
    addProductReducer : addProductReducer,
    getAllOrdersReducer : getAllOrdersReducer,
    updateProductReducer : updateProductReducer
 })

 const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

 const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null


    const initialState = {

    cartReducer : {cartItems : cartItems},
    loginReducer : {currentUser : currentUser}

}


 const composeEnhancers = composeWithDevTools({
    
  });

 const store = createStore(finalReducer ,initialState, composeEnhancers(
    applyMiddleware(thunk)
   
  ))
 
  export default store