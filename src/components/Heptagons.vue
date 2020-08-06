<template>
    <div>
        <div v-for="(item, index) in filteredHeptagons"
            :class="{active: activeItem === index}" 
            :key="index"
            @mouseover="activeItem = index">
            <svg :data-id="item.id" :class="`heptagon-type${item.type}`" viewBox="0 0 249 242" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2">
                <use class="heptagon1" xlink:href="#heptagon1"/>
                <use class="heptagon2" xlink:href="#heptagon2"/>
                <path class="icon" :d="item.icon"  />
            </svg>
            <div class="desc">
                <h3 class="red angle-tl angle-br">{{ item.title }}</h3>
                <p v-html="item.description"></p>
            </div>
        </div>
    </div>
</template>

<script>
    import * as heptagonsData from './heptagons-data';
    import { Swiper, Navigation, Pagination} from 'swiper';
    import 'swiper/swiper-bundle.min.css';
    export default {
        props: ['group'],
        data(){
            return {
                activeItem: 0,
                items: heptagonsData.heptagonsData,
                swiperGroupIDs: [1,3,4]
            }
        }, 
        computed: {
            filteredHeptagons: function () {
                return this.items.filter(item => { 
                    return  this.group === item.group;
                })
            }
        },
        mounted() {
          // if(mob(768)){
                const heptagonsSwiper1 = new Swiper('#heptagons1>div', {
                    loop: true,
                    slidesPerView: 3,
                    spaceBetween: 10,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    } 
                });
          //  };
        }
    }
</script>

<style lang="scss" scoped></style>