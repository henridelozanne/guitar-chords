<template>
  <ul class="menu">
    <li>Explore chords</li>
    <li>Explore songs</li>
    <li>Quizz</li>
    <li>Contact</li>
  </ul>
</template>

<script>
export default {
  name: 'Menu',
}
</script>

<style scoped>
ul {
  list-style-type: none;
}

li:not(:last-child) {
  margin-bottom: 70px;
}

.menu {
  padding-inline-start: 0;
}
</style>
