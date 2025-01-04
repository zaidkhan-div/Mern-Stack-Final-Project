import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header.jsx/Header.jsx";
import AddProduct from './Pages/AddProduct/Add'
import DeleteProduct from './Pages/DeleteProduct/Deletepro'
import Search from './Pages/Search/Search.jsx'
import UpdateProduct from "./Pages/UpdateProduct/Update.jsx";
import ErrorPage from './Pages/ErrorPage/Error'
import HomePage from "./Pages/Home/Home.jsx";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<AddProduct />} />
        <Route path="/update" element={<UpdateProduct />} />
        <Route path="/remove" element={<DeleteProduct />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
