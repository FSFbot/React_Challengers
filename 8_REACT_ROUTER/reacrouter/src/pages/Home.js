import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

import "./Home.css";

const Home = () => {
    const url = "http://localhost:3000/products";

    const {data: items, loading, error} = useFetch(url);
    return(
        <div>
            <h1>Produtos</h1>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <ul className="products">
                {items && items.map((product) => (
                    <li key={product.id}>
                        <h2>{product.name}</h2>
                        <p>R$: {product.price}</p>


                        <Link to={`/product/${items.id}`}>
                           
                        </Link>
                    </li>
                )
                )}
            </ul>
        </div>
    );
}
export default Home;