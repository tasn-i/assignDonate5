// console.log('uitilizes file added')
function getInputFieldById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

function getTextFieldById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}
function getTotalBalance(id){
    const  balanceValue = document.getElementById(id).innerText;
    const balanceNumber = parseFloat(balanceValue);
    return balanceNumber;
}


j
// function showSectionById(id){
//     document.getElementById('show-add-donation').classList.add('hidden');
//     document.getElementById('show-add-history').classList.add('hidden');
//     document.getElementById(id).classList.remove('hidden');
// }

function showSectionById(id){
    document.getElementById('show-add-donation').classList.add('hidden');
    document.getElementById('show-add-history').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}