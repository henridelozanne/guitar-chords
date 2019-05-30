<template>
  <div>
    <div class="btn-ctn">
      <div class="btn-column">
        <button @click="handleRootClick('C')" class="note-btn" :class="{ 'btn-selected': root === 'C', 'hovered-btn': root !== 'C' }">C</button>
        <button @click="handleRootClick('Db')" class="note-btn" :class="{ 'btn-selected': root === 'Db', 'hovered-btn': root !== 'Db'  }">C#/Db</button>
        <button @click="handleRootClick('D')" class="note-btn" :class="{ 'btn-selected': root === 'D', 'hovered-btn': root !== 'D'  }">D</button>
        <button @click="handleRootClick('Eb')" class="note-btn" :class="{ 'btn-selected': root === 'Eb', 'hovered-btn': root !== 'Eb'  }">D#/Eb</button>
      </div>
      <div class="btn-column">
        <button @click="handleRootClick('E')" class="note-btn" :class="{ 'btn-selected': root === 'E', 'hovered-btn': root !== 'E'  }">E</button>
        <button @click="handleRootClick('F')" class="note-btn" :class="{ 'btn-selected': root === 'F', 'hovered-btn': root !== 'F'  }">F</button>
        <button @click="handleRootClick('Gb')" class="note-btn" :class="{ 'btn-selected': root === 'Gb', 'hovered-btn': root !== 'Gb'  }">F#/Gb</button>
        <button @click="handleRootClick('G')" class="note-btn" :class="{ 'btn-selected': root === 'G', 'hovered-btn': root !== 'G'  }">G</button>
      </div>
      <div class="btn-column">
        <button @click="handleRootClick('Ab')" class="note-btn" :class="{ 'btn-selected': root === 'Ab', 'hovered-btn': root !== 'Ab'  }">G#/Ab</button>
        <button @click="handleRootClick('A')" class="note-btn" :class="{ 'btn-selected': root === 'A', 'hovered-btn': root !== 'A'  }">A</button>
        <button @click="handleRootClick('Bb')" class="note-btn" :class="{ 'btn-selected': root === 'Bb', 'hovered-btn': root !== 'Bb'  }">A#/Bb</button>
        <button @click="handleRootClick('B')" class="note-btn" :class="{ 'btn-selected': root === 'B', 'hovered-btn': root !== 'B'  }">B</button>
      </div>
    </div>

    <div class="btn-ctn quality-ctn">
      <div class="btn-column">
        <button @click="handleQualityClick('')" class="note-btn" :class="{ 'btn-selected': quality === '', 'hovered-btn': quality !== '' }">Maj</button>
        <button @click="handleQualityClick('maj7')" class="note-btn" :class="{ 'btn-selected': quality === 'maj7', 'hovered-btn': quality !== 'maj7' }">Maj7</button>
        <button @click="handleQualityClick('7')" class="note-btn" :class="{ 'btn-selected': quality === '7', 'hovered-btn': quality !== '7' }">7</button>
        <button @click="handleQualityClick('7b9')" class="note-btn" :class="{ 'btn-selected': quality === '7b9', 'hovered-btn': quality !== '7b9' }">7b9</button>
      </div>
      <div class="btn-column">
        <button @click="handleQualityClick('m')" class="note-btn" :class="{ 'btn-selected': quality === 'm', 'hovered-btn': quality !== 'm' }">m</button>
        <button @click="handleQualityClick('m7')" class="note-btn" :class="{ 'btn-selected': quality === 'm7', 'hovered-btn': quality !== 'm7' }">m7</button>
        <button @click="handleQualityClick('6')" class="note-btn" :class="{ 'btn-selected': quality === '6', 'hovered-btn': quality !== '6' }">6</button>
        <button @click="handleQualityClick('m6')" class="note-btn" :class="{ 'btn-selected': quality === 'm6', 'hovered-btn': quality !== 'm6' }">m6</button>
      </div>
      <div class="btn-column">
        <button @click="handleQualityClick('11')" class="note-btn" :class="{ 'btn-selected': quality === '11', 'hovered-btn': quality !== '11' }">11</button>
        <button @click="handleQualityClick('m11')" class="note-btn" :class="{ 'btn-selected': quality === 'm11', 'hovered-btn': quality !== 'm11' }">m11</button>
        <button @click="handleQualityClick('69')" class="note-btn" :class="{ 'btn-selected': quality === '69', 'hovered-btn': quality !== '69' }">69</button>
        <button @click="handleQualityClick('m69')" class="note-btn" :class="{ 'btn-selected': quality === 'm69', 'hovered-btn': quality !== 'm69' }">m69</button>
      </div>
      <div class="btn-column">
        <button @click="handleQualityClick('dim')" class="note-btn" :class="{ 'btn-selected': quality === 'dim', 'hovered-btn': quality !== 'dim' }">dim</button>
        <button @click="handleQualityClick('aug')" class="note-btn" :class="{ 'btn-selected': quality === 'aug', 'hovered-btn': quality !== 'aug' }">aug</button>
        <button @click="handleQualityClick('sus2')" class="note-btn" :class="{ 'btn-selected': quality === 'sus2', 'hovered-btn': quality !== 'sus2' }">sus2</button>
        <button @click="handleQualityClick('sus4')" class="note-btn" :class="{ 'btn-selected': quality === 'sus4', 'hovered-btn': quality !== 'sus4' }">sus4</button>
      </div>
    </div>

    <app-exact-chord-radio @exactChordUpdated="updateExactChord" class="exact-chord-radio"/>

    <button @click="searchChord" class="search-button">
      <i class="fas fa-search search-icon"></i>
    </button>
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous">
  </div>
