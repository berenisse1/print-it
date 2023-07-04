const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//ajouter fléches

const arrowLeft = document.getElementsByClassName("arrow_left");
console.log(arrowLeft)

const arrowRight = document.getElementsByClassName("arrow_right");
console.log(arrowRight)


// ajouter eventLiistenner
arrowLeft.addEventListener ("click",function() {
	console.log("vous avez cliquez sur la flèche de gauche")
})

arrowRight.addEventListener("click",() => {
	console.log("vous avez cliquez sr la flèches droite");
})


//déduire -1 de slides
function previous(slidesLength){
	if(slides.length<3){
		console.log("slides--")
	}
}

// incrémenter +1 de slides
 function next(slidesLenght) {
	if(slides.length<3){
		console.log("slides++")
	}
	
 }

 //boucle slide arret dernière slide=slide4
for (let i=0; i<3; i++){
	console.log(i)
}




//tbl dots
const dots=[ "dot1","dots2", "dots3", "dots4" ]

//déduire -1 de dots
function mouveLeft(dotsLength){
	if(dots.length<3){
		console.log("slides--")
	}
}

// incrémenter +1 de dots
 function mouveRight(dotsLenght) {
	if(dots.length<3){
		console.log("slides++")
	}
	
 }

//boucle dots arret dernière dots
for (let i=0; i<dots.length; i++){
	console.log(i)
}


