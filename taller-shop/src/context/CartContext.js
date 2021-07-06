import { createContext, useContext, useState } from 'react'

// creo contexto
const CartContext = createContext()

// creo la funcion que utiliza CartContext
const useCartContext = () => {
    useContext(CartContext)
}

//Defino el Provider
const CartProvider = ({ children, defaultCart }) => {
    const [cart, setCart] = useState(defaultCart)

    return (
        <CartContext.Provider value={cart, setCart}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider, useCartContext }