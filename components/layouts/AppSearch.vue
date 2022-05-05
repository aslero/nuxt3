<template>
  <div class="tw-relative tw-w-full">
    <div
      class="tw-relative tw-flex tw-items-center tw-w-full tw-h-[35px] tw-rounded tw-overflow-hidden"
    >
      <input
        type="text"
        @focus="isResult = true"
        class="tw-w-full tw-h-full tw-px-[15px] tw-bg-white tw-border-none tw-outline-none"
        placeholder="Введите название товара"
      />
      <button
        class="tw-absolute tw-right-0 tw-flex tw-items-center tw-justify-center tw-bg-primary-900 tw-h-full tw-px-4"
      >
        <span class="tw-text-base tw-font-bold tw-mr-2">Поиск</span>
        <IconSearch class="tw-w-4 tw-h-4" />
      </button>
    </div>
    <div
      v-if="isResult"
      class="tw-bg-overlay-600 tw-z-[5] tw-fixed tw-top-15 tw-left-0 tw-right-0 tw-bottom-0"
    ></div>
    <div
      v-if="isResult"
      class="tw-absolute tw-z-10 tw-top-[45px] tw-w-full tw-bg-white tw-rounded tw-overflow-hidden tw-pt-5"
    >
      <div class="">
        <div
          class="tw-text-sm tw-font-medium tw-px-5 tw-mb-2.5 tw-text-light-900"
        >
          <span class="tw-text-black">Композиция</span> Солейрол
        </div>
        <div
          class="tw-text-sm tw-font-medium tw-px-5 tw-mb-2.5 tw-text-light-900"
        >
          <span class="tw-text-black">Композиция</span> в ящике
        </div>
        <div
          class="tw-text-sm tw-font-medium tw-px-5 tw-mb-2.5 tw-text-light-900"
        >
          <span class="tw-text-black">Композиция</span> из стабилизированных
          цветов и сухоцветов
        </div>
        <div
          class="tw-text-sm tw-font-medium tw-px-5 tw-mb-2.5 tw-text-light-900"
        >
          <span class="tw-text-black">Композиция</span> и пирожное макарон
        </div>
        <div
          class="tw-text-sm tw-font-medium tw-px-5 tw-mb-2.5 tw-text-light-900"
        >
          <span class="tw-text-black">Композиция</span> и клубника в шоколаде
        </div>
      </div>
      <div class="">
        <div
          v-for="product in products"
          :key="product.id"
          class="tw-flex tw-items-center tw-cursor-pointer tw-px-5 tw-py-[15px] tw-bg-white tw-border-b tw-border-slate-100 last:tw-border-b-0 hover:tw-bg-gray-25"
        >
          <div
            class="tw-w-15 tw-max-h-15 tw-rounded tw-overflow-hidden tw-mr-4"
          >
            <img
              :src="product.image"
              :alt="product.name"
              class="tw-w-full tw-h-full tw-object-cover tw-object-center"
            />
          </div>
          <div class="tw-flex tw-flex-1 tw-flex-col">
            <span class="tw-text-base tw-font-semibold tw-mb-1.5">{{
              product.name
            }}</span>
            <span class="tw-text-base tw-font-extrabold">{{
              product.price
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconSearch from '~/assets/icons/svg/search.svg?component'

const isResult = ref(false)

const products = reactive([
  {
    id: 1,
    name: 'Букет из 101 розовой розы',
    image:
      'https://content2.flowwow-images.com/data/flowers/1000x1000/98/1627489421_83382698.jpg',
    price: '11 750 руб.',
    slug: 'product-1',
  },
  {
    id: 2,
    name: 'Букет из 101 розовой розы',
    image:
      'https://content2.flowwow-images.com/data/flowers/1000x1000/98/1627489421_83382698.jpg',
    price: '11 750 руб.',
    slug: 'product-1',
  },
])
</script>

<style scoped></style>
