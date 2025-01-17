function editNav() {
	var x = document.getElementById("myTopnav");
	let navButton = document.getElementById("navBarButton");
	if (x.className === "topnav") {
		x.className += " responsive";
		navButton.style.color = "white";
	} else {
		x.className = "topnav";
		navButton.style.color = "red";
	}
}

// DOM Elements
const navBarButton = document.getElementById("navBarButton");
const modalbg = document.querySelector(".bground"); // modal
const modalBtn = document.querySelectorAll(".modal-btn"); //button active modal
const modalBtnClose = document.querySelectorAll(".bground .close"); //button close modal
// const formData = document.querySelectorAll(".formData"); // form into modal

//launch navbar event
navBarButton.addEventListener("click", editNav);

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalBtnClose.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
let modalIsActive = false; // modal status init

function launchModal() {
	if (!modalIsActive) {
		modalbg.style.display = "block";
		modalIsActive = true;
	} else if (modalIsActive) {
		modalbg.style.display = "none";
		modalIsActive = false;
	}
}
