<template>
  <q-page class="bg-dark-purple h-100p no-scroll" style="overflow-x: hidden">
    <c-background-spot />

    <main class="text-white relative-position" style="z-index: 1">
      <c-main-screen
        :title="'Для Бизнеса'"
        :subtitle="'1Т Клуб — это поддержка, наставничество и полная вовлеченность в ваш IT-проект'"
        :img="'/assets/images/landing-business/amico.svg'"
        :video="false"
        :request="true"
        :request-block="requestBlock"
      />
      <c-business-offers />
      <c-advantages :content-list="contentList" />
      <c-string />
      <c-business-tools />
      <c-join-business />
      <c-best-teams />
      <c-tasks />
      <c-faq />
      <c-request id="requestBlock" />
    </main>
  </q-page>
</template>

<script setup>
import CBackgroundSpot from "src/components/ClubBackgroundSpot.vue";
import CMainScreen from "src/components/ClubMainScreen.vue";
import CBusinessOffers from "src/components/ClubBusinessOffers.vue";
import CAdvantages from "src/components/ClubAdvantages.vue";
import CString from "src/components/ClubString.vue";
import CBusinessTools from "src/components/ClubBusinessTools.vue";
import CJoinBusiness from "src/components/ClubJoinBusiness.vue";
import CBestTeams from "src/components/ClubBestTeams.vue";
import CTasks from "src/components/ClubTasks.vue";
import CFaq from "src/components/ClubFAQ.vue";
import CRequest from "src/components/ClubRequest.vue";

import { ref, onMounted } from "vue";

const contentList = [
  {
    id: 1,
    content: "Оценка квалификации IT-специалиста с помощью тестового задания",
  },
  {
    id: 2,
    content:
      "Услуги наставника, который доступно объяснит информацию по разработке и продвижению IT-проекта",
  },
  {
    id: 3,
    content: "Выбор IT-специалиста или IT-команды по рейтингу и отраслям",
  },
  {
    id: 4,
    content:
      "Возможность наблюдать за работой над IT-проектом с помощью сервиса для управления задачами",
  },
];

const requestBlock = ref(null);

onMounted(() => {
  requestBlock.value = document.querySelector("#requestBlock");
});
</script>

<style scoped lang="scss"></style>
