<template>
  <q-page class="bg-dark-purple h-100p" style="overflow-x: hidden">
    <c-background-spot style="z-index: 0" />

    <main class="text-white relative-position" style="z-index: 1">
      <c-main-screen
        :title="'1Т Клуб'"
        :subtitle="'1Т Клуб - сообщество единомышленников, которых объединяет страсть к работе и саморазвитию.'"
        :img="'/assets/images/amico_landing.svg'"
        :video="true"
      />
      <c-directions
        :title="'Выберите направление'"
        :cards-list="cardsList"
        :btn-content="'Перейти'"
      />
      <c-statistics />
      <c-about />
      <c-clients />
      <c-how-join />
      <c-eco-system />
      <c-steps />
      <c-partners />
      <c-products />
      <c-string />
      <c-comments />
      <c-community />
      <c-questions />
      <c-contacts />
    </main>
  </q-page>
</template>

<script setup>
import CString from "src/components/ClubString.vue";
import CMainScreen from "src/components/ClubMainScreen.vue";
import CDirections from "src/components/ClubDirections.vue";
import CStatistics from "src/components/ClubStatistics.vue";
import CSteps from "src/components/ClubSteps.vue";
import CAbout from "src/components/ClubAbout.vue";
import CClients from "src/components/ClubClients.vue";
import CPartners from "src/components/ClubPartners.vue";
import CProducts from "src/components/ClubProducts.vue";
import CComments from "src/components/ClubComments.vue";
import CBackgroundSpot from "src/components/ClubBackgroundSpot.vue";
import CCommunity from "src/components/ClubCommunity.vue";
import CHowJoin from "src/components/ClubHowJoin.vue";
import CQuestions from "src/components/ClubQuestions.vue";
import CContacts from "src/components/ClubContacts.vue";
import CEcoSystem from "src/components/ClubEcoSystem.vue";

const cardsList = [
  {
    id: 1,
    title: "Для Бизнеса",
    content: [
      "IT-ментор для поиска точек роста в вашем бизнесе",
      "Команды IT-специалистов для развития бизнес-проектов",
    ],
    to: "business",
  },
  {
    id: 2,
    title: "Для Работы",
    content: [
      "Фриланс заказы для IT-специалистов",
      "Стажировка в 1Т Клубе",
      "Работа над  IT-проектом в укомплектованных командах",
    ],
    to: "work",
  },
  {
    id: 3,
    title: "Для Развития",
    content: [
      "Онлайн-обучение IT-профессиям",
      "База IT-знаний",
      "Консультации IT-экспертов",
    ],
    to: "selfdevelopment",
  },
];
</script>
