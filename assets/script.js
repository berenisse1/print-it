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


//SLIDE

// déclare variable
let compteur = 0

// declaration + recupere élément quia attribut arrox
const arrow = document.getElementsByClassName("arrow")
console.log(arrow)

const slide = document.getElementsByClassName("banner-img")
console.log("banner-img")

const tagLine = document.querySelector("#banner p")
console.log("tagLine")

//images
slide[0].src = "assets/images/slideshow/" + slides[compteur].image;
tagLine.innerHTML= slides [compteur].tagLine;


let position = compteur
//tagLine.innerHTML = slides[compteur].tagLine;
//slide[position].src= ".assets/images/slideshow/" + slides[compteur].image;

function showSlide(){
	slide[position].src= ".assets/images/slideshow/" + slides[compteur].image;
	tagLine.innerHTML = slide.tagLine;	
}


//ajout evetlisner sur fléches + instruction a éxecuter au clic//

const arow= document.getElementsByClassName("arrow");

arrow[0].addEventListener("click",() => {
    console.log("vous avez cliquez sur la flèche gauche");
	previous();     
})

arrow[1].addEventListener("click",() => {
    console.log("vous avez cliquez sur la flèche droite");
	next();
})


//déduire +1 de compteur//
function previous(){
	compteur--;
	if (compteur < 0) {
		compteur = slides.length - 1;//retour derniere slide
	console.log("précedent")
	}
	showSlide(compteur);
	//selectDot(compteur);
}

// incrémenter +1 de compteur//
 function next() {
	compteur++;
	if (compteur >= slides.length) {
		compteur = 0;//retour 1er slide
	console.log("suivant")
	}
	showSlide(compteur);
	//selectDot(compteur);
	
}




