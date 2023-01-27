<script lang="ts" setup></script>
<template>
  <nav class="bg-gray-900 text-white py-5 border-b border-gray-700">
    <div
      class="container mx-auto flex flex-col sm:flex-row justify-center gap-3 sm:gap-0 sm:justify-between items-center"
    >
      <NuxtLink to="/" class="text-2xl font-medium">EnergySage Blog</NuxtLink>
      <ul class="inline-flex gap-2">
        <li>
          <NuxtLink to="/">Home</NuxtLink> 
        </li>
        <li>
          <NuxtLink to="/categories">Categories</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/authors">Authors</NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
