<template>
  <Swiper :slides-per-view="6" :space-between="20">
    <SwiperSlide v-for="item in banners" :key="item.id">
      <div
        class="tw-max-w-[260px] tw-w-full tw-max-h-[160px] tw-rounded-[10px] tw-overflow-hidden"
      >
        <img :src="item.image" alt="" />
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Banner } from '~/types/banner'
import 'swiper/css'

const props = defineProps({
  banners: {
    type: Array as PropType<Banner[]>,
    default: () => [],
  },
})
</script>
