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

// declaration variables + recuperation éléments 
const arrow = document.getElementsByClassName("arrow")
console.log(arrow)
const slide = document.getElementsByClassName("banner-img")
console.log("banner-img")
const tagLine = document.querySelector("#banner p")
console.log("tagLine")

//slide initiale visible au chargement de la page = slide1 en position 0
slide[0].src = "./assets/images/slideshow/" + slides[compteur].image;
let position = compteur

// Affichage slide image + tagline consulter
function showSlide(){
	slide[position].src= "./assets/images/slideshow/" + slides[compteur].image;
	tagLine.innerHTML = slides[compteur].tagLine;	
}


//ajout evetlisener sur fléches + instruction a éxecuter au clic//

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
		compteur = slides.length - 1;//compteur = 3 => retour dernière slide en cas de dépacement borne min tbl
	}
	showSlide();
	mouveDot();
	console.log(compteur)//pr verifier sur quelle slide on atterrit lors du clic
}

// incrémenter +1 de compteur//
 function next() {
	compteur++;
	if (compteur >= slides.length) {
		compteur = 0;//retour 1er slide en cas de dépacement borne max tbl
	}
	showSlide();
	mouveDot();
	console.log(compteur)//pr verifier sur quelle slide on atterrit lors du clic
}


//DOT

// Déclare et récupere variable dots et dot
const dots = document.querySelector(".dots");
console.log(".dots")
const dot = document.querySelector(".dot");
console.log(".dot")

// Sélection dot selon position du slide consulter

let dotSelected = selectDot();
console.log(dotSelected)

//mise à jour position dotSelected
function selectDot () {
	return document.querySelector(`.dots .dot:nth-child(${compteur +1})`);
	//sélecteur nth-child (pseudo-classe) pr cibler chaque élément qui est n-ième enfant de dots.
	//interpolation ajoute +1 à la position du dotselected 
}
 
// Changement de dot lors du changement de slide
function mouveDot() {
	dotSelected.classList.remove("dot_selected");//enlever class dotselected sur encien dot
	dotSelected = selectDot(); 
	dotSelected.classList.add("dot_selected");//afficher class dotSelected sur new dot  
}



