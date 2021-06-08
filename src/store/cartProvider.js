import CartContext from './cart-context';

const CartProvider = props => {

    const addIteamToCartHandlear = iteam =>{};

    const removeIteamFromCartHandlear = id =>{};

    const cartContext = {
        items: [],
        totalAmount: 0,
        addIteam: addIteamToCartHandlear,
        removeIteam: removeIteamFromCartHandlear

    };

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>

};

export default CartProvider;