import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useFetch from "../useFetch";

const Categories = ({ setSelectedCategory, selectedCategory }) => {
  const location = useLocation();
  const apiUrl = "https://fakestoreapi.com/products/categories";

  const { data: categoriesData, loading, error } = useFetch(apiUrl);

  const handleCategoryClick = (category) => {
    if (location.pathname === "/") {
      setSelectedCategory(category === selectedCategory ? null : category);
    } else {
      setSelectedCategory(null);
    }
  };

  useEffect(() => {
    if (location.pathname === "/") {
      setSelectedCategory(null);
    }
  }, [location.pathname, setSelectedCategory]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something went wrong. Please try again later.</p>;
  }

  return (
    <div>
      {location.pathname.includes("/product/") ? null : (
        <ul className="category-list">
          {categoriesData.map((category) => (
            <li
              key={category}
              className={
                selectedCategory === category ? "active-category" : null
              }
            >
              <button onClick={() => handleCategoryClick(category)}>
                {category}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Categories;
