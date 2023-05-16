import Data from "../types/data";
import Slider from "./shared/Slider";
import Products from "./shared/Products";
import ProductGrid from "./shared/ProductGrid"

interface Props {
  product: Data.ProductData[];
}

const HomePage = ({ product }: Props) => {
  const offerProducts = product.filter((item) => item.product_offer);
  const products = product.filter((item) => !item.product_offer);
  const sortedProducts = offerProducts.concat(products);
  return (
    <div>
      <Slider />
      <ProductGrid/>
      <section className="container my-5">
        <div className="row">
          {sortedProducts.map((item) => (
            <Products item={item} key={item.id} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
