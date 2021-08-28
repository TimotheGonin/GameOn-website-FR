function editNav() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
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
	if (modalIsActive == false) {
		modalbg.style.display = "block";
		modalIsActive = true;
		console.log(modalIsActive);
	} else if (modalIsActive == true) {
		modalbg.style.display = "none";
		modalIsActive = false;
	}
}
