<template>
    <oven :class="{'oven--active': lowerOvenButtonIsPressed}"
        :name="'Lower'"
        :temp="lowerOvenTemp"
        :time="''">
    </oven>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';

import Oven from './Oven.vue';

@Component({
    computed: mapGetters([
        'lowerOvenButtonIsPressed',
        'lowerOvenTemp',
    ])
})
export default class LowerOven extends Oven {
    
}
</script>

<style scoped lang="scss">

</style>