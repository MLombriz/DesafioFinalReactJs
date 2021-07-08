import { createContext, useState } from 'react'

// creo contexto
const CartContext = createContext()

//Defino el Provider
const CartProvider = ({ children, defaultCart }) => {
    const [cart, setCart] = useState(defaultCart)

    // Remover un ítem del cart mediante el uso de su Id
    const removeItem = (itemId) => {
        const newCart = cart.slice()
        const filterCart = newCart.filter(obj => obj.item.id !== itemId)
        setCart(filterCart)
    }

    // Agregar cierta cantidad de un ítem al carrito
    const addItem = (item, quantity) => {
        if (isInCart(item.id)) { //Si el item ya existe en el carrito
            console.log('Item existente en Cart.. Se sumo la cantidad elegida')
            const object = cart.find(obj => obj.item.id === item.id) //busco el objeto que cumple la condicion
            object.quantity += quantity // modifico el valor de cantidad de ese objeto
        } else { // Si el item no se encuentra en el carrito
            updateCart({ item, quantity })
        }
    }

    // Remover todos los ítems del Carrito
    const clearCart = () => {
        console.log('clearCart: Cart borrado y sin items');
        setCart(defaultCart)
    }

    // Verifica si esta en el carrito el item
    const isInCart = (itemId) => {
        return cart.find(obj => obj.item.id === parseInt(itemId)) ? true : false
    }

    // Para actualizar el Carrito 
    const updateCart = (obj) => {
        setCart([...cart, obj])
    }

    //Verifico si el Cart esta correctamente cargado
    console.log('CartOut: ', cart)

    return (
        // Dentro del CartContext.Provider vive la informacion que los hijos pueden consumir
        <CartContext.Provider value={{ cart, clearCart, addItem, updateCart, removeItem }}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider, CartContext }