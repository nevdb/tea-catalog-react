import "../App.css";
import Header from "../components/Header";
import Catalog from "../components/Catalog";
import { DUMMY_PRODUCTS } from "../dummy-products";
import Product from "../components/Product";
import CartContextProvider from "../store/shopping-card-context";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <CartContextProvider>
        <Header />
        <h1>Home page</h1>
        <p>
          Go to <Link to="/products"> the list of products</Link>
        </p>
      </CartContextProvider>
    </>
  );
}

export default App;
