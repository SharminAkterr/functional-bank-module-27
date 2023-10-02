// event handler by button click
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // call input converted number function
    const newInputsForWithdraw = getInputValueById('input-withdraw');

    // validation 
    if (isNaN(newInputsForWithdraw)) {
        alert('please provide a valid number');
        return;
    }

    // call element converted number function for withdraw 
    const previousWithdraw = getElementById('withdraw-total')

    // call element converted number function for total
    const previousTotal = getElementById('balance-total');

    // validation 
    if (newInputsForWithdraw > previousTotal) {
        alert('you are demanding more than you have');
        return;
    }
    // add input number and element number
    const newWithdraw = newInputsForWithdraw + previousWithdraw;

    // set this in withdraw inner text
    setInnerText('withdraw-total', newWithdraw);

    // destruct input number from total element number
    const newTotal = previousTotal - newInputsForWithdraw;

    // set this in total inner text
    setInnerText('balance-total', newTotal)
})