<template>
    <div class="home">
        <Clock class="clock" />
        <UpperOven />
        <LowerOven />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';

import Clock from './Clock.vue';
import UpperOven from './UpperOven.vue';
import LowerOven from './LowerOven.vue';

@Component({
    components: {
        Clock,
        UpperOven,
        LowerOven,
    },
    computed: mapGetters([
    ])
})
export default class Home extends Vue {
    
}
</script>

<style scoped lang="scss">
.home {
    bottom: 0;
    left: 50%;
    padding: 20px;
    position: absolute;
    right: 0;
    top: 0;
}

.clock {
    margin-bottom: 24px;;
}
</style>