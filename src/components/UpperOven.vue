<template>
    <oven :class="{'oven--active': upperOvenButtonIsPressed}"
        :name="'Upper'"
        :temp="upperOvenTemp"
        :time="''">>
    </oven>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';

import Oven from './Oven.vue';

@Component({
    computed: mapGetters([
        'upperOvenButtonIsPressed',
        'upperOvenTemp',
    ])
})
export default class UpperOven extends Oven {
    
}
</script>

<style scoped lang="scss">

</style>