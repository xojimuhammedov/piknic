import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Product from "./components/Products";
import Catalog from "./components/Catalog";
import AboutProduct from "./components/AboutProduct";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Product />
            </>
          }
        />
        <Route path="/products/:id" element={<Catalog />} />
        <Route path="/products-about/:id" element={<AboutProduct />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
