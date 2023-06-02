<template>
  <q-dialog>
    <q-card class="confirm-delete">
      <q-card-section class="text-body2 confirm-delete-content">
        {{ title }}
      </q-card-section>

      <q-card-section class="flex justify-end c-mt-32">
        <q-btn
          flat
          no-caps
          class="club-button-background"
          :label="confirmLabel"
          @click="$emit('confirm')"
        />

        <q-btn
          flat
          no-caps
          class="club-button-outline c-ml-32"
          :label="cancelLabel"
          @click="$emit('cancel')"
        />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
const { title, confirmLabel, cancelLabel } = defineProps({
  title: String,
  confirmLabel: String,
  cancelLabel: String,
});

const emit = defineEmits(["confirm", "cancel"]);
</script>

<style scoped lang="scss">
.confirm-delete {
  padding: 32px;
  border-radius: 10px;

  &-content {
    width: 480px;
    max-width: 480px;
  }

  & .q-card__section {
    padding: 0;
  }
}
</style>
