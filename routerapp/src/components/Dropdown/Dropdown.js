import { data } from "../../data/data";

const productCategory = data.map((item) => {
  return { label: item.category, value: item.category };
});

const Dropdown = ({ setValue }) => {
  return (
    <div>
      <select onChange={(e) => setValue(e.target.value)}>
        <option value={"all"}>All products</option>
        {productCategory.map((item) => {
          return (
            <option value={item.value} key={item.value}>
              {item.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default Dropdown;
