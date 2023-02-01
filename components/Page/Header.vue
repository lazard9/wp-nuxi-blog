<script lang="ts" setup>
defineProps<{
  title?: string;
}>();
</script>
<template>
  <section class="hero">
    <div class="container">
      <h1 v-if="title" class="text-5xl font-bold flex justify-center items-center">{{ title }}</h1>
      <slot />
    </div>
  </section>
</template>

<style lang="scss">
.hero {
  @apply  px-4 py-16 bg-gray-50;
}
</style>
