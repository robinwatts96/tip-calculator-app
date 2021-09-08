// Click tip btn to calculate
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



// reset button
$('#reset').on('click', function reset () {
    location.reload();
});

// change alerts to orange border and <p> above it











