import React, { useState } from 'react';
import axios from 'axios';

function SingleProduct(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedProduct, setUpdatedProduct] = useState({
    name: props.e.name,
    description: props.e.description,
    price: props.e.price,
    category: props.e.category,
  });

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5050/api/product/${id}`)
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleUpdate = (id) => {
    axios
      .put(`http://localhost:5050/api/product/${id}`, updatedProduct)
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  return (
    <div>
      <div className="product-card">
        <img src={props.e.imageUrl} alt="" />
        {isEditing ? (
          <div>
            <input
              type="text"
              name="name"
              value={updatedProduct.name}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="description"
              value={updatedProduct.description}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="price"
              value={updatedProduct.price}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="category"
              value={updatedProduct.category}
              onChange={handleInputChange}
            />
          </div>
        ) : (
          <div>
            <h2>{props.e.name}</h2>
            <p>{props.e.description}</p>
            <p className="card-item-price">{props.e.price}</p>
            <p className="card-item-cat">{props.e.category}</p>
          </div>
        )}
        <div className="product-card-buttons">
          <button onClick={() => setIsEditing(!isEditing)}>
            {isEditing ? 'Cancel Update' : 'Update Product'}
          </button>
          {isEditing && (
            <button onClick={() => handleUpdate(props.e.id)}>Save Update</button>
          )}
          <button onClick={() => handleDelete(props.e.id)}>Delete Product</button>
        
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
