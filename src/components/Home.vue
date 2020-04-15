<template>
    <div class="home">
        <UpperOven />
        <LowerOven />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';

import UpperOven from './UpperOven.vue';
import LowerOven from './LowerOven.vue';

@Component({
    components: {
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
</style>