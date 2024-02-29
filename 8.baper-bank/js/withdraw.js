document.getElementById('btn-withdraw').addEventListener('click', function(){
    const depositField = document.getElementById('withdraw-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString)
    depositField.value=''
    if (isNaN(newDepositAmount)){
        alert('Please Provide a valid number')
        return
    }
    const depositTotalElement = document.getElementById('Withdraw-total')
    const previousDepositTotalString = depositTotalElement.innerText
    const previousDepositTotal = parseFloat(previousDepositTotalString)
    const currentDepositTotal = previousDepositTotal+newDepositAmount
    depositTotalElement.innerText = currentDepositTotal

    const balanceTotalElement = document.getElementById('balance-total')
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString)
    
    if(newWithdrawAmount > previousBalanceTotal) {
        alert('Baper bank a eto tk nai')
        return;
    }
    const currentBalanceTotal = previousBalanceTotal - newDepositAmount
    balanceTotalElement.innerText = currentBalanceTotal;
    
})