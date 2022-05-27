import BuffChick from '../assets/img/chicken/buff-chick.png';
import ChickThigh from '../assets/img/chicken/baked-chick-thigh.jpg';
import Fajitas from '../assets/img/chicken/chick-fajitas.jpg';
import Meatball from '../assets/img/chicken/chicken-meatballs.jpg';
import ChickenSoup from '../assets/img/chicken/ChickenVeggieSoup.jpg';
import LemonChicken from '../assets/img/chicken/gar-lem-bas-chick.jpg';
import HoneyMustChick from '../assets/img/chicken/honey-must-pull-chick.jpg';
import BBQChick from '../assets/img/chicken/paleo-bbq-chick.jpg';
import SesameChick from '../assets/img/chicken/sesame-chick-sf.jpg';


/*-----ChickenMealsData-----
  Data for chicken menu to use as props for the MenuLayout
*/ 


    export const chicken = [
        {
            id: 1,
            image:  require('../assets/img/chicken/buff-chick.png'),
            name: 'Buffalo Chicken Fingers',
            price: 12.50,
            description: "Chicken strips battered in gluten free flour, seared in coconut oil and hand tossed in our tasty buffalo sauce. Traditionally paired with roasted carrots flavored with Italian herbs and spices and raw celery.",
            cal: '488',
            carb: '33g',
            protein: '56g',
            fat: '11g',
            sod: '831mg',
            vitamin: "Iron, Vitamin B12, Zinc, B complex, Selenium, Phosphorus, Vitamin A, Vitamin K, Potassium, Calcium, Fiber, Vitamin C"
            
        },
        {
            id: 2,
            image:  require('../assets/img/chicken/baked-chick-thigh.jpg'),
            name: 'Baked Chicken Thighs',
            price: 12.50,
            description: "Baked juicy chicken thighs accompanied by an array of fresh asparagus , green beans, red pepper, red onion and broccoli. Roasted to perfection with garlic.",
            cal: '356',
            carb: '13g',
            protein: '49g',
            fat: '12g',
            sod: '354mg',
            vitamin: "Iron, Vitamin B12, Zinc, B complex, Selenium, Phosphorus, Calcium, Potassium, Magnesium, Vitamin K, Vitamin C, Vitamin E, B Vitamins, Vitamin A"
            
        },
        {
            id: 3,
            image: require('../assets/img/chicken/chick-fajitas.jpg'),
            name: 'Chicken Fajitas',
            price: 12.50,
            description: "Our fajitas, made from baked lean chicken breast, onions and peppers are served on a bed of fresh basmati rice accompanied by black beans and our house made salsa.",
            cal: '444',
            carb: '31g',
            protein: '61g',
            fat: '7g',
            sod: '424mg',
            vitamin: "Iron, Vitamin B12, Zinc, B complex, Selenium, Phosphorus, Potassium, Folate"
            
        },
        {
            id: 4,
            image: require('../assets/img/chicken/chicken-meatballs.jpg'),
            name: 'Chicken Meatballs',
            price: 12.50,
            description: "Ground chicken, blended with herbs and spices, makes this a new version of an old classic meatball recipe. With the right combination of fresh garlic and basil, it's guaranteed to be an instant classic.",
            cal: '627',
            carb: '67g',
            protein: '41g',
            fat: '23g',
            sod: '468mg',
            vitamin: "Iron, Vitamin B12, Zinc, B complex, Selenium, Phosphorus, Folate, Vitamin K, Lycopene"
            
        },
        {
            id: 5,
            image:  require('../assets/img/chicken/ChickenVeggieSoup.jpg'),
            name: 'Chicken Veggie Soup',
            price: 5.50,
            description: "A tasteful blend of shredded chicken, carrots, onions, celery and cabbage. You can't go wrong with a classic chicken soup.",
            cal: '244',
            carb: '10g',
            protein: '21g',
            fat: '12g',
            sod: '126mg',
            vitamin: "Iron, Vitamin B12, Zinc, B complex, Selenium, Phosphorus, Vitamin K, Potassium, Fiber, Vitamin C, Calcium, Vitamin A"
            
        },
        {
            id: 6,
            image:  require('../assets/img/chicken/gar-lem-bas-chick.jpg'),
            name: 'Garlic Lemon Basil Chicken',
            price: 12.50,
            description: "Our marinated roasted garlic lemon basil chicken is served with Basmati rice, quinoa, green beans and toasted almonds.",
            cal: '467',
            carb: '41g',
            protein: '46g',
            fat: '13g',
            sod: '330mg',
            vitamin: "Iron, Vitamin B12, Zinc, B complex, Selenium, Phosphorus, Vitamin B6, Thiamin, Niacin, Potassium, Riboflavin, Manganese, Copper, Magnesium, Folate, Vitamin K, Vitamin A"
            
        },
        {
            id: 7,
            image:  require('../assets/img/chicken/honey-must-pull-chick.jpg'),
            name: 'Honey Mustard Pulled Chicken',
            price: 13.00,
            description: "Pulled chicken smothered in our own signature honey mustard chicken sauce. Served with basmati rice and broccoli.",
            cal: '633',
            carb: '56g',
            protein: '43g',
            fat: '24g',
            sod: '254mg',
            vitamin: "Iron, Vitamin B12, Zinc, B complex, Selenium, Phosphorus, Vitamin K1, Vitamin C, Manganese, Potassium"
            
        },
        {
            id: 8,
            image:  require('../assets/img/chicken/paleo-bbq-chick.jpg'),
            name: 'Paleo BBQ Pulled Chicken',
            price: 13.00,
            description: "Savory pulled BBQ chicken over sliced sweet potatoes. Served with garlic asparagus.",
            cal: '378',
            carb: '38g',
            protein: '31g',
            fat: '13g',
            sod: '583mg',
            vitamin: "Iron, Vitamin B12, Zinc, B complex, Selenium, Phosphorus, Potassium, Calcium, Fiber, Vitamin C, Vitamin B1, Folic Acid, Riboflavin"
            
        },
        {
            id: 9,
            image:  require('../assets/img/chicken/sesame-chick-sf.jpg'),
            name: 'Stir-Fried Sesame Chicken',
            price: 12.50,
            description: "Juicy chicken, seared to perfection and tossed in our tangy and sweet sesame sauce.  Served with a double helping of fresh roasted vegetables.",
            cal: '309',
            carb: '29g',
            protein: '35g',
            fat: '6g',
            sod: '493mg',
            vitamin: "Iron, Vitamin B12, Zinc,B complex, Selenium, Phosphorus, Vitamin A, Vitamin K, Potassium, Calcium, Fiber, Vitamin C"
            
        }
    ];

export function getMeals() {
    return chicken;
}
export function getChicken(id) {
    return chicken.find((food) =>(food.id === id));
}