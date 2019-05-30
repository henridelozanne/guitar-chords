<template>
  <div class="progress-bar">
    <app-progress-unit v-for="unit in unitsQuantity" :key="unit.id" class="progress-unit" :progressColor="unit.color"/>
  </div>
</template>

<script>
import ProgressUnit from './ProgressUnit.vue'

export default {
  name: 'ProgressBar',
  components: {
    'app-progress-unit': ProgressUnit,
  },
  data() {
    return {
      progressColor: 'red',
    };
  },
  props: {
    unitsQuantity: {
      type: Array,
      default: () => [],
    }
  },
}
</script>

<style scoped>

  .progress-bar {
    background: rgb(238, 237, 234);
    width: 668px;
    padding: 15px;
    border-radius: 10px;
    margin: 52px auto 0;
    box-shadow: 3px 3px 3px 1px rgba(0, 0, 0, 0.1);
    border: rgb(199, 196, 196) solid 1px;
  }

</style>
