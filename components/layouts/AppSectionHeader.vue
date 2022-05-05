<template>
  <div class="tw-flex tw-items-end tw-mb-5">
    <p class="tw-text-3xm tw-font-semibold tw-text-black tw-m-0">{{ title }}</p>
    <nuxt-link
      v-if="link"
      class="tw-relative tw-text-sm tw-font-medium tw-ml-5 tw-text-info-600"
      :to="slug"
      >{{ link }}
    </nuxt-link>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: null,
  },
  link: {
    type: String,
    default: null,
  },
  slug: {
    type: String,
    default: null,
  },
})
</script>
