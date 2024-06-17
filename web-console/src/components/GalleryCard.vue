<script setup lang="ts">
const props = defineProps({
  img: String,
  title: String
})
</script>
<template>
  <VaCard>
    <VaImage height="300px" :ratio="4 / 3" :src="props.img" />
    <VaCardTitle>{{ props.title }}</VaCardTitle>
  </VaCard>
</template>
