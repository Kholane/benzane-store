import React from "react";
import { NavLink } from "react-router-dom";

export default class Item extends React.Component{
    render(){
        return (                     
               <div className="col-lg-3 col-sm-4 col-md-4 item">
                <NavLink to={`/item/${this.props.item.id}`} href={this.props.id}>
               <img src={this.props.item.img} className="img-fluid" alt="order"/>
                <div className="item_name text-center"><p>{this.props.item.name}</p></div>
                <div className="item_price text-center"><h6>{this.props.item.price}</h6></div>
                <div className="text-center">
                <button className="btn-primary item_button rounded-0"><i className="bi bi-truck"></i> Order</button>
                </div>
                </NavLink>
            </div>           
        );
    }
}