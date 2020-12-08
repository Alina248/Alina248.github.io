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

    $('.submit').on('click', function(event){
        event.preventDefault();
        const email = $('input[name="email"]').val();
        const text = `<p class="new-subscription">Thank you for your subscription! Confirmation email has been sent to: ${email} </p>`;
        $('form').html(text);
    });
});
