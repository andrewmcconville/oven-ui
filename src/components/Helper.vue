<template>
    <div class="helper">
        <transition name="slide-in">
            <section class="helper__section" v-if="
                !(upperOvenButtonIsPressed || lowerOvenButtonIsPressed)
            ">
                <p class="helper__text">Which oven <br /> would you like <br /> to use?</p>
                <button class="helper__button" @click="setUpper">Upper Oven</button>
                <button class="helper__button" @click="setLower">Lower Oven</button>
            </section>
        </transition>

        <transition name="slide-in">
            <section class="helper__section" v-if="
                (upperOvenButtonIsPressed || lowerOvenButtonIsPressed)
                &&
                !(bakeButtonIsPressed || convectButtonIsPressed || broilButtonIsPressed)
            ">
                <p class="helper__text">How would you <br /> like to cook?</p>
                <button class="helper__button" @click="setBake">Bake</button>
                <button class="helper__button" @click="setConvect">Convect</button>
                <button class="helper__button" @click="setBroil">Broil</button>
                <button class="helper__button">Options</button>
            </section>
        </transition>

        <!-- <section class="helper__section" v-if="
            upperOvenTemp || lowerOvenTemp
        ">
            <p>Would you like <br /> to set a timer?</p>
            <button class="helper__button">Yes</button>
            <button class="helper__button">No</button>
        </section> -->
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';

@Component({
    computed: mapGetters([
        'upperOvenButtonIsPressed',
        'lowerOvenButtonIsPressed',
        'bakeButtonIsPressed',
        'convectButtonIsPressed',
        'broilButtonIsPressed',
        'upperOvenTemp',
        'lowerOvenTemp',
    ])
})
export default class Helper extends Vue {
    setUpper() {
        this.$store.commit("SetUpperOvenButtonIsPressed", true);
    }

    setLower() {
        this.$store.commit("SetLowerOvenButtonIsPressed", true);
    }

    setBake() {
        this.$store.commit("SetBakeButtonIsPressed", true);
    }

    setConvect() {
        this.$store.commit("SetConvectButtonIsPressed", true);
    }

    setBroil() {
        this.$store.commit("SetBroilButtonIsPressed", true);
    }
}
</script>

<style scoped lang="scss">
.helper {
    align-items: center;
    bottom: 0;
    display: flex;
    font-size: 60px;
    font-weight: 200;
    justify-content: start;
    left: 0;
    line-height: 1.1;
    padding: 32px 60px 32px 32px;
    position: absolute;
    right: 50%;
    top: 0;
}

.helper__section {
    position: absolute;
}

.helper__text {
    margin-bottom: 32px;
}

.helper__button {
    background-color: #444;
    color: #eee;
    display: block;
    font-size: 40px;
    font-weight: 200;
    margin-bottom: 8px;
    padding: 8px 16px;
}
</style>