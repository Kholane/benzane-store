import { Outlet, useParams } from "react-router-dom";
import Nav from "../Nav";
import getItem from '../items';
import '../ViewedItem.css'

export function View(){

    return( 
    <>
    <Nav/>
    <Outlet/>
    </>
    )
}



export function ViewedItem(){

  let params = useParams();
  let item = getItem(parseInt(params.itemId, 10));

  return (
    <div className='container mt-5 py-5'>
      <div className='container mt-5'>
      <div className='row viewedItem'>
        <div className='col-lg-4'>
          <img src={item.img} className='img-fluid' alt='order' />
        </div>
        <div className='col-lg-4'>
          <p>{item.name}</p>
          <h3>{item.price}</h3>
          <div className="mt-4">
                <button className="btn-primary item_button rounded-0"><i className="bi bi-telephone"></i> | <i class="bi bi-whatsapp"></i> +27 79 939 5147</button>
                </div>
          </div>
      </div>
    </div>
      </div>

  )
}