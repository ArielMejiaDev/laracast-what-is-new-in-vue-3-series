<script setup>
import {onErrorCaptured, ref} from "vue";
import DadJoke from "./DadJoke.vue";

const suspenseError = ref(null);

onErrorCaptured(error => {
  suspenseError.value = error.message
});
</script>

<template>
  <h1>Here the Dad Joke of the day:</h1>
  <div v-if="suspenseError">
    {{ suspenseError }}
  </div>
  <Suspense v-else>
    <template #default>
      <DadJoke />
    </template>
    <template #fallback>
      Loading...
    </template>
  </Suspense>
</template>