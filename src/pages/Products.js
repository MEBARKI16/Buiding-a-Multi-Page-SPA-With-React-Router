import { Link } from "react-router-dom";

const Products = () => {
    return( 
    <section>
    <h1>The Products Page</h1>
    <ul>
        <li><Link to="/product-detail">product 1</Link></li>
        <li>product 2</li>
        <li>product 3</li>
    </ul>
    </section>);
};
export default Products;