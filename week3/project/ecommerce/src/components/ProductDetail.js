import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import { useFavorites } from "../FavoritesContext";
import heartRegular from "../assets/heart-regular.svg";
import heartSolid from "../assets/heart-solid.svg";

const ProductDetail = () => {
  const { id } = useParams();
  const { favorites, toggleFavorite } = useFavorites();
  const apiUrl = `https://fakestoreapi.com/products/${id}`;

  const { data: product, loading, error } = useFetch(apiUrl);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something went wrong. Please try again later.</p>;
  }

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="product-details">
      <div className="title-container">
        <h2>{product.title}</h2>
      </div>
      <div className="product-detail-information">
        <div className="product-details-image">
          <div className="product-image-container">
            <img
              className="product-detail-image"
              src={product.image}
              alt={product.title}
            />
            <button
              onClick={() => toggleFavorite(product.id)}
              className="favorite-button-detail"
            >
              <img
                className="favorite-button-image"
                src={favorites.includes(product.id) ? heartSolid : heartRegular}
                alt={favorites.includes(product.id) ? "Solid" : "Regular"}
              />
            </button>
          </div>
        </div>
        <p className="product-detail-description">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
