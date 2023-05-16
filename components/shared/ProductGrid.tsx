import React from "react";

const ProductGrid = () => {
    return (
      <section className="container my-5">
        <div className="row">
          <div className="col-md-6 mb-4">
            <img
              src="../images/items3.jpg"
              className="d-block w-100"
              alt="Image3"
            />
          </div>
          <div className="col-md-6 mb-4">
            <div className="row">
              <div className="col-6">
                <img
                  src="../images/items1.jpg"
                  className="d-block w-100"
                  alt="Image1"
                />
              </div>
              <div className="col-6">
                <img
                  src="../images/items2.jpg"
                  className="d-block w-100"
                  alt="Image2"
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-6">
                <img
                  src="../images/items3.jpg"
                  className="d-block w-100"
                  alt="Image3"
                />
              </div>
              <div className="col-6">
                <img
                  src="../images/items1.jpg"
                  className="d-block w-100"
                  alt="Image1"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default ProductGrid;
  