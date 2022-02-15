document.getElementById('deposit-btn').addEventListener("click", function() {


    const depositInput = document.getElementById("deposit-input");
    const depositValue = depositInput.value;

    const depositDisplay = document.getElementById("deposit");
    depositDisplay.innerText = Number(depositDisplay.innerText) + Number(depositValue);

    const displayBlance = document.getElementById("blance");
    displayBlance.innerText = Number(displayBlance.innerText) + Number(depositDisplay.innerText);

    depositInput.value = "";

});


document.getElementById("withdraw-btn").addEventListener('click', function() {

    const withdrawInput = document.getElementById("withdraw-input");
    const withdrawValue = withdrawInput.value;

    const withdrawDisplay = document.getElementById("withdraw");
    withdrawDisplay.innerText = Number(withdrawDisplay.innerText) + Number(withdrawValue);

    const displayBlance = document.getElementById("blance");
    displayBlance.innerText = Number(displayBlance.innerText) - Number(withdrawDisplay.innerText);

    withdrawInput.value = "";

});