const beanUrl = "https://localhost:5001/api/beanvariety/";
const coffeeUrl = "https://localhost:5001/api/coffee/";

const button = document.querySelector("#run-button");
button.addEventListener("click", () => {
    getAllBeanVarieties()
        .then(beanVarieties => {
            console.log(beanVarieties);
        })
        .then (
            getAllCoffees()
            .then(coffees => {
                console.log(coffees)
            })
        )
    
});

function getAllBeanVarieties() {
    return fetch(beanUrl).then(resp => resp.json());
}

function getAllCoffees() {
    return fetch(coffeeUrl).then(resp => resp.json());
}