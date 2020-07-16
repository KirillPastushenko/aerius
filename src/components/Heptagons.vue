<template>
    <div>
        <div v-for="(item, index) in items" 
             v-bind:class="{active: activeItem === index}" 
             v-bind:key="index"
             v-on:click.prevent="activeItem = index">
            <svg data-id="1" class="heptagon-type1 active" viewBox="0 0 249 242" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2">
                <use class="heptagon1" xlink:href="#heptagon1"/>
                <use class="heptagon2" xlink:href="#heptagon2"/>
                <path class="icon" v-bind:d="item.icon" fill-rule="nonzero"/>
            </svg>
            <div class="desc">
                <h3 class="red angle-tl angle-br">{{ item.title }}</h3>
                <p>{{ item.description }} </p>
            </div>
        </div>
    </div>
</template>

<script>
    import * as heptagonsData from './heptagons-data';
    export default {
        data(){
            return {
                activeItem: null,
                items:heptagonsData
            }
        }, 
        created (){
            console.log(this.items.heptagonsData)
        }
    }
</script>

<style lang="scss" scoped>
    h1{color:rgb(24, 1, 1)}
</style>