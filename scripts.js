const menuContainer = document.querySelector('ul');
const buttonForEach = document.querySelector('.for-each')
const buttonMap = document.querySelector('.map')
const buttonReduce = document.querySelector('.reduce')
const buttonFilter = document.querySelector ('.filter')

function renderAllProducts(productsArray) {
    myLi = ''

    productsArray.forEach((item) => {
        myLi += `
          
            <li>
               <img src=${item.src}>
               <p>${item.name}</p>
               <p class = "item-price">R$ ${item.price.toFixed(2)} </p>
            </li >
            `

    })

    menuContainer.innerHTML = myLi

}

function mapItems() {
    const discountedPrices = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9,
    }))

    renderAllProducts(discountedPrices)

}

function reduceItems() {
    const totalPrice = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

    menuContainer.innerHTML = 

        `    
    <li>
       
       <p>O valor total dos items é R ${totalPrice} </p>
       
    </li >
    `

}

function filterVeganItems() {
    const veganBurgers = menuOptions.filter((product) => product.vegan);
    renderAllProducts(veganBurgers);
}




buttonForEach.addEventListener('click', () => {
    console.log('Botão For Each clicado');
    renderAllProducts(menuOptions);
});

buttonMap.addEventListener('click', () => {
    console.log('Botão Map clicado');
    mapItems();
});

buttonReduce.addEventListener('click', () => {
    console.log('Botão Reduce clicado');
    reduceItems();
});

buttonFilter.addEventListener('click', () => {
    console.log('Botão Filter clicado');
    filterVeganItems();
});



