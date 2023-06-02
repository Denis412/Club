<template>
  <q-page class="bg-dark-purple h-100p no-scroll" style="overflow-x: hidden">
    <c-background-spot />

    <main class="text-white relative-position" style="z-index: 1">
      <c-main-screen
        :title="'Для Работы'"
        :subtitle="'1Т Клуб — работа и стажировка для IT-специалистов  от джуна до сеньора. С нами вы найдете подходящий IT-проект и построите карьеру сразу после обучения'"
        :img="'assets/images/landing-work/amico.svg'"
        :video="false"
      />
      <c-directions
        :title="'Присоединяйтесь к экосистеме 1Т клуба, если вы'"
        :cards-list="cardsList"
        :btn-content="'Вступить в 1Т Клуб'"
      />
      <c-advantages :content-list="contentList" />
      <c-space />
      <c-experts />
      <c-teams />
      <c-string />
      <c-video-reviews />
      <!-- нужны видео -->
    </main>
  </q-page>
</template>

<script setup>
import CSpace from "src/components/ClubSpace.vue";
import CBackgroundSpot from "src/components/ClubBackgroundSpot.vue";
import CAdvantages from "src/components/ClubAdvantages.vue";
import CString from "src/components/ClubString.vue";
import CMainScreen from "src/components/ClubMainScreen.vue";
import CExperts from "src/components/ClubExperts.vue";
import CTeams from "src/components/ClubTeams.vue";
import CVideoReviews from "src/components/ClubVideoReviews.vue";
import CDirections from "src/components/ClubDirections.vue";

const cardsList = [
  {
    id: 1,
    title: "Фрилансер",
    content: [
      "Хотите сами выбирать, с кем работать в IT-проекте",
      "Желаете быстрее расти профессионально в IT",
      "Нужны IT-специалисты для совместного решения сложных задач",
    ],
    to: "registration",
  },
  {
    id: 2,
    title: "Эксперт",
    content: [
      "Не знаете, как повысить квалификацию в сфере IT",
      "У вас большой опыт в IT, и вы готовы им делиться",
      "Хотите стать IT-ментором",
    ],
    to: "registration",
  },
  {
    id: 3,
    title: "Новичок",
    content: [
      "Прошли IT-курсы, но для работы нужен опыт",
      "Работаете самостоятельно, но нужна поддержка ментора",
      "Хотите сделать IT-проект проект для портфолио",
    ],
    to: "registration",
  },
];

const contentList = [
  {
    id: 1,
    content: "Получение IT-заказов от лидирующих  компаний на рынке",
  },
  {
    id: 2,
    content: "Улучшение своих навыков благодаря наставничеству IT-экспертов",
  },
  {
    id: 3,
    content: "Заказы для  IT-специалистов любого уровня",
  },
  {
    id: 4,
    content: "Консультации  и менторская поддержка при работе над IT-проектами",
  },
  {
    id: 5,
    content: "Защита IT-cделок от финансовых рисков и безопасность сделок",
  },
];
</script>
