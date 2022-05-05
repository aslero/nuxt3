<template>
  <div
    class="tw-bg-white tw-rounded tw-overflow-hidden tw-h-full tw-flex tw-flex-col tw-justify-between tw-shadow-md"
  >
    <nuxt-link
      class="tw-h-[150px] tw-relative tw-w-full"
      :title="shop.name"
      :to="`/shop/${shop.slug}`"
    >
      <img
        v-if="shop.cover"
        :alt="shop.name"
        class="tw-w-full tw-h-full tw-object-cover tw-object-center"
        :src="`${shop.cover}`"
      />
      <div
        class="tw-absolute tw-w-[70px] tw-h-[70px] tw-rounded-full tw-left-[50%] -tw-translate-x-1/2 tw-p-[5px] tw-bg-white -tw-bottom-5"
      >
        <img
          :src="shop.logo"
          class="tw-w-full tw-h-full tw-rounded-full tw-object-cover"
          alt=""
        />
      </div>
    </nuxt-link>
    <div
      class="tw-flex tw-flex-col tw-justify-between tw-pt-5 tw-px-2.5 tw-pb-[15px] tw-w-full"
    >
      <div
        class="tw-text-[15px] tw-font-semibold tw-my-1.5 tw-text-center tw-overflow-hidden tw-whitespace-nowrap"
      >
        {{ shop.name }}
      </div>
      <div :class="$style.info">
        <div :class="$style.infoItem">
          <svg
            :class="$style.infoIcon"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.467,23.316,12,17.828,4.533,23.316,7.4,14.453-.063,9H9.151L12,.122,14.849,9h9.213L16.6,14.453Z"
            />
          </svg>
          410 заказов
        </div>
        <div :class="$style.infoItem">Retail</div>
      </div>
      <div :class="$style.cardDescription">{{ shop.description }}</div>
      <div :class="$style.cardRating">
      </div>
      <NuxtLink
        class="tw-flex tw-items-center tw-justify-center tw-h-[35px] tw-bg-primary-900 tw-text-black tw-text-xs tw-font-bold tw-w-full tw-px-2.5 tw-rounded"
        :title="shop.name"
        :to="`/shop/${shop.slug}`"
        >Перейти в магазин
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  shop: {
    type: Object,
    required: true,
  },
})
</script>

<style lang="scss"></style>

<style lang="scss" module>
.info {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 13px;

  &Item {
    display: flex;
    align-items: center;

    &:not(:first-child) {
      margin-left: 5px;
      padding-left: 5px;

      &:before {
        content: '';
        position: relative;
        left: -5px;
        width: 3px;
        height: 3px;
        border-radius: 50%;
        background-color: var(--font-color-600);
      }
    }
  }

  &Icon {
    margin-right: 5px;
    width: 17px;
    height: 17px;
    fill: var(--color-success);
  }
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--card-background);
  height: 100%;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);

  &Cover {
    position: relative;
    width: 100%;
    height: 120px;
  }

  &Image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  &Logo {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 70px;
    height: 70px;
    border-radius: 50%;
    bottom: -20px;
    z-index: 1;
    padding: 5px;
    background-color: #fff;

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
    }
  }

  &Body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    padding: 20px 10px 15px;
    color: var(--font-color-600);
  }

  &Name {
    color: var(--font-color-600);
    display: block;
    text-align: center;
    margin: 6px 0;
    font-weight: 600;
    font-size: 15px;
    white-space: nowrap;
    overflow: hidden;
  }

  &Description {
    font-size: 12px;
    margin: 15px 0;
    height: 30px;
    overflow: hidden;
  }

  &Rating {
    margin-bottom: 12px;
  }
}
</style>
