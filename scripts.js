$(function () {
    //Aqui vai todo nosso código de Javascript//
    $('header.mobile').click(function () {
        //O que vai acontecer quando clicar nav.mobile//
        var listaMenu = $('header.mobile ul');
        if (listaMenu.is(':hidden') == true) {
            //var icone = $('.botao-menu-mobile i');
            var icone = $('.botao-menu-mobile').find('i');
            icone.removeClass('fa-bars');
            icone.addClass('fa-times');
            listaMenu.slideToggle();
        } else {
            var icone = $('.botao-menu-mobile').find('i');
            icone.removeClass('fa-times');
            icone.addClass('fa-bars');
            listaMenu.slideToggle();
        }
    })
})