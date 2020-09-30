const beansList = document.querySelector(".beans-list")
const coffeeList = document.querySelector(".coffee-list")
const varietalTitle = document.querySelector(".varietal-title")
const coffeeIcon = "https://ltl.lincoln.ac.nz/wp-content/uploads/sites/20/2020/04/coffee-clipart1.png"
const beanIcon = "https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/256x256/coffee_bean.png"

const renderVarieties = (varieties) => {
    varieties.forEach(variety => {
        beansList.innerHTML += 
        `
        <div class="bean-item">
            <div class="bean-icon">
                <img class="thumbnail" src="${beanIcon}" alt="coffee"/>
            </div>
            <div class="bean-details">
                <h2 class="bean-name">
                    ${variety.name}
                </h2>
                <dl>
                    <dt>Region:</dt>
                    <dd>${variety.region}</dd>
                    <dt>Notes:
                    <dd>${variety.notes}</dd>
                    </dt>
                </dl>
            </div>
        </div>
        `
    })
};

const renderCoffees = (coffees) => {
    coffees.forEach(coffee => {
        coffeeList.innerHTML += 
        `
        <div class="coffee-item">
            <div class="icon">
                <img class="thumbnail" src="${coffeeIcon}" alt="coffee"/>
            </div>
            <div class="coffee-details">
                <h2 class="coffee__name">
                    ${coffee.title}
                </h2>
                <h4 class="coffee__beanName">
                    ${coffee.beanVariety.name}
                </h4>
            </div>
        </div>
        ` 
    })
};

const renderVarietyTitle = () => {
    varietalTitle.innerHTML += 
    `
    <h2>Bean Varieties</h2>
    `
}

export { renderVarieties, renderCoffees, renderVarietyTitle }