import "./ProductCard.css";
import {useState,useEffect} from "react";
import { useCart } from "../context/CartContext";
const ProductCart=({product})=>{
const {cartList,addToCart,removeFromCart}=useCart();
const [isInCart,setIsInCart]=useState(false);
    const {id,name,price,image}=product;
useEffect(()=>{
    const prductIsInCart=cartList.find(cartItem=>cartItem.id===id);
if(prductIsInCart)
{
setIsInCart(true)
}
else
{
    setIsInCart(false);
}}
,[cartList,id])

    function handleToCart(){
         addToCart(product);
    }

return <div className="productCard">
    <img src={image} alt={name} className="img"/>
    <p className="name">{name}</p>
    <div className="action">
        <p>${price}</p>
        {isInCart?<button className="remove" onClick={()=>{removeFromCart(product)}}>Remove</button>:<button onClick={handleToCart}>Add To Cart</button>}
    </div>
</div>
}
export default ProductCart;
