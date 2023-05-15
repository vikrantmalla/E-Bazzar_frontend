import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Data from "../types/data";
import useFetch from "../services/usefetch";
import HomePage from "../components/HomePage";
import NavBar from "../components/shared/NavBar";

function App() {
  const [product, setProduct] = useState<Data.Product>([]);
  const { data, isLoading, serverError } = useFetch(
    "product/"
  );

  //get all countries
  useEffect(() => {
    setProduct(data);
  }, [data]);

  return (
    <>
      {serverError && <h2>{serverError}</h2>}
      {isLoading ? (
        <div className="loading d-flex justify-content-center align-items-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <NavBar />
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={
                  <HomePage
                    product={product}
                  />
                }
              />
            </Routes>
          </BrowserRouter>
        </>
      )}
    </>
  );
}

export default App;
