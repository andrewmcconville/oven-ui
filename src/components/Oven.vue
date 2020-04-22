<template>
    <div class="oven">
        <div class="oven__border">
            <label class="oven__name oven__label">
                {{name}} Oven
            </label>
            <div class="flex flex-between-center">
                <div>
                    <div class="flex flex-start-start">
                        <span class="oven__temp">{{temp || '0'}}</span>
                        <span class="oven__degree">°</span>
                        <span class="oven__unit">F</span>
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
    border-left: 6px solid transparent;
    //background-color: #444;
    margin-top: 48px;
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
    font-size: 16px;
    font-weight: 500;
    letter-spacing: .25px;
    text-transform: uppercase;
}

.oven__name {
    border-bottom: 2px solid #888;
    display: block;
    margin-bottom: 8px;
}

.oven__temp {
    font-size: 80px;
    font-weight: 200;
    line-height: 1;
    margin-left: -3px;
}

.oven__degree {
    font-size: 30px;
    font-weight: 300;
    line-height: 1;
    margin-left: -2px;
    margin-top: 7px;
}

.oven__unit {
    font-size: 22px;
    font-weight: 300;
    line-height: 1;
    margin-top: 9px;
}

.oven__timer {
    font-size: 80px;
    font-weight: 200;
    line-height: 1;
}

.oven__timer--inactive {
    opacity: .15;
}
</style>