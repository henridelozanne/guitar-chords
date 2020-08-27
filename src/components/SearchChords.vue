<template>
  <div class="main">
      <!-- <router-view></router-view> -->
      <div class="left-panel">
         <app-chord-selects @searchChord="searchChord" class="selects-ctn"/>
      </div>
      <div class="right-panel">
        <app-chord-diagram v-for="result in results" :key="result.chordName"
                       :result="result" class="result-ctn"/>
      </div>
    </div>
</template>

<script>
import ChordSelects from '../components/ChordSelects.vue';
import ChordDiagram from '../components/ChordDiagram.vue';

export default {
  name: 'SearchChords',
  created() {
    this.searchChord('C');
  },
  components: {
    'app-chord-selects': ChordSelects,
    'app-chord-diagram': ChordDiagram,
  },
  data() {
    return {
      results: [],
    };
  },
  methods: {
    searchChord(payload) {
      // Reset results
      const results = [];

      const that = this;
      jQuery.getJSON(`https://api.uberchord.com/v1/chords/${payload}`, function(data){
        if (data.length === 0) {
          that.showErrorMessage();
          return;
        }
        // Set chord diagram
        data.forEach((item) => {
          results.push(item);
        });
        that.results = results;
      });
    },
  },
}
</script>
