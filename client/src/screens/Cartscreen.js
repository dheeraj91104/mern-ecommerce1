import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../actions/cartActions";
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import CurrencyRupeeTwoToneIcon from '@mui/icons-material/CurrencyRupeeTwoTone';
import Checkout from "../components/Checkout";
function Cartscreen() {
  const cartreducerstate = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const { cartItems } = cartreducerstate;

  var subtotal = cartItems.reduce((acc , item) => acc + (item.price*item.quantity) , 0)

  return (
    <div>
            
            <div className="row mt-3 justify-content-center">

                 <div className="col-md-8 card text-center shadow p-3 mb-5 bg-white rounded">
                     <h2 className='text-center m-5'>MY CART</h2>
                     <table className='table table-bordered table-responsives-sm'>

                      <thead>
                      <tr>
                           <th>Name</th>
                           <th>Price</th>
                           <th>Quantity</th>
                           <th>Total Price</th>
                           <th>Remove</th>
                       </tr>
                      </thead>

                      <tbody>

                          {cartItems.map(item=>{

                            return <tr>
                                <td>{item.name}</td>
                                <td>{item.price}<CurrencyRupeeTwoToneIcon/></td>
                                <td><select value={item.quantity} onChange={(e)=>{dispatch(addToCart(item , e.target.value))}}>
                                    
                                    {[...Array(item.countInStock).keys()].map((x , i)=>{

                                          return <option value={i+1}>{i+1}</option>

                                    })}
                                    
                                    </select></td>
                                <td>{item.quantity * item.price}<CurrencyRupeeTwoToneIcon/></td>

                                <td><RemoveShoppingCartIcon style={{color:'red'}} onClick={()=>{dispatch(deleteFromCart(item))}}></RemoveShoppingCartIcon></td>
                            </tr>

                          })}

                      </tbody>

                     </table>

                     <hr/>


                     <h2 className='text-center'>SubTotal : {subtotal}<CurrencyRupeeTwoToneIcon/></h2>

                     <hr/>

                    
                     <Checkout amount={subtotal}/>
                   

                 </div>

            </div>

        </div>
  );
}

export default Cartscreen;

// {cartItems.map(item=>{
//     return  <div className="flex-container">
//     <div className='text-left m-1 w-100'>
//                    <h1>{item.name} [{item.varient}]</h1>
//                    <h1>Price : {item.quantity} * {item.prices[0][item.varient]} = {item.price}</h1>
//                    <h1 style={{display:'inline'}}>Quantity : </h1>
//                    <i className="fa fa-plus" aria-hidden="true" onClick={()=>{dispatch(addToCart(item , item.quantity+1 , item.varient))}}></i>
//                    <b>{item.quantity}</b>
//                    <i className="fa fa-minus" aria-hidden="true" onClick={()=>{dispatch(addToCart(item , item.quantity-1 , item.varient))}}></i>
//                    <hr/>
//                </div>

//                <div className='m-1 w-100'>
//                    <img src={item.image} style={{height:'80px' , height:'80px'}}/>
//                </div>
//                <div className='m-1 w-100'>
//                <i className="fa fa-trash mt-5" aria-hidden="true" onClick={()=>{dispatch(deleteFromCart(item))}}></i>
//                </div>
// </div>
// })}