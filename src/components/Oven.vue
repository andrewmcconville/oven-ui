<template>
    <div class="oven">
        <div class="oven__border">
            <label class="oven__name oven__label">
                {{name}} Oven
            </label>
            <div class="flex flex-between-center">
                <div>
                    <div class="oven__temp">
                        {{temp || '0'}}
                    </div>
                    <label class="oven__label">Temp</label>
                </div>
                <div :class="{'oven__timer--inactive': !time}">
                    <div class="oven__timer">
                        {{time || '0:00:00'}}
                    </div>
                    <label class="oven__label">Timer</label>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class Oven extends Vue {
    @Prop({ default: '' }) private name!: string;
    @Prop({ default: '' }) private temp!: string;
    @Prop({ default: '' }) private time!: string;
}
</script>

<style scoped lang="scss">
.oven {
    border: 4px solid transparent;
    background-color: #444;
    margin-bottom: 20px;
    padding: 2px;
}

.oven--active {
    border-color: #888;
}

.oven__border {
    //border: 1px solid #ccc;
    padding: 10px;
}

.oven__label {
    text-transform: uppercase;
}

.oven__name {
    display: block;
    margin-bottom: 16px;
}

.oven__temp {
    font-size: 72px;
    font-weight: bold;
    line-height: 1;
}

.oven__timer {
    font-size: 72px;
    line-height: 1;
}

.oven__timer--inactive {
    opacity: .15;
}
</style>