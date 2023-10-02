import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Products = ({ selectedCategory }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const apiUrl = selectedCategory
          ? `https://fakestoreapi.com/products/category/${selectedCategory}`
          : `https://fakestoreapi.com/products`;

        const response = await fetch(apiUrl);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCategory]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>An error was encountered. Please try again later!</p>;
  }

  return (
    <div>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>
              <div>
                <img
                  className="product-image"
                  src={product.image}
                  alt={product.title}
                />
                <p>{product.title}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
