<template>
  <div class="card q-my-sm q-mx-md text-subtitle5">{{ name }}</div>
</template>

<script setup>
const { name } = defineProps({
  name: String,
});
</script>

<style scoped>
.card {
  color: rgba(206, 185, 214, 1);
  padding: 12px 24px;
  border: 1px solid;
  border-radius: 16px;

  @media (max-width: 1000px) {
    padding: 10px 10px;
    font-size: 12px !important;
  }

  @media (max-width: 1200px) and (min-width: 700px) {
    font-size: 10px;
  }
}
</style>
