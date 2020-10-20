<template>
  <div class="control-panel" @click="toggleCheckbox">
    <label for="similar-chords-checkbox">Show similar chords :</label>
    <input id="similar-chords-checkbox" type="checkbox"
           v-model="similarChordsEnabled">
  </div>
</template>

<script>
export default {
  name: 'ControlPanel',
  data() {
    return {
      similarChordsEnabled: false,
    };
  },
  watch: {
    similarChordsEnabled() {
      this.$emit('similarChordsChange', this.similarChordsEnabled);
    }
  },
  methods: {
    toggleCheckbox() {
      this.similarChordsEnabled = !this.similarChordsEnabled
    }
  },
};
</script>

<style>
.control-panel {
  position: absolute;
  transform: translateY(-50%);
  top: 20%;
  right: 50px;
  background: rgba(230, 230, 230, 0.6);
  border-radius: 15px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  cursor: pointer;
}

label {
  font-size: 0.82em;
  margin-right: 5px;
  pointer-events: none;
}

#similar-chords-checkbox {
  width: 20px;
  height: 20px;
  cursor: pointer;
}
</style>