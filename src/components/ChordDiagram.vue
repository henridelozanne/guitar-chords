<template>
  <el-card class="diagram-container">
    <div class="hover-detector" @mouseover="showFingering" @mouseleave="hideFingering">
      <h2 v-if="!quizz && chordName" class="chord-name">{{ chordName }} :</h2>
      <h2 v-else class="chord-name"> {{currentQuestionChord}} ?</h2>
      <h2 v-if="showFourPossibilities">{{currentQuestionChord}} ?</h2>

      <div class="guitar-neck">
        <app-g-string ref="string1" class="string-ctn" :stringValue="cleanDiagram[0]" :fingeringValue="cleanFingering[0]" :fingeringIsVisible="fingeringIsVisible" :isQuizzTime="currentPage === 'quizz'"/>
        <app-g-string ref="string2" class="string-ctn" :stringValue="cleanDiagram[1]" :fingeringValue="cleanFingering[1]" :fingeringIsVisible="fingeringIsVisible" :isQuizzTime="currentPage === 'quizz'"/>
        <app-g-string ref="string3" class="string-ctn" :stringValue="cleanDiagram[2]" :fingeringValue="cleanFingering[2]" :fingeringIsVisible="fingeringIsVisible" :isQuizzTime="currentPage === 'quizz'"/>
        <app-g-string ref="string4" class="string-ctn" :stringValue="cleanDiagram[3]" :fingeringValue="cleanFingering[3]" :fingeringIsVisible="fingeringIsVisible" :isQuizzTime="currentPage === 'quizz'"/>
        <app-g-string ref="string5" class="string-ctn" :stringValue="cleanDiagram[4]" :fingeringValue="cleanFingering[4]" :fingeringIsVisible="fingeringIsVisible" :isQuizzTime="currentPage === 'quizz'"/>
        <app-g-string ref="string6" class="string-ctn" :stringValue="cleanDiagram[5]" :fingeringValue="cleanFingering[5]" :fingeringIsVisible="fingeringIsVisible" :isQuizzTime="currentPage === 'quizz'"/>
      </div>



    </div>
  </el-card>
</template>

<script>
  import GString from './GString.vue';

  export default {
    name: 'ChordDiagram',
    props: {
      result: {
        type: Object,
        default: () => {},
      },
      quizz: {
        type: Boolean,
        default: false,
      },
      currentPage: {
        type: String,
        default: 'search-chords',
      },
      showFourPossibilities: {
        type: Boolean,
        default: false,
      }
    },
    data() {
      return {
        fingeringIsVisible: false,
        currentQuestionChord: undefined,
        possibleRoots: [
          'C',
          'Db',
          'D',
          'Eb',
          'E',
          'F',
          'Gb',
          'G',
          'Ab',
          'A',
          'Bb',
          'B',
        ],
      };
    },
    components: {
      'app-g-string': GString,
    },
    computed: {
      cleanDiagram() {
        if (!this.quizz && this.result) {
          return this.result.strings.split(' ');
        } return '';
      },
      cleanFingering() {
        if (!this.quizz && this.result) {
          return this.result.fingering.split(' ');
        } return '';
      },
      chordName() {
        if (!this.quizz && this.result) {
          return this.result.chordName.replace(/,/g, "");;
        } return '';
      }
    },
    mounted() {
      if (this.currentPage === 'quizz') {
        this.setQuestionChord();
      }
    },
    methods: {
      showFingering() {
        this.fingeringIsVisible = true;
      },
      hideFingering() {
        this.fingeringIsVisible = false;
      },
      setQuestionChord() {
        this.currentQuestionChord = this.possibleRoots[Math.floor(Math.random()*this.possibleRoots.length)];
      },
      resetClickedFrets() {
        this.$refs.string1.clickedFret = undefined;
        this.$refs.string2.clickedFret = undefined;
        this.$refs.string3.clickedFret = undefined;
        this.$refs.string4.clickedFret = undefined;
        this.$refs.string5.clickedFret = undefined;
        this.$refs.string6.clickedFret = undefined;
      }
    },
  };
</script>

<style scoped>
  .chord-block {
    border: solid;
    width: 25px;
    display: inline-block;
  }

  .diagram-container {
    width: 190px;
    display: inline-block;
    border-radius: 3%;
    background: rgb(255, 255, 255);
    text-align: center;
    font-family: 'Exo';
    padding: 10px;
    padding-bottom: 24px;
  }

  .el-card__body {
    /* remove Element's padding */
    padding: 0 !important;
  }

  hr {
    margin-top: -14px;
    margin-bottom: 20px;
    width: 40%;
  }

  .chord-name {
    font-family: 'Exo';
    white-space: nowrap;
  }

  .string-ctn {
    display: inline-block;
    margin-right: -5px;
  }
</style>
