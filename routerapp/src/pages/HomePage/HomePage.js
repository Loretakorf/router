import { Link } from "react-router-dom"
const HomePage = () => {
    return (
        <div>
            <h1>My react router project</h1>
            <Link to={"/products"}>Products</Link>
        </div>
    )
}
export default HomePage;