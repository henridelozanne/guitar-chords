<template>
  <div id="app" class="app">
    <div class="navbar">
      <div class="branding">
        <div class="branding-plain">Guitar Chords</div>
        <div class="branding-transient"></div>
      </div>
      <app-menu></app-menu>
    </div>
    <router-view></router-view>
    <app-footer />
    <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">


  </div>
  <!-- <div id="app">
    <div class="big-container">
      <div class="left">
        <div class="branding">
          <p>Guitar Chords</p>
        </div>
        <div class="menu">
          <ul class="menu-list">
            <li :class="{'is-selected-menu': currentPage === 'search-chords'}" class="search-chords" @click="currentPage = 'search-chords'">
              <p>Search chords</p>
            </li>
            <li :class="{'is-selected-menu': currentPage === 'explore-songs'}" class="songs" @click="currentPage = 'explore-songs'">
              <p>Explore songs</p>
            </li>
            <li :class="{'is-selected-menu': currentPage === 'quizz'}" class="quizz" @click="currentPage = 'quizz'">
              <p>Quizz</p>
            </li>
            <li :class="{'is-selected-menu': currentPage === 'about'}" class="about" @click="currentPage = 'about'">
              <p>About</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="right">
        <div v-if="currentPage === 'quizz'" class="selects progress-bar-ctn">
          <app-progress-bar :unitsQuantity="unitsQuantity"/>
        </div>
        <div v-if="currentPage === 'search-chords'" class="results">
          <div v-if="currentPage === 'search-chords'" class="selects">
            <app-chord-selects @searchChord="searchChord" @exactChordUpdated="updateExactChord" class="selects-ctn"/>
          </div>
          <app-chord-diagram v-for="result in results" :key="result.chordName"
                       :result="result" class="result-ctn"/>
        </div>
        <div v-if="currentPage === 'quizz'" class="chord-diagram-ctn">
          <app-chord-diagram v-if="!showFourPossibilities" ref="chord-diagram" class="result-ctn solo-result-ctn" :currentPage="currentPage"/>
          <div v-else>
            <app-chord-diagram :showFourPossibilities="showFourPossibilities" ref="chord-diagram" class="result-ctn" :currentPage="currentPage"/>
            <app-chord-diagram :showFourPossibilities="showFourPossibilities" ref="chord-diagram" class="result-ctn" :currentPage="currentPage"/>
            <app-chord-diagram :showFourPossibilities="showFourPossibilities" ref="chord-diagram" class="result-ctn" :currentPage="currentPage"/>
            <app-chord-diagram :showFourPossibilities="showFourPossibilities" ref="chord-diagram" class="result-ctn" :currentPage="currentPage"/>
          </div>
          <div class="quizz-btns">
            <button class="submit-btn" @click="submitAnswer">Submit</button>
            <button class="four-possibilities-btn" @click="giveFourPossibilities">4 possibilities</button>
          </div>
        </div>
      </div>
    </div>

    <div v-if="finalScoreIsVisible" class="final-score-modal">
       <div class="modal-close-btn" @click="closeFinalScoreModal">X</div>
       <div class="modal-content">
         <h3>Quizz recap :</h3>
         <h1 class="your-score">Your score: {{ totalGoodAnswers }} / {{ currentQuestionNumber}}</h1>
         <button @click="closeFinalScoreModal" class="new-game-btn">
           New game
         </button>
       </div>
     </div>

    <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">

  </div> -->

</template>

<script src="https://unpkg.com/element-ui/lib/index.js"></script>



<script>
import jQuery from 'jQuery';
import PageTitle from './components/PageTitle.vue';
import ChordSelects from './components/ChordSelects.vue';
import ExactChordRadio from './components/ExactChordRadio.vue';
import ResultSection from './components/ResultSection.vue';
import Quizz from './components/Quizz.vue';
import Menu from './components/Menu.vue';
import ChordDiagram from '../src/components/ChordDiagram.vue';
import ProgressBar from '../src/components/ProgressBar.vue';
import SearchChords from '../src/components/SearchChords.vue';
import Footer from '../src/components/Footer.vue';

