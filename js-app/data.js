import { API, varietals, coffees } from "./database.js"
import { renderVarieties, renderCoffees } from "./render.js"


const run = {
    getBeanVarieties: () => {
    API.getBeanVarietyData()
        .then(() => {
            renderVarieties(varietals);
            console.log(varietals);
        })
    },
    getCoffees: () => {
    API.getCoffeeData()
        .then(() => {
            renderCoffees(coffees);
            console.log(coffees);
        })
    }
};

export default run
