import "./App.css";
import Categories from "./components/Categories.js";
import Products from "./components/Products.js";
import ProductDetail from "./components/ProductDetail";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FavoritesPage from "./components/FavoritesPage";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <Router>
      <div className="App">
        <div className="title-box">
          <h1>Products</h1>
          <nav className="nav">
            <ul>
              <li className="nav-link">
                <Link to="/">Products</Link>
              </li>
              <li className="nav-link">
                <Link to="/favorites">Favorites</Link>
              </li>
            </ul>
          </nav>
        </div>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Categories
                  setSelectedCategory={setSelectedCategory}
                  selectedCategory={selectedCategory}
                />
                <Products selectedCategory={selectedCategory} />
              </>
            }
          />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
