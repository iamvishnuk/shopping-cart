import { createContext, useContext, useReducer } from "react";
import { faker } from "@faker-js/faker";
import { cartReducer, productReducer } from "./Reducers";

const Cart = createContext();
faker.seed(99)

const Context = ({ children }) => {
    const products = Array.from({ length: 20 }, () => ({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.url(),
        inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery: faker.datatype.boolean(),
        rating: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
    }));

    const [state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart: [],
    });

    const [productState, productDispatch ] = useReducer(productReducer, {
        byStock: false,
        byFastDelivery: false,
        byRating: 0,
        searchQuerry: ""
    })

    return (
        <Cart.Provider
            value={{ state, dispatch, productState, productDispatch }}
        >
            {children}
        </Cart.Provider>
    );
};

export default Context;

export const CartState = () => {
    return useContext(Cart);
};
