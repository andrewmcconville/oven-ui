<template>
    <Oven :class="{'oven--active': upperOvenButtonIsPressed}"
        :name="'Upper'"
        :temp="upperOvenTemp"
        :time="''">
    </Oven>
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

}
</script>

<style scoped lang="scss">

</style>