import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import './Shop.css';

const SAMPLE_PRODUCTS = [
  { id: 1, title: 'Organic Strawberry Fruits', category: 'Fruits', price: 35.0, image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=400&q=80' },
  { id: 2, title: 'Artisan Wheat Bread', category: 'Bread', price: 12.0, image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80' },
  { id: 3, title: 'Fresh Organic Peaches', category: 'Fruits', price: 28.0, image: 'https://images.unsplash.com/photo-1641971165506-696c10b4f84d?auto=format&fit=crop&w=400&q=80' },
  { id: 4, title: 'Fresh Green Cabbage', category: 'Vegetables', price: 8.5, image: 'https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?auto=format&fit=crop&w=400&q=80' },
  { id: 5, title: 'Sliced Sandwich Loaf', category: 'Bread', price: 10.0, image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=400&q=80' },
  { id: 6, title: 'Fresh Orange Juice', category: 'Juices', price: 15.0, image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=400&q=80' },
  { id: 7, title: 'Organic Pumpkin', category: 'Vegetables', price: 22.0, image: 'https://images.unsplash.com/photo-1570586437263-ab629fccc818?auto=format&fit=crop&w=400&q=80' },
  { id: 8, title: 'Organic Bananas', category: 'Fruits', price: 6.0, image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=400&q=80' },
  { id: 9, title: 'Fresh Kiwi Pack', category: 'Fruits', price: 18.0, image: 'https://images.unsplash.com/photo-1585059819970-313833b3a380?auto=format&fit=crop&w=400&q=80' },
];

const CATEGORIES = ['All Product', 'Vegetables', 'Fruits', 'Bread', 'Juices'];

export default function Shop({ onAddToCart }) {
  const [activeCategory, setActiveCategory] = useState('All Product');

  const filteredProducts = activeCategory === 'All Product'
    ? SAMPLE_PRODUCTS
    : SAMPLE_PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <div className="shop-page container">
      <div className="shop-header">
        <span className="sub-heading">FRESH FROM OUR FARM</span>
        <h2>Our <span>Products</span></h2>
      </div>

      <div className="category-filters">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`filter-pill ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="products-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
}