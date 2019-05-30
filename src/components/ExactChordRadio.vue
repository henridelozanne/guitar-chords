<template>
  <!-- <div>
    <el-radio v-model="exact" label='isExact'>Exact chord</el-radio>
    <el-radio v-model="exact" label='isSimilar'>Similar chords</el-radio>
  </div> -->
  <div class="radio-ctn">
    <div @click="handleClick(true)" class="radio-item" :class="{'is-selected': isExact, 'hovered-radio': !isExact }">
      <p>Exact chord</p></div>
    <div @click="handleClick(false)" class="radio-item" :class="{'is-selected': !isExact, 'hovered-radio': isExact }">
      <p>Related chords</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExactChordRadio',
  data() {
    return {
      isExact: true,
    };
  },
  methods: {
    handleClick(isExact) {
      this.isExact = isExact;
      this.$emit('exactChordUpdated', isExact);
    }
  }
}
</script>

<style scoped>
.radio-ctn {
  float: left;
  width: 80px;
  margin-right: 106px;
  height: 100%;
}

.radio-item {
  height: 50%;
  padding: 4px;
  font-family: 'Exo';
  text-align: center;
  display: table;
  min-height: 80px;
}

.radio-item:hover {
  cursor: pointer;
}

.hovered-radio:hover {
  background: #cff7f2;
}

.radio-item p {
  margin-top: 3px;
  display: table-cell;
  vertical-align: middle;
}

.is-selected {
  background: rgb(22, 22, 60);
  color: rgb(250, 250, 240);
}
</style>
