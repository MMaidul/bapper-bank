//getId;

function getId(id) {
    return document.getElementById(id);
}


//getDeposit&WithdrawCalc;
const depositTotal = getId('deposit');
const WithdrawTotal = getId('withdraw');
const blanceTotal = getId('blance');



//getDeposit&WithdrawAmount;
const depositInput = getId('deposit-input');
const depositBtn = getId('deposit-btn');
const withdrawInput = getId('withdraw-input');
const withdrawBtn = getId('withdraw-btn');


depositBtn.addEventListener('click', e => {

    const newDepositTotal = parseFloat(depositTotal.innerText) + parseFloat(depositInput.value);
    console.log(newDepositTotal);

    depositTotal.innerText = newDepositTotal;
    depositInput.value = '';


})