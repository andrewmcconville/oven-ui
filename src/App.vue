<template>
    <div id="app" :class="theme">
        <!-- <Debug /> -->
        <Helper />
        <transition name="slide-in">
            <NumPad v-if="(upperOvenButtonIsPressed || lowerOvenButtonIsPressed) && (bakeButtonIsPressed || convectButtonIsPressed || broilButtonIsPressed)" />
        </transition>
        <Home />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';

import Debug from './components/Debug.vue';
import Helper from './components/Helper.vue';
import Home from './components/Home.vue';
import NumPad from './components/NumPad.vue';

@Component({
    components: {
        Debug,
        Helper,
        Home,
        NumPad,
    },
    computed: mapGetters([
        'theme',
        'upperOvenButtonIsPressed',
        'lowerOvenButtonIsPressed',
        'bakeButtonIsPressed',
        'convectButtonIsPressed',
        'broilButtonIsPressed',
    ])
})
export default class App extends Vue {  
    mounted() {
        window.addEventListener("keypress", e => {
            console.log(String.fromCharCode(e.keyCode));

            if(String.fromCharCode(e.keyCode) === 'a') {
                this.$store.commit('SetLowerOvenButtonIsPressed', false);
                this.$store.commit('SetUpperOvenButtonIsPressed', true);
            }
            else if(String.fromCharCode(e.keyCode) === 'b') {
                this.$store.commit('SetUpperOvenButtonIsPressed', false);
                this.$store.commit('SetLowerOvenButtonIsPressed', true);
            }
            else if(String.fromCharCode(e.keyCode) === 'c') {
                this.$store.commit('SetConvectButtonIsPressed', false);
                this.$store.commit('SetBroilButtonIsPressed', false);
                this.$store.commit('SetBakeButtonIsPressed', true);
            }
            else if(String.fromCharCode(e.keyCode) === 'd') {
                this.$store.commit('SetBakeButtonIsPressed', false);
                this.$store.commit('SetBroilButtonIsPressed', false);
                this.$store.commit('SetConvectButtonIsPressed', true);
            }
            else if(String.fromCharCode(e.keyCode) === 'e') {
                this.$store.commit('SetBakeButtonIsPressed', false);
                this.$store.commit('SetConvectButtonIsPressed', false);
                this.$store.commit('SetBroilButtonIsPressed', true);
            }
            else if(String.fromCharCode(e.keyCode) === 'g') {
                this.$store.commit('SetBakeButtonIsPressed', false);
                this.$store.commit('SetConvectButtonIsPressed', false);
                this.$store.commit('SetBroilButtonIsPressed', false);

                if(this.$store.getters.upperOvenButtonIsPressed) {
                    this.$store.commit('SetUpperOvenButtonIsPressed', false);
                    this.$store.commit('SetUpperOvenTemp', "");
                }
                else if(this.$store.getters.lowerOvenButtonIsPressed) {
                    this.$store.commit('SetLowerOvenButtonIsPressed', false)
                    this.$store.commit('SetLowerOvenTemp', "");
                }
            }
            else if(String.fromCharCode(e.keyCode) === '0') {
                this.$store.commit('SetTheme', 'dark');
            }
            else if(String.fromCharCode(e.keyCode) === '9') {
                this.$store.commit('SetTheme', 'light');
            }
        });
    }
}
</script>

<style lang="scss">
@import "./styles/Flexbox.scss";
@import "./styles/Reset.scss";
@import "./styles/SlideAnimation.scss";

#app {
    height: 600px;
    overflow: hidden;
    padding: 32px;
    position: relative;
    width: 1024px;
}

@mixin theme($theme-name, $appBackgroundColor, $appColor) {
   .#{$theme-name} {
       &#app {
            background-color: $appBackgroundColor;
            color: $appColor;
            transition: background-color ease-in-out 1000ms, color ease-in-out 1000ms;
       }
   }
}

@include theme(light, #ddd, #444);
@include theme(dark, #333, #ddd);
</style>
