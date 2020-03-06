<template>
    <div class="home">
        <div>upper: {{upperOvenTemp}}</div>
        <div>lower: {{lowerOvenTemp}}</div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';

@Component({
    computed: mapGetters([
        'upperOvenTemp',
        'lowerOvenTemp',
    ])
})
export default class Home extends Vue {
    
}
</script>

<style scoped lang="scss">
.home {
    position: absolute;
    right: 0;
    top: 0;
}
</style>