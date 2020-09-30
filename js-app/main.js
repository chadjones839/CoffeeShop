import run from "./data.js"
import { renderVarietyTitle } from "./render.js"
import createBean from "./create.js"
import { API } from "./database.js"

const create = document.querySelector("#create-button");
const save = document.querySelector("#saveBean");
const button = document.querySelector("#run-button");
const yes = document.querySelector("#yes-button");
const no = document.querySelector("#no-button");


run.getCoffees();

button.addEventListener("click", () => {
    document.querySelector(".runText").style.display = "none";
    button.style.display = "none";
    renderVarietyTitle()
    document.querySelector("#create-button").style.display = "inline-block";
    run.getBeanVarieties();
    create.addEventListener("click", () => {
        document.querySelector("#create-button").style.display = "none";
        document.querySelector(".create-bean-form").style.display = "inline-block";
        document.querySelector(".save-button").style.display = "inline-block";
    })
});

yes.addEventListener("click", () => {
    document.querySelector(".impressed").style.display = "none";
    document.querySelector(".ask").style.border = "none";
    document.querySelector(".button-options").style.display = "none";
    document.querySelector(".saidYes").style.display = "inline-block";
    document.querySelector(".runText").style.display = "inline-block";
    document.querySelector(".runButton").style.display = "inline-block";
})

no.addEventListener("click", () => {
    document.querySelector(".impressed").style.display = "none";
    document.querySelector(".ask").style.border = "none";
    document.querySelector(".button-options").style.display = "none";
    document.querySelector(".saidNo").style.display = "inline-block";
    document.querySelector(".runText").style.display = "inline-block";
    document.querySelector(".runButton").style.display = "inline-block";
})

save.addEventListener("click", () => {
    createBean()
    document.querySelector(".create-bean-form").style.display = "none";
    document.querySelector("#create-button").style.display = "inline-block";
})
