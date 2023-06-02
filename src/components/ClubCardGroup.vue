<template>
  <q-list v-if="items" class="flex justify-between card-items">
    <c-items-card v-for="card in items" :key="card.title" v-bind="card" />
  </q-list>

  <q-list v-else-if="directions" class="row justify-between q-mt-md">
    <c-directions-card
      v-for="card in directions"
      :key="card.id"
      v-bind="card"
      :btnContent="btnContent"
      :to="card.to"
    />
  </q-list>

  <q-list v-else-if="offers" class="row justify-between q-mt-md">
    <c-business-offers-card
      v-for="card in offers"
      :key="card.id"
      v-bind="card"
    />
  </q-list>
</template>

<script setup>
import CItemsCard from "components/ClubItemsCard.vue";
import CDirectionsCard from "components/ClubDirectionsCard.vue";
import CBusinessOffersCard from "components/ClubBusinessOffersCard.vue";

const { items, directions, offers, btnContent } = defineProps({
  btnContent: String,
  items: Object,
  directions: Object,
  offers: Object,
});
</script>

<style scoped lang="scss">
.card-items {
  margin-top: 44px;
  padding: 0 90px;
}
</style>
