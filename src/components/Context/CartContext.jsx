import React, { useEffect } from 'react';
import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    
    const addToCart = (item, cantidad) => { 
        if(isInCart(item.id)){
            totalQuantitySingleProduct(item, cantidad);
        }else{      
            setCart([...cart, { ...item, cantidad }]);    
        }
    };  

    //corroborar si el producto ya esta en el carrito
    const isInCart = (id) => {
        return cart.some((product) => product.id === id);
    };

    //sumar cantidad del mismo producto
    const totalQuantitySingleProduct = (item, cantidad) => {
        const updateProducts = cart.map((prod)=>{
            if(prod.id === item.id){
                const productUpdated ={
                    ...prod,
                    cantidad: cantidad
                }
                return productUpdated;
            }else{
                return prod;
            }
        })
        setCart(updateProducts);
    };
    
    //calcular total de unidades para el cart widget
    const totalQuantity = () => {
        let acumulador = 0;
        cart.forEach((prod) => {
            acumulador += prod.cantidad;
        });
        return acumulador;
    };
    
    //calcular total precio del carrito
    const totalPrice = () => {
        let acumulador = 0;
        cart.forEach((prod) => {
            acumulador += prod.cantidad * prod.price;
        });
        return Number(acumulador).toFixed(2);
    };
    
    //elimiar un solo producto pasandole el id
    const deleteOne = (id) => {
        // const copia = [...cart];
        const filteredProducts = cart.filter((prod)=> prod.id !== id);
        setCart(filteredProducts);
    };

    //vaciar el carrito
    const clearCart = () => {
        setCart([]);
    };

    const getProductQuantity = (id) => {
        const product = cart.find((prod) => prod.id === id);
        return product?.cantidad;      
    };
 
    useEffect(() => {
        totalQuantity();
        // eslint-disable-next-line
    }, [cart]);

    return (
        <CartContext.Provider 
            value={{ 
                cart,
                addToCart,
                clearCart,
                deleteOne,
                totalPrice,
                totalQuantity,
                getProductQuantity,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
