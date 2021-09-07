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
    // console.log('You selected: ' + tip);
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

    }   else {
        // Calculation
        function calculate () {
            // Add tip to total
            let total = Math.floor(bill.val() * (1 + (tip / 100)));
            console.log('before / nop: ' + total);

            // Divide total by nop for total PP
            let totalPP = total / nop.val();
            console.log('Total PP: ' + totalPP);


            // Work out tip pp
            let totalTipPP = (bill.val() * (tip / 100)) / nop.val();
            console.log('Total tip PP: ' + totalTipPP);

            // inner html
            $('#tip-total').html('£' + totalPP);
            $('#total').html('£' + totalTipPP);
        };

        
            let custom = $('#custom').on('click', event => {
                let customTip = $(event.currentTarget).val();
                console.log(customTip);   
            }    
       

            // $('.btn-tip').on('click', event => {
            //     let tip = $(event.currentTarget).val();

            // )}
        
        
        
        calculate();
});


// custom tip
// reset button













