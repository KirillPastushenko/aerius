//window.Vue = require('vue');
import Vue from 'vue';
//import Heptagons from './components/Heptagons.vue';
import lottie from "lottie-web";
import { TimelineMax, TweenMax, Linear } from 'gsap';
import ScrollMagic from 'scrollmagic';
import ScrollMagicGSAP from './js/animation.gsap';
import './css/main.css';



var animData = {
    container: document.getElementById('lottie-three'),
    path: 'https://assets8.lottiefiles.com/packages/lf20_wJH0k2.json',
    renderer: 'svg',
    loop: false, 
    autoplay: false,
    name: "animScroll",
}, animScroll, tl;
 
var animScroll = lottie.loadAnimation(animData);

animScroll.addEventListener('DOMLoaded', function () {
    tl = new TimelineMax({repeat: 0})
    tl.to({frame: 0}, 1, {
        frame: animScroll.totalFrames-1,
        onUpdate: function() {
            animScroll.goToAndStop(Math.round(this._targets[0].frame), true)
        },
        Ease:Linear.easeNone
    })
    var controller = new ScrollMagic.Controller();
    var scene = new ScrollMagic.Scene({
        triggerElement: ".env-three",
        offset: 300,
        duration: 3000 })
            .setTween(tl)
            .setPin("#lottie-three")
            .addTo(controller);
});
 


Vue.component('Heptagons',require('./components/Heptagons.vue').default);

// Переключение активности в гептагонах
var app = new Vue({
    el: '#app',
    data: function () {
      return {
        activeItem: null,
        items: ['Link 1', 'Link 2']
      }
    }
  }); 