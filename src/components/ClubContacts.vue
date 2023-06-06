<template>
  <section class="section-margin map">
    <div class="row" v-if="width > 500">
      <div class="col-6"></div>
      <div class="col-6">
        <div class="flex flex-center q-pt-xl">
          <c-write-to-us-form />
        </div>
      </div>
    </div>
    <c-write-to-us-form v-else />
  </section>
</template>

<script setup>
import CWriteToUsForm from "src/components/ClubWriteToUsForm.vue";

const width = window.screen.width;
</script>

<style scoped lang="scss">
.card {
  padding: 32px 95px;
  background-color: #260f4a;

  margin-bottom: 66px;
}

.map {
  margin-bottom: 160px;
  background-image: url("/assets/images/landing/map.png");
  background-size: cover;
  background-repeat: no-repeat;
  height: 40rem;
  @media (min-width: 2000px) {
    height: 120vh;
  }

  @media (max-width: 500px) {
    background: none;
  }
}
</style>
