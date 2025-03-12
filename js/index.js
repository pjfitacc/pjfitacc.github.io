window.addEventListener("pageshow", (event) => {
    if (event.persisted) {
        hideSpinnerAndMessage();
    }
});

document.addEventListener("DOMContentLoaded", function () {
    let baseUrl;

    if (window.location.origin === "null" || window.location.protocol === "file:") {
        // Extract base path from file URL
        baseUrl = window.location.href.split("/").slice(0, 3).join("/");
    } else {
        // Use origin for web URLs
        baseUrl = window.location.origin;
    }


});

function hideSpinnerAndMessage() {
    document.getElementById('donation-page').style.display = "block";
    document.getElementById('loading-element').style.display = "none";
}

const form = document.getElementById('weborder');

form.addEventListener('submit', (e) => {
  e.preventDefault();
});

function submitDonationForm() {
    let fieldsPassed = checkMandatoryFields();

    if (fieldsPassed) {
        showLoadingElement()
    } else {
        return fieldsPassed
    }
}
function checkMandatoryFields() {
//     checkbox
    let checkbox = document.getElementById("supportCheckbox");
    if (!checkbox.checked) {
        alert("Please agree to the terms, conditions, and policies.");
        return false;
    }
    return true;
}
function showLoadingElement() {
  document.getElementById('donation-page').style.display = "none";
  document.getElementById('loading-element').style.display = "flex";
}