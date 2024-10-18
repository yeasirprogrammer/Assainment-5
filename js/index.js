
// step 01: Add money button inside the form 
document.getElementById('donete-money').addEventListener('click', function(event) {
    event.preventDefault();
    
    // step 02: Get the add money amount from input field
    const addMoneyInput = document.getElementById('add-money').value;
    const addMoneyNumber = parseFloat(addMoneyInput);  

    // Get the current donation balance
    const currentBalanceText = document.getElementById('donate-balance').innerText;
    const currentBalanceNumber = parseFloat(currentBalanceText);  

    // Get the main total balance
    const currentTotalBalanceText = document.getElementById('mainBalnce').innerText;
    const currentTotalBalanceNumber = parseFloat(currentTotalBalanceText);  
    
    
    // Check if input is a valid number and there's enough balance
    if (!isNaN(addMoneyNumber) & addMoneyNumber > 0) {
        if (currentTotalBalanceNumber >= addMoneyNumber) {
            // Calculate new donation balance
            const newDonationBalance = currentBalanceNumber + addMoneyNumber;

            // Calculate new total balance after donation
            const newTotalBalance = currentTotalBalanceNumber - addMoneyNumber;

            // Update the donation balance display
            document.getElementById('donate-balance').innerText = newDonationBalance + " BDT";
            
            // Update the total balance display
            document.getElementById('mainBalnce').innerText = newTotalBalance + " BDT";

            // Clear the input field after update
            document.getElementById('add-money').value = '';
        } else {
            alert('Insufficient balance for donation.');
        }
    } else {
        alert('Please enter a valid donation amount.');
    }
});


// donation Done modal js
document.getElementById('donete-money').addEventListener('click', function() {
    const inputField = document.getElementById('add-money');
    const donationAmount = inputField.value;
    const donationDisplay = document.getElementById('donate-balance');

    if (donationAmount && !isNaN(donationAmount) && donationAmount > 0) {
        donationDisplay.textContent = donationAmount + " BDT";
        document.getElementById('donation-amount').textContent = donationAmount; // Set donation amount in modal
        inputField.value = ""; // Clear input field after donation
        
        // Show success modal
        document.getElementById('success-modal').classList.remove('hidden');
    } else {
        alert("Please enter a valid donation amount.");
    }
});


