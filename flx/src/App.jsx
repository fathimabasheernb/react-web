import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Footer from "./components/Footer";

import Detail from "./pages/Detail";
import AllProducts from "./pages/AllProducts";
import Login from "./pages/Login";
import Sell from "./pages/Sell";

function App() {
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem("flx-favourites") || "[]");
  });

  useEffect(() => {
    localStorage.setItem("flx-favourites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (id) => {
    setFavorites((previousFavorites) =>
      previousFavorites.includes(id)
        ? previousFavorites.filter((item) => item !== id)
        : [...previousFavorites, id]
    );
  };

  const handleSearch = (text) => {
    setSearchText(text);
    setSelectedCategory("All");
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSearchText("");
  };

  return (
    <Routes>

      <Route
        path="/"
        element={
          <>
            <Nav
              onSearch={handleSearch}
              onCategorySelect={handleCategorySelect}
            />

            <Hero />

            <Card
              searchTerm={searchText}
              selectedCategory={selectedCategory}
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
            />

            <Footer />
          </>
        }
      />

      <Route
        path="/products"
        element={
          <AllProducts
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
          />
        }
      />

      <Route path="/product/:id" element={<Detail />} />

      <Route path="/login" element={<Login />} />

      <Route path="/sell" element={<Sell />} />

    </Routes>
  );
}

export default App;