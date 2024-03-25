const switchClick = document.querySelector('.switch');
const like = document.querySelector('.like');
const quantity = document.querySelector('.quantity');
const buy = document.querySelector('.btn-basket');
const decrement = document.querySelector('.decrement-svg');
const increment = document.querySelector('.increment-svg');
const counterAdd = document.querySelector('.btn-basket-activ');
const counter = document.querySelector('.btn-basket-activ span');
const favorites = document.querySelector('.like .favorites-svg');
const favoritesHeader = document.querySelector('.header-top .favorites-svg');

switchClick.addEventListener('click', () => {
	switchClick.classList.toggle('switch-none')
})

like.addEventListener('click', () => {
	favorites.classList.toggle('favorites-like')
})

favoritesHeader.addEventListener('click', () => {
	favoritesHeader.classList.toggle('favorites-like')
})

buy.addEventListener('click', () => {
	counter.textContent =  parseInt(quantity.textContent); lastIntOfNum(counter.textContent)
	counterAdd.style.display = 'flex'
	buy.style.display = 'none'
})

function lastIntOfNum(num){
	num = `${num}`
	let a = num[num.length - 1]
	let is = num.length > 1 ? num[num.length - 2] : 0;
	if((+a === 1) && (+is !== 1)){
		return counter.textContent += " " + "штука"
	}else if((+a >= 2 && +a <= 4) && (+is !== 1)){
		return counter.textContent += " " + "штуки"
	}else{
		return counter.textContent += " " + "штук"
	}
};

increment.addEventListener('click', () => {
	counter.textContent = parseInt(counter.textContent) + parseInt(quantity.textContent)
	lastIntOfNum(counter.textContent)
	console.log(counter.textContent);
})

decrement.addEventListener('click', () => {
	if (parseInt(counter.textContent) === parseInt(quantity.textContent)){
		counterAdd.style.display = 'none'
		buy.style.display = 'flex'
	}else {
		counter.textContent = parseInt(counter.textContent) - parseInt(quantity.textContent)
		lastIntOfNum(counter.textContent)
	}
})