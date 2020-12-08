$(document).ready(function(){
    $('.reviews-carousel').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    $('.nav-icon').on('click', function(){
        if ($(this).hasClass('fa-bars') === true) {
            $(this).addClass('fa-times').removeClass('fa-bars');
            $('nav').addClass('active')
        } else {
            $(this).addClass('fa-bars').removeClass('fa-times');
            $('nav').removeClass('active');
        }
    });

    $('.email').on('focus', function(){
        $('.form-message').html('');
    });

    $('.submit').on('click', function(event){
        event.preventDefault();
        const emailElement = $('.email')[0];
        const emailValue = $('.email').val();

        if (!emailElement.checkValidity()) {
            $('.form-message').html(emailElement.validationMessage);
        } else {
            const text = `<p class="new-subscription">Thank you for your subscription! Confirmation email has been sent to: ${emailValue} </p>`;
            $('form').html(text);
        }
    });
});
