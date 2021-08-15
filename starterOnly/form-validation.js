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
			} else {
				this.parentElement.setAttribute("data-error-visible", true);
			}
			break;

		//ACTION FOR INPUT TYPE MAIL
		case "email":
			if (emailIsValid(value) == true) {
				this.parentElement.removeAttribute("data-error-visible");
			} else {
				this.parentElement.setAttribute("data-error-visible", true);
			}
			break;

		//ACTION FOR INPUT TYPE DATE
		case "date":
			console.log("C'est une date");
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
email.addEventListener("input", errorDisplay);
