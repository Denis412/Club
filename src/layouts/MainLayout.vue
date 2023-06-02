<template>
  <q-layout view="hHh LpR lff">
    <c-main-header />

    <q-page-container v-if="currentUser">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </q-page-container>

    <c-main-footer />
  </q-layout>
</template>

<script setup>
import { computed, provide } from "vue";

import CMainHeader from "src/components/ClubMainHeader.vue";
import CMainFooter from "src/components/ClubMainFooter.vue";

import userApi from "src/sdk/user";

const { result: fetchUser } = userApi.paginateSubjects();
const currentUser = computed(() => fetchUser.value?.paginate_subject.data[0]);

provide("currentUser", currentUser);
</script>

<style lang="scss"></style>
