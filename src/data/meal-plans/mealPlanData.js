export const plans = [
        {
            // $13 a meal
            id: 500,
            name: 'Bulk Box 1',
            qty: 5,
            price: 64.99
        },
        {
            // $13 a meal
            id: 501,
            name: 'Bulk Box 2',
            qty: 6,
            price: 77.99
        },
        {
            // $13 a meal
            id: 502,
            name: 'Bulk Box 3',
            qty: 7,
            price: 89.99
        },
        {
            // $13 a meal
            id: 503,
            name: 'Bulk Box 4',
            qty: 8,
            price: 103.99
        },
        {
            // $12 a meal
            id: 504,
            name: 'Bulk Box 5',
            qty: 10,
            price: 119.99
        },
        {
            // $12 a meal
            id: 505,
            name: 'Bulk Box 6',
            qty: 12,
            price: 143.99
        },
        {
            // $11 a meal
            id: 506,
            name: 'Bulk Box 7',
            qty: 15,
            price: 164.99
        },
        {
            // $11 a meal
            id: 507,
            name: 'Bulk Box 8',
            qty: 18,
            price: 197.99
        },
        {
            // $11 a meal
            id: 508,
            name: 'Bulk Box 9',
            qty: 20,
            price: 219.99
        },
        {
            // $11 a meal
            id: 509,
            name: 'Bulk Box 10',
            qty: 25,
            price: 274.99
        },
        {
            // $10 a meal
            id: 510,
            name: '6 Months Marathon',
            qty: '6 Months Subscribtion',
            price: 1819.19
        },
        {
            // $10 a meal
            id: 511,
            name: 'Welcome to the Family',
            qty: '1 Year Subscribtion',
            price: 3639.99
        },
];

export function getPlans() {
    return plans;
}
export function getPlanById(id) {
    return plans.find((item) =>(item.id === id));
}
    // function getId() {
    //     return plans.map((plan) => {
    //       return {...plan, items: plan.items.id}
    //     })
    //   }


