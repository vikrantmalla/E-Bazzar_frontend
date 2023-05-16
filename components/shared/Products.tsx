import Data from "../../types/data";

interface Props {
  item: Data.ProductData;
}
const Products = ({ item }: Props) => {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card">
        <div className="card-img-container">
          {item.product_offer === true ? (
            <div className="offer-text ms-2 mt-2 px-3 py-2">
              <h5 className="mb-0">Special Offer !!</h5>
            </div>
          ) : (
            ""
          )}
          <img
            src={`${import.meta.env.VITE_INTERNAL_IMAGE_URL}/${item.product_image}`}
            className="card-img-top"
            alt="items"
          />
        </div>
        <div className="card-body">
          <h5 className="card-title mb-0">{item.product_name}</h5>
          <hr className="my-3" />
          <div className="cta-wrapper d-flex flex-row align-items-center justify-content-between">
            <div className="cta mb-2">
              <button className="btn btn-outline-secondary add-btn">
                Add to Cart
              </button>
            </div>
            <p>RS {item.product_price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
