import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import "./Header.css";
import { useCart } from "../context/CartContext";
const Header = () => {
  const {cartList}=useCart();
  return (
    <header>
      <Link to="/" className="logo">
        <img src={Logo} alt="shopmate logo" />
        <span>Shopping Cart</span>
      </Link>
      <nav className="navigation">
        <NavLink to="/" className="link" end>
          HOME
        </NavLink>
        <NavLink to="/cart" className="link">CART</NavLink>
      </nav>
      <Link to="/cart" className="items">
        <span>Cart:{cartList.length}</span>
      </Link>
    </header>
  );
};
export default Header;
