<template>
  <div class="container">
    <div id="app">
      <yandex-map :coords="[59.930787, 30.436817]" class="map">
        <ymap-marker :coords="[59.930787, 30.436817]" />
      </yandex-map>
    </div>
  </div>
</template>

<script setup>
import { yandexMap, ymapMarker } from 'vue-yandex-maps'
</script>

<style scoped lang="scss">
@import '@/styles/global';

.container {
  border-radius: 32px;
}

.map {
  max-width: 1400px;
  height: 472px;
}

@media (max-width: 1366px) {
  .map {
    max-width: 1318px;
  }
}

@media (max-width: 768px) {
  .map {
    max-width: 719px;
  }
}

@media (max-width: 320px) {
  .map {
    max-width: 289px;
  }
}
</style>