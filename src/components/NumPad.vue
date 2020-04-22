<template>
    <div class="num-pad">
        <div>
            <button class="num-pad__button" @click="addDigit(7)">7</button>
            <button class="num-pad__button" @click="addDigit(8)">8</button>
            <button class="num-pad__button" @click="addDigit(9)">9</button>
        </div>
        <div>
            <button class="num-pad__button" @click="addDigit(4)">4</button>
            <button class="num-pad__button" @click="addDigit(5)">5</button>
            <button class="num-pad__button" @click="addDigit(6)">6</button>
        </div>
        <div>
            <button class="num-pad__button" @click="addDigit(1)">1</button>
            <button class="num-pad__button" @click="addDigit(2)">2</button>
            <button class="num-pad__button" @click="addDigit(3)">3</button>
        </div>
        <div class="flex flex-between-center">
            <button class="num-pad__button num-pad__button--text" @click="removeDigit">Back</button>
            <button class="num-pad__button" @click="addDigit(0)">0</button>
            <button class="num-pad__button num-pad__button--text" @click="setTemp">Start</button>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class NumPad extends Vue {
    private runningTempNumbers: string = "";

    private addDigit(digit: number) {
        if (this.runningTempNumbers.length <= 2) {
            if (this.$store.state.upperOvenButtonIsPressed) {
                this.runningTempNumbers += digit;
                this.$store.commit("SetUpperOvenTemp", this.runningTempNumbers);
            } else if (this.$store.state.lowerOvenButtonIsPressed) {
                this.runningTempNumbers += digit;
                this.$store.commit("SetLowerOvenTemp", this.runningTempNumbers);
            }
        }
    }

    private removeDigit() {
        if (this.runningTempNumbers.length === 0) {
            this.$store.commit("SetLowerOvenButtonIsPressed", false);
            this.$store.commit("SetUpperOvenButtonIsPressed", false);
            this.$store.commit("SetBakeButtonIsPressed", false);
            this.$store.commit("SetConvectButtonIsPressed", false);
            this.$store.commit("SetBroilButtonIsPressed", false);
        }

        if (this.$store.state.upperOvenButtonIsPressed) {
            this.runningTempNumbers = this.runningTempNumbers.substr(0, this.runningTempNumbers.length - 1);
            this.$store.commit("SetUpperOvenTemp", this.runningTempNumbers);
        } else if (this.$store.state.lowerOvenButtonIsPressed) {
            this.runningTempNumbers = this.runningTempNumbers.substr(0, this.runningTempNumbers.length - 1);
            this.$store.commit("SetLowerOvenTemp", this.runningTempNumbers);
        }
    }

    private setTemp() {
        this.$store.commit("SetUpperOvenButtonIsPressed", false);
        this.$store.commit("SetLowerOvenButtonIsPressed", false);
        this.$store.commit("SetBakeButtonIsPressed", false);
        this.$store.commit("SetConvectButtonIsPressed", false);
        this.$store.commit("SetBroilButtonIsPressed", false);
        this.runningTempNumbers = "";
    }
}
</script>

<style scoped lang="scss">
.num-pad {
    left: 16px;
    position: absolute;
    top: 16px;
}

.num-pad__button {
    background-color: #444;
    color: #eee;
    font-size: 64px;
    font-weight: 200;;
    height: 150px;
    line-height: 1;
    margin: 4px;
    transition: background-color 200ms ease-in-out, color 200ms ease-in-out;
    width: 150px;

    &:active {
        background-color: #555;
        color: #fff;
        transition: background-color 20ms ease-in-out, color 20ms ease-in-out;
    }
}

.num-pad__button--text {
    font-size: 48px;
}
</style>