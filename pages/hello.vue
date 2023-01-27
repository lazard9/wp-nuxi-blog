<script lang="ts" setup>
const { params } = useRoute();
useHead({
  title: "Hello",
  meta: [
    {
      name: "description",
      content: "Hello",
    },
  ],
  titleTemplate: "Lazars Test Blog",
});
</script>
<template>
  <main>
    <div class="text-5xl font-bold flex justify-center items-center h-screen">Hello page!<br>{{ params }}</div>
  </main>
</template>
