import { API } from "./database.js"
import run from "./data.js"

const createBean = () => {
    document.addEventListener("click", clickEvent => {

        let variety = {}
        variety.name = document.querySelector("#name").value
        variety.region = document.querySelector("#region").value
        variety.notes = document.querySelector("#notes").value

        if (variety.name !== "" && variety.region !== "") {
    
            API.postBean(variety)
            .then(() => {
                variety.name = document.querySelector("#name").value = ""
                variety.region = document.querySelector("#region").value = ""
                variety.notes = document.querySelector("#notes").value = ""
                $('.beans-list').empty()
                run.getBeanVarieties();
            })
            console.log('new')
        }
        // else {
        //     window.alert("You didn't write anything.")
        // }  
        console.log('Send Button Clicked')
    })
};


export default createBean