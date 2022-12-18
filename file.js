$(function(){
    // show the acceuil 
    $('.Acceuil').click(function () {
        $(this).css('color', 'yellow');
        $('.Galeries').css("color", '');
        $('.Contact').css("color", '');
        $('.Apropos').css("color", '');


        $('.center .description').removeClass('display-none');

        // hide galerie section if shown
        $('.Galerie').addClass('display-none');
        // Hide the Contact if shown
        $('.Contactez-nous .contact').addClass('display-none');
        // Hide the A-props section if shown
        $('.A-props').addClass('display-none');
        // Hide the Merci Message if shown
        $('.Merci').addClass('display-none');

    })

    // Show th galleri Section
    $('.Galeries').click(function () {
        $('.Acceuil').css("color", '');
        $('.Contact').css("color", '');
        $('.Apropos').css("color", '');

        // add the color yellow to the button
        $(this).css('color', 'yellow');

        // Hide the description if shown
        $('.center .description').addClass('display-none');
        // Hide the Contact if shown
        $('.Contactez-nous .contact').addClass('display-none');
        // Hide the A-props section if shown
        $('.A-props').addClass('display-none');
        // Hide the Merci Message if shown
        $('.Merci').addClass('display-none');

        // show the photos of the two years
        $('.Galerie').removeClass('display-none');
        $('.Galerie h2').removeClass('display-none');
        $('.Photos-2021').addClass('display-none');
        $('.Photos-2022').addClass('display-none');
        $('.first').removeClass('display-none');
        $('.second').removeClass('display-none');

        // Show the photos of 2021 only
        $('.all-years .first h3').click(function () {
            $('.Galerie h2').addClass('display-none');
            $('.first').addClass('display-none');
            $('.second').addClass('display-none');
            $('.Photos-2021').removeClass('display-none');
        })

        // Show the photos of 2022 only
        $('.all-years .second h3').click(function () {
            $('.Galerie h2').addClass('display-none');
            $('.first').addClass('display-none');
            $('.second').addClass('display-none');
            $('.Photos-2022').removeClass('display-none');
        })

    })

    // Show th Contact Section
    $('.Contact').click(function () {
        $(this).css('color', 'yellow');
        $('.Galeries').css("color", '');
        $('.Acceuil').css("color", '');
        $('.Apropos').css("color", '');

        // Hide the galerie section if shown
        $('.Galerie').addClass('display-none');
        // Hide the description section if shown
        $('.center .description').addClass('display-none');
        // Hide the A-props section if shown
        $('.A-props').addClass('display-none');
        // Hide the Merci Message if shown
        $('.Merci').addClass('display-none');


        $('.Contactez-nous .contact').removeClass('display-none');

        $('button').click(function () {
            $('.Contactez-nous .contact').addClass('display-none');
            $('.Merci').removeClass('display-none');
        })
    })

    // Show th Apropos Section
    $('.Apropos').click(function () {
        $(this).css('color', 'yellow');
        $('.Galeries').css("color", '');
        $('.Contact').css("color", '');
        $('.Acceuil').css("color", '');

        // Hide the galerie section if shown
        $('.Galerie').addClass('display-none');
        // Hide the description if shown
        $('.center .description').addClass('display-none');
        // Hide the Contact if shown
        $('.Contactez-nous .contact').addClass('display-none');
        // Hide the Merci Message if shown
        $('.Merci').addClass('display-none');

        $('.A-props').removeClass('display-none');
    })

    // retour to the galerie when photo of 2021 is shown
    $('.retour').click(function () {
        $('.Photos-2021').addClass('display-none');
        $('.Galerie h2').removeClass('display-none');
        $('.first').removeClass('display-none');
        $('.second').removeClass('display-none');
    })

    // retour to the galerie when photo of 2022 is shown
    $('.retour').click(function () {
        $('.Photos-2022').addClass('display-none');
        $('.Galerie h2').removeClass('display-none');
        $('.first').removeClass('display-none');
        $('.second').removeClass('display-none');
    })
})


