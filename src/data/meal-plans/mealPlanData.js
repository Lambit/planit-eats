export const plans = [
        {
            id: 500,
            name: 'Plan 1',
            qty: 5,
            price: 62.50
        },
        {
            id: 501,
            name: 'Plan 2',
            qty: 6,
            price: 69.99
        },
        {
            id: 502,
            name: 'Plan 3',
            qty: 7,
            price: 99.99
        },
        {
            id: 503,
            name: 'Plan 4',
            qty: 8,
            price: 119.99
        },
        {
            id: 504,
            name: 'Plan 5',
            qty: 10,
            price: 149.99
        },
        {
            id: 505,
            name: 'Plan 6',
            qty: 12,
            price: 169.99
        },
        {
            id: 506,
            name: 'Plan 7',
            qty: 14,
            price: 179.99
        },
        {
            id: 507,
            name: 'Plan 8',
            qty: 16,
            price: 199.99
        },
        {
            id: 508,
            name: 'Plan 9',
            qty: 20,
            price: 249.99
        },
        {
            id: 509,
            name: 'Plan 10',
            qty: 25,
            price: 269.99
        },
        {
            id: 510,
            name: '6 Months Marathon',
            qty: '6 Months Subscribtion',
            price: 1000
        },
        {
            id: 511,
            name: 'Welcome to the Family',
            qty: '1 Year Subscribtion',
            price: 5000
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


