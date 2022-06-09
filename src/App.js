import React from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/header/Header";
import NotFound from "./pages/404/NotFound";
import BookPage from "./pages/bookPage/BookPage";
import Favourites from "./pages/favourites/Favourites";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* <Route path="/" element={<App />}> */}
        <Route index element={<Home />} />
        <Route path="/reading/:slug" element={<BookPage />} />
        <Route path="/favorites" element={<Favourites />} />
        <Route path="/*" element={<NotFound />} />

        {/* </Route> */}
      </Routes>
    </>
  );
}

export default App;
