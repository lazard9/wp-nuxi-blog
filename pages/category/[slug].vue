<script lang="ts" setup>
const params = useRoute().params;

const { data: categories, error } = await useWpApi().getCatgory<any>(
  params.slug as string
);
const category = categories.value[0];

const { data: posts, error: postsError } = await useWpApi().getPosts<any>(
  category.id
);

// console.log(posts)

useHead({
  title: `Archive: ${category.name}`,
  meta: [
    {
      name: "description",
      content: `Category ${params.slug}`,
    },
  ],
});
</script>

<template>
  <PageHeader :title="`Archive: ${category.name}`"> </PageHeader>
  <section class="blogs blogs-archive">
    <div class="container py-10">
      <div class="grid sm:grid-cols-3 gap-10">
        <BlogGrid
          v-for="post in posts"
          :key="post.id"
          :title="post.title.rendered"
          :image="post._embedded['wp:featuredmedia'][0]?.source_url"
          :imagealt="post._embedded['wp:featuredmedia'][0]?.alt_text"
          :excerpt="post.excerpt.rendered"
          :slug="post.slug"
          :author="post._embedded['author'][0]?.name"
          :authorlink="post._embedded['author'][0]?.link"
        ></BlogGrid>
      </div>
    </div>
  </section>
</template>
