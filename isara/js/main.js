{
    'use strict'


    $('.fqa-list-item').click(function() {
        let $toggle = $(this).find('.toggle');
        let $answer = $(this).find('.answer');
        if ($answer.hasClass('open')) {
            $answer.removeClass('open');
            $answer.slideUp();
            $toggle.find('i').removeClass('fas fa-angle-up')
            $toggle.find('i').addClass('fas fa-angle-down')
        } else {
            $answer.addClass('open');
            $answer.slideDown();
            $toggle.find('i').removeClass('fas fa-angle-down')
            $toggle.find('i').addClass('fas fa-angle-up')
        }
    })

}