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

// string length checking function
function checkMaxLength(value) {
	return /^.{2,}$/.test(value); //return true if value.length == 2
}

// Valid email function test
function emailIsValid(value) {
	return /.+\@.+\..+/.test(value); //return true if value is a valid email
}

// Value is a number function test
function valueIsNumber(value) {
	if (isNaN(value) == true) {
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

//disable submit button
function submitDisable(element) {
	element.setAttribute("disabled", "");
	element.style.background = "grey";
	element.style.color = "silver";
}
submitDisable(submitButton);

// ┌──────────────────────────────────────────────────────────────────────────────┐
// │ FISRTNAME INPUT                                                              │
// └──────────────────────────────────────────────────────────────────────────────┘
firstName.addEventListener("input", function (event) {
	let value = event.target.value;
	if (checkMaxLength(value) == true) {
		firstName.parentElement.removeAttribute("data-error-visible");
	} else {
		firstName.parentElement.setAttribute("data-error-visible", true);
	}
});
