import { Link } from "react-router-dom";

const Product = ({ label, category, id }) => {
  return (
    <div>
      <h2>{label}</h2>
      <h3>{category}</h3>
      <div>
        <Link to={id.toString()}>Details</Link>
      </div>
    </div>
    
  );
};
export default Product;
