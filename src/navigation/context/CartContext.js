import React, { createContext, useState } from "react";
import { getChicken } from "../../data/chicken/ChickenData";
import { getMeals } from "../../data/chicken/ChickenData";
import { getPlans, plans } from "../../data/meal-plans/mealPlanData";
import { getPlanById } from "../../data/meal-plans/mealPlanData";

export const CartContext = createContext();

export function CartProvider(props) {
    const [items, setItems] = useState([]);

  function addItemToCart(id) {
    const meal = getChicken(id);
    setItems((prevItems) => {
      const item = prevItems.find((item) => (item.id == id));
      if(!item) {
          return [...prevItems, {
              id,
              qty: 1,
              meal,
              // totalPrice: meal.price 
          }];
      }
      else { 
          return prevItems.map((item) => {
            if(item.id == id) {
              item.qty++;
            }
            return item;
          });
      }
    });
  }


    function addPlanToCart(id) {
      const plan = getPlanById(id);
      setItems((prevItems) => {
        const item = prevItems.find((item) => (item.id == id));
        if(!item) {
            return [...prevItems, { 
                id,
                qty: plan.qty,
                plan,
                totalPrice: plan.price
            }];
        }
        else { 
            return prevItems.map((item) => {
              if(item.id == id) {
                item.qty++;
                item.totalPrice += plans.price;
              }
              return item;
            });
        }
      });
}

function addToCart(meal) {
  setCartItems((prev) => {
    const existing = cartItems.find(
      (item) => item.id === id,
    );

    return existing
      ? [
          ...items.map((item) =>
            item.id === id
              ? { ...item, qty: item.qty + 1 }
              : item,
          ),
        ]
      : [...prev, { ...meal, qty: 1 }];
  });
}


function getItemsCount() {
    return items.reduce((sum, item) => (sum + item.qty), 0);
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

  // function getTotalPrice() {
  //     return items.reduce((sum, item) => ( sum + item.totalPrice), 0);
  // }  
  // useEffect(() => {
  //   setTotal(getTotalPrice());
  // });

  return (
    <CartContext.Provider 
      value={{items, setItems, getItemsCount, addItemToCart, addPlanToCart}}>
      {props.children}
    </CartContext.Provider>
  );
}

