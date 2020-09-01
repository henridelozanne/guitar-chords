<template>
  <div class="control-panel">
    <label for="similar-chords-checkbox">Show similar chords</label>
    <input id="similar-chords-checkbox" type="checkbox"
           v-model="similarChordsEnabled" @change="doSomething">
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
  methods: {
    doSomething() {
      this.$emit('similarChordsChange', this.similarChordsEnabled);
    },
  },
};
</script>

<style>
.control-panel {
  position: absolute;
  transform: translateY(-50%);
  top: 20%;
  right: 0;
  width: 80px;
  height: 100px;
  background: rgba(230, 230, 230, 0.6);
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  box-shadow:2px 0px 15px rgba(100, 100, 100, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

label {
  font-size: 0.82em;
}

#similar-chords-checkbox {
  width: 20px;
  height: 20px;
}
</style>