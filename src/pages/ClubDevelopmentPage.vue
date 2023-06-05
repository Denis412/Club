<template>
  <q-page class="bg-dark-purple h-100p no-scroll" style="overflow-x: hidden">
    <c-background-spot />

    <main class="text-white relative-position" style="z-index: 1">
      <c-main-screen
        :title="'Для Развития'"
        :subtitle="'1Т Клуб — это площадка, на которой IT-специалисты находят работу и профессионально развиваются'"
        :img="'/assets/images/landing-develop/develop-main.svg'"
      />

      <c-suggestion />
      <c-experts />
      <c-work />
      <c-teams />
      <c-banner />
      <c-course-sprint />
      <c-course-ai />
      <!-- нужен адаптив видео -->
      <!-- <c-networking /> -->
      <c-partners />
      <c-string />
      <c-video-reviews />
    </main>
  </q-page>
</template>

<script setup>
import CBackgroundSpot from "src/components/ClubBackgroundSpot.vue";
import CString from "src/components/ClubString.vue";
import CMainScreen from "src/components/ClubMainScreen.vue";
import CSuggestion from "src/components/ClubSuggestion.vue";
import CPartners from "src/components/ClubPartners.vue";
import CExperts from "src/components/ClubExperts.vue";
import CWork from "src/components/ClubWork.vue";
import CTeams from "src/components/ClubTeams.vue";
import CBanner from "src/components/ClubBanner.vue";
import CCourseSprint from "src/components/ClubCourseSprint.vue";
import CCourseAi from "src/components/ClubCourseA.vue";
import CNetworking from "src/components/ClubNetworking.vue";
import CVideoReviews from "src/components/ClubVideoReviews.vue";
</script>
