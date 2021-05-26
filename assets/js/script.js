/*=========================================================================
                    Banner Particles
=========================================================================*/
particlesJS.load('particles-js', 'assets/js/particlesjs-config.json', function() {
    
});

/*=========================================================================
                    Color Change Effect On Banner Name
=========================================================================*/
$('.texteff').textyle({
    callback : function(){
        $(this).css({
            color : '#7740A9',
            transition : '2s',
            easing :'swing'
        });
    }
});

/*=========================================================================
                    Typing Effect On Banner
=========================================================================*/
var typed = new Typed(".bnr-skill-text", {
    strings: ["Full Stack Web Developer",
                "Php and Laravel Developer",
                "Graphic Designer",
                "WordPress Theme Developer"],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
});