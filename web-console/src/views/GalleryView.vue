<script setup lang="ts">
import GalleryCard from '../components/GalleryCard.vue'
const list = [
  { img: '/img/test.jpg', title: 'sample1' },
  { img: '/img/test.jpg', title: 'sample2' },
  { img: '/img/test.jpg', title: 'sample3' },
  { img: '/img/test.jpg', title: 'sample4' },
  { img: '/img/test.jpg', title: 'sample5' },
  { img: '/img/test.jpg', title: 'sample6' },
  { img: '/img/test.jpg', title: 'sample7' },
  { img: '/img/test.jpg', title: 'sample8' },
  { img: '/img/test.jpg', title: 'sample9' },
  { img: '/img/test.jpg', title: 'sample10' },
  { img: '/img/test.jpg', title: 'sample11' },
  { img: '/img/test.jpg', title: 'sample12' },
  { img: '/img/test.jpg', title: 'sample13' }
]
</script>

<template>
  <div class="row">
    <div class="flex flex-col md3" v-for="{ img, title } in list" :key="title">
      <GalleryCard class="item" :img="img" :title="title" />
    </div>
  </div>
</template>

<style>
@import 'vuestic-ui/styles/grid';
.row {
  gap: 40px 20px;
}
.item {
  border: 1px solid var(--va-background-border);
  background-color: var(--va-background-primary);
  text-align: center;
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
