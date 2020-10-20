<template>
  <div class="navbar">
    <div class="branding">
      <router-link to="/">
        <div class="branding-plain">Guitar Chords</div>
      </router-link>
      <div class="branding-transient"></div>
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
  background: rgb(46, 64, 109);
  height: 100px;
  display: flex;
  flex-direction: row;
  color: white;
}

.branding {
  flex-basis: 330px;
  font-family: 'Tomato Soup';
  font-size: 70px;
  display: flex;
}

.branding-plain {
  flex-basis: 70%;
  /* background: yellow; */
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
}

.branding-transient {
  flex-basis: 30%;
  background-image: linear-gradient(90deg, rgb(229, 229, 188, 0.5), rgb(46, 64, 109));
  opacity: 0.25;
}
</style>
