console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit');
}

function hoverPic(evt) {
	evt.preventDefault();

	alert('give the user a compliment')
}


let form = document.querySelector('#contact');
let hoverOver= document.querySelector('.catPhoto')

form.addEventListener('submit', handleSubmit);

hoverOver.addEventListener('mouseover', hoverPic)

