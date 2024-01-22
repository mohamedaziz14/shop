import React from 'react'
import axios from 'axios'

function SingleProduct(props) {
    const handleDelete = (id)=>{
        axios
        .delete(`http://localhost:5050/api/product/${id}`)
        .then(()=>{
          window.location.reload()
        })
        .catch((error)=>{
      console.log(error);
        })
      }
  return (
    <div > 
        <div className="product-card ">
    <img src={props.e.imageUrl} alt="" />
    <h2>{props.e.name}</h2>
    <p>{props.e.description}</p>
    <p className='card-item-price'>{props.e.price}</p>
    <p className='card-item-cat'>{props.e.category}</p>
    <div className="product-card-buttons">
      <button >Update Product</button>
      <button onClick={()=>handleDelete(props.e.id)}>Delete Product</button>
      <button>Add to Cart</button>
    </div>
  </div></div>
  )
}

export default SingleProduct