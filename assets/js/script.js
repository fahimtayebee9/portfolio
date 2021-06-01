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
particlesJS.load('particles-js', 'assets/js/particlesjs-config.json', function() {  });

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

/*=========================================================================
                    Skill Progress Circle
=========================================================================*/
// frontend development
var circle = $('.circle-1');
$('.second.circle-1').circleProgress({
    value: 0.92,
    size: 180,
    startAngle: -Math.PI / 4 * 2,
    lineCap: 'round',
    fill: {
        gradient: ["#f55200", "#ff7930"]
    }
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('h4').html(Math.round(92 * progress) + '<i>%</i>');
});
setTimeout(function() { circle.circleProgress('value', 0.92); }, 1000);
var canvasList_1 = circle.find('canvas');
canvasList_1[1].style.display = 'none';

var circle_2 = $('.circle-2');
$('.second.circle-2').circleProgress({
    value: 0.90,
    size: 180,
    startAngle: -Math.PI / 4 * 2,
    lineCap: 'round',
    fill: {
        gradient: ["#005cbf", "#0fabff"]
    }
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('h4').html(Math.round(90 * progress) + '<i>%</i>');
});
setTimeout(function() { circle_2.circleProgress('value', 0.90); }, 1000);
var canvasList_2 = circle_2.find('canvas');
canvasList_2[1].style.display = 'none';

var circle_3 = $('.circle-3');
$('.second.circle-3').circleProgress({
    value: 0.82,
    size: 180,
    startAngle: -Math.PI / 4 * 2,
    lineCap: 'round',
    fill: {
        gradient: ["#FED81D", "#DAB90F"]
    }
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('h4').html(Math.round(82 * progress) + '<i>%</i>');
});
setTimeout(function() { circle_3.circleProgress('value', 0.82); }, 1000);
var canvasList_3 = circle_3.find('canvas');
canvasList_3[1].style.display = 'none';

var circle_4 = $('.circle-4');
$('.second.circle-4').circleProgress({
    value: 0.78,
    size: 180,
    startAngle: -Math.PI / 4 * 2,
    lineCap: 'round',
    fill: {
        gradient: ["#61DAFB", "#00B5D3"]
    }
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('h4').html(Math.round(78 * progress) + '<i>%</i>');
});
setTimeout(function() { circle_4.circleProgress('value', 0.78); }, 1000);
var canvasList_4 = circle_4.find('canvas');
canvasList_4[1].style.display = 'none';

// Backend
var circlePhp = $('.circle-php');
$('.second.circle-php').circleProgress({
    value: 0.92,
    size: 180,
    startAngle: -Math.PI / 4 * 2,
    lineCap: 'round',
    fill: {
        gradient: ["#8993BE", "#232531"]
    }
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('h4').html(Math.round(92 * progress) + '<i>%</i>');
});
setTimeout(function() { circlePhp.circleProgress('value', 0.92); }, 1000);
var canvasList_php = circlePhp.find('canvas');
canvasList_php[1].style.display = 'none';

var circle_lv = $('.circle-lv');
$('.second.circle-lv').circleProgress({
    value: 0.87,
    size: 180,
    startAngle: -Math.PI / 4 * 2,
    lineCap: 'round',
    fill: {
        gradient: ["#FF2722", "#E02828"]
    }
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('h4').html(Math.round(87 * progress) + '<i>%</i>');
});
setTimeout(function() { circle_lv.circleProgress('value', 0.87); }, 1000);
var canvasList_lv = circle_lv.find('canvas');
canvasList_lv[1].style.display = 'none';

var circle_wp = $('.circle-wp');
$('.second.circle-wp').circleProgress({
    value: 0.82,
    size: 180,
    startAngle: -Math.PI / 4 * 2,
    lineCap: 'round',
    fill: {
        gradient: ["#005580", "#74BBE7"]
    }
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('h4').html(Math.round(82 * progress) + '<i>%</i>');
});
setTimeout(function() { circle_wp.circleProgress('value', 0.82); }, 1000);
var canvasList_wp = circle_wp.find('canvas');
canvasList_wp[1].style.display = 'none';

// Graphic Design
var circle_ps = $('.circle-ps');
$('.second.circle-ps').circleProgress({
    value: 0.73,
    size: 180,
    startAngle: -Math.PI / 4 * 2,
    lineCap: 'round',
    fill: {
        gradient: ["#37C5FF", "#28253A"]
    }
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('h4').html(Math.round(73 * progress) + '<i>%</i>');
});
setTimeout(function() { circle_ps.circleProgress('value', 0.73); }, 1000);
var canvasList_ps = circle_ps.find('canvas');
canvasList_ps[1].style.display = 'none';

var circle_ai = $('.circle-ai');
$('.second.circle-ai').circleProgress({
    value: 0.84,
    size: 180,
    startAngle: -Math.PI / 4 * 2,
    lineCap: 'round',
    fill: {
        gradient: ["#FF7E1B", "#41322A"]
    }
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('h4').html(Math.round(84 * progress) + '<i>%</i>');
});
setTimeout(function() { circle_ai.circleProgress('value', 0.84); }, 1000);
var canvasList_ai = circle_ai.find('canvas');
canvasList_ai[1].style.display = 'none';

var circle_id = $('.circle-id');
$('.second.circle-id').circleProgress({
    value: 0.82,
    size: 180,
    startAngle: -Math.PI / 4 * 2,
    lineCap: 'round',
    fill: {
        gradient: ["#EB43A3", "#412534"]
    }
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('h4').html(Math.round(82 * progress) + '<i>%</i>');
});
setTimeout(function() { circle_id.circleProgress('value', 0.82); }, 1000);
var canvasList_id = circle_id.find('canvas');
canvasList_id[1].style.display = 'none';

var circle_xd = $('.circle-xd');
$('.second.circle-xd').circleProgress({
    value: 0.76,
    size: 180,
    startAngle: -Math.PI / 4 * 2,
    lineCap: 'round',
    fill: {
        gradient: ["#2E001E", "#FF2BC2"]
    }
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('h4').html(Math.round(76 * progress) + '<i>%</i>');
});
setTimeout(function() { circle_xd.circleProgress('value', 0.76); }, 1000);
var canvasList_xd = circle_xd.find('canvas');
canvasList_xd[1].style.display = 'none';

/*=========================================================================
                    PROJECT FILTERING
=========================================================================*/
$('#easy-filter-wrap').easyFilter({
    animation: 'slide',
    duration: 400
});

// For PROJECT BOX TILT EFFECT
VanillaTilt.init(document.querySelector(".img-hover"), {
    max: 25,
    speed: 400
});

VanillaTilt.init(document.querySelectorAll(".img-hover"));