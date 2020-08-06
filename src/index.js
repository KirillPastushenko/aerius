//window.Vue = require('vue');
import Vue from 'vue';
//import Heptagons from './components/Heptagons.vue';
import lottie from "lottie-web";
import { gsap, TimelineMax, TweenMax, Linear } from 'gsap';
import ScrollMagic from 'scrollmagic';
import ScrollMagicGSAP from './js/animation.gsap';

//import VueAwesomeSwiper from 'vue-awesome-swiper'
//import 'swiper/swiper-bundle.css'
import { Swiper, Navigation, Pagination} from 'swiper';
import 'swiper/swiper-bundle.min.css';
import './css/main.css';


var animData = {
    container: document.getElementById('cells'),
    path: 'https://assets8.lottiefiles.com/packages/lf20_wJH0k2.json',
    renderer: 'svg',
    loop: false, 
    autoplay: false,
    name: 'animScroll',
}, animScroll, tl;
 
var animScroll = lottie.loadAnimation(animData);

animScroll.addEventListener('DOMLoaded', function () {
    tl = new TimelineMax({repeat: 0})
    tl.to({frame: 0}, 1, {
        frame: animScroll.totalFrames - 1,
        onUpdate: function() {
            animScroll.goToAndStop(Math.round(this._targets[0].frame), true)
        },
        Ease:Linear.easeNone
    })
    var controller = new ScrollMagic.Controller();
    var scene = new ScrollMagic.Scene({
        triggerElement: '.cells-wrap',
        offset: 300,
        duration: 5770 })
            .setTween(tl)
            .setPin('#cells')
            .addTo(controller); 
});

 
Vue.component('Heptagons',require('./components/Heptagons.vue').default);

Swiper.use([Navigation, Pagination]);

const mob = (res) => res >= document.body.clientWidth;  
const elementInViewport = (el) => {
    var bounds = el.getBoundingClientRect();
    return ([(bounds.top + bounds.height > 0) && (window.innerHeight - bounds.top > 0), bounds]);
}


const app = new Vue({
    el: '#app',
    data: function () {
        return { 
            activeClass:'nose'
        }
    },
    methods:{
        setActiveClass: function(className){
            if(this.activeClass != className){
                this.activeClass = className;
                gsap.set('[class^=dot-]', { clearProps: 'transform' });
                gsap.to(`.dot-${className}`, {scale: 2, strokeWidth: '2.2', transformOrigin: '50% 50%', duration: .3});
            }
        }
    },
    mounted() {
        const sovetySwiper = new Swiper('.swiper-container', {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            } 
        });
    }
}); 


gsap.to('.circles-red circle:nth-of-type(2n)', {scale:1.3,transformOrigin: "50% 50%", duration:.3, repeat:-1});
gsap.to('.circles-red circle:nth-of-type(2n+1)', {scale:1.4,transformOrigin: "50% 50%", duration:.4, repeat:-1});
gsap.to('.circles-red circle:nth-of-type(3n)', {scale:1.5,transformOrigin: "50% 50%", duration:.5, repeat:-1});

 const tl2 = gsap.timeline({});
 tl2.staggerTo("#top-head path", 5, {display:'initial',ease:'CubicIn.ease'}, 0.0025);

