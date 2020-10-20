<template>
  <div class="navbar">
    <div class="branding">
      <router-link to="/" class="branding-plain">
        <div>Guitar Chords</div>
      </router-link>
    </div>
    <app-menu></app-menu>
  </div>
</template>

<script>
import Menu from './Menu.vue';

export default {
  name: 'Navbar',
  components: {
    'app-menu': Menu
  }
}
</script>

<style>
.navbar {
  background-image: linear-gradient(to top, #1e3c72 0%, #1e3c72 1%, #1b458c 100%);
  height: 100px;
  display: flex;
  flex-direction: row;
  color: white;
  box-shadow: 0 5px 10px rgba(0, 0, 0, .3);
  z-index: 1;
}

.branding {
  flex-basis: 330px;
  font-family: 'Tomato Soup';
  font-size: 70px;
  display: flex;
}

.branding-plain {
  flex-basis: 70%;
  padding: 5px;
  padding-left: 30px;
  padding-right: 10px;
}
</style>
