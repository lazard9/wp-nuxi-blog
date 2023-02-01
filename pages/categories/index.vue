<script lang="ts" setup>
import useWpApi from "~~/composables/useWpApi";

const { data: categories } = await useWpApi().getCatgories<any>();

const categoriesWithPosts = categories._value.filter( categoriesValue => {
  if ( categoriesValue.count > 0 ) {
    return categoriesValue;
  }
});
// console.log(categoriesWithPosts);
// console.log(typeof(categoriesWithPosts));


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
    <PageHeader title="Categories!" />

    <!-- Blog Section Starts -->
    <section class="container px-4 py-12">
      <div class="flex flex-wrap gap-5">
        <span v-for="category in categoriesWithPosts">
          <NuxtLink
            :key="category.id"
            :to="`/category/${category.slug}`"
            class="block py-2 px-4 bg-gray-200 hover:bg-gray-300 duration-300 rounded"
          >
            {{ category.name }}
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