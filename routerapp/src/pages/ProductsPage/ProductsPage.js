import "./ProductsPage.css";
import Product from "../../components/Product/Product";
import { data } from "../../data/data";
import Dropdown from "../../components/Dropdown/Dropdown";
import { useState } from "react";


const ProductsPage = () => {
  const [value, setValue] = useState("all");

  const filteredProducts = data.filter((item) => {
    if (value === "all") {
      return true;
    }
    if (value === item.category) {
      return true;
    }
  });

  const handleChange = (value) => {
    setValue(value);
  };
  return (
    <div className="grid">
      <Dropdown setValue={handleChange} />

      {filteredProducts.map((item) => {
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
