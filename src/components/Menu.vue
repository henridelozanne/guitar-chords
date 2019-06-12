<template>
  <div class="menu">
        <router-link class="no-decoration" to="/"><div class="menu-item menu-item-text">Search chords</div></router-link>
        <router-link class="no-decoration" to="/quizz"><div class="menu-item menu-item-text" @click="goToQuizz">Quizz</div></router-link>
        <router-link class="no-decoration" to="/about"><div class="menu-item menu-item-text">About</div></router-link>
        <div class="hamburger"><i class="menu-item el-icon-burger"></i></div>
      </div>
</template>

<script>
export default {
  name: 'Menu',
}
</script>

<style>

  .menu-item:hover {
    cursor: pointer;
    background: rgba(255, 255, 255, 0.1);
  }

  .no-decoration {
    text-decoration: none;
    color: white;
  }

</style>
