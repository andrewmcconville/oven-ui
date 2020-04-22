<template>
    <div @click="lowerActive">
        <Oven :class="{'oven--active': lowerOvenButtonIsPressed}"
            :name="'Lower'"
            :temp="lowerOvenTemp"
            :time="''">
        </Oven>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';

import Oven from './Oven.vue';

@Component({
    components: {
        Oven
    },
    computed: mapGetters([
        'lowerOvenButtonIsPressed',
        'lowerOvenTemp',
    ])
})
export default class LowerOven extends Oven {
    private lowerActive() {
        this.$store.commit('SetUpperOvenButtonIsPressed', false);
        this.$store.commit('SetLowerOvenButtonIsPressed', true);
    }
}
</script>

<style scoped lang="scss">

</style>