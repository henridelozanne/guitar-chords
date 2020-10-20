<template>
  <div class="main">
    <div class="left-panel">
      <div>CMaj7 ?</div>
    </div>
    <div class="right-panel">
      <el-row>
        <el-col>
          <h1 class="chord-name">{{ chordName }} ?</h1>
          <app-chord-diagram :quizz="true"/>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import ChordDiagram from '../components/ChordDiagram';

export default {
  name: 'Quizz',
  components: {
    'app-chord-diagram': ChordDiagram,
  },
  data() {
    return {
      chordName: undefined,
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
  mounted() {
    this.chordName = this.possibleBasses[Math.round(Math.random() * this.possibleBasses.length - 1)].name
  },
  methods: {
    submit() {
      console.log('submit called');
    },
  }
}
</script>

<style>

.left-panel {
  display: flex;
  justify-content: center;
  align-items: center;
  background: yellow;
}

.submit-btn-ctn {
  margin-top: 25px;
}
</style>
