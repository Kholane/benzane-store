import Nav from "../Nav";
import Footer from "../footer";

import '../home.css'
import Products from "../Products";
import { Link } from "react-router-dom";

export default function Home(){
    return (
        <>
    <Nav/>
<div className="container-xxl position-relative p-0">

<div className="container-xxl bg hero-header">
        <div className="container mt-5 py-5">
            <div className="row g-5 align-items-center">
                <div className="col-lg-6 text-center text-lg-start">
                    <h1 className="text-white mb-4 animated zoomIn page-header">We sell Inuka products ranging from skin care and fragrances.</h1>
                    <a href="contact.html" className="btn btn-outline-light rounded-pill border-2 py-3 px-5 animated slideInRight">Order</a>
                </div>
            </div>
        </div>
    </div>
    <h1 className="text-center display-3">Featured Products</h1>
</div>
<Products featuredProducts={true}/>

<div className="container most_bought">
<h1 className="display-5 text-center">Mostly bought</h1>
    <div className="container mt-3">
        <div className="row">
            <div className="col-lg-4">
                <img src='img/miracle oil mohlolo.png' className="img-fluid" />
            </div>
            <div className="col-lg-6">
            <h1 className="display-6 mt-4">MIRACLE OIL: MOHLOLO</h1>
            </div>
        </div>
    </div>
</div>
<Footer/>
        </>

    )
}