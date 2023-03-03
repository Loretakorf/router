import "./ProductsPage.css";
import Product from "../../components/Product/Product";
import { data } from "../../data/data";

const ProductsPage = () => {
  return (
    <div className="grid">
      {data.map((item) => {
        return (
          <Product
            key={item.id}
            label={item.label}
            category={item.category}
            id={item.id}
          />
        );
      })}
    </div>
  );
};
export default ProductsPage;
