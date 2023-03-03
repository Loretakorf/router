import { Link } from "react-router-dom";
import "./Product.css"
const Product = ({ label, category, id }) => {

  return (
    <div className="product">
      <h2>{label}</h2>
      <h3>{category}</h3>
      <div className="link-container">
        <Link to={id.toString()}>Details</Link>
      </div>
    </div>
    
  );
};
export default Product;
