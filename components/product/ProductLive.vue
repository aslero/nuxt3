<template>
  <div class="tw-bg-primary-900 tw-mb-[50px]">
    <div class="container tw-relative">
      <div class="tw-relative tw-py-[50px]">
        <div
          class="liveText tw-absolute tw-h-full tw-top-0 tw-left-0 tw-flex tw-flex-col tw-justify-around"
        >
          <IconFl class="tw-absolute tw-h-full tw-w-auto" />
        </div>
        <div class="liveCatalog tw-flex-1 tw-pl-[100px] tw-overflow-hidden">
          <Swiper :slides-per-view="6" :space-between="14">
            <SwiperSlide v-for="(product, index) in products" :key="index">
              <ProductItem :product="product" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconFl from '~/assets/icons/svg/fl.svg?component'

import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

const props = defineProps({
  products: {
    type: Array,
    default: () => [],
  },
})
</script>

<style lang="scss">
@media (min-width: 1536px) {
  .container {
    padding-left: calc(50vw - calc(1536px / 2));
  }
}
</style>
