<template>
  <q-form class="form rounded-borders-12 flex column q-mt-xl" @submit="sendEmail">
    <header class="text-h4 club-mb-32 text-center">Напишите нам</header>

    <main style="width: 100%">
      <div class="form-control">
        <q-input
          flat
          borderless
          outlined
          id="firstName"
          class="c-input-outline-white text-caption1"
          type="text"
          placeholder="Ваше имя"
          :rules="[required]"
          lazy-rules
          v-model="form.first_name"
        />
      </div>

      <div class="form-control">
        <q-input
          flat
          outlined
          id="phoneNumber"
          class="text-caption1 c-input-outline-white"
          type="text"
          mask="+# (###) ###-##-##"
          placeholder="Номер телефона"
          v-model="form.phone_number"
          :rules="[required]"
          lazy-rules
        />
      </div>

      <div class="form-control" style="height: 150px">
        <q-input
          flat
          outlined
          type="textarea"
          autogrow
          class="text-caption1 c-input-outline-white c-input-area-mh gray-scrollbar-input"
          placeholder="Сообщение"
          v-model="form.message"
          :rules="[required]"
          lazy-rules
        />
      </div>
    </main>

    <footer class="flex justify-between q-mt-md" style="width: 100%">
      <q-checkbox
        keep-color
        dark
        class="text-caption2 q-mb-lg"
        style="max-width: 300px; color: rgba(164, 152, 183, 1)"
        v-model="form.checked"
        label="Даю согласие на обработку данных"
      />

      <q-btn
        flat
        no-caps
        :disable="!form.checked"
        class="club-button-background-square text-body1 my-btn q-px-lg q-py-md"
        type="submit"
        label="Отправить"
      />
    </footer>
  </q-form>
</template>

<script setup>
import { ref } from "vue";
import emailjs from "@emailjs/browser";

import { useQuasar } from "quasar";
import { useValidators } from "src/use/validators";

const $q = useQuasar();
const { required } = useValidators();

const form = ref({
  first_name: "",
  phone_number: "",
  message: "",
  checked: false,
});

const sendEmail = () => {
  emailjs
    .send(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_TEMPLATE_WRITE_ID,
      form.value,
      process.env.EMAILJS_PUBLIC_KEY
    )
    .then(
      (result) => {
        form.value = {
          first_name: "",
          phone_number: "",
          message: "",
          checked: false,
        };
      },
      (error) => {
        console.log("FAILED...", error.text);
      }
    );

  $q.notify({
    type: "positive",
    position: "top",
    message: "Сообщение отправлено.",
  });
};
</script>

<style scoped lang="scss">
.form {
  max-width: 448px;
  width: 448px;
  background: linear-gradient(
      101.5deg,
      rgba(16, 5, 34, 0.05) 37.03%,
      rgba(187, 173, 209, 0.04) 80.19%,
      rgba(16, 5, 34, 0.14) 100%
    ),
    rgba(18, 7, 36, 0.95);
  padding: 2rem 2rem;
  margin-left: 10rem;

  @media (max-width: 500px) {
    margin-left: 0rem;
    width: 100%;
  }

  &-control {
    margin-top: 1rem;
  }
}

.my-btn {
  width: 100%;
}
</style>
