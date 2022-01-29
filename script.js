// Click tip btn to calculate
$('.btn-tip').on('click', event => {
    let tip = $(event.currentTarget).val();
    // console.log('You selected: ' + tip);
    let bill = $('#bill-input');
    let nop = $('#numOfPeople');

    //If user does not input correctly    
    if (bill.val() == 0 && nop.val() == 0) {
        // Add orange box class around both
        bill.addClass('orange');
        nop.addClass('orange');

        // remove orange class after set time
        setTimeout(function removeClass () {
            bill.removeClass('orange');
            nop.removeClass('orange');
        }, 3000
        );

    } else if (nop.val() == 0) {
        // Add orange box class around nop
        nop.addClass('orange');

        // remove orange class after set time
        setTimeout(function removeClass () {
            nop.removeClass('orange');
        }, 3000
        );

    } else if (bill.val() == 0) {
        // Add orange box class around bill
        bill.addClass('orange');

        // remove orange class after set time
        setTimeout(function removeClass () {
            bill.removeClass('orange');
        }, 3000
        );

    }  else {
        // If inputs are correct, run the calculation
        function calculate () {
            // Add tip to total
            let total = Math.floor(bill.val() * (1 + (tip / 100)));
            console.log('before / nop: ' + total);

            // Divide total by nop for total PP
            let totalPP = total / nop.val();
            totalPP = totalPP.toFixed(2);
            console.log('Total PP: ' + totalPP);


            // Work out tip pp
            let totalTipPP = (bill.val() * (tip / 100)) / nop.val();
            totalTipPP = totalTipPP.toFixed(2);
            console.log('Total tip PP: ' + totalTipPP);

            // inner html
            $('#tip-total').html('£' + totalPP);
            $('#total').html('£' + totalTipPP);
        };   
        
        calculate();
}});



// reset button to start again
$('#reset').on('click', function reset () {
    location.reload();
});












