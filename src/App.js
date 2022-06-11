import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/404/NotFound";
import BookPage from "./pages/bookPage/BookPage";
import Favourites from "./pages/favourites/Favourites";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/reading/:slug" element={<BookPage />} />
        <Route path="/favorites" element={<Favourites />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
