// document.getElementById("History-btn").addEventListener('click', function () {
//     document.getElementById('Donate-section').classList.add('hidden');
//     document.getElementById('History-btn').classList.add('bg-lime-300', 'font-bold');
//     document.getElementById('History-section').classList.remove('hidden');
//     document.getElementById('Donate-btn').classList.remove('bg-[#B4F461]', 'font-bold');

// });

// document.getElementById("Donate-btn").addEventListener('click', function () {
//     document.getElementById('Donate-section').classList.remove('hidden');
//     document.getElementById('History-btn').classList.remove('bg-lime-300', 'font-bold');
//     document.getElementById('History-section').classList.add('hidden');
//     document.getElementById('Donate-btn').classList.add('bg-[#B4F461]', 'font-bold');
// });

// document.getElementById("Donate-btn-NK").addEventListener('click', function (event) {
//     event.preventDefault();
//     const donationAmount = getDonateInput('donateAmountNoakhali', 'NoakhaliBalance');

//     if (donationAmount) {
//         document.getElementById("myBalance").innerText = donationAmount.myBalances;
//         document.getElementById("NoakhaliBalance").innerText = donationAmount.totalDonation;

//         // Add to history after donation is successful
//         addToHistory(donationAmount.donationAmount, 'donationHeaderNK');
//     }
// });

// document.getElementById("Donate-btn-Feni").addEventListener('click', function (event) {
//     event.preventDefault();
//     const donationAmount = getDonateInput('donateAmountFeni', 'FeniBalance');

//     if (donationAmount) {
//         document.getElementById("myBalance").innerText = donationAmount.myBalances;
//         document.getElementById("FeniBalance").innerText = donationAmount.totalDonation;

//         // Add to history after donation is successful
//         addToHistory(donationAmount.donationAmount, 'donationHeaderFeni');
//     }
// });


// document.getElementById("Donate-btn-Quota").addEventListener('click', function (event) {
//     event.preventDefault();
//     const donationAmount = getDonateInput('donateAmountQuota', 'QuotaBalance');

//     if (donationAmount) {
//         document.getElementById("myBalance").innerText = donationAmount.myBalances;
//         document.getElementById("QuotaBalance").innerText = donationAmount.totalDonation;

//         // Add to history after donation is successful
//         addToHistory(donationAmount.donationAmount, 'donationHeaderQuota');
//     }
// });


// document.getElementById("closeAlert").addEventListener("click", function() {
//     document.getElementById("donationAlert").classList.add("hidden");
// });


// function getDonateInput(donationID, totalDonationID) {
//     let myBalances = parseFloat(document.getElementById("myBalance").innerText);
//     const donationAmount = parseFloat(document.getElementById(donationID).value) ;
//     let totalDonation = parseFloat(document.getElementById(totalDonationID).innerText);

//     if (!isNaN(donationAmount) && donationAmount > 0 && donationAmount <= myBalances) {
//         myBalances -= donationAmount;
//         totalDonation += donationAmount;

//         document.getElementById('donationAlert').classList.remove('hidden');
//         return { totalDonation, myBalances, donationAmount };
//     } else {
//         alert('Invalid donation amount or insufficient balance.');
//     }
    
// }


// function addToHistory(amount, customTextID) {
//     const historyList = document.getElementById('history');
//     const customText = document.getElementById(customTextID).innerText;

//     const historyEntry = document.createElement('div');
//     historyEntry.classList.add('font-bold' ,'p-4','border-gray-100','rounded-lg','border-2'); 

//     const amountParagraph = document.createElement('p');
//     amountParagraph.textContent = `${amount} BDT is Donated for ${customText}`;

//     const dateParagraph = document.createElement('p');
//     const currentTime = new Date().toString();
//     dateParagraph.textContent = `Date: ${currentTime}`;

//     historyEntry.appendChild(amountParagraph);
//     historyEntry.appendChild(dateParagraph);
//     historyList.appendChild(historyEntry);
// }


// document.getElementById('input-add-money').addEventListener('click', function(){
//     const noakhali = getInputFieldValueById('noakhali-donation-amount')
//     const remainingBalance = getTextFieldValueById('balanceAmount')
    

//     if(noakhali-donation-btn <= 0 || noakhali-donation-btn >5500|| isNaN(noakhali-donation-btn)){
//         alert('Invalid Donation Amount') 
//         return;                          
//     }
    
//     const noakhaliTotalAmount = getTextFieldValueById('noakhali-total-amount')
//     const newNoakhaliBalance = noakhaliTotalAmount + noakhali-donation-btn;
//     document.getElementById('noakhali-total-amount').innerText = newNoakhaliBalance ;

//     const newRemainingBalance = remainingBalance - noakhali-donation-btn;
//     document.getElementById('remaining-balance').innerText = newRemainingBalance;   
    
//     addHistory('Flood Relief in Noakhali', noakhali-donation-btn);

//     document.getElementById('my_modal_4').showModal();
    
// })



// function addHistory(cause,amount){
//     const historyCard = document.createElement('div');
//     historyCard.className = "bg-white rounded-md mb-4 p-3 border-2 border-gray-500 ";

//     historyCard.innerHTML = `
//         <p><strong>${amount} BDT</strong> is Donated for ${cause}</p>
//         <p>Date: ${new Date().toLocaleString('en-GB', { timeZone: 'Europe/Helsinki' })}</p>
//     `;
//     document.getElementById('history-list').appendChild(historyCard);
// }


// function for Noakhali starts here

// function for Noakhali starts here

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
    }
    else{
        alert("Failed to add money");
    }
})
// function for Noakhali ends here
// document.getElementById("closeAlert").addEventListener("click", function() {
//     document.getElementById("donationAlert").classList.add("hidden");
// });