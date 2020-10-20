<template>
  <div class="main find-chord-name">
    <app-chord-diagram v-if="results[0]" :result="results[0]"
                       :currentPage="'find-chord-name'" class="result-ctn"
                       ref="diagram"/>
    <div class="right-part">
      <button @click="findName">Find name</button>
      <span class="result">Result : {{result}}</span>
    </div>
  </div>
</template>

<script>
import ChordDiagram from '../components/ChordDiagram.vue';

export default {
  name: 'FindChordName',
  components: {
    'app-chord-diagram': ChordDiagram,
  },
  data() {
    return {
      results: [{
        chordName: 'Draw chord',
        fingering: 'X X X X X X',
        strings: 'X X X X X X',
      }],
      result: '',
    };
  },
  methods: {
    findName() {
      const voicing = this.$refs.diagram.drawnVoicing;
      const results = [];

      const that = this;
      jQuery.getJSON(`https://api.uberchord.com/v1/chords?voicing=${this.$refs.diagram.drawnVoicing.join('-')}`, (data) => {
        if (data.length === 0) {
          that.showErrorMessage();
          return;
        }

        that.result = data[0].chordName;
        // // Set chord diagram
        // data.forEach((item) => {
        //   results.push(item);
        // });
        // that.results = results;
      });
    }
  }
};
</script>

<style>
.find-chord-name {
  display: flex;
  align-items: center;
  justify-content: center;
}

.right-part {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 100px;
  padding: 50px;
  background: rgba(180, 180, 180, 0.3);
  border-radius: 9px;
}

button {
  font-family: 'Exo';
  border-radius: 2px;
  border-width: 1px;
  border-color:rgba(160, 160, 160, 0.4);
  padding: 5px 10px;
  background: white;
  margin-bottom: 20px;
}

.result {
  font-weight: 900;
  font-size: 1.2em;
}
</style>