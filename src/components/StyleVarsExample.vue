<script setup>
import {ref} from "vue";

const textColor = ref('white');
</script>

<template>
  <h1>Here an example of a button with a background color using Style Vars</h1>

  <button class="custom">Simple Button Example</button>
</template>

<style scoped>
.custom {
  color: v-bind('textColor');
  @apply p-2 rounded bg-indigo-500;
}
</style>