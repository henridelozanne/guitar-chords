<template>
  <div class="unit" :class="progressColor"></div>
</template>

<script>
export default {
  name: 'ProgressUnit',
  props: {
    progressColor: {
      type: String,
      default: 'grey'
    },
  },
}
</script>

<style scoped>

  .unit {
    height: 30px;
    width: 60px;
    background: red;
    display: inline-block;
  }

  .unit:not(:last-child) {
    margin-right: 5px;
  }

  .green {
    background: rgb(108, 209, 108);
  }

  .red {
    background: rgb(230, 95, 95);
  }

  .grey {
    background: grey;
  }

</style>
