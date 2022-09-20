import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../actions/cartActions";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { getProductById } from "../actions/productAction";

const Productdetails = () => {
  const { id } = useParams();
  const productid = id;

  const dispatch = useDispatch();
  const [quantity, setquantity] = useState(1);

  const getproductbyidstate = useSelector(
    (state) => state.getProductByIdReducer
  );

  const { product, loading, error } = getproductbyidstate;

  function addtocart() {
    dispatch(addToCart(product, quantity));
  }

  useEffect(() => {
    dispatch(getProductById(productid));
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error error="Something went wrong" />
      ) : (
        <div className="row mt-5 ">
          <div className="col-md-6">
            <div className="card p-2 m-3 shadow p-3 mb-5 bg-white rounded">
              <h2>{product.name}</h2>
              <hr />
              <img
                src={product.image}
                className=" img-fluid m-3 bigimg"
               
              />
              <p style={{ padding: "5px" }}>{product.description}</p>
            </div>
          </div>
          <div className="col-md-6 text-left">
            <div className="m-2 shadow p-3 mb-5 bg-white rounded">
              <h1>Price : ₹ {product.price}/-</h1>
              <hr />

              <h1>Select Quantity</h1>
              <select
                value={quantity}
                onChange={(e) => {
                  setquantity(e.target.value);
                }}
              >
                {[...Array(product.countInStock).keys()].map((x, i) => {
                  return <option value={i + 1}>{i + 1}</option>;
                })}
              </select>
              <hr />
              <button className="btn btn-dark" onClick={addtocart}>
                <AddShoppingCartRoundedIcon />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Productdetails;
