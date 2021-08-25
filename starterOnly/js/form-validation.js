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
const locationPastEvent = document.querySelectorAll("input[type=radio]");
const checkboxTermsOfUse = document.getElementById("checkboxTermsOfUse");
const checkboxNotifiedOfUpcomingEvents = document.getElementById(
	"checkboxNotifiedOfUpcomingEvents"
);
const submitButton = document.getElementById("submit-btn");
//ERROR MESSAGES
const firstNameErrorMessage = document.getElementById("firstNameErrorMessage");
const lastNameErrorMessage = document.getElementById("lastNameErrorMessage");
const emailErrorMessage = document.getElementById("emailErrorMessage");
const participartionErrorMessage = document.getElementById(
	"participartionErrorMessage"
);
const birthDateErrorMessage = document.getElementById("birthDateErrorMessage");
const cityOfParticipationErrorMessage = document.getElementById(
	"cityOfParticipationErrorMessage"
);
const termsOfUseErrorMessage = document.getElementById(
	"termsOfUseErrorMessage"
);
// ┌──────────────────────────────────────────────────────────────────────────────┐
// │ HIDE ERROR MESSAGE                                                           │
// └──────────────────────────────────────────────────────────────────────────────┘
firstNameErrorMessage.style.display = "none";
lastNameErrorMessage.style.display = "none";
emailErrorMessage.style.display = "none";
participartionErrorMessage.style.display = "none";
birthDateErrorMessage.style.display = "none";
cityOfParticipationErrorMessage.style.display = "none";
termsOfUseErrorMessage.style.display = "none";

// ┌──────────────────────────────────────────────────────────────────────────────┐
// │ DISABLE/ENABLE RADIO INPUTS                                                  │
// └──────────────────────────────────────────────────────────────────────────────┘
function radioDisable() {
	for (let radio of locationPastEvent) {
		radio.disabled = true;
		radio.checked = false;
	}
}
radioDisable();

function radioEnable() {
	for (let radio of locationPastEvent) {
		radio.disabled = false;
	}
}
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
	if (/[0-9]/.test(value)) {
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
	for (let name of inputType) {
		let value = event.currentTarget.getAttribute(name);
		if (name == "type") {
			activeInput = value;
			return value;
		}
	}
}

let idTextInput = ""; // variable to store the id of the input

//return id of the element
function showId(event) {
	let inputType = event.currentTarget.getAttributeNames();
	let value = event.target.value;
	for (let name of inputType) {
		let value = event.currentTarget.getAttribute(name);
		if (name == "id") {
			idTextInput = value;
			return value;
		}
	}
}

function errorDisplay(event) {
	let value = event.target.value;
	let element;
	switch (activeInput) {
		//ACTION FOR INPUT TYPE TEXT
		case "text":
			if (idTextInput == "firstName") {
				element = firstNameErrorMessage;
			} else if (idTextInput == "lastName") {
				element = lastNameErrorMessage;
			}

			lengthIsValid(value);
			if (lengthIsValid(value) == true) {
				this.parentElement.removeAttribute("data-error-visible");
				element.style.display = "none";
				if (element == firstNameErrorMessage) {
					inputFirstName = true;
				} else if (element == lastNameErrorMessage) {
					inputLastName = true;
				}
			} else {
				this.parentElement.setAttribute("data-error-visible", true);
				element.style.display = "block";
				if (element == firstNameErrorMessage) {
					inputFirstName = false;
				} else if (element == lastNameErrorMessage) {
					inputLastName = false;
				}
			}
			break;

		//ACTION FOR INPUT TYPE MAIL
		case "email":
			if (emailIsValid(value) == true) {
				this.parentElement.removeAttribute("data-error-visible");
				emailErrorMessage.style.display = "none";
				inputEmail = true;
			} else {
				this.parentElement.setAttribute("data-error-visible", true);
				emailErrorMessage.style.display = "block";
				inputEmail = false;
			}
			break;

		//ACTION FOR INPUT TYPE DATE
		case "date":
			if (dateIsNotEmpty(value) == true) {
				this.parentElement.removeAttribute("data-error-visible");
				birthDateErrorMessage.style.display = "none";
				inputBirthDate = true;
			} else {
				this.parentElement.setAttribute("data-error-visible", true);
				birthDateErrorMessage.style.display = "block";
				inputBirthDate = false;
			}
			break;

		//ACTION FOR INPUT TYPE NUMBER
		case "number":
			if (valueIsNumber(value) == true) {
				this.parentElement.removeAttribute("data-error-visible");
				participartionErrorMessage.style.display = "none";
				inputNumber = true;
				if (quantityOfParticipations.value > 0) {
					cityOfParticipationErrorMessage.style.display = "block";
					radioEnable();
				} else {
					cityOfParticipationErrorMessage.style.display = "none";
					radioDisable();
				}
			} else {
				this.parentElement.setAttribute("data-error-visible", true);
				participartionErrorMessage.style.display = "block";
				inputNumber = false;
			}
			break;

		// ACTION FOR INPUT TYPE CHECKBOX
		case "checkbox":
			if (termsOfUseIsChecked() == true) {
				termsOfUseErrorMessage.style.display = "none";
				inputCheckBox = true;
			} else {
				termsOfUseErrorMessage.style.display = "block";
				inputCheckBox = false;
			}
			break;

		default:
			alert("Une erreur est survenue.");
			break;
	}
}
// ┌──────────────────────────────────────────────────────────────────────────────┐
// │ INPUT VALIDATION STATUS                                                      │
// └──────────────────────────────────────────────────────────────────────────────┘
let inputFirstName = false;
let inputLastName = false;
let inputEmail = false;
let inputBirthDate = false;
let inputNumber = false;
let inputCheckBox = true;

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

// ┌──────────────────────────────────────────────────────────────────────────────┐
// │ CONFIRMATION SUBMIT                                                          │
// └──────────────────────────────────────────────────────────────────────────────┘
const formBody = document.querySelector("form");
const modal = document.getElementById("modal");

submitButton.addEventListener("click", (e) => {
	if (
		inputFirstName == true &&
		inputLastName == true &&
		inputEmail == true &&
		inputBirthDate == true &&
		inputNumber == true &&
		inputCheckBox == true
	) {
		e.preventDefault();
		formBody.style.display = "none";
		const validationMessage = document.createElement("p");
		validationMessage.innerHTML = "Merci pour votre inscription";
		modal.appendChild(validationMessage);
	}
});
