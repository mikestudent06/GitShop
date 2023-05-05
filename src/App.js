import React from "react";
import Home from "./pages/Home.js";
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from "./pages/Cart.js";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import Product from "./pages/Product.js";


const Container = styled.div `
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
`

function App() {

      
    return (
        <Container>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="Product" element={<Product/>} />
                <Route path="Cart" element={<Cart />} />
                <Route path="signup" element={<Register />} />
                <Route path="login" element={<Login />} />
            </Routes>
        </Container>
    );
}

export default App;