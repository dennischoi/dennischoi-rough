$(function(){

// PRELOADER

    $(document).ready(function() {
        if ($.fn.jpreLoader){
            $('body').jpreLoader({
                showPercentage: false,
                loaderVPos: '50%'
            });
        }
    });

    $(window).smartload(function(){
        if ($.fn.matchHeight){
            $('.match-height').matchHeight();
        }
    });


// RESPONSIVE
    function setResizeContent() {
        var minHeight = $(window).height();
        $('.full-screen').css('min-height', minHeight);
    }

    setResizeContent();

    $(window).smartresize(function(){
        setResizeContent();
    });


    $('body').on('activate.bs.scrollspy', function(){
        $('.page-scroll.dropdown > .dropdown-toggle').each(function(){
            $(this).attr('data-target', '#');
        });
    });

// PAGE SCROLL - jquery Easing plugin

    var pageScroll = function(){
        $('.page-scroll > a').bind('click', function(e){
            e.preventDefault();

            var anchor = $(this),
            href = anchor.attr('href'),
            offset = $('body').attr('data-offset');

            $('html, body').stop().animate({
                scrollTop: $(href).offset().top - (offset - 1)
            }, 1500, 'easeInOutExpo');

            /*
             * Automatically retract the navigation after clicking
             * on one of the menu items.
             */
            if(!$(this).parent().hasClass('dropdown')){
                $('.menu-collapse').collapse('hide');
            }
        });
    };

    pageScroll();


// Fix/Stick NavBar after Passing a certain point

    var stickyMenu = function(){
        var ww = Math.max($(window).width(), window.innerWidth),
        nav = $('.navbar.navbar-fixed-top');

        if ($.fn.unstick){
            nav.unstick();
        }

        if ($.fn.sticky && ww >= 992){
            nav.sticky({topSpacing: 0});
        }
    };

    stickyMenu();

    // Call stickyMenu() when window is resized.
    $(window).smartresize(function(){
        stickyMenu();
    });


// On Hover menu

    var toggleNavbarMethod = function(){
        var ww = Math.max($(window).width(), window.innerWidth),
        dropdown = $('.navbar .dropdown');

        if (ww >= 992){
            dropdown.on('mouseover', function(){
                if (!$(this).hasClass('open')){
                    $(this).addClass('open');
                }
            }).on('mouseout', function(){
                if ($(this).hasClass('open')){
                    $(this).removeClass('open');
                }
            });
        }
        else {
            dropdown.off('mouseover').off('mouseout');
        }
    };

    toggleNavbarMethod();

    // Call toggleNavbarMethod(); when window is resized.
    $(window).smartresize(function(){
        toggleNavbarMethod();
    });



    $('.dropdown-menu').click(function(e){
        e.stopPropagation();
    });


});
