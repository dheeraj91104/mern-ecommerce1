import React from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginIcon from "@mui/icons-material/Login";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { logoutUser } from "../actions/userActions";
import { IconButton } from "@mui/material";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

const Header = () => {
  const cartreducer = useSelector((state) => state.cartReducer);

  const { cartItems } = cartreducer;
  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      // right: -3,
      // top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const dispatch = useDispatch();
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand  href="/" >Home Shopee</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/cart">
              <IconButton aria-label="cart">
                <StyledBadge badgeContent= {cartItems.length} color="secondary">
                <ShoppingCartRoundedIcon  color="info" fontSize='medium' />
                </StyledBadge>
              </IconButton>
            </Nav.Link>

            {currentUser ? (
              <NavDropdown
                title={currentUser.name}
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="/profile">
                  <AccountCircleRoundedIcon />
                </NavDropdown.Item>
                <NavDropdown.Item href="/orders">orders</NavDropdown.Item>
                {currentUser.isAdmin ? (
                   <NavDropdown.Item href="/admin">Admin</NavDropdown.Item>
                ):(
                  ""
                )}
                <NavDropdown.Item
                  href="/"
                  onClick={() => {
                    dispatch(logoutUser());
                  }}
                >
                  Logout <LogoutRoundedIcon />
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link className="nav-link" href="/login">
                <LoginIcon />
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
