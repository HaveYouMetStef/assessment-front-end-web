// console.log("hello world");

let favoriteColor = document.querySelector('#color')
let favoritePlace = document.querySelector('#place')
let favoriteRitual = document.querySelector('#ritual')

function faveColor(event) {
    event.preventDefault();
    
    alert('Cyan')
}

function favePlace(event) {
    
    alert('St.Edwards Park')
}

function favRitual(event) {
    alert('Getting a breakfast on a bun before a road trip')
}

favoriteColor.addEventListener('click', faveColor)
favoritePlace.addEventListener('click', favePlace)
favoriteRitual.addEventListener('click', favRitual)