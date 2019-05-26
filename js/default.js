$(document).ready(function () {
    //    header side menu
    var $headerSideMenu = $('.header-side-menu');
    var $headerNavToggle = $('.header-nav-toggle');
    var $closeHeaderSideMenu = $('.header-side-menu__close');

    $headerNavToggle.click(function () {
        $headerSideMenu.addClass('d-block animated slideInRight');
    });

    $closeHeaderSideMenu.click(function () {
        $headerSideMenu.removeClass('d-block animated slideInRight');
    });

    //    footer menu expand
    var $footerContent = $('.footer__content');
    var $expandFooterServices = $('.expand-footer-services');
    var $footerServices = $('.footer__services');
    var $closeFooterServices = $('.close-footer-services');
    var $currentFooterContent;

    $expandFooterServices.click(function (e) {
        e.preventDefault();
        $currentFooterContent = $(this).closest('.footer__content');
        $currentFooterContent.addClass('active');
        if ($currentFooterContent.hasClass('active')) {
            $footerContent.removeClass('active');
            $currentFooterContent.addClass('active');
        }
    });
    $closeFooterServices.click(function (e) {
        e.preventDefault();
        $currentFooterContent.removeClass('active');
    });

});