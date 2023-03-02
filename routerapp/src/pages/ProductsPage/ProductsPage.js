import Product from "../../components/Product/Product";
import { data } from "../../data/data";

const ProductsPage = () => {
  return (
    <div>
      {data.map((item) => {
        return (
          <Product label={item.label} category={item.category} id={item.id} />
        );
      })}
    </div>
  );
};
export default ProductsPage;
