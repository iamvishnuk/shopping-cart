import { CartState } from "../Context/Context";
import Filter from "./Filter";
import SingleProduct from "./SingleProduct";
import "./styles.css";

const Home = () => {
    const {
        state: { products },
        productState: { byStock, byFastDelivery, sort, byRating, searchQuerry },
    } = CartState();

    const transformProducts = () => {
        let sortedProducts = products;
        if (sort) {
            sortedProducts = sortedProducts.sort((a, b) =>
                sort === "lowToHigh" ? a.price - b.price : b.price - a.price
            );
        }

        if (!byStock) {
            sortedProducts = sortedProducts.filter((prod) => prod.inStock);
        }

        if (byFastDelivery) {
            sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
        }

        if (byRating) {
            sortedProducts = sortedProducts.filter(
                (prod) => prod.rating >= byRating
            );
        }

        if (searchQuerry) {
            sortedProducts = sortedProducts.filter((prod) =>
                prod.name.toLowerCase().includes(searchQuerry)
            );
        }

        return sortedProducts;
    };

    return (
        <div className="home">
            <Filter />
            <div className="productContainer">
                {transformProducts().map((prod) => (
                    <SingleProduct prod={prod} key={prod.id} />
                ))}
            </div>
        </div>
    );
};

export default Home;
