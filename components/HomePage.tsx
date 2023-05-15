import Data from "../types/data";
import Slider from "./shared/Slider";
import Products from "./shared/Products";

interface Props {
  product: Data.ProductData[];
}

const HomePage = ({ product }: Props) => {
  console.log(product);
  return (
    <div>
      <Slider />
      <section className="container my-5">
        <div className="row">
          {product.map((item) => (
            <Products item={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
