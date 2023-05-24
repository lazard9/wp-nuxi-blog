<script lang="ts" setup>
import useWpApi from "~~/composables/useWpApi";

const { data: authors } = await useWpApi().getAuthors<any>();

const filterAuthors = authors._rawValue.filter( filterAuthors => {
  return filterAuthors;
});
// console.log(filterAuthors);
// console.log(typeof(filterAuthors));

useHead({
  title: "Categories",
  meta: [
    {
      name: "description",
      content: "Categories",
    },
  ],
});
</script>
<template>
  <main>
    <PageHeader title="Authors!" />

    <!-- Blog Section Starts -->
    <section class="container px-4 py-12">
      <div class="flex flex-wrap gap-5">
        <span v-for="author in filterAuthors">
          <NuxtLink
            :key="author.id"
            :to="author.link"
            class="block py-2 px-4 bg-gray-200 hover:bg-gray-300 duration-300 rounded"
          >
            {{ author.name }}
          </NuxtLink>
        </span>
      </div>
    </section>
    <!-- Blog Section Ends  -->
  </main>
</template>
<style lang="scss">
.hero__title {
  @apply text-4xl font-bold;
}

.hero__des {
  @apply text-xl;
}
</style>