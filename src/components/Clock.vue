<template>
    <div class="clock flex flex-center-start">
        <span class="clock__time">{{time}}</span>
        <span class="clock__ampm">{{amPm}}</span>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({

})
export default class Clock extends Vue {
    public time: string = '';
    public amPm: string = '';

    created() {
        this.startTime();
    }

    private startTime() {
        let today = new Date();
        let hours = today.getHours();
        let m = this.padTime(today.getMinutes());

        this.time = this.twelveHour(hours) + ":" + m;
        this.amPm = this.checkAmPm(hours);

        setTimeout(this.startTime, 500);
    }

    private twelveHour(hours: number): number {
        if (hours === 0 ) {
            return 12
        } else if (hours > 12) {
            return hours - 12
        } else {
            return hours
        }
        return hours
    }
    
    private padTime(i: number) {
        let padded: string = '';

        if (i < 10) {
            return padded = "0" + i
        } else {
            return i
        };
    }

    private checkAmPm(hours: number): string {
        if (hours > 12) {
            return 'pm'
        } else {
            return 'am'
        }
    }
}
</script>

<style scoped lang="scss">
.clock {
    margin-bottom: 8px;
}

.clock__time {
    font-size: 144px;
    line-height: 1;
}

.clock__ampm {
    font-size: 32px;
    font-weight: 200;
    text-transform: uppercase;
    line-height: 1;
    margin-top: 16px;
}
</style>