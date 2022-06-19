/*-----TurkData-----
  Data for turkey menu to use as props for the MenuLayout
*/ 

export const turkey = [
    {
        id: 21,
        image:  require('../assets/img/chicken/buff-chick.png'),
        name: 'Turkey Burger',
        price: 12.99,
        description: "Seasoned lean ground turkey mixed with fresh basil and seasonings and formed into a patty. Grilled then served bunless with roasted carrots and zucchini.",
        cal: '394',
        carb: '22g',
        protein: '38g',
        fat: '17g',
        sod: '231mg',
        fiber: '7g',
        vitamin: "Zinc, Niacin, Vitamin B12, Selenium, Vitamin C, Magnesium, Calcium, Manganese, Vitamin A, Folate, Riboflavin, Thiamin, Potassium",
        gf: 'GF'
        
    },
    {
        id: 22,
        image:  require('../assets/img/chicken/baked-chick-thigh.jpg'),
        name: 'Turkey Tips',
        price: 12.99,
        description: "Turkey Tips marinated in our signature coconut aminos blend then grilled. Paired with our vegetable medley of white onions, red peppers, mushrooms, celery, broccoli sauteed in our garlic olive oil. This high protein low carb meal is guaranteed to be one of your weekly favorites.",
        cal: '238',
        carb: '21g',
        protein: '39g',
        fat: '5g',
        sod: '317mg',
        vitamin: "Vitamin B6, Vitamin B12, Niacin, Choline, Selenium, Zinc, Vitamin C, Iron, Calcium, Magnesium, Vitamin D, Vitamin A, Vitamin E, Potassium, Beta-Carotene, Riboflavin, Vitamin K, Folate, Manganese, Fiber",
        gf: 'GF'
        
    },
    {
        id: 23,
        image: require('../assets/img/chicken/chick-fajitas.jpg'),
        name: 'Turkey & Cauliflower Stir Fry',
        price: 12.99,
        description: "Our lean version to the classic bolognese. Ground turkey sauteed with fresh garlic, onions, red peppers, zucchini and spinach. Slow simmered with our homemade tomato sauce and served over our baked cauliflower rice.",
        cal: '315',
        carb: '23g',
        protein: '32g',
        fat: '13g',
        sod: '489mg',
        fiber: '6g',
        vitamin:" Zinc, Niacin, Vitamin B12, Selenium, Vitamin C, Magnesium, Calcium, Iron, Phosphorus, Vitamin A, Vitamin K, Potassium, Fiber, Riboflavin, Folate, Thiamin, Vitamin B6, Manganese, Lycopene" ,
        gf: 'GF'
        
    },
    {
        id: 24,
        image: require('../assets/img/chicken/chicken-meatballs.jpg'),
        name: 'Turkey Stir Fry',
        price: 11.99,
        description: "Lean ground turkey sauteed with fresh garlic, onions, carrots and zucchini noodles. Served with a side of roasted seasonal veggies. Low in carbs, high in deliciousness!",
        cal: '383',
        carb: '23g',
        protein: '36g',
        fat: '18g',
        sod: '202mg',
        fiber: '7g',
        vitamin: "ZINC, NIACIN, SELENIUM, VITAMIN B12, VITAMIN C, MAGNESIUM, CALCIUM, PHOSPHORUS, VITAMIN A, VITAMIN K, POTASSIUM, FIBER",
        gf: 'GF'
        
    },
    {
        id: 25,
        image:  require('../assets/img/chicken/ChickenVeggieSoup.jpg'),
        name: 'Oven Roasted Turkey',
        price: 12.99,
        description: "A tasteful blend of shredded chicken, carrots, onions, celery and cabbage. You can't go wrong with a classic chicken soup.",
        cal: '329',
        carb: '32g',
        protein: '38g',
        fat: '5g',
        sod: '252mg',
        fiber: '7g',
        vitamin: "ZINC, NIACIN, VITAMIN B12, SELENIUM, VITAMIN C, MAGNESIUM, CALCIUM, IRON, PHOSPHORUS, VITAMIN A, VITAMIN K, POTASSIUM, FIBER",
        gf: 'GF'
        
    },
    {
        id: 26,
        image:  require('../assets/img/chicken/gar-lem-bas-chick.jpg'),
        name: 'Turkey Meatballs',
        price: 12.99,
        description: "Our Classic Italian turkey meatball. Lean ground turkey mixed with fresh basil, garlic, egg and fresh herbs, rolled and slow cooked.  Served over roasted spaghetti squash.  Topped with our organic tomato sauce and served with a blend of steamed spinach and kale.",
        cal: '361',
        carb: '17g',
        protein: '35g',
        fat: '17g',
        sod: '188mg',
        fiber: '4g',
        vitamin: "Niacin, Vitamin B6, Vitamin B12, Selenium, Iron, Vitamin A, Calcium, Potassium, Magnesium, Folate, Zinc, Phosphorus, Thiamin, Riboflavin, Niacin, Lycopene, Vitamin K, Folate",
        gf: 'GF'
        
    },
    {
        id: 27,
        image:  require('../assets/img/chicken/honey-must-pull-chick.jpg'),
        name: 'Turkey Chili Deluxe',
        price: 12.99,
        description: "A modern twist to a classic chili. Seasoned lean ground turkey, sauteed with fresh onions and peppers, tossed with broccoli, spinach and red kidney beans then slow simmered and served over basmati rice. Served with garlic mashed cauliflower and green beans.",
        cal: '370',
        carb: '25g',
        protein: '38g',
        fat: '13g',
        sod: '241mg',
        fiber: '9g',
        vitamin: "Niacin, Vitamin B6, Vitamin B12, Selenium, Iron, Vitamin A, Calcium, Potassium, Magnesium, Folate, Zinc, Phosphorus, Thiamin, Riboflavin, Niacin, Lycopene, Vitamin K, Folate",
        gf: 'GF'
        
    }
];

export function getTurkeyMeals() {
return chicken;
}
export function getTurkyId(id) {
return chicken.find((food) =>(food.id === id));
}