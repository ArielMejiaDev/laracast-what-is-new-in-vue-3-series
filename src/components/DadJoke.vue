<script setup>
import {ref} from "vue";
import axios from "axios";

const joke = await fetchJoke();
const error = ref(null);

async function fetchJoke() {
  const response = await axios.get('https://icanhazdadjoke.com', {
    headers: {'Accept': 'application/json'}
  })

  console.log(response.data.joke);
  return response.data.joke;
}
</script>

<template>
  <blockquote>{{ joke }}</blockquote>
</template>