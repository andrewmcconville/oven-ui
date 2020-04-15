<template>
    <Oven :class="{'oven--active': lowerOvenButtonIsPressed}"
        :name="'Lower'"
        :temp="lowerOvenTemp"
        :time="''">
    </Oven>
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
    public created() { console.log("Lower Oven") }
}
</script>

<style scoped lang="scss">

</style>