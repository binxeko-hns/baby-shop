import HomePage from "./containers/HomePage/pages/HomePage";
import ProductPage from "./containers/ProductPage/pages/ProductPage";
import { ProductProvider } from "./context/product.context";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <ProductProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:productId" element={<ProductPage />} />
        </Routes>
      </div>
    </ProductProvider>
  );
}

export default App;