</template>

<script>
  import ExactChordRadio from './ExactChordRadio.vue';

  export default {
    name:'ChordSelect',
    components: {
      'app-exact-chord-radio': ExactChordRadio,
    },
    data() {
      return {
        root: '',
        possibleRoots: [
          { name: 'C', value: 'C'},
          { name: 'C#/Db', value: 'Db'},
          { name: 'D', value: 'D'},
          { name: 'D#/Eb', value: 'Eb'},
          { name: 'E', value: 'E'},
          { name: 'F', value: 'F'},
          { name: 'F#/Gb', value: 'Gb'},
          { name: 'G', value: 'G'},
          { name: 'G#/Ab', value: 'Ab'},
          { name: 'A', value: 'A'},
          { name: 'A#/Bb', value: 'Bb'},
          { name: 'B', value: 'B'},
        ],
        quality: undefined,
        possibleQualities: [
          { name: 'maj', value: '' },
          { name: 'maj7', value: 'maj7' },
          { name: '7', value: '7' },
          { name: '7b9', value: '7b9' },
          { name: 'm', value: 'm' },
          { name: 'm7', value: 'm7' },
          { name: '6', value: '6' },
          { name: 'm6', value: 'm6' },
          { name: '11', value: '11' },
          { name: 'm11', value: 'm11' },
          { name: '69', value: '69' },
          { name: 'm69', value: 'm69' },
          { name: 'dim', value: 'dim' },
          { name: 'aug', value: 'aug' },
          { name: 'sus2', value: 'sus2' },
          { name: 'sus4', value: 'sus4' },
        ],
        tension: '',
        possibleTensions: [
          { name: '7#11b6b13(omit 3)', value: '7#11b6b13(omit 3)' },
          { name: '(add9)', value: '(add9)' },
          { name: '(add11)', value: '(add11)' },
          { name: '(omit5)', value: '(omit5)' },
          { name: '(add911)', value: '(add911)' },
          { name: '(addb69)', value: '(addb69)' },
        ],
        bass: '',
        possibleBasses: [
          { name: 'C', value: 'C'},
          { name: 'C#/Db', value: 'Db'},
          { name: 'D', value: 'D'},
          { name: 'D#/Eb', value: 'Eb'},
          { name: 'E', value: 'E'},
          { name: 'F', value: 'F'},
          { name: 'F#/Gb', value: 'Gb'},
          { name: 'G', value: 'G'},
          { name: 'G#/Ab', value: 'Ab'},
          { name: 'A', value: 'A'},
          { name: 'A#/Bb', value: 'Bb'},
          { name: 'B', value: 'B'},
        ],
      };
    },
    methods: {
      searchChord() {
        const selectedChord = this.root + '_' + this.quality + '' + this.tension + '_' + this.bass;
        this.$emit('searchChord', selectedChord);
      },
      handleRootClick(note) {
        this.root = note;
      },
      handleQualityClick(quality) {
        this.quality = quality;
      },
      updateExactChord(payload) {
        this.$emit('exactChordUpdated', payload);
      },
    },
  };
</script>

<style>
  .search-button {
    height: 176px;
    width: 80px;
    font-family: 'Exo';
    float: right;
    background: rgb(22, 22, 60);
    color: rgb(255, 248, 220);
  }

  .hovered-radio:hover {
    background: rgb(205, 240, 249);
  }

  .search-button:active {
    color: rgb(205, 240, 249);
  }

  .search-button:hover {
    cursor: pointer;
  }

  .btn-column {
    float: left;
    display: flex;
    flex-direction: column;
    min-width: 79px;
    padding-top: 10px;
  }

  .note-btn {
    height: 37px;
    width: 75px;
    margin: auto;
    font-family: 'Exo';
    border-radius: 5px;
  }

  .note-btn:not(:last-child) {
    margin-bottom: 3px;
  }

  .hovered-btn:hover {
    cursor: pointer;
    background: #d0f3f1;
  }

  .note-btn:active {
    font-size: 1.01em;
  }

  .quality-select {
    float: left;
  }

  .quality-ctn {
    margin-left: 40px !important;
    margin-right: 106px !important;
  }

  .btn-ctn {
    margin-left: 106px;
    margin-right: 66px;
    float: left;
  }

  .btn-selected {
    background: rgb(22, 22, 60);
    color: rgb(255, 248, 220);
  }

  button {
  background: none;
  text-align: center;
  outline: none;
  border-width: 0;
}

  .search-icon {
    font-size: 2em;
  }
</style>
