<template>
  <div class="tw-flex tw-items-center tw-justify-between -tw-mx-2">
    <NuxtLink
      v-for="(category, index) in categories"
      :key="index"
      :to="`/category/${category.slug}`"
      class="tw-px-2"
    >
      <div
        class="tw-w-30 tw-h-30 tw-bg-white tw-p-[13px] tw-flex tw-flex-col tw-items-center tw-justify-center tw-rounded tw-shadow-md tw-border hover:tw-border-primary-900"
      >
        <img
          :src="`${category.image}`"
          :alt="category.name"
          class="tw-h-15 tw-w-auto"
        />
        <span class="tw-text-xs tw-mt-1 tw-font-semibold tw-text-center">{{
          category.name
        }}</span>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { useCategoryStore } from '~/store/categories'
const store = useCategoryStore()

const categories = store.getCategories
</script>

<style scoped></style>
