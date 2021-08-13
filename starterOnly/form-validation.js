// ┌──────────────────────────────────────────────────────────────────────────────┐
// │ DOM Elements                                                                 │
// └──────────────────────────────────────────────────────────────────────────────┘
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

// ┌──────────────────────────────────────────────────────────────────────────────┐
// │ COMMON ERROR DISPLAY FUNCTION                                                │
// └──────────────────────────────────────────────────────────────────────────────┘

// displayed if value.length < 2
function errorDisplay(event) {
	let value = event.target.value;
	if (checkMinLength(value) == true) {
		this.parentElement.removeAttribute("data-error-visible");
	} else {
		this.parentElement.setAttribute("data-error-visible", true);
	}
}

// return attribute of element
let activeInput = ""; // variable to store the type of active input

function showAttribute(event) {
	let attributeNames = event.currentTarget.getAttributeNames();
	for (let name of attributeNames) {
		let value = event.currentTarget.getAttribute(name);
		// console.log(name, value);
		if (name == "type") {
			console.log(value);
			// return value;
			activeInput = value;
			console.log(activeInput);
			test();
		}
	}
}

function resetActiveInput() {
	activeInput = "";
}

// ┌──────────────────────────────────────────────────────────────────────────────┐
// │ //test attribute and call function                                           │
// └──────────────────────────────────────────────────────────────────────────────┘
function test() {
	switch (activeInput) {
		case "text":
			// checkMinLength(element);
			console.log("C'est un texte");
			break;

		case "email":
			// emailIsValid(element);
			console.log("C'est un email");
			break;

		case "date":
			console.log("C'est une date");
			break;

		case "number":
			console.log("C'est un nombre");
			break;

		case "radio":
			// countryCheck(element);
			console.log("C'est un radio");
			break;

		case "checkbox":
			// termsOfUseIsChecked(element);
			console.log("C'est une checkbox");
			break;

		default:
			break;
	}
}

// string length checking function
function checkMinLength(value) {
	if (/^.{2,}$/.test(value)) {
		return true;
	} else {
		return false;
	}
}

// Valid email function test
function emailIsValid(value) {
	if (/.+\@.+\..+/.test(value)) {
		return true;
	} else {
		return false;
	}
}

// Value is a number function test
function valueIsNumber(value) {
	if (!isNaN(value)) {
		return true;
	} else {
		return false;
	}
}

// country check function loop
function countryCheck(coutryArray) {
	for (country of coutryArray) {
		if (country.checked == true) {
			return true;
		} else {
			return false;
		}
	}
}
// countryCheck(locationPastEvent);

//Terms of use accept checked ?
function termsOfUseIsChecked() {
	if (checkboxTermsOfUse.checked == true) {
		return true;
	} else {
		return false;
	}
}

//disable submit button
function submitDisable(element) {
	element.setAttribute("disabled", "");
	element.style.background = "grey";
	element.style.color = "silver";
}
submitDisable(submitButton);

// ┌──────────────────────────────────────────────────────────────────────────────┐
// │ EVENT - FOCUS                                                                │
// └──────────────────────────────────────────────────────────────────────────────┘

firstName.addEventListener("focus", showAttribute);
lastName.addEventListener("focus", showAttribute);
email.addEventListener("focus", showAttribute);
birthDate.addEventListener("focus", showAttribute);
quantityOfParticipations.addEventListener("focus", showAttribute);

//OPTIONAL
locationPastEvent.forEach((btn) =>
	btn.addEventListener("click", showAttribute)
);

checkboxTermsOfUse.addEventListener("focus", showAttribute);
checkboxNotifiedOfUpcomingEvents.addEventListener("focus", showAttribute);

// ┌──────────────────────────────────────────────────────────────────────────────┐
// │ EVENTS - CLICK                                                               │
// └──────────────────────────────────────────────────────────────────────────────┘

firstName.addEventListener("input", errorDisplay);
lastName.addEventListener("input", errorDisplay);
