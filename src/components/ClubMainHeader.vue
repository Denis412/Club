<template>
  <q-header class="header-main flex flex-center bg-dark-purple c-px-32">
    <q-toolbar>
      <q-toolbar-title class="flex no-wrap items-center">
        <q-img
          class="logo cursor-pointer"
          src="/assets/images/logo-white.svg"
          @click="toRoot"
          alt="logo"
        />
        <span class="text-h3" @click="toRoot"><span class="desktop-only q-ml-md">Клуб</span></span>
        <q-tabs class="navigation main-tabs cursor-pointer desktop-only">
          <q-route-tab
            no-caps
            name="business"
            label="Для Бизнеса"
            class="rounded-borders"
            to="business"
          />

          <q-route-tab no-caps name="work" label="Для Работы" class="rounded-borders" to="work" />

          <q-route-tab
            no-caps
            name="development"
            label="Для Развития"
            class="rounded-borders"
            to="development"
          />
        </q-tabs>
      </q-toolbar-title>

      <div v-if="!currentUser" class="row">
        <q-btn
          flat
          no-caps
          to="/registration"
          class="club-button-background-square text-button1 q-px-lg my-btn"
          label=" Вступить в 1T клуб"
        />

        <q-btn
          flat
          no-caps
          to="/authentication"
          label="Войти"
          class="club-button-outline-text-colored-square text-button1 bg-dark-purple q-ml-md q-px-lg my-btn"
        />
      </div>

      <div v-else class="flex flex-center">
        <div class="relative-position">
          <q-avatar
            class="cursor-pointer relative-position header-avatar"
            @click="toggleShowIconMenu"
          >
            <q-img :src="currentUser?.avatar || '/assets/images/preloaders/default-avatar.svg'" />
          </q-avatar>

          <transition name="slide">
            <c-right-person-menu v-if="showIconMenu" :current-user="currentUser" />
          </transition>
        </div>
      </div>
    </q-toolbar>
  </q-header>
</template>

<script setup>
import { ref, inject } from "vue";

import CRightPersonMenu from "./ClubRightPersonMenu.vue";
import { useRoute, useRouter } from "vue-router";

const currentUser = inject("currentUser");

const route = useRoute();
const router = useRouter();
const showIconMenu = ref(false);

const toggleShowIconMenu = () => {
  showIconMenu.value = !showIconMenu.value;

  showIconMenu.value
    ? document.body.addEventListener("click", (event) => {
        const clicked = event.target;

        if (!clicked.closest(".header-avatar") && !clicked.closest(".dropdown"))
          showIconMenu.value = false;
      })
    : document.body.removeEventListener("click");
};

const toRoot = () => {
  router.push({
    path: "/",
  });
};
</script>

<style scoped lang="scss">
.logo {
  max-width: 40px;
}
.my-btn {
  @media (max-width: 992px) {
    padding: 0 10px;
  }
}
.header-avatar {
  width: 64px;
  height: 64px;
}

.navigation {
  margin-left: 132px;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(300px);
}

.slide-enter-to,
.slide-leave-from {
  transform: translateX(0);
}

.slide-enter-active,
.slide-leave-active {
  transition: 0.4s all;
}
</style>
