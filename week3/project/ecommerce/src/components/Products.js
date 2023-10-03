import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../useFetch";
import { useFavorites } from "../FavoritesContext";
import heartRegular from "../assets/heart-regular.svg";
import heartSolid from "../assets/heart-solid.svg";

const Products = ({ selectedCategory, favoritesOnly }) => {
  const apiUrl = favoritesOnly
    ? "https://fakestoreapi.com/products"
    : selectedCategory
    ? `https://fakestoreapi.com/products/category/${selectedCategory}`
    : "https://fakestoreapi.com/products";

  const { data: products, loading, error } = useFetch(apiUrl);
  const { favorites, toggleFavorite } = useFavorites();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something went wrong. Please try again later.</p>;
  }

  return (
    <div>
      <ul className="product-list">
        {products.map((product) => {
          if (favoritesOnly && !favorites.includes(product.id)) {
            return null;
          }

          return (
            <li className="product" key={product.id}>
              <div className="product-box">
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

                <button
                  onClick={() => toggleFavorite(product.id)}
                  className="favorite-button"
                >
                  <img
                    className="favorite-button-image"
                    src={
                      favorites.includes(product.id) ? heartSolid : heartRegular
                    }
                    alt={
                      favorites.includes(product.id)
                        ? "Solid"
                        : "Regular"
                    }
                  />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Products;
