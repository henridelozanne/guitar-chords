<template>
  <div>
    <app-chord-diagram v-for="result in results" :key="result.chordName"
                       :result="result" class="result-ctn"/>
  </div>
</template>

<script>
import ChordDiagram from './ChordDiagram.vue';

export default {
  name: 'ResultSection',
  components: {
    'app-chord-diagram': ChordDiagram,
  },
  props: {
    results: {
      type: Array,
      default: () => [],
    }
  },
}
</script>

<style scoped>

  .result-ctn {
    margin-right: 10px;
    margin-bottom: 10px;
  }

</style>
