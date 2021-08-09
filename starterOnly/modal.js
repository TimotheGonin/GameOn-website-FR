function editNav() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}

// DOM Elements
const modalbg = document.querySelector(".bground"); // modal
const modalBtn = document.querySelectorAll(".modal-btn"); //button active modal
const modalBtnClose = document.querySelectorAll(".bground .close"); //button close modal
const formData = document.querySelectorAll(".formData"); // form into modal

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

// string length checking function
function checkMaxLength(value) {
	return /^.{2,}$/.test(value); //return true if value.length == 2
}

//input Elements
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const birthDate = document.getElementById("birthDate");
const quantityOfParticipations = document.getElementById(
	"quantityOfParticipations"
);
const locationPastEvent = document.querySelectorAll(".checkbox-input");
const checkboxTermsOfUse = document.getElementById("checkboxTermsOfUse");
const checkboxNotifiedOfUpcomingEvents = document.getElementById(
	"checkboxNotifiedOfUpcomingEvents"
);
const submitButton = document.getElementById("submit-btn");

// country check function loop
function countryCheck(coutryArray) {
	for (country of coutryArray) {
		if (country.checked == true) {
			console.log(country.value);
		}
	}
}

// countryCheck(locationPastEvent);
