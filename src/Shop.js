import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Catalog from "./catalog";
import Contact from "./routes/contact";
import Help from "./routes/help";
import Home from "./routes/home";
import {View, ViewedItem} from './routes/view'

export default class Shop extends React.Component{

    render(){
        return (
        <>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="shop" element={<Catalog/>} />
        <Route path="help" element={<Help/>} />
        <Route path="contact" element={<Contact/>} />
        <Route path="item" element={<View/>} >
        <Route path=":itemId" element={<ViewedItem />} />
        </Route>
        </Routes>
        </BrowserRouter> 
        </>
        );
    }
  }