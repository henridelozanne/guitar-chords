<template>
  <div class="footer">
    <div class="footer-item">Partners</div>
    <div class="footer-item">Contact</div>
    <div class="footer-item">Created by <a class="creator-link" target="_blank" href="https://www.henri-delozanne.com">Henri Delozanne</a></div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style>

.footer {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: white;
  font-size: 0.75em;
}

.footer-item {
  cursor: pointer;
}

.creator-link {
  color: white;
  text-decoration: none;
}

</style>
