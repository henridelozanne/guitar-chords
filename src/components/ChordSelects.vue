<template>
  <div class="control-container">
    <div class="first">
      <div class="btn-ctn grid-root">
          <button v-for="root in possibleRoots"
                  :key="root.value"
                  @click="handleRootClick(root.value)"
                  class="note-btn"
                  :class="{
                    'btn-selected': selectedRoot === root.value,
                    'hovered-btn': selectedRoot !== root.value }" >
              {{root.label}}
          </button>
      </div>
    </div>
    <div class="second four-spaces">
        <div class="btn-ctn grid-quality">
            <button v-for="quality in possibleQualities"
                    :key="quality.label"
                    @click="handleQualityClick(quality.value)"
                    class="note-btn"
                    :class="{
                      'btn-selected': selectedQuality === quality.value,
                      'hovered-btn': selectedQuality !== quality.value }">
                  {{quality.label}}
            </button>
        </div>
    </div>
  <link rel="stylesheet" type="text/css" href="all.css" media="screen" />
  </div>
</template>

<script>
import { EventBus} from '../event-bus'
import ExactChordRadio from './ExactChordRadio.vue';

export default {
  name:'ChordSelect',
  components: {
    'app-exact-chord-radio': ExactChordRadio,
  },
  data() {
    return {
      launchAnimation: false,
      selectedRoot: 'C',
      possibleRoots: [
        { label: 'C', value: 'C'},
        { label: 'C#/Db', value: 'Db'},
        { label: 'D', value: 'D'},
        { label: 'D#/Eb', value: 'Eb'},
        { label: 'E', value: 'E'},
        { label: 'F', value: 'F'},
        { label: 'F#/Gb', value: 'Gb'},
        { label: 'G', value: 'G'},
        { label: 'G#/Ab', value: 'Ab'},
        { label: 'A', value: 'A'},
        { label: 'A#/Bb', value: 'Bb'},
        { label: 'B', value: 'B'},
      ],
      selectedQuality: '',
      possibleQualities: [
        { label: 'maj', value: '' },
        { label: 'maj7', value: 'maj7' },
        { label: '7', value: '7' },
        { label: '7b9', value: '7b9' },
        { label: 'm', value: 'm' },
        { label: 'm7', value: 'm7' },
        { label: '6', value: '6' },
        { label: 'm6', value: 'm6' },
        { label: '11', value: '11' },
        { label: 'm11', value: 'm11' },
        { label: '69', value: '69' },
        { label: 'm69', value: 'm69' },
        { label: 'dim', value: 'dim' },
        { label: 'aug', value: 'aug' },
        { label: 'sus2', value: 'sus2' },
        { label: 'sus4', value: 'sus4' },
      ],
      tension: '',
      possibleTensions: [
        { label: '7#11b6b13(omit 3)', value: '7#11b6b13(omit 3)' },
        { label: '(add9)', value: '(add9)' },
        { label: '(add11)', value: '(add11)' },
        { label: '(omit5)', value: '(omit5)' },
        { label: '(add911)', value: '(add911)' },
        { label: '(addb69)', value: '(addb69)' },
      ],
      bass: '',
      possibleBasses: [
        { label: 'C', value: 'C'},
        { label: 'C#/Db', value: 'Db'},
        { label: 'D', value: 'D'},
        { label: 'D#/Eb', value: 'Eb'},
        { label: 'E', value: 'E'},
        { label: 'F', value: 'F'},
        { label: 'F#/Gb', value: 'Gb'},
        { label: 'G', value: 'G'},
        { label: 'G#/Ab', value: 'Ab'},
        { label: 'A', value: 'A'},
        { label: 'A#/Bb', value: 'Bb'},
        { label: 'B', value: 'B'},
      ],
    };
  },
  methods: {
    searchChord() {
      const selectedChord = this.selectedRoot + '_' + this.selectedQuality + '' + this.tension + '_' + this.bass;
      this.$emit('searchChord', selectedChord);
      },
    handleRootClick(note) {
      EventBus.$emit('chordChange')
      this.selectedRoot = note;
      this.searchChord();
    },
    handleQualityClick(quality) {
      EventBus.$emit('chordChange')
      this.selectedQuality = quality;
      this.searchChord();
    },
  },
};
</script>


<style>
.control-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  font-family: "Exo"
}

.first {
  height: 50%;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 40px;
  padding-right: 40px;
  box-sizing: border-box;
}

.second {
  height: 50%;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 40px;
  padding-right: 40px;
  box-sizing: border-box;
  align-content: center;
}

.third{
  flex-grow: 1;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.third div {
  font-family: "Open sans";
  font-size: 0.85em;
}

.third-small {
  display: none;
  background: pink;
  height: 40px;
}

.btn-ctn {
  display: grid;
  gap: 0 10px;
  align-items: center;
  height: 100%;
}

.grid-root {
  grid-template-columns: 1fr 1fr 1fr;
}

.grid-quality {
  grid-template-columns: 1fr 1fr 1fr 1fr;
}

button {
  background: none;
  text-align: center;
  outline: none;
}

.btn-ctn button {
  padding: 10px 30px;
  font-size: 15px;
  border-radius: 10px;
  min-width: 81px;
}

.four-spaces button{
  flex-basis: 25%;
  font-size: 15px;
}

.btn-selected {
  background: rgb(213, 217, 218) !important;
  color: rgb(255, 255, 255);
}

.hovered-btn:hover {
  background: rgb(213, 217, 218) !important;
  color: rgb(255, 255, 255);
}

@media screen and (max-width: 768px) {
  .btn-ctn button {
    flex-basis: 25%;
  }

  .four-spaces button {
    flex-basis: 16.66%;
  }
}

.note-btn {
  background-color: white;
  border: 0;
  font-weight: normal;
  transition-property: all;
  transition-duration: 0.3s;
  box-shadow: 0 3px 10px rgba(0, 0, 0, .05);
  font-family: 'Josefin Sans', sans-serif;
  cursor: pointer;
}
</style>
