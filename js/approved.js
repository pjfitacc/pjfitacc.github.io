window.onload = function() {
    const currentURL = window.location.href;
    var donationParams = getDonationParams(currentURL);

    if (donationParams.amount && donationParams.beneficiary) {
        showCustomThankYouMessage(donationParams.amount, donationParams.beneficiary);
    }
  };


function getDonationParams(url_string) {
    var url = new URL(url_string);
    var amount = url.searchParams.get("m");
    var beneficiary = url.searchParams.get("b");

    return { amount: amount, beneficiary: beneficiary };
}

function showCustomThankYouMessage(amount, beneficiary) {
    var thankYouMessage = document.getElementById("thank-you-message");
    pjfDecides = "No preference. Let PJF decide for me.";

    beneficiaryMessage = beneficiary === pjfDecides ? "" : " to " + beneficiary;

    thankYouMessage.innerHTML = "Your gift of " + amount + " USD" + beneficiaryMessage + " is much appreciated. Kind patrons like you help the Philippine Jesuits continue our ministry.";
}