import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
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
        <Route
          exact
          path="/project-gutenberg-book-app"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </>
  );
}

export default App;
