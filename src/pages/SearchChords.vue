<template>
  <div class="main">
      <div class="left-panel">
         <app-chord-selects @searchChord="searchChord" class="selects-ctn" ref="chordSelects"/>
      </div>
      <div class="right-panel">
        <app-chord-diagram v-if="results[0]" :result="results[0]" class="result-ctn" currentPage="search-chords"/>
        <div v-if="similarChordsEnabled" class="similar-chords-ctn">
          <div @click="showPreviousSimChord" class="arrow">
            <app-arrow-up v-if="simTopArrowIsEnabled"  class="top-arrow" />
          </div>

          <app-chord-diagram v-if="results[currentSimChord]" :result="results[currentSimChord]"
                             currentPage="search-chords" class="result-ctn" />

          <div @click="showNextSimChord" class="arrow">
            <app-arrow-down v-if="simBottomArrowIsEnabled" class="bottom-arrow" />
          </div>
        </div>
        <app-control-panel @similarChordsChange="similarChordsChange" />
      </div>
    </div>
</template>

<script>
import ChordSelects from '../components/ChordSelects.vue';
import ChordDiagram from '../components/ChordDiagram.vue';
import ControlPanel from '../components/ControlPanel.vue';
import ArrowDown from '../svgs/ArrowDown.vue';
import ArrowUp from '../svgs/ArrowUp.vue';

export default {
  name: 'SearchChords',
  created() {
    this.searchChord('C');
  },
  components: {
    'app-chord-selects': ChordSelects,
    'app-chord-diagram': ChordDiagram,
    'app-control-panel': ControlPanel,
    'app-arrow-down': ArrowDown,
    'app-arrow-up': ArrowUp,
  },
  data() {
    return {
      results: [],
      similarChordsEnabled: false,
      currentSimChord: 1,
    };
  },
  computed: {
    simBottomArrowIsEnabled() {
      return this.currentSimChord + 1 !== this.results.length;
    },
    simTopArrowIsEnabled() {
      return this.currentSimChord > 1;
    },
  },
  methods: {
    searchChord(payload) {
      // Reset results
      const results = [];

      const that = this;
      jQuery.getJSON(`https://api.uberchord.com/v1/chords${this.similarChordsEnabled ? '?nameLike=' : '/'}${payload}`, (data) => {
        if (data.length === 0) {
          that.showErrorMessage();
          return;
        }
        // Set chord diagram
        data.forEach((item) => {
          results.push(item);
        });
        that.results = results;
        that.currentSimChord = 1;
      });
    },
    similarChordsChange(payload) {
      this.similarChordsEnabled = payload;
      if (payload) this.$refs.chordSelects.searchChord();
    },
    showNextSimChord() {
      if (this.currentSimChord + 1 < this.results.length) this.currentSimChord += 1
    },
    showPreviousSimChord() {
      if (this.currentSimChord > 1) this.currentSimChord -= 1
    }
  },
}
</script>

<style>
.similar-chords-ctn {
  background: rgba(192, 192, 192, 0.3);
  /* border-radius: 10px; */
  padding: 50px;
  align-self: stretch;
  margin-left: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.arrow {
  width: 30px;
  height: 30px;
  cursor: pointer;
}
</style>