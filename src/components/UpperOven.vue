<template>
    <div @click="upperActive">
        <Oven :class="{'oven--active': upperOvenButtonIsPressed}"
            :name="'Upper'"
            :temp="upperOvenTemp"
            :time="''">
        </Oven>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';

import Oven from './Oven.vue';

@Component({
    components: {
        Oven
    },
    computed: mapGetters([
        'upperOvenButtonIsPressed',
        'upperOvenTemp',
    ])
})
export default class UpperOven extends Oven {
    private upperActive() {
        this.$store.commit('SetLowerOvenButtonIsPressed', false);
        this.$store.commit('SetUpperOvenButtonIsPressed', true);
    }
}
</script>

<style scoped lang="scss">

</style>