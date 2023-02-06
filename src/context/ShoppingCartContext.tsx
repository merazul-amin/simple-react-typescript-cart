import { createContext, ReactNode, useContext, useState } from "react";
type ShopingCartProviderProps = {
    children: ReactNode
}
type ShoppingCartContext = {
    getItemQuantity: (id: number) => number;
    increaseCartQuantity: (id: number) => void;
    decreaseCartQuantity: (id: number) => void;
    removeFromCart: (id: number) => void;
}
type CartItem = {
    id: number
    quantity: number
}
const ShoppingCartContext = createContext({});

export function useShoppingCartContext() {
    return useContext(ShoppingCartContext)

}

export function ShoppingCartProvider({ children }: ShopingCartProviderProps) {

    const [cartItems, setCarItems] = useState<CartItem[]>([])
    return <ShoppingCartContext.Provider value={{}}>
        {children}

    </ShoppingCartContext.Provider>
}