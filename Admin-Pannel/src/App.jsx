import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header.jsx/Header.jsx";
import AddProduct from './Pages/AddProduct/Add'
import DeleteProduct from './Pages/DeleteProduct/Deletepro'
import ErrorPage from './Pages/ErrorPage/Error'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<AddProduct />} />
        <Route path="/create" element={<AddProduct />} />
        {/* <Route path="/update" element={<UpdatePage />} /> */}
        <Route path="/remove" element={<DeleteProduct />} />
        {/* <Route path="/search" element={<SearchPage />} /> */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
