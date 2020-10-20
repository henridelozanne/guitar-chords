<template>
<div>
 <el-card class="diagram-container">
    <div class="hover-detector" @mouseover="showFingering" @mouseleave="hideFingering">
      <h2 v-if="!quizz && chordName" class="chord-name">{{ chordName }} :</h2>
      <h2 v-else class="chord-name"> {{currentQuestionChord}} ?</h2>
      <!-- <h2 v-if="showFourPossibilities">{{currentQuestionChord}} ?</h2> -->

      <div class="guitar-neck">
        <app-g-string ref="string1" class="string-ctn" :stringValue="cleanDiagram[0]" :fingeringValue="cleanFingering[0]" :fingeringIsVisible="fingeringIsVisible" :isQuizzTime="currentPage === 'find-chord-name'" :oneNoteAbove="oneNoteAbove" :aboveBase="aboveBase" @fretClicked="saveNewDrawnChord" :stringIndex="0" :currentPage="currentPage" />
        <app-g-string ref="string2" class="string-ctn" :stringValue="cleanDiagram[1]" :fingeringValue="cleanFingering[1]" :fingeringIsVisible="fingeringIsVisible" :isQuizzTime="currentPage === 'find-chord-name'" :oneNoteAbove="oneNoteAbove" :aboveBase="aboveBase" @fretClicked="saveNewDrawnChord" :stringIndex="1" :currentPage="currentPage" />
        <app-g-string ref="string3" class="string-ctn" :stringValue="cleanDiagram[2]" :fingeringValue="cleanFingering[2]" :fingeringIsVisible="fingeringIsVisible" :isQuizzTime="currentPage === 'find-chord-name'" :oneNoteAbove="oneNoteAbove" :aboveBase="aboveBase" @fretClicked="saveNewDrawnChord" :stringIndex="2" :currentPage="currentPage" />
        <app-g-string ref="string4" class="string-ctn" :stringValue="cleanDiagram[3]" :fingeringValue="cleanFingering[3]" :fingeringIsVisible="fingeringIsVisible" :isQuizzTime="currentPage === 'find-chord-name'" :oneNoteAbove="oneNoteAbove" :aboveBase="aboveBase" @fretClicked="saveNewDrawnChord" :stringIndex="3" :currentPage="currentPage" />
        <app-g-string ref="string5" class="string-ctn" :stringValue="cleanDiagram[4]" :fingeringValue="cleanFingering[4]" :fingeringIsVisible="fingeringIsVisible" :isQuizzTime="currentPage === 'find-chord-name'" :oneNoteAbove="oneNoteAbove" :aboveBase="aboveBase" @fretClicked="saveNewDrawnChord" :stringIndex="4" :currentPage="currentPage" />
        <app-g-string ref="string6" class="string-ctn" :stringValue="cleanDiagram[5]" :fingeringValue="cleanFingering[5]" :fingeringIsVisible="fingeringIsVisible" :isQuizzTime="currentPage === 'find-chord-name'" :oneNoteAbove="oneNoteAbove" :aboveBase="aboveBase" @fretClicked="saveNewDrawnChord" :stringIndex="5" :currentPage="currentPage" />

        <div v-if="oneNoteAbove" class="fret-position">
          ------ {{ aboveBase }}<sup>{{aboveBase === 3 ? 'rd' : 'th'}}</sup> fret ------
        </div>
      </div>

    </div>
  </el-card>
  <div class="play-icon-ctn" @click="playChord">
    <img src="../assets/volume.svg" alt="">
  </div>
  <audio id="0-0">
    <source src="../assets/notes/0-0.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>
  <audio id="0-1">
    <source src="../assets/notes/0-1.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>
  <audio id="0-2">
    <source src="../assets/notes/0-2.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>
  <audio id="0-3">
    <source src="../assets/notes/0-3.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>
  <audio id="0-4">
    <source src="../assets/notes/0-4.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>
  <audio id="0-5">
    <source src="../assets/notes/0-5.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>
  <audio id="1-0">
    <source src="../assets/notes/1-0.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>
  <audio id="1-1">
    <source src="../assets/notes/1-1.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>
  <audio id="1-2">
    <source src="../assets/notes/1-2.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>
  <audio id="1-3">
    <source src="../assets/notes/1-3.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>
  <audio id="1-4">
    <source src="../assets/notes/1-4.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>
  <audio id="1-5">
    <source src="../assets/notes/1-5.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>
  <audio id="2-0">
    <source src="../assets/notes/2-0.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>
  <audio id="2-1">
    <source src="../assets/notes/2-1.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>
  <audio id="2-2">
    <source src="../assets/notes/2-2.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>
  <audio id="2-3">
    <source src="../assets/notes/2-3.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>
  <audio id="2-4">
    <source src="../assets/notes/2-4.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>
  <audio id="2-5">
    <source src="../assets/notes/2-5.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>
  <audio id="3-0">
    <source src="../assets/notes/3-0.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>
  <audio id="3-1">
    <source src="../assets/notes/3-1.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>
  <audio id="3-2">
    <source src="../assets/notes/3-2.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>
  <audio id="3-3">
    <source src="../assets/notes/3-3.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>
  <audio id="3-4">
    <source src="../assets/notes/3-4.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>
  <audio id="3-5">
    <source src="../assets/notes/3-5.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>
  <audio id="4-0">
    <source src="../assets/notes/4-0.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>
  <audio id="4-1">
    <source src="../assets/notes/4-1.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>
  <audio id="4-2">
    <source src="../assets/notes/4-2.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>
  <audio id="4-3">
    <source src="../assets/notes/4-3.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>
  <audio id="4-4">
    <source src="../assets/notes/4-4.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>
  <audio id="4-5">
    <source src="../assets/notes/4-5.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>
  <audio id="5-0">
    <source src="../assets/notes/5-0.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>
  <audio id="5-1">
    <source src="../assets/notes/5-1.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>
  <audio id="5-2">
    <source src="../assets/notes/5-2.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>
  <audio id="5-3">
    <source src="../assets/notes/5-3.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>
  <audio id="5-4">
    <source src="../assets/notes/5-4.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>
  <audio id="5-5">
    <source src="../assets/notes/5-5.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>
