/*=========================================================================
                    Preloader
=========================================================================*/
$( document ).ready(function() {
    preloader.style.display = 'none';
    title.innerHTML = "Home";
});

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
            color : '#c900d6',
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

/*=========================================================================
                Button Hover EFfect Mouse Direction
=========================================================================*/
// const buttons = document.getElementsByClassName('btn-custom');

// for (var i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('mouseenter',function(e){
//         let x = e.clientX - e.target.offsetLeft;
//         let y = e.clientY - e.target.offsetTop;

//         let ripples = document.createElement('span');
//         ripples.classList.add("hv_mdir");
//         ripples.classList.add("mouseDirection");
//         ripples.style.left = x + 'px';
//         ripples.style.top = y + 'px';
//         this.appendChild(ripples);

//         setTimeout(()=>{
//             ripples.remove();
//         },1000);
//     })
// }