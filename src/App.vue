<template>
    <div id="app">
        <Debug />
        <Home />
        <transition name="slide-in">
            <NumPad v-if="(upperOvenButtonIsPressed || lowerOvenButtonIsPressed) && (bakeButtonIsPressed || convectButtonIsPressed || broilButtonIsPressed)" />
        </transition>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';

import Debug from './components/Debug.vue';
import Home from './components/Home.vue';
import NumPad from './components/NumPad.vue';

@Component({
    components: {
        Debug,
        Home,
        NumPad,
    },
    computed: mapGetters([
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

            if(String.fromCharCode(e.keyCode) === 'q') {
                this.$store.commit('SetLowerOvenButtonIsPressed', false);
                this.$store.commit('SetUpperOvenButtonIsPressed', true);
            }
            else if(String.fromCharCode(e.keyCode) === 'a') {
                this.$store.commit('SetUpperOvenButtonIsPressed', false);
                this.$store.commit('SetLowerOvenButtonIsPressed', true);
            }
            else if(String.fromCharCode(e.keyCode) === 'w') {
                this.$store.commit('SetConvectButtonIsPressed', false);
                this.$store.commit('SetBroilButtonIsPressed', false);
                this.$store.commit('SetBakeButtonIsPressed', true);
            }
            else if(String.fromCharCode(e.keyCode) === 's') {
                this.$store.commit('SetBakeButtonIsPressed', false);
                this.$store.commit('SetBroilButtonIsPressed', false);
                this.$store.commit('SetConvectButtonIsPressed', true);
            }
            else if(String.fromCharCode(e.keyCode) === 'x') {
                this.$store.commit('SetBakeButtonIsPressed', false);
                this.$store.commit('SetConvectButtonIsPressed', false);
                this.$store.commit('SetBroilButtonIsPressed', true);
            }
            else if(String.fromCharCode(e.keyCode) === 'c') {
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
        });
    }
}
</script>

<style lang="scss">
#app {
    background-color: #333;
    color: #ddd;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    height: 600px;
    overflow: hidden;
    padding: 32px;
    position: relative;
    width: 1024px;
}

button {
    appearance: none;
    background-color: #444;
    border: none;
    border-radius: 0;
    color: #eee;
    font-size: 2em;
    height: 150px;
    transition: background-color 200ms ease-in-out, color 200ms ease-in-out;
    width: 150px;

    &:active {
        background-color: #555;
        color: #fff;
        transition: background-color 20ms ease-in-out, color 20ms ease-in-out;
    }

    &:focus {
        outline: none;
    }
}

.slide-in-enter-active, .slide-in-leave-active {
    transition: opacity 200ms ease-in-out, transform 200ms ease-in-out;
}

.slide-in-enter, .slide-in-leave-to {
    opacity: 0;
    transform: translate3D(-16px, 0, 0);
}

.slide-in-enter-to, .slide-in-leave {
    opacity: 1;
    transform: translate3D(0, 0, 0);
}
</style>
