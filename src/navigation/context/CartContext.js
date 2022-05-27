import React, { createContext, useState } from "react";
import { getChicken } from "../../data/ChickenMealsData";
import { getMeals } from "../../data/ChickenMealsData";
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
              totalPrice: meal.price 
          }];
      }
      else { 
          return prevItems.map((item) => {
            if(item.id == id) {
              item.qty++;
              item.totalPrice += meal.price ;
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

  function getTotalPrice() {
    // const taxPrice = total * 0.625;
    // const shippingPrice = total ? 0 : 10;
    // const totalPlusTax = total + taxPrice + shippingPrice;
      return items.reduce((sum, item) => ( sum + item.totalPrice), 0);
  }  

  return (
    <CartContext.Provider 
      value={{items, setItems, getItemsCount, addItemToCart, getTotalPrice, addPlanToCart}}>
      {props.children}
    </CartContext.Provider>
  );
}


// export function CartProvider(props) {
//     const [cartItems, setCartItems] = useState([]);

// add/display an array ------------------------------
// function addItemToCart(meal) {
//     const meals = getMeals(meal);
//     setItems((prev) => {
//       const existing = items.find(
//         (item) => item.id === meals.id,
//       );

//       return existing
//         ? [
//             ...items.map((item) =>
//               item.id === meals.id
//                 ? { ...item, qty: item.qty + 1 }
//                 : item,
//             ),
//           ]
//         : [...prev, { ...meals, qty: 1 }];
//     });
//   }
  

//     function subtractFromCart(food, qty) {
//         if (qty === 0) {
//              return removeFromCart(food);
//         } else {
//             setCartItems((prev) => {
//               const existing = cartItems.find(
//                 (item) => item.id === food.id,
//               );
            
//               return existing
//                 ? [
//                     ...cartItems.map((item) =>
//                       item.id === food.id
//                         ? { ...item, qty: item.qty - 1 }
//                         : item,
//                     ),
//                   ]
//                 : [...prev, { ...food, qty: 1 }];
//             });
//         }
//     }
  
//     function removeFromCart(meal) {
//       setCartItems((prev) => [
//         ...prev.filter((item) => item.id !== meal.id),
//       ]);
//     }

//     function getItemsCount() {
//         return cartItems.reduce((sum, item) => (sum + item.qty), 0);
//     }
//     function getTotalPrice() {
//         return cartItems.reduce((sum, item) => (sum + item.totalPrice), 0);
//     } 
//     return (
//         <CartContext.Provider 
//         value={{cartItems, setCartItems, addToCart, subtractFromCart, removeFromCart, getItemsCount, getTotalPrice}} >
//             {props.children}
//         </CartContext.Provider>
//     )
// }
