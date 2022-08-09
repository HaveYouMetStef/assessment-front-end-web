// console.log('Hello wolrd');

let randomRestaurant = document.querySelector('#restaurant')
let randomBar = document.querySelector('#bar')

function ranRestaurant(event) {
    let restaurantOne = ['El Taquito', `Baby A's`, '1618']

    const random = Math.floor(Math.random() * restaurantOne.length)
    console.log((random, restaurantOne[random]));
}

function ranBar(event) {
    let bars = [`Emo's Austin`, `The Jackalope`, `Ani's Day & Night`]

    const random = Math.floor(Math.random() * bars.length)
    console.log((random, bars[random]));
}

randomRestaurant.addEventListener('click', ranRestaurant)
randomBar.addEventListener('click', ranBar)