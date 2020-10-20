<template>
  <div class="menu">
    <router-link class="no-decoration" to="/"><div class="menu-item menu-item-text">Search chords</div></router-link>
    <router-link class="no-decoration" to="/find-chord-name"><div class="menu-item menu-item-text">Find chord name</div></router-link>
    <router-link class="no-decoration" to="/tuner"><div class="menu-item menu-item-text">Guitar tuner</div></router-link>
    <router-link class="no-decoration" to="/quizz"><div class="menu-item menu-item-text">Quizz</div></router-link>
    <router-link class="no-decoration" to="/about"><div class="menu-item menu-item-text">About</div></router-link>
    <div class="hamburger menu-item" @click="toggleMenuModal">
      <i class="el-icon-menu"></i>
    </div>
    <div class="modal" v-if="menuModalIsVisible">
      <div class="modal-item" @click="goTo('/')">Search chords</div>
      <div class="modal-item" @click="goTo('/findchordname')">Find chord name</div>
      <div class="modal-item" @click="goTo('/tuner')">Guitar tuner</div>
      <div class="modal-item" @click="goTo('/quizz')">Quizz</div>
      <div class="modal-item" @click="goTo('/about')">About</div>
    </div>
    <div v-if="menuModalIsVisible" @click="menuModalIsVisible=false" class="modal-close-icon-ctn">
      X
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      menuModalIsVisible: false,
    };
  },
  methods: {
    toggleMenuModal() {
      this.menuModalIsVisible = !this.menuModalIsVisible;
    },
    goTo(page) {
      if (this.menuModalIsVisible) {
        this.menuModalIsVisible = false;
      }
      this.$router.push(page);
    }
  }
}
</script>

<style>

.menu {
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-family: garamond;
  }

  .menu-item {
    /* background: pink; */
    padding: 15px;
    margin-right: 50px;
    font-family: 'Exo';
  }

  .menu-item:hover {
    cursor: pointer;
    background: rgba(255, 255, 255, 0.1);
  }

  .no-decoration {
    text-decoration: none;
    color: #ffffff;
  }

  .modal {
    opacity: 0.97;
    z-index: 2000;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(2, 2, 2);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }

  .modal i {
    background: rgb(194, 194, 194);
    color: black;
    cursor: pointer;
    height: 50px;
    flex-basis: 44px;
    text-align: center;
    line-height: 50px;
  }

  .modal-item {
    border-top: rgb(242, 242, 242) solid 1px;
    border-bottom: rgb(242, 242, 242) solid 1px;
    padding: 30px;
    text-align: center;
    font-family: "Exo";
    cursor: pointer;
    min-width: 200px;
    background: rgb(31, 31, 31);
  }

  .modal-close-icon-ctn {
    position: absolute;
    right: 30px;
    width: 50px;
    height: 50px;
    z-index: 3000;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.2);
    font-family: "Exo";
    cursor: pointer;
  }

</style>
