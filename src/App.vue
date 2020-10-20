<template>
  <div id="app" class="app">
    <app-navbar />
    <router-view></router-view>
    <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">


  </div>
</template>

<script src="https://unpkg.com/element-ui/lib/index.js"></script>

<script>
import jQuery from 'jQuery';
import PageTitle from './components/PageTitle.vue';
import ChordSelects from './components/ChordSelects.vue';
import ExactChordRadio from './components/ExactChordRadio.vue';
import ResultSection from './components/ResultSection.vue';
import Quizz from './pages/Quizz.vue';
import ChordDiagram from '../src/components/ChordDiagram.vue';
import ProgressBar from '../src/components/ProgressBar.vue';
import SearchChords from '../src/pages/SearchChords.vue';
import Navbar from '../src/components/Navbar'

export default {
  name: "App",
  components: {
    'app-page-title': PageTitle,
    'app-chord-selects': ChordSelects,
    'app-exact-chord-radio': ExactChordRadio,
    'app-result-section': ResultSection,
    'app-chord-diagram': ChordDiagram,
    'app-quizz': Quizz,
    'app-progress-bar': ProgressBar,
    'app-search-chords': SearchChords,
    'app-navbar': Navbar
  },
  data: function() {
    return {
      askedQuestionsQuantity: 0,
      correctAnswersQuantity: 0,
      showFourPossibilities: false,
      isExactChord: true,
      quizzIsVisible: false,
      currentPage: 'search-chords',
      unitsQuantity: [
        { id:1, color: 'grey' },
        { id:2, color: 'grey' },
        { id:3, color: 'grey' },
        { id:4, color: 'grey' },
        { id:5, color: 'grey' },
        { id:6, color: 'grey' },
        { id:7, color: 'grey' },
        { id:8, color: 'grey' },
        { id:9, color: 'grey' },
        { id:10, color: 'grey' }
      ],
      currentQuestionNumber: 0,
      finalScoreIsVisible: false,
    };
  },
  watch: {
    currentQuestionNumber() {
      if (this.currentQuestionNumber === 10) {
        this.showFinalScore();
      }
    },
  },
  computed: {
    totalGoodAnswers() {
      let count = 0;
      this.unitsQuantity.forEach((question) => {
        if (question.color === 'green') {
          count += 1;
        }
      });
      return String(count);
    },
  },
  methods: {
    giveFourPossibilities() {
      this.showFourPossibilities = true;
    },
    closeFinalScoreModal() {
      this.finalScoreIsVisible = false;
      this.resetQuizz();
      this.launchQuizz();
    },
    resetQuizz() {
      this.currentQuestionNumber = 0;
      this.unitsQuantity = [
        { id:1, color: 'grey' },
        { id:2, color: 'grey' },
        { id:3, color: 'grey' },
        { id:4, color: 'grey' },
        { id:5, color: 'grey' },
        { id:6, color: 'grey' },
        { id:7, color: 'grey' },
        { id:8, color: 'grey' },
        { id:9, color: 'grey' },
        { id:10, color: 'grey' }
      ]
    },
    showFinalScore() {
      this.finalScoreIsVisible = true;
    },
    compareWithCorrect(answer) {
      const url = `https://api.uberchord.com/v1/chords/${this.$refs['chord-diagram'].currentQuestionChord}`
      const that = this;
      jQuery.getJSON(url, function(data) {
        let isCorrect;
        if (data.length === 0) {
          return;
        }
        const truth = data[0].strings;
        that.currentQuestionNumber += 1;
        if (answer === truth) {
          isCorrect = true;
          that.unitsQuantity[that.currentQuestionNumber - 1].color = 'green';
          that.correctAnswersQuantity += 1;
        } else {
          that.unitsQuantity[that.currentQuestionNumber - 1].color = 'red';
          isCorrect = false;
        }
        that.$refs['chord-diagram'].setQuestionChord();
        that.$refs['chord-diagram'].resetClickedFrets();
      });
    },
    launchQuizz() {
      this.quizzIsVisible = !this.quizzIsVisible;
    },
    showErrorMessage() {
      this.$notify.error({
          message: 'No chord could be found',
          duration: 2000,
        });
    },
    submitAnswer() {
      const stringRef = this.$refs['chord-diagram'].$refs;
      const string1 = stringRef['string1'].clickedFret ? stringRef['string1'].clickedFret : 'X';
      const string2 = stringRef['string2'].clickedFret ? stringRef['string2'].clickedFret : 'X';
      const string3 = stringRef['string3'].clickedFret ? stringRef['string3'].clickedFret : 'X';
      const string4 = stringRef['string4'].clickedFret ? stringRef['string4'].clickedFret : 'X';
      const string5 = stringRef['string5'].clickedFret ? stringRef['string5'].clickedFret : 'X';
      const string6 = stringRef['string6'].clickedFret ? stringRef['string6'].clickedFret : 'X';
      const answer = string1 + ' ' + string2 + ' ' + string3 + ' ' + string4 + ' ' + string5 + ' ' + string6;
      this.compareWithCorrect(answer);
      this.showFourPossibilities = false;
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Baloo|Permanent+Marker|Exo|Megrim|Yantramanav|Syncopate&display=swap');

body {
  font-family: 'Exo';
  margin: 0;
}

.app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.main {
  flex-grow: 1;
  display: flex;
  flex-direction: row;
}

.hamburger {
  display: none;
}

.left-panel {
  flex-basis: 33%;
  background-color: rgba(238, 238, 238, 0.4);
}

.right-panel {
  flex-basis: 67%;
  background: rgb(255, 255, 255);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.footer {
  background: rgb(46, 64, 109);
  height: 100px;
}

.result-ctn {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

@media screen and (max-width: 1200px) {
  .menu {
    justify-content: space-evenly;
  }

  .menu-item {
    margin-right: 0;
  }

  .left-panel {
    flex-basis: 50%;
  }

  .right-panel {
    flex-basis: 50%;
  }
}

@media screen and (max-width: 768px) {
  .navbar, .footer {
    height: 50px;
  }

  .branding {
    font-size: 30px;
  }

  .menu {
    justify-content: flex-end;
  }

  .menu-item {
    margin-right: 30px;
  }

  .menu-item-text {
    display: none;
  }

  .hamburger {
    display: block;
  }

  .main {
    flex-direction: column-reverse;
  }

  .left-panel {
    flex-basis: 50%;
  }

  .right-panel {
    flex-basis: 50%;
  }

  .result-ctn {
    flex-direction: row;
    justify-content: space-evenly;
    flex-grow: 1;
  }
}

a {
  color: white;
  text-decoration: none;
}
</style>
