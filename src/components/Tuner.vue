<template>
  <div class="main">
    <div class="left-panel"></div>
    <div class="right-panel">
      <div class="tuner-ctn">
        <div class="button-panel button-panel-left">
          <div class="mechanic">
            <div class="string-name">
              E
            </div>
            <button class="tuning-button"></button>
          </div>
          <div class="mechanic">
            <div class="string-name">
              A
            </div>
            <button class="tuning-button"></button>
          </div>
          <div class="mechanic">
            <div class="string-name">
              D
            </div>
            <button class="tuning-button"></button>
          </div>
        </div>
        <div class="guitar-head"></div>
        <div class="button-panel">
          <div class="mechanic">
            <button class="tuning-button"></button>
            <div class="string-name">
              G
            </div>
          </div>
          <div class="mechanic">
            <button class="tuning-button"></button>
            <div class="string-name">
              B
            </div>
          </div>
          <div class="mechanic">
            <button class="tuning-button"></button>
            <div class="string-name">
              e
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tuner',
}
</script>

<style>

  .tuner-ctn{
    width: 370px;
    height: 500px;
    display: flex;
    flex-direction: row;
  }

  .button-panel {
    flex-basis: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .button-panel-left {
    flex-direction: column-reverse;
  }

  .guitar-head {
    background: rgb(63, 34, 1);
    flex-grow: 1;
    height: 80%;
    align-self: center;
    border-radius: 30px;
  }

  .mechanic {
    flex-basis: 40px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .tuning-button {
    background-image: radial-gradient(rgb(195, 247, 192), rgb(123, 240, 203));
    width: 30px;
    height: 30px;
    border-radius: 40px;
  }

  .tuning-button:hover {
    cursor: pointer;
  }

</style>
