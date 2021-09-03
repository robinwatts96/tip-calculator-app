// get bill
// get chosen tip
// get custom tip
// get number of people
// add chosen percentage to bill
// get total, and divide by num of people
// add this to total p personal

// total x tip amount - to get the value of all peoples tips
// / num of people 
// return tip per person to tip amout per person

// if num of people =<0 add html 'can't be zero/add orange border to num of people input

// reset button to return all values to zero




// Click tip btn
$('.btn-tip').on('click', event => {
    let tip = $(event.currentTarget).val();
    console.log('You selected: ' + tip);
    let bill = $('#bill-input');
    let nop = $('#numOfPeople');
   
    if (bill.val() == 0 && nop.val() == 0) {
        // Add orange box class around both
        alert('add bill/nop');
    } else if (nop.val() == 0) {
        // Add orange box class around nop
        alert('add nop');
    } else if (bill.val() == 0) {
        // Add orange box class around bill
        alert('add bill');
    }
    
});






// // Variables
// let bill = document.getElementById('bill-input').value;
// console.log('bill: ' + bill);



// const tip5 = document.getElementById('tip5').value;
// console.log(tip5);
// const tip10 = document.getElementById('tip10').value;
// const tip15 = document.getElementById('tip15').value;
// const tip20 = document.getElementById('tip20').value;
// const tip25 = document.getElementById('tip25').value;
// const tipCustom = document.getElementById('custom').value;

// // let tip = document.getElementsByClassName('btn-tip').value;

// const nop = document.getElementById('numOfPeople').value;

// // console.log(tip5.value);
// // console.log(tipCustom.value);

// // const tip5 = function () {
// //     document.getElementById('tip5');
// //     document.addEventListener('onClick')
// // }

// document.querySelector('.btn-tip').currentTarget.addEventListener('click', function calculate () {
//     let tipValue = document.querySelector('.btn-tip').currentTarget.value;
//     console.log(tipValue);
// });


// $(document).ready(function() {
//     // This code only runs after the DOM is loaded.
//     alert('DOM fully loaded!');
//   });






