<template>
    <div class="debug">
        <div class="debug__oven">
            <div :class="{'debug__active-item': upperOvenButtonIsPressed}">Upper Oven: {{upperOvenButtonIsPressed}}</div>
            <div :class="{'debug__active-item': lowerOvenButtonIsPressed}">Lower Oven: {{lowerOvenButtonIsPressed}}</div>
        </div>
        <div>
            <div :class="{'debug__active-item': bakeButtonIsPressed}">Bake: {{bakeButtonIsPressed}}</div>
            <div :class="{'debug__active-item': convectButtonIsPressed}">Convect: {{convectButtonIsPressed}}</div>
            <div :class="{'debug__active-item': broilButtonIsPressed}">Broil: {{broilButtonIsPressed}}</div>
            <div :class="{'debug__active-item': false}">Options:</div>
        </div>
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
export default class Debug extends Vue {
    
}
</script>

<style scoped lang="scss">
.debug {
    color: #aaa;
    display: flex;
    position: fixed;
    top: 0;
}

.debug__oven {
    width: 160px;
}

.debug__active-item {
    color: #fff;
}
</style>