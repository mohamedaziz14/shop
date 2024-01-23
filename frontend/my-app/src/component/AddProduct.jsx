import React,{useState} from 'react'
import axios from 'axios';


function AddProduct() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState("");
    // const [data, setData] = useState([]);
const handleAdd = ()=>{
const obj = {
    "name": name,
    "price": price,
    "description": description,
 "category" : category,
    "imageUrl": "https://m.media-amazon.com/images/I/61j1ZCgzQRL._AC_UF1000,1000_QL80_.jpg"
  }
axios
.post("http://localhost:5050/api/product",obj)
.then(()=>{
    setName ("")
    setDescription("")
    setPrice(0)
    setCategory("")
})

}

return (
    <div className="container">
      <form className="form">
        <input placeholder="Name" value={name} type="text" onChange={(e) => setName(e.target.value)} />
        <input placeholder="Description" value={description} type="text" onChange={(e) => setDescription(e.target.value)} />
        <input placeholder="Price" value={price} type="number" onChange={(e) => setPrice(e.target.value)} />
        <input placeholder="Category" value={category} type="text" onChange={(e) => setCategory(e.target.value)} />
        <button onClick={handleAdd}>Submit</button>
      </form>
    </div>
  );
}


export default AddProduct