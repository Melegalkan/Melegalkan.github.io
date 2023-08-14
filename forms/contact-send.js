$(document).on('click','.contact-message-send', function() {
    /* Inputan Formulir */
    var input_name = $("#name").val(),
        input_email = $("#email").val(),
        input_phone = $("#phone").val(),
        input_message = $("#message").val();

    var walink = 'https://web.whatsapp.com/send?phone=6289636850898&text=';

    /* Smartphone Support */
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        var walink = 'whatsapp://send?phone=6289636850898&text=';
    }

    if(input_name != "" && input_email != "" && input_message != "") {
        if(input_email.indexOf("@") != -1 && input_email.indexOf(".") != -1) {}
        else {
            swal({
                position: 'center',
                showConfirmButton: false,
                showCloseButton: true,
                html: '<div style="padding-bottom: 15px; font-size: 28px; font-family: Nunito, sans-serif; font-weight: bolder;">Please enter Email correctly !</div>',
            });
            return false;
        }
        /* Whatsapp URL */
        var contact_send = walink +
            '*Nama* : ' + input_name + '%0A' +
            '*Alamat Email* : ' + input_email + '%0A' +
            '*Nomor Kontak / Whatsapp* : ' + input_phone + '%0A' +
            '*Pesan* : ' + input_message + '%0A';

            swal({
                position: 'center',
                showConfirmButton: false,
                showCloseButton: true,
                html: '<div style="padding-bottom: 15px; font-size: 28px; font-family: Nunito, sans-serif; font-weight: bolder;">Thank you for Contact us !</div>',
            });

        /* Whatsapp Window Open */
        window.open(contact_send,'_blank', config='height=750, width=1500');
    } else {
        swal({
            position: 'center',
            showConfirmButton: false,
            showCloseButton: true,
            html: '<div style="padding-bottom: 15px; font-size: 34px; font-family: Nunito, sans-serif; font-weight: bolder;">Please fill in the <strong>Blank</strong> first !</div>',
        });
        return false;
    }
});