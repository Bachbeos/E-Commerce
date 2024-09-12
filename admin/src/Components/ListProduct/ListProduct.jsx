import { useState } from 'react'
import './ListProduct.css'
import cross_icon from '../../Assets/Admin_Assets/cross_icon.png'

const ListProduct = () => {

  const [allproducts] = useState([]); //,setAllProducts

  return (
    <div className='list-product'>
      <h1>All Products List</h1>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Catagory</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproduct">
        <hr />
        {allproducts.map((product,index)=>{
          return <>
          <div key={index} className="listproduct-format-main listproduct-format">
            <img src={product.image} alt="" className="listproduct-product-icon" />
            <p>{product.name}</p>
            <p>${product.old_price}</p>
            <p>${product.new_price}</p>
            <p>{product.category}</p>
            <img src={cross_icon} alt="" className="listproduct-remove-icon" />
          </div>
          <hr />
          </> 
        })}
      </div>
    </div>
  )
}

export default ListProduct