// add amoney

// step 01 add mooney button inshide the form
document.getElementById('donete-money')
.addEventListener('click', function(event) {
    event.preventDefault();
    //  step-02 gett add money tow donete
    const addMoneyInput = document.getElementById('add-money').value;
    console.log(addMoneyInput);
});