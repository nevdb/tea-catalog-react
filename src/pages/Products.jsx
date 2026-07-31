import "../App.css";
import Header from "../components/Header";
import Catalog from "../components/Catalog";
import { DUMMY_PRODUCTS } from "../dummy-products";
import Product from "../components/Product";
import CartContextProvider from "../store/shopping-card-context";

function App() {
  return (
    <>
      <CartContextProvider>
        <Header />

        <Catalog>
          {DUMMY_PRODUCTS.map((product) => (
            <li key={product.id}>
              <Product {...product} />
            </li>
          ))}
        </Catalog>
      </CartContextProvider>
    </>
  );
}

export default App;
