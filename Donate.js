// function for Noakhali starts here

document.getElementById('add-donate').addEventListener('click', function(event){
    event.preventDefault();
    // console.log('added the money')
    const addMoney = getInputFieldById('input-add-money');
    const myBalance = getTotalBalance('my-balance');
    // console.log(addMoney, myBalance);
    if (typeof addMoney === "number" && addMoney > 0 && myBalance >= addMoney){
        
        const myTotalBalance = (myBalance - addMoney).toFixed(2) ;
        document.getElementById('my-balance').innerText = myTotalBalance ;
        const balance = getTextFieldById('account-balance');
        // console.log(balance, addMoney);
        const newBalance = balance + addMoney;
        document.getElementById('account-balance').innerText = newBalance;

        // add to history
        const history = document.createElement('history');
        history.innerHTML = `
            <div class=" p-8 border rounded-2xl mb-4">
                <h3 class="text-xl font-bold mb-4">${addMoney} Taka is Donate for Flood at Noakhali, Bangladesh</h3>
                <p class="text-[#111111b3]">Date: ${Date()}</p>
            </div>
        `;
        // console.log(history);

        // show be a common function
        document.getElementById('history-containeer').appendChild(history);

        my_modal_1.showModal();

        
    }
    else{
        alert("Failed to add money");
    }
})
// function for Noakhali ends here

// function for Feni Start here
document.getElementById('add-Feni').addEventListener('click', function(event){
    event.preventDefault();
    // console.log('added the money')
    const addFeniMoney = getInputFieldById('input-Feni-money');
    const myFeniBalance = getTotalBalance('my-balance');
    // console.log(addMoney, myBalance);
    if (typeof addFeniMoney === "number" && addFeniMoney > 0 && myFeniBalance >= addFeniMoney){
        
        const myTotalBalance = (myFeniBalance - addFeniMoney).toFixed(2) ;
        document.getElementById('my-balance').innerText = myTotalBalance ;
        const balance = getTextFieldById('account-Feni-balance');
        // console.log(balance, addFeniMoney);
        const newBalance = balance + addFeniMoney;
        document.getElementById('account-Feni-balance').innerText = newBalance;

        // add to history
        const history = document.createElement('history');
        history.innerHTML = `
            <div class=" p-8 border rounded-2xl mb-4">
                <h3 class="text-xl font-bold mb-4">${addFeniMoney} Donate for Flood Relief in Feni,Bangladesh</h3>
                <p class="text-[#111111b3]">Date: ${Date()}</p>
            </div>
        `;
        // console.log(history);

        // show be a common function
        document.getElementById('history-containeer').appendChild(history);

        my_modal_1.showModal();

    }
    else{
        alert("Failed to add money");
    }
})
// function for Feni ends here

// function for Quota Start here
document.getElementById('add-Quota').addEventListener('click', function(event){
    event.preventDefault();
    // console.log('added the money')
    const addQuotaMoney = getInputFieldById('input-Quota-money');
    const myQuotaBalance = getTotalBalance('my-balance');
    // console.log(addMoney, myBalance);
    if (typeof addQuotaMoney === "number" && addQuotaMoney > 0 && myQuotaBalance >= addQuotaMoney){
        
        const myTotalBalance = (myQuotaBalance - addQuotaMoney).toFixed(2) ;
        document.getElementById('my-balance').innerText = myTotalBalance ;
        const balance = getTextFieldById('account-Quota-balance');
        // console.log(balance, addQuotaMoney);
        const newBalance = balance + addQuotaMoney;
        document.getElementById('account-Quota-balance').innerText = newBalance;

        // add to history
        const history = document.createElement('history');
        history.innerHTML = `
            <div class=" p-8 border rounded-2xl mb-4">
                <h3 class="text-xl font-bold mb-4">${addQuotaMoney} Aid for Injured in the Quota Movement</h3>
                <p class="text-[#111111b3]">Date: ${Date()}</p>
            </div>
        `;
        // console.log(history);

        // show be a common function
        document.getElementById('history-containeer').appendChild(history);

        my_modal_1.showModal();

    }
    else{
        alert("Failed to add money");
    }
})
// function for Quota ends here
// document.getElementById("closeAlert").addEventListener("click", function() {
//     document.getElementById("donationAlert").classList.add("hidden");
// });