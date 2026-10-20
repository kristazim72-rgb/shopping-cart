import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div className="home-hero">
      <div className="hero-overlay container">
        <div className="hero-content">
          <h1>
            Get a box locally <br />
            <span>sustained your</span> <br />
            foods in season
          </h1>
          <p>
            Fresh organic produce directly delivered from eco-friendly farms straight to your kitchen table.
          </p>
          <Link to="/shop" className="hero-btn">
            Shop Our Products
          </Link>
        </div>
      </div>
    </div>
  );
}