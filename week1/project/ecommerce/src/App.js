import "./App.css";
import Categories from "./components/Categories.js";
import Products from "./components/Products.js";
import { useState } from "react";
import categoriesData from "./fake-data/all-categories.js";
import productsData from "./fake-data/all-products.js";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="App">
      <h1>Products</h1>
      <Categories
        categoriesData={categoriesData}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Products
        productsData={productsData}
        selectedCategory={selectedCategory}
      />
    </div>
  );
}

export default App;
