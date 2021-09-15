// ┌──────────────────────────────────────────────────────────────────────────────┐
// │ DOM Elements                                                                 │
// └──────────────────────────────────────────────────────────────────────────────┘

// REGISTRATION FORM / VALIDATION CONFIRMATION MESSAGE
const registrationForm = document.getElementById("registrationForm");
const registrationConfirm = document.getElementById("registrationConfirm");

// INPUTS
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const birthDate = document.getElementById("birthDate");
const quantityOfParticipations = document.getElementById(
	"quantityOfParticipations"
);
const locationPastEvent = document.querySelectorAll("input[type=radio]");
const checkboxTermsOfUse = document.getElementById("checkboxTermsOfUse");
const submitButton = document.getElementById("submit-btn");
const closeConfirmation = document.getElementById("closeConfirmation");

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
function removeErrorMessages() {
	firstNameErrorMessage.style.display = "none";
	lastNameErrorMessage.style.display = "none";
	emailErrorMessage.style.display = "none";
	participartionErrorMessage.style.display = "none";
	birthDateErrorMessage.style.display = "none";
	cityOfParticipationErrorMessage.style.display = "none";
	termsOfUseErrorMessage.style.display = "none";
}

// ┌──────────────────────────────────────────────────────────────────────────────┐
// │ DISABLE/ENABLE RADIO INPUTS                                                  │
// └──────────────────────────────────────────────────────────────────────────────┘
function radioDisable() {
	for (let radio of locationPastEvent) {
		radio.disabled = true;
		radio.checked = false;
	}
}

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

// Value is a valid date
function birthDateIsValid(value) {
	if (value == "") {
		return false;
	} else {
		//DATES INIT
		let birthDate = new Date(value);
		let nowDate = new Date();
		let nowYear = nowDate.getFullYear(); //YEAR OF NOW
		let birthYear = birthDate.getFullYear(); // YEAR OF BIRTH
		let minimumYear = nowYear - 12;// MINIMUM YEAR OF BIRTH
		let maximumYear = nowYear - 100;// MAXIMUM YEAR OF BIRTH

		if (birthYear > minimumYear || birthYear < maximumYear) {
			return false;
		} else {
			return true;
		}
	}
}
// country check function loop
function countryCheck(coutryArray) {
	let counter = 0;
	for (let country of coutryArray) {
		if (country.checked) {
			counter++;
		}
	}
	if (counter !== 0) {
		return true;
	} else {
		return false;
	}
}

//Terms of use checked ?
function termsOfUseIsChecked() {
	if (checkboxTermsOfUse.checked === true) {
		return true;
	} else {
		return false;
	}
}

// ┌──────────────────────────────────────────────────────────────────────────────┐
// │ INPUT FUNCTIONS                                                              │
// └──────────────────────────────────────────────────────────────────────────────┘

// return attribute of element
function showAttribute(event) {
	let attributeList = event.target.getAttributeNames();
	
	for (let attributeName of attributeList) {
		let attributeNameValue = event.target.getAttribute(attributeName);
		
		if (attributeName === "type") {
			activeInput = attributeNameValue;
			return activeInput;
		}
	}
}

//return id of the element
function showId(event) {
	let attributeList = event.target.getAttributeNames();
	
	for (let attributeName of attributeList) {
		let attributeNameValue = event.target.getAttribute(attributeName);
		
		if (attributeName === "id") {
			idTextInput = attributeNameValue;
			return idTextInput;
		}
	}
}

function errorDisplay(event) {
	let value = event.target.value;
	
	switch (activeInput) {
		//ACTION FOR INPUT TYPE TEXT
		case "text":
			let element;
			if (idTextInput === "firstName") {
				element = firstNameErrorMessage;
			} else if (idTextInput === "lastName") {
				element = lastNameErrorMessage;
			}

			lengthIsValid(value);
			if (lengthIsValid(value)) {
				this.parentElement.removeAttribute("data-error-visible");
				element.style.display = "none";
			} else {
				this.parentElement.setAttribute("data-error-visible", true);
				element.style.display = "block";
			}
			break;

		//ACTION FOR INPUT TYPE MAIL
		case "email":
			if (emailIsValid(value)) {
				this.parentElement.removeAttribute("data-error-visible");
				emailErrorMessage.style.display = "none";
			} else {
				this.parentElement.setAttribute("data-error-visible", true);
				emailErrorMessage.style.display = "block";
			}
			break;

		//ACTION FOR INPUT TYPE DATE
		case "date":
			if (birthDateIsValid(value)) {
				this.parentElement.removeAttribute("data-error-visible");
				birthDateErrorMessage.style.display = "none";
			} else {
				this.parentElement.setAttribute("data-error-visible", true);
				birthDateErrorMessage.style.display = "block";
			}
			break;

		//ACTION FOR INPUT TYPE NUMBER
		case "number":
			if (valueIsNumber(value)) {
				radioDisable();
				this.parentElement.removeAttribute("data-error-visible");
				participartionErrorMessage.style.display = "none";
				
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
			}
			break;

		//ACTION FOR INPUT TYPE RADIO TYPE
		case "radio":
			if (countryCheck(locationPastEvent)) {
				cityOfParticipationErrorMessage.style.display = "none";
			} else {
				cityOfParticipationErrorMessage.style.display = "block";
			}
			break;

		// ACTION FOR INPUT TYPE CHECKBOX
		case "checkbox":
			if (termsOfUseIsChecked()) {
				termsOfUseErrorMessage.style.display = "none";
			} else {
				termsOfUseErrorMessage.style.display = "block";
			}
			break;

		default:
			alert("Une erreur est survenue.");
			break;
	}
}
// ┌──────────────────────────────────────────────────────────────────────────────┐
// │ REINIT MODAL FUNCTION                                                        │
// └──────────────────────────────────────────────────────────────────────────────┘
function reinitModal() {
	//switch display
	registrationForm.style.display = "block";
	registrationConfirm.style.display = "none";

	//remove values
	firstName.value = "";
	lastName.value = "";
	email.value = "";
	birthDate.value = "";
	quantityOfParticipations.value = "";
	checkboxTermsOfUse.checked = false;

	removeErrorMessages();
	radioDisable();
}

