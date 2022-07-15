import React from "react";
import Footer from "./footer";
import Item from "./Item";
import Nav from "./Nav";
import "./Products.css";

export default class Products extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            isLoaded: false,
            items: [],
        }
    }

    componentDidMount() {
        fetch("items.json")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result.items,
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }

      loadProducts(){

        let items = this.state.items.slice(3, 7);

        if(this.props.featuredProducts){
          return items.map(item => (
            <Item key={item.id} item={item}/>
        ))
        }
        else{
          return this.state.items.map(item => (
            <Item key={item.id} item={item}/>
        ))
        }
      }

    render(){
        const { error, isLoaded} = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
          } else if (!isLoaded) {
            return <div>Loading...</div>;
          } else {
            return (
                <>
               <Nav/>
                <div className="container mt-5 py-5">
                <div className="row g-3">
                        {
                          this.loadProducts()
                        }
                </div>
                </div>
                </>
              )
          }
    }

}