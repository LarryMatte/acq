/*!
 * fastshell
 * Fiercely quick and opinionated front-ends
 * https://HosseinKarami.github.io/fastshell
 * @author Hossein Karami
 * @version 1.0.5
 * Copyright 2017. MIT licensed.
 */
(function ($, window, document, undefined) {

    'use strict';

    $(function () {
        // document.getElementById('js-responsive-main-nav').onclick = function () {
        //     this.classList.toggle('active');
        // }
    });

    $(".responsive-menu__icon").on("click", function (e){
        e.preventDefault();
        $(this).toggleClass('is-open');
    });

    $(".responsive-main-nav__parent").on("click", function (e){
        e.preventDefault();
        $(this).siblings(".sub-menu").slideToggle('is-active');
        $(this).toggleClass('is-open');
    });

})(jQuery, window, document);