export default {
  name: "App",
  components: {
    'app-page-title': PageTitle,
    'app-chord-selects': ChordSelects,
    'app-exact-chord-radio': ExactChordRadio,
    'app-result-section': ResultSection,
    'app-chord-diagram': ChordDiagram,
    'app-quizz': Quizz,
    'app-menu': Menu,
    'app-progress-bar': ProgressBar,
    'app-search-chords': SearchChords,
    'app-footer': Footer,
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

  .navbar {
    background: rgb(46, 64, 109);
    height: 100px;
    display: flex;
    flex-direction: row;
    color: white;
  }

  .branding {
    flex-basis: 330px;
    font-family: 'Tomato Soup';
    font-size: 70px;
    display: flex;
  }

  .branding-plain {
    flex-basis: 70%;
    /* background: yellow; */
    padding: 5px;
    padding-left: 10px;
    padding-right: 10px;
  }

  .branding-transient {
    flex-basis: 30%;
    background-image: linear-gradient(90deg, rgb(229, 229, 188, 0.5), rgb(46, 64, 109));
    opacity: 0.25;
  }

  .menu {
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-family: garamond;
  }

  .menu-item {
    /* background: pink; */
    padding: 15px;
    margin-right: 50px;
    font-family: 'Exo';
  }

  .main {
    /* background: green; */
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
  }

  .footer {
    background: rgb(46, 64, 109);
    height: 100px;
  }

  .result-ctn {
      display: flex;
      /* width: 1%; */
      /* align-items: center; */
      flex-direction: column;
      justify-content: space-evenly;
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
      /* align-items: center; */
    }

  }

/*
  body {
    font-family: 'Exo';
    margin: 0;
  }

  .solo-result-ctn {
    margin-top: 40px;
  }

  .big-container {
    width: 100%;
    height: 812px;
  }

  .your-score {
    margin-top: 40px;
    margin-bottom: 40px;
  }

  .chord-diagram-ctn {
    position: relative;
    text-align: center;
  }

  .quizz-btns {
    display: block;
    margin: auto;
  }

  .left {
    width: 21%;
    height: 812px;
    overflow: hidden;
    float: left;
  }

  .new-game-btn {
    background: rgb(108, 209, 108);
    padding: 30px;
  }

  .right {
    width: 79%;
    height: 130px;
    float: left;
    background-image: linear-gradient(-100deg, rgb(28, 83, 72), rgba(23, 62, 72));
  }

  .final-score-modal {
    width: 100%;
    height: 100%;
    background: rgb(0, 0, 0, 0.6);
    position: absolute;
    top: 0;
    left: 0;
  }

  .progress-bar-ctn {
    border: black solid 1px;
  }

  .branding {
    height: 200px;
    line-height: 200px;
    text-align: center;
    font-family: 'Tomato Soup';
    font-size: 96px;
    color: rgb(250, 250, 240);
    background: rgb(22, 22, 60);
  }

  .is-selected-menu {
    outline: 6px solid rgb(218, 201, 176, 0.4);
    outline-offset: -6px;
  }

  .branding p {
    margin-top: 0;
    background: -webkit-linear-gradient(rgb(216, 213, 213), rgb(255, 187, 105));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .branding p:hover {
    cursor: pointer;
    transform: rotate(-4deg);
  }

  .menu {
    background: rgb(250, 250, 240, 0.9);
    height: 612px;
    overflow: hidden;
    text-align: center;
    position: relative;
  }

  .menu-list {
    list-style-type: none;
    padding-left: 0;
    margin: auto;
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 100%;
    letter-spacing: 3px;
    font-size: 0.8em;
  }

  .menu-list li {
    padding: 30px 0;
  }

  .menu-list li:hover {
    background: #c9e8eb;
    cursor: pointer;
  }

  .modal-content {
    width: 500px;
    height: 260px;
    background: rgb(250, 250, 240, 0.9);
    margin: auto;
    margin-top: 120px;
    border-radius: 10px;
    text-align: center;
    position: relative;
    padding: 30px;
    opacity: 1;
  }

  .modal-close-btn {
    position: absolute;
    top: 115px;
    left: 1097px;
    background-color: rgb(250, 250, 240);
    z-index: 2;
    padding-top: 6px;
    height: 20px;
    width: 28px;
    font-size: 0.7em;
    text-align: center;
    border-radius: 30%;
    border: rgb(150, 150, 150) solid 1px;
    box-shadow: 3px 3px 3px 1px rgba(0, 0, 0, 0.1);
  }

  .modal-close-btn:hover {
    background-color: rgb(162, 158, 149);
    color: rgb(250, 250, 240);
    cursor: pointer;
  }

  .selects {
    height: 178px;
    background: rgb(250, 250, 240, 0.9);
    background-position: center;
    overflow: hidden;
    padding: 10px 0;
    width: 100%;
  }

  .results {
    height: 612px;
    padding: 30px;
  }

  .result-ctn {
    margin-bottom: 20px;
  }

  .result-ctn:not(:last-child) {
    margin-right: 20px;
  }

  .selects-ctn {
    float: left;
  }

  li p {
    display: inline-block;
  }

  .submit-btn {
    padding: 27px;
    background: rgb(114, 198, 114);
    color: white;
    box-shadow: 0 0 55px #125006 inset;
    font-size: 1.01em;
  }

  .four-possibilities-btn {
    padding: 27px;
    background: rgb(207, 196, 98);
    color: white;
    box-shadow: 0 0 55px #a5782f inset;
    font-size: 1.01em;
  } */
</style>
