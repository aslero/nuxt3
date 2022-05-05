<template>
  <div
    class="tw-flex tw-flex-col tw-justify-between tw-rounded tw-bg-white tw-overflow-hidden"
  >
    <NuxtLink
      :to="`/shop/florachain/products/${product.slug}`"
      :title="product.name"
      class="tw-relative tw-block tw-h-[210px] tw-w-full"
    >
      <img
        v-if="product.image"
        :alt="product.name"
        class="tw-w-full tw-h-full tw-object-cover tw-object-center"
        :src="`${product.image}`"
      />
    </NuxtLink>
    <div
      class="cardBody tw-flex tw-flex-col tw-justify-between tw-w-full tw-py-[15px] tw-px-2.5"
    >
      <div class="cardText">
        <nuxt-link
          class="tw-mb-2.5 tw-block tw-text-center tw-text-[15px] tw-font-semibold tw-text-black"
          :title="product.name"
          :to="`/shop/florachain/products/${product.slug}`"
          >{{ product.name }}
        </nuxt-link>
        <div
          class="tw-flex tw-items-center tw-justify-center tw-mb-2.5 tw-text-base tw-font-extrabold"
        >
          <span v-if="product.oldPrice" class="cardPriceOld"
            >{{ product.oldPrice }} ₽</span
          >
          {{ product.price }} ₽
        </div>
      </div>
      <div class="tw-flex tw-justify-between">
        <button
          class="tw-h-[35px] tw-bg-primary-900 tw-text-black tw-text-xs tw-font-bold tw-w-[130px] tw-px-2.5 tw-rounded"
          type="button"
          @click.prevent="quickOrder()"
        >
          Купить в 1 клик
        </button>
        <button
          class="tw-h-[35px] tw-bg-translate tw-border-[2px] tw-border-black tw-text-black tw-text-xs tw-font-bold tw-px-2.5 tw-rounded tw-w-[90px] tw-ml-2"
          type="button"
          @click.prevent="addToCart(product)"
        >
          В корзину
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  product: {
    type: Object,
    default: () => {},
  },
})
</script>

<style scoped></style>
