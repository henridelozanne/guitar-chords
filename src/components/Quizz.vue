<template>
  <div>
    <el-row>
      <el-col>
        <h1 class="chord-name">{{ chordName }} ?</h1>
        <app-chord-diagram :quizz="true"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ChordDiagram from './ChordDiagram';

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

.chord-name {
  margin-top: 20px;
  margin-bottom: 25px;
}

.submit-btn-ctn {
  margin-top: 25px;
}

</style>
