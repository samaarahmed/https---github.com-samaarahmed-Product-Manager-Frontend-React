import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import Product from "./components/Product/Product";
import { Route, Routes } from "react-router";
import { BrowserRouter, Link, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Home/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product" element={<Product />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
