import React, { useState } from "react";
import { Link } from "react-router-dom";
import Rating from "react-rating";
import CardContent from "@mui/material/CardContent";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import { addToCart } from "../actions/cartActions";
import { useDispatch } from "react-redux";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

export default function Product({ product }) {
  const dispatch = useDispatch();
  const [quantity, setquantity] = useState(1);

  function addtocart() {
    dispatch(addToCart(product, quantity));
  }

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: "center",
    color: theme.palette.text.secondary,
    
  }));

  const lightTheme = createTheme({ palette: { mode: "light" } });

  return (
    
    <div className="text-left">
    <Grid container spacing={3}>
      {[lightTheme].map((theme, index) => (
        <Grid item xs={12} key={index}>
          <ThemeProvider theme={theme}>
            
            {[24].map((elevation) => (
              <Item key={elevation} elevation={elevation}>
      
                <div className="text-center">
                  <img src={product.image} className="img-fluid" style={{ marginTop: "10px" }} />
                </div>

                <CardActions>
                  <Link to={`product/${product._id}`}>
                    <h1 style={{ marginTop: "15px" }}>{product.name}</h1>
                  </Link>
                </CardActions>
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    <Rating
                      className="text-left"
                      style={{ color: "orange " }}
                      initialRating={product.rating}
                      emptySymbol="far fa-star fa-1x"
                      fullSymbol="fas fa-star fa-1x"
                      readonly={true}
                    />
                  </Typography>
                  <div className="text-left">
                  <Typography gutterBottom variant="h5" component="div">
                    ₹ {product.price}/-
                   
                    <Button size="small" onClick={addtocart} style={{ paddingLeft: "260px" }}>
                      <AddShoppingCartRoundedIcon />
                    </Button>
                  
                  </Typography>
                  </div>
                  
                </CardContent>
                
              </Item>
            ))}
            
          </ThemeProvider>
        </Grid>
      ))}
    </Grid>
    </div>
  );
}
