import { useParams } from "react-router-dom";
import { data } from "../../data/data";
import "./ProductPage.css"


const ProductPage = () => {
  const { id } = useParams();

const item = data.find((item) => item.id === Number.parseInt(id));
  return (
    <div>
      <h2>{item.label}</h2>
      <h3>{item.category}</h3>
      <img src={item.img} alt={item.label} className="img" />
      <p className="text">{item.about}</p>
      <p className="price">Price: {item.price}</p>
    </div>
  );
};
export default ProductPage;
