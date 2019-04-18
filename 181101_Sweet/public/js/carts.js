//產品數量增減
$(document).ready(function () {
    var quantitiy = 0;
    $('#add').click(function (e) {
        e.preventDefault();
        var quantity = parseInt($('#quantity').val());
        $('#quantity').val(quantity + 1);
    });
    $('#sub').click(function (e) {
        e.preventDefault();
        var quantity = parseInt($('#quantity').val());
        if (quantity > 0) {
            $('#quantity').val(quantity - 1);
        }
    });

});

//刪除按鈕-d-none
$(document).ready(function (e) {
    $( ".delete" ).click(function() {
        $( ".carts-row" ).addClass( "d-none"&&"d-md-none" );
    });
    
});