<template>
  <div class="string">
      <div class="fret open-fret" :class="{'clickable-fret': isQuizzTime}">
        <div v-if="stringValue === 'X'">X</div>
        <div v-else>{{ stringValue }}</div>
        <div v-if="isQuizzTime" class="quizz-round" :class="{'clickable-fret': isQuizzTime, 'selected-fret': clickedFret === '0'}" @click="handleClickedFret('0')">
        </div>
      </div>
      <div class="sillet"></div>
      <div class="fret">
        <div class="vl"></div>
        <div v-if="stringValue === '1'" class="round">
          <div v-if="fingeringIsVisible" class="fingering">{{ fingeringValue }}</div>
        </div>
        <div v-if="isQuizzTime" class="quizz-round" :class="{'clickable-fret': isQuizzTime, 'selected-fret': clickedFret === '1'}" @click="handleClickedFret('1')">
        </div>
      </div>
      <div class="fret">
        <div class="vl"></div>
        <div v-if="stringValue === '2'" class="round">
          <div v-if="fingeringIsVisible" class="fingering">{{ fingeringValue }}</div>
        </div>
        <div v-if="isQuizzTime" class="quizz-round" :class="{'clickable-fret': isQuizzTime, 'selected-fret': clickedFret === '2'}" @click="handleClickedFret('2')"></div>
      </div>
      <div class="fret">
        <div class="vl"></div>
        <div v-if="stringValue === '3'" class="round">
          <div v-if="fingeringIsVisible" class="fingering">{{ fingeringValue }}</div>
        </div>
        <div v-if="isQuizzTime" class="quizz-round" :class="{'clickable-fret': isQuizzTime, 'selected-fret': clickedFret === '3'}" @click="handleClickedFret('3')"></div>
      </div>
      <div class="fret">
        <div class="vl"></div>
        <div v-if="stringValue === '4'" class="round">
          <div v-if="fingeringIsVisible" class="fingering">{{ fingeringValue }}</div>
        </div>
        <div v-if="isQuizzTime" class="quizz-round" :class="{'clickable-fret': isQuizzTime, 'selected-fret': clickedFret === '4'}" @click="handleClickedFret('4')"></div>
      </div>
      <div class="fret">
        <div class="vl"></div>
        <div v-if="stringValue === '5'" class="round">
          <div v-if="fingeringIsVisible" class="fingering">{{ fingeringValue }}</div>
        </div>
        <div v-if="isQuizzTime" class="quizz-round" :class="{'clickable-fret': isQuizzTime, 'selected-fret': clickedFret === '5'}" @click="handleClickedFret('5')"></div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'String',
  props: {
    stringValue: {
      type: String,
      default: '',
    },
    fingeringValue: {
      type: String,
      default: '',
    },
    fingeringIsVisible: {
      type: Boolean,
      default: false,
    },
    isQuizzTime: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      clickedFret: undefined,
    };
  },
  watch: {
    stringValue() {
      console.log('new = ', this.stringValue);
    },
  },
  methods: {
    handleClickedFret(fret) {
      if (this.clickedFret !== fret) {
        this.clickedFret = fret;
      } else this.clickedFret = undefined;
    },
  },
}
</script>

<style scoped>
  .string {
    width: 25px;
    overflow:hidden;
  }

  .fret {
    height: 45px;
    margin-bottom: 2px;
    background: rgb(70, 19, 19);
    position: relative;
  }

  @media screen and (max-width:768px) {
    .fret {
      height: 30px;
    }
  }



  .open-fret {
    background: white !important;
  }

  .round {
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%,-50%);
    background: white;
    width: 100%;
    height: 50%;
    border-radius: 50%;
  }

  .quizz-round {
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%,-50%);
    width: 100%;
    height: 50%;
    border-radius: 50%;
  }

  .black-round {
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%,-50%);
    background: white;
    width: 100%;
    height: 50%;
    border-radius: 50%;
    border: solid black 1px;
  }

  .vl {
  border-left: 2px solid rgb(244, 235, 202);
  height: 500px;
  left: 50%;
  margin-left: 50%;
  top: 0;
}


  .sillet {
    height: 4px;
    width: 100%;
    background: rgb(255, 72, 0);
    margin-bottom: 2px;
  }

  .clickable-fret:hover {
    background: yellow;
  }

  .selected-fret {
    background: yellow;
  }
</style>
