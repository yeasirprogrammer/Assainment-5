// Reusable function for donation
function handleDonation(donationInputId, donationBalanceId, totalBalanceId) {
    const donateButton = document.querySelector(donationInputId);
    const donateBalanceDisplay = document.querySelector(donationBalanceId);
    const mainBalanceDisplay = document.querySelector(totalBalanceId);

    donateButton.addEventListener('click', function () {
        const donateAmountInput = donateButton.previousElementSibling.value; // Get input value
        const donateAmount = parseFloat(donateAmountInput);
        const currentDonationBalance = parseFloat(donateBalanceDisplay.innerText.replace(' BDT', ''));
        const mainBalance = parseFloat(mainBalanceDisplay.innerText.replace('BDT', ''));

        // Validation
        if (isNaN(donateAmount) || donateAmount <= 0) {
            alert("Please enter a valid donation amount.");
            return;
        }

        if (donateAmount > mainBalance) {
            alert("You don't have enough balance to donate.");
            return;
        }

        // Update balances
        donateBalanceDisplay.innerText = (currentDonationBalance + donateAmount) + " BDT";
        mainBalanceDisplay.innerText = (mainBalance - donateAmount) + "BDT";
    });
}

// Apply the function to each donation card
handleDonation('#donete-money', '#donate-balance', '#mainBalnce'); // For first card
handleDonation('#donete-money-2', '#donate-balance-2', '#mainBalnce'); // For second card
handleDonation('#donete-money-3', '#donate-balance-3', '#mainBalnce'); // For third card
