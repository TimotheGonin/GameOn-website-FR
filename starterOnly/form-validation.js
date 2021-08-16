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
//ERROR MESSAGES
const firstNameErrorMessage = document.getElementById("firstNameErrorMessage");
const lastNameErrorMessage = document.getElementById("lastNameErrorMessage");
const emailErrorMessage = document.getElementById("emailErrorMessage");
const birthDateErrorMessage = document.getElementById("birthDateErrorMessage");
const cityOfParticipationErrorMessage = document.getElementById(
	"cityOfParticipationErrorMessage"
);
const termsOfUseErrorMessage = document.getElementById(
	"termsOfUseErrorMessage"
);

//error message hidden
firstNameErrorMessage.style.display = "none";
lastNameErrorMessage.style.display = "none";
emailErrorMessage.style.display = "none";
birthDateErrorMessage.style.display = "none";
cityOfParticipationErrorMessage.style.display = "none";
termsOfUseErrorMessage.style.display = "none";

// ┌──────────────────────────────────────────────────────────────────────────────┐
// │ CHECK FUNCTIONS                                                              │
// └──────────────────────────────────────────────────────────────────────────────┘
// string length checking function
function lengthIsValid(value) {
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

//check date is not empty
function dateIsNotEmpty(value) {
	if (value == "") {
		return false;
	} else {
		return true;
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

// ┌──────────────────────────────────────────────────────────────────────────────┐
// │ INPUT FUNCTIONS                                                              │
// └──────────────────────────────────────────────────────────────────────────────┘

let activeInput = ""; // variable to store the type of active input

// return attribute of element
function showAttribute(event) {
	let inputType = event.currentTarget.getAttributeNames();
	let value = event.target.value;
	// console.log(inputType, value);
	for (let name of inputType) {
		let value = event.currentTarget.getAttribute(name);
		// console.log(name, value);
		if (name == "type") {
			// console.log(value);
			activeInput = value;
			console.log(activeInput);
			// test();
			return value;
		}
	}
}

let idTextInput = "";
function showId(event) {
	let inputType = event.currentTarget.getAttributeNames();
	let value = event.target.value;
	// console.log(inputType, value);
	for (let name of inputType) {
		let value = event.currentTarget.getAttribute(name);
		// console.log(name, value);
		if (name == "id") {
			// console.log(value);
			idTextInput = value;
			console.log(idTextInput);
			// test();
			// return value;
		}
	}
}

function errorDisplay(event) {
	let value = event.target.value;
	switch (activeInput) {
		//ACTION FOR INPUT TYPE TEXT
		case "text":
			lengthIsValid(value);
			if (lengthIsValid(value) == true) {
				this.parentElement.removeAttribute("data-error-visible");
				firstNameErrorMessage.style.display = "none";
			} else {
				this.parentElement.setAttribute("data-error-visible", true);
				firstNameErrorMessage.style.display = "block";
			}
			break;

		//ACTION FOR INPUT TYPE MAIL
		case "email":
			if (emailIsValid(value) == true) {
				this.parentElement.removeAttribute("data-error-visible");
				emailErrorMessage.style.display = "none";
			} else {
				this.parentElement.setAttribute("data-error-visible", true);
				emailErrorMessage.style.display = "block";
			}
			break;

		//ACTION FOR INPUT TYPE DATE
		case "date":
			if (dateIsNotEmpty(value) == true) {
				this.parentElement.removeAttribute("data-error-visible");
				birthDateErrorMessage.style.display = "none";
			} else {
				this.parentElement.removeAttribute("data-error-visible");
				birthDateErrorMessage.style.display = "block";
			}
			break;

		// ACTION FOR INPUT TYPE CHECKBOX
		case "checkbox":
			if (termsOfUseIsChecked() == true) {
				termsOfUseErrorMessage.style.display = "none";
			} else {
				termsOfUseErrorMessage.style.display = "block";
			}
			break;

		default:
			break;
	}
}

// ┌──────────────────────────────────────────────────────────────────────────────┐
// │ BUTTON FUNCTIONS                                                             │
// └──────────────────────────────────────────────────────────────────────────────┘
//disable submit button
function submitDisable(element) {
	element.setAttribute("disabled", "");
	element.classList.add("btn--disabled");
}
submitDisable(submitButton);

function submitEnable(element) {
	element.removeAttribute("disabled", "");
	element.classList.remove("btn--disabled");
}
// submitEnable(submitButton);

// ┌──────────────────────────────────────────────────────────────────────────────┐
// │ EVENT - FOCUS                                                                │
// └──────────────────────────────────────────────────────────────────────────────┘

firstName.addEventListener("focus", showAttribute);
lastName.addEventListener("focus", showAttribute);
firstName.addEventListener("focus", showId);
lastName.addEventListener("focus", showId);
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
// │ EVENTS - INPUT / CLICK                                                       │
// └──────────────────────────────────────────────────────────────────────────────┘

firstName.addEventListener("input", errorDisplay);
lastName.addEventListener("input", errorDisplay);
email.addEventListener("input", errorDisplay);
birthDate.addEventListener("input", errorDisplay);
checkboxTermsOfUse.addEventListener("click", errorDisplay);
quantityOfParticipations.addEventListener("input", errorDisplay);
