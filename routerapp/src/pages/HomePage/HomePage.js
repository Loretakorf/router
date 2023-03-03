import { Link } from "react-router-dom"
import "./HomePage.css"
const HomePage = () => {
    return (
        <div>
            <h1>My react router project</h1>
            <Link to={"/products"} className="link">Products</Link>
        </div>
    )
}
export default HomePage;