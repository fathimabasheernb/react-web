import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Footer from "./components/Footer";

import Detail from "./pages/Detail";
import AllProducts from "./pages/AllProducts";

function App() {

  const [searchText, setSearchText] = useState("");

  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem("flx-favourites") || "[]");
  });

  // Save favourites in localStorage

  useEffect(() => {
    localStorage.setItem("flx-favourites", JSON.stringify(favorites));
  }, [favorites]);

  // Add or remove favourites

  const toggleFavorite = (id) => {

    setFavorites((previousFavorites) =>

      previousFavorites.includes(id)

        ? previousFavorites.filter((item) => item !== id)

        : [...previousFavorites, id]

    );

  };

  const handleSearch = (text) => {

  setSearchText(text);

  setTimeout(() => {

    document.getElementById("products-section")?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  }, 100);

};

  return (

    <Routes>

      {/* Home Page */}

      <Route
        path="/"
        element={
          <>
            <Nav onSearch={handleSearch} />

            <Hero />

            <Card
              searchTerm={searchText}
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
            />

            <Footer />
          </>
        }
      />

      {/* All Products Page */}

      <Route
        path="/products"
        element={
          <AllProducts
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
          />
        }
      />

      {/* Individual Product Details */}

      <Route
        path="/product/:id"
        element={<Detail />}
      />

    </Routes>

  );

}

export default App;