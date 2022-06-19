import React, { useState } from 'react';

/*-----useCart-----
    useCart sets the state of the cart to an empty array, and
    houses functions to be used with in cart. They consist of
    addToCart, subtractFromCart, and remove from cart. All these
    function update the state.
 */ 

export default function useCart() {
    const [cartItems, setCartItems] = useState([]);
  
    function addToCart(meal) {
      setCartItems((prev) => {
        const existing = cartItems.find(
          (item) => item.id === meal.id,
        );
  
        return existing
          ? [
              ...cartItems.map((item) =>
                item.id === meal.id
                  ? { ...item, qty: item.qty + 1 }
                  : item,
              ),
            ]
          : [...prev, { ...meal, qty: 1 }];
      });
    }

    function subtractFromCart(meal, qty) {
        if (qty === 0) {
             return removeFromCart(meal);
        } else {
            setCartItems((prev) => {
              const existing = cartItems.find(
                (item) => item.id === meal.id,
              );
            
              return existing
                ? [
                    ...cartItems.map((item) =>
                      item.id === meal.id
                        ? { ...item, qty: item.qty - 1 }
                        : item,
                    ),
                  ]
                : [...prev, { ...meal, qty: 1 }];
            });
        }
    }
  
    function removeFromCart(meal) {
      setCartItems((prev) => [
        ...prev.filter((item) => item.id !== meal.id),
      ]);
    }

    return {
      cartItems,
      setCartItems,
      addToCart,
      subtractFromCart,
      removeFromCart,
    };
}
// let [total, setTotal] = useState(0);
   // useEffect(() => {
    //   setTotal(planPrice);
    // });