<template>
    <div v-if="switchSwiper">

        <swiper class="swiper" :options="swiperOption">
            <swiper-slide v-for="(item, index) in getHeptagons" :key="index">
                <svg :data-id="item.id" :class="`heptagon-type${item.type}`" viewBox="0 0 249 242" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2">
                    <use class="heptagon1" xlink:href="#heptagon1"/>
                    <use class="heptagon2" xlink:href="#heptagon2"/>
                    <path class="icon" :d="item.icon"  />
                </svg>
                <div class="desc">
                    <h3 class="red angle-tl angle-br">{{item.title}}</h3>
                    <p v-html="item.description"></p>
                </div>
            </swiper-slide>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>

    </div>
    <div v-else>


        <div v-for="(item, index) in getHeptagons"
            :class="{active: activeItem === index}" 
            :key="index"
            @mouseover="activeItem = index">
            <svg :data-id="item.id" :class="`heptagon-type${item.type}`" viewBox="0 0 249 242" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2">
                <use class="heptagon1" xlink:href="#heptagon1"/>
                <use class="heptagon2" xlink:href="#heptagon2"/>
                <path class="icon" :d="item.icon"  />
            </svg>
            <div class="desc">
                <h3 class="red angle-tl angle-br">{{item.title}}</h3>
                <p v-html="item.description"></p>
            </div>
        </div>
    </div>

</template>
 

<script>
    import * as heptagonsData from './heptagons-data';
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
     
    
    export default {
        props: ['group', 'swiper'],
        data(){
            return {
                width: 0,
                isSwiperActive: false,
                activeItem: 0,
                items: heptagonsData.heptagonsData,
                swiperOption: {
                    loop: true,
                    slidesPerView: 3,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                }
            }
        }, 
        methods: {
            updateWidth() {
                this.width = window.innerWidth;
            }
        },
        computed: {
            getHeptagons: function () {
                return this.items.filter(item => { 
                    return this.group === item.group;
                })
            },
            switchSwiper: function() {
                return this.width <= 768 && this.swiper === '1'
            }
        },
        created() {
            window.addEventListener('resize', this.updateWidth);
        },
        components: {
            Swiper,
            SwiperSlide
        }
    }
</script>

<style lang="scss" scoped></style>