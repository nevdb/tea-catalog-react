import "../App.css";
import Header from "../components/Header";
import Catalog from "../components/Catalog";
import { DUMMY_PRODUCTS } from "../dummy-products";
import Product from "../components/ProductCard";
import CartContextProvider from "../store/shopping-card-context";
import { Link, useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate("/products");
  }

  return (
    <>
      <Header />
      <h1>Home page</h1>
      <p>
        Go to <Link to="/products"> the list of products</Link>
      </p>
      <p>
        <button onClick={navigateHandler}>Navigate</button>
      </p>
    </>
  );
}

export default HomePage;
