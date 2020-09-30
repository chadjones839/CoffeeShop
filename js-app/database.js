const beanUrl = "https://localhost:5001/api/beanvariety/";
const coffeeUrl = "https://localhost:5001/api/coffee/";

let varietals = [];
let coffees = [];

const API = {
    getBeanVarietyData() {
        return fetch(beanUrl).then(resp => resp.json())
        .then(varieties => {
                varietals = varieties
                console.log(varieties)
            }
        )
    },
    getCoffeeData() {
        return fetch(coffeeUrl).then(resp => resp.json())
        .then(
            (allCoffees => {
                coffees = allCoffees
                console.log(allCoffees)
            })
        )
    },
    postBean(bean) {
        return fetch(beanUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bean)
        }).then(response => response.json())
    }
};

export {API, varietals, coffees}