<template>
    <Oven
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
    computed: mapGetters([
        'upperOvenButtonIsPressed',
        'upperOvenTemp',
    ])
})
export default class UpperOven extends Oven {
    public created() { console.log("Upper Oven") }
}
</script>

<style scoped lang="scss">

</style>