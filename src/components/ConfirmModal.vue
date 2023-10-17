<script setup>
defineProps({
  show: {
    type: Boolean,
    default: false
  },
  title: String,
  info: String,
  confirm: {
    type: String,
    default: 'Save',
  },
  cancel: {
    type: String,
    default: 'Cancel'
  }
});
</script>

<template>
  <teleport to="#modal">
    <Transition>
      <template v-if="show">
        <div @click="$emit('update:show', false)" class="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10">
          <div class="max-h-full w-full max-w-xl overflow-y-auto sm:rounded-2xl bg-white">
            <div class="w-full">
              <div class="m-8 my-20 max-w-[400px] mx-auto">
                <div class="mb-8">
                  <h1 v-if="title" class="mb-4 text-3xl font-extrabold capitalize">{{ title }}</h1>
                  <p v-if="info" class="text-gray-600">{{ info }}</p>
                </div>
                <div class="space-y-4">
                  <button class="p-3 bg-black rounded-full text-white w-full font-semibold">{{ confirm }}</button>
                  <button @click="$emit('update:show', false)" class="p-3 bg-white border rounded-full w-full font-semibold">{{ cancel }}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </Transition>
  </teleport>
</template>

<style scoped>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>