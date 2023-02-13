document.getElementById("btn-deposit").addEventListener("click", function () {
    const depositAmount = document.getElementById("deposit-Field").value;
    if (depositAmount != "number") {
        alert("Deposit Number is not a number")
    }
    else {
        document.getElementById("deposit-amount").innerText = parseInt(depositAmount);

        document.getElementById("Balance-amount").innerText = parseInt(document.getElementById('Balance-amount').innerText) + parseInt(depositAmount);
    }
    document.getElementById("deposit-Field").value = ""
})

document.getElementById("btn-withdraw").addEventListener("click", function () {
    const withdrawAmount = document.getElementById("withdraw-Field").value;
    if (withdrawAmount != "number") {
        alert("Deposit Number is not a number")
    }
    else {
        document.getElementById("withdraw-amount").innerText = parseInt(withdrawAmount);
        document.getElementById("Balance-amount").innerText = parseInt(document.getElementById('Balance-amount').innerText) - parseInt(withdrawAmount);
    }
    document.getElementById("withdraw-Field").value = ""

})