// ┌──────────────────────────────────────────────────────────────────────────────┐
// │ EVENT - GET ATTIRBUTE / ID                                                   │
// └──────────────────────────────────────────────────────────────────────────────┘
firstName.addEventListener("input", showAttribute);
firstName.addEventListener("input", showId);
lastName.addEventListener("input", showAttribute);
lastName.addEventListener("input", showId);
email.addEventListener("input", showAttribute);
birthDate.addEventListener("input", showAttribute);
quantityOfParticipations.addEventListener("input", showAttribute);
locationPastEvent.forEach((btn) =>
	btn.addEventListener("click", showAttribute)
);
checkboxTermsOfUse.addEventListener("click", showAttribute);

// ┌──────────────────────────────────────────────────────────────────────────────┐
// │ EVENTS - LAUNCH ERROR MESSAGE                                                │
// └──────────────────────────────────────────────────────────────────────────────┘
firstName.addEventListener("input", errorDisplay);
lastName.addEventListener("input", errorDisplay);
email.addEventListener("input", errorDisplay);
birthDate.addEventListener("input", errorDisplay);
quantityOfParticipations.addEventListener("input", errorDisplay);
locationPastEvent.forEach((btn) => btn.addEventListener("click", errorDisplay));
checkboxTermsOfUse.addEventListener("click", errorDisplay);

// ┌──────────────────────────────────────────────────────────────────────────────┐
// │ EVENT - MODAL REINITIALISATION                                               │
// └──────────────────────────────────────────────────────────────────────────────┘
closeConfirmation.addEventListener("click", reinitModal);

// ┌──────────────────────────────────────────────────────────────────────────────┐
// │ CONFIRMATION SUBMIT                                                          │
// └──────────────────────────────────────────────────────────────────────────────┘

submitButton.addEventListener("click", (e) => {
	e.preventDefault();
	let formIsValid = true;

	if (!lengthIsValid(firstName.value)) {
		firstName.parentElement.setAttribute("data-error-visible", true);
		firstNameErrorMessage.style.display = "block";
		formIsValid = false;
	}

	if (!lengthIsValid(lastName.value)) {
		lastName.parentElement.setAttribute("data-error-visible", true);
		lastNameErrorMessage.style.display = "block";
		formIsValid = false;
	}

	if (!emailIsValid(email.value)) {
		email.parentElement.setAttribute("data-error-visible", true);
		emailErrorMessage.style.display = "block";
		formIsValid = false;
	}

	if (!birthDateIsValid(birthDate.value)) {
		birthDate.parentElement.setAttribute("data-error-visible", true);
		birthDateErrorMessage.style.display = "block";
		formIsValid = false;
	}

	if (!valueIsNumber(quantityOfParticipations.value)) {
		quantityOfParticipations.parentElement.setAttribute("data-error-visible", true);
		participartionErrorMessage.style.display = "block";
		formIsValid = false;
	}

	if (quantityOfParticipations.value > 0) {
		if(!countryCheck(locationPastEvent)){
			cityOfParticipationErrorMessage.style.display = "block";
			formIsValid = false;
		}
	}
	if (!termsOfUseIsChecked()) {
		checkboxTermsOfUse.parentElement.setAttribute("data-error-visible", true);
		termsOfUseErrorMessage.style.display = "block";
		formIsValid = false;
	}

	if (formIsValid) {
		//switch display
		registrationForm.style.display = "none";
		registrationConfirm.style.display = "flex";
	}
});



// ┌──────────────────────────────────────────────────────────────────────────────┐
// │ ON LOAD                                         							  │
// └──────────────────────────────────────────────────────────────────────────────┘
reinitModal();

let activeInput; // variable to store the type of active input
let idTextInput; // variable to store the id of the input[type=text]