import { Link } from 'react-router-dom';
import './Cart.css';

export default function Cart({ cart, onUpdateQuantity, onRemoveItem }) {
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="empty-cart container">
        <h2>Your Cart is Empty</h2>
        <p>Looks like you haven't added any fresh items yet.</p>
        <Link to="/shop" className="shop-now-btn">Start Shopping</Link>
      </div>
    );
  }

  return (
    <div className="cart-page container">
      <h2>Shopping Cart</h2>
      <div className="cart-content">
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />
              <div className="cart-item-details">
                <h4>{item.title}</h4>
                <div className="cart-item-price">${item.price.toFixed(2)}</div>
              </div>
              <div className="cart-quantity-controls">
                <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
              </div>
              <div className="cart-item-subtotal">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
              <button className="remove-btn" onClick={() => onRemoveItem(item.id)}>✕</button>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h3>Order Summary</h3>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <hr />
          <div className="summary-row total">
            <span>Total</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <button className="checkout-btn" onClick={() => alert('Order Placed!')}>
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}