<script setup lang="ts">
import {ref} from "vue";
import type Post from '../types/Post.ts'

const firstPost = <Post>({
  id: 1,
  title: 'Banana Bread Recipe',
  cover_image: {
    src: 'banana_bread.png'
  },
  categories: [
    {
      name: 'First Category',
    },
    {
      name: 'Second Category',
    },
  ]
});

const secondPost = <Post>({
  id: 2,
  title: 'Apple Pie Recipe',
  cover_image: {
    src: 'apple_pie.png'
  },
  categories: [
    {
      name: 'Third Category',
    },
    {
      name: 'Fourth Category',
    },
  ]
});

const posts = ref<Array <Post>>([
    firstPost,
    secondPost
])
</script>

<template>

  <h1>Typescript example</h1>

  <ul v-for="post in posts" :key="post">
    <li>{{ post.title }}</li>
  </ul>
</template>