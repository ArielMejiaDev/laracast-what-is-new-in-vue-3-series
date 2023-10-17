<script setup>
import {ref} from "vue";
import ConfirmModal from "./ConfirmModal.vue";

const show = ref(false);
</script>

<template>
  <h1>Confirm Modal As Teleport Example</h1>

  <div class="flex justify-center items-center">
    <button @click="show = !show" class="mt-20 p-2 rounded bg-gray-900 text-gray-50">
      Show Confirm Modal
    </button>
  </div>

  <ConfirmModal title="Are you sure to do this?" v-model:show="show" />
</template>