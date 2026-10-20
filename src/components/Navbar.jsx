import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar({ cartCount }) {
  return (
    <header className="navbar-header">
      <div className="container nav-container">
        <Link to="/" className="brand-logo">
          <span className="logo-badge">🌱</span> FreshCart
        </Link>
        <nav className="nav-links">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
            Home
          </NavLink>
          <NavLink to="/shop" className={({ isActive }) => (isActive ? 'active' : '')}>
            Shop
          </NavLink>
          <NavLink to="/cart" className={({ isActive }) => (isActive ? 'active' : '')}>
            Cart
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </NavLink>
        </nav>
      </div>
    </header>
  );
}