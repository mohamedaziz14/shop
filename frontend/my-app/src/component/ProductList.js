import React, { useEffect, useState } from 'react';
import axios from "axios";
import SingleProduct from './SingleProduct';
import AddProduct from './AddProduct';

const ProductsList = () => {
  const [data, setData] = useState([]);


  useEffect(() => {
    axios.get("http://localhost:5050/api/product")
      .then(res => {
        setData(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
        <div className='products-list' >
      {data.map((e, i) => (
         <SingleProduct e={e}/>
        ))}
        </div>
        <AddProduct/>
    </div>
  );
};

export default ProductsList;