</div>

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
        aboveBase: 0,
        drawnVoicing: [
          'X',
          'X',
          'X',
          'X',
          'X',
          'X',
        ]
      };
    },
    components: {
      'app-g-string': GString,
    },
    computed: {
      oneNoteAbove() {
        return this.result.strings.split(' ').some((element) => parseInt(element, 10) > 5);
      },
      cleanDiagram() {
        if (!this.quizz && this.result) {
          const splittedString = this.result.strings.split(' ');
          const cleanNumberValues = splittedString.map((el) => {
              if (Number.isInteger(parseInt(el, 10))) {
                return parseInt(el, 10);
              }
              return 999;
            });
          if (this.oneNoteAbove) {
            this.aboveBase = Math.min(...cleanNumberValues);
          }
          return splittedString;
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
      playChord() {
        let myArray = [];
        this.cleanDiagram.forEach((string, index) => {
          if (string !== 'X') {
            myArray.push(`${index}-${string}`)
          }
        })
        let myTimeout = 500;
        myArray.forEach((elem) => {
          document.getElementById(elem).play();
        });
      },
      resetClickedFrets() {
        this.$refs.string1.clickedFret = undefined;
        this.$refs.string2.clickedFret = undefined;
        this.$refs.string3.clickedFret = undefined;
        this.$refs.string4.clickedFret = undefined;
        this.$refs.string5.clickedFret = undefined;
        this.$refs.string6.clickedFret = undefined;
      },
      saveNewDrawnChord(payload) {
        this.drawnVoicing[payload.stringIndex] = payload.clickedFret;
      },
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
    /* padding: 10px; */
    /* padding-bottom: 24px; */
  }

  .el-card__body {
    /* remove Element's padding */
    padding: 0 !important;
  }

  .guitar-neck {
    position: relative;
  }

  .fret-position {
    position: absolute;
    top: 27px;
    font-style: italic;
    font-size: 12px;
    width: 100%;
    left: 50%;
    transform: translate(-50%, 0);
    color: rgb(87, 55, 55);
  }

  .play-icon-ctn {
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(242, 242, 240);
    border-radius: 50%;
    margin-top: 50px;
    transition-property: background-color;
    transition-duration: .33s;
    cursor: pointer;
  }

  .play-icon-ctn:hover {
    background-color: rgb(195, 247, 192);
  }

  .play-icon-ctn img {
    width: 40px;
    height: 40px;
  }

  .play-icon-ctn i {
    font-size: 30px;
  }

  @media screen and (max-width:768px) {
      .guitar-neck {
        display: flex;
      }
  }

  hr {
    margin-top: -14px;
    margin-bottom: 20px;
    width: 40%;
  }

  .chord-name {
    font-family: 'Exo';
    white-space: nowrap;
    /* margin: 0 auto; */
    margin-top: 5px;
  }

  .string-ctn {
    display: inline-block;
    margin-right: -5px;
  }
</style>
