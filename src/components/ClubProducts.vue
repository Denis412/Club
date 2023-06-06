<template>
  <section class="section-margin text-center container my-section">
    <div class="text-h3 q-mb-xl">Наши продукты</div>

    <q-list class="flex" :class="width < 500 ? 'flex-center' : 'justify-between'">
      <c-product-item
        v-for="product in products"
        :key="product.id"
        v-bind="product"
        class="q-mt-md"
      />
    </q-list>
  </section>
</template>

<script setup>
import CProductItem from "src/components/ClubProductItem.vue";
import { ref } from "vue";

const width = window.screen.width;
const products = ref([
  {
    id: 1,
    title: "Акселератор 1Т Клуб",
    imageUrl: "/assets/images/landing/product-arrow.svg",
  },
  {
    id: 2,
    title: "Радио 1Т Клуб",
    imageUrl: "/assets/images/landing/product-arrow.svg",
  },
  {
    id: 3,
    title: "Мероприятия 1Т Клуб",
    imageUrl: "/assets/images/landing/product-arrow.svg",
  },
]);
</script>

<style lang="scss" scoped>
.my-section {
  margin-bottom: 160px;
}
</style>
