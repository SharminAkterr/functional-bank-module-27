// event handler by button click 
document.getElementById('btn-deposit').addEventListener('click', function () {

    // call input converted number function 
    const newInputs = getInputValueById('input-deposit');

    // validation 
    if (isNaN(newInputs)) {
        alert('please provide a number');
        return;
    }
    // call element converted number function for deposit
    const previousDeposit = getElementById('deposit-total');

    // add input number and element number
    const newDeposit = newInputs + previousDeposit;

    // set this in deposit inner text
    setInnerText('deposit-total', newDeposit);

    // call element converted number function for total
    const previousTotal = getElementById('balance-total');

    // add input number and total element number
    const currentTotal = newInputs + previousTotal;

    // set this in total inner text
    setInnerText('balance-total', currentTotal)
})