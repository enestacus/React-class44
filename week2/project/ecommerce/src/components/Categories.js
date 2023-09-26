import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Categories = ({ setSelectedCategory, selectedCategory }) => {
  const [categoriesData, setCategoriesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();

  const fetchCategories = async () => {
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const data = await response.json();
      setCategoriesData(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
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
