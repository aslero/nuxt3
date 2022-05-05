<template>
  <header
    class="header tw-fixed tw-bg-default-700 tw-left-0 tw-top-0 tw-right-0 tw-z-20"
  >
    <div class="tw-container tw-mx-auto">
      <div class="tw-flex tw-items-center tw-justify-between tw-h-15">
        <nuxt-link to="/" class="tw-text-white tw-font-bold"
          >Flora Chain</nuxt-link
        >
        <div class="tw-flex tw-items-center">
          <button
            class="tw-flex tw-items-center tw-h-[35px] tw-bg-primary-900 tw-text-black tw-px-6 tw-rounded tw-text-sm tw-font-semibold tw-cursor-pointer"
          >
            <IconAlignLeft class="tw-w-5 tw-h-5 tw-mr-2.5" /> Каталог
          </button>
          <div class="tw-w-[600px] tw-ml-5">
            <LayoutsAppSearch />
          </div>
        </div>
        <div class="tw-flex tw-items-center">
          <div class="tw-relative tw-ml-7 tw-mr-12">
            <div class="tw-flex tw-items-center tw-font-semibold">
              <div
                class="tw-flex tw-items-center tw-text-xs tw-text-light-900 tw-cursor-pointer"
              >
                Ваш город
                <span
                  class="tw-relative tw-text-base tw-text-primary-900 tw-ml-2.5 after:tw-content-[''] after:tw-absolute after:tw-left-0 after:tw-w-full after:tw-bottom-[-1px] after:tw-h-[1px] after:tw-bg-primary-900"
                  >Уфа</span
                >
              </div>
            </div>
          </div>
          <button
            type="button"
            class="tw-flex tw-items-center tw-justify-center tw-h-[35px] tw-px-6 tw-rounded tw-text-sm tw-font-semibold tw-cursor-pointer tw-bg-info-800 tw-text-white"
          >
            <IconShoppingBag
              class="tw-w-4 tw-h-4 tw-mr-2.5 tw-fill-primary-900"
            />
            Корзина:
            <span class="tw-ml-1">0</span>
          </button>
          <nuxt-link
            to="/profile"
            class="tw-h-[35px] tw-w-[35px] tw-flex tw-items-center tw-justify-center tw-rounded-[5px] tw-ml-5 tw-bg-primary-900"
          >
            <IconUser class="tw-w-4 tw-h-4 tw-fill-black" />
          </nuxt-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import IconAlignLeft from '~/assets/icons/svg/align-left.svg?component'
import IconShoppingBag from '~/assets/icons/svg/shopping-bag.svg?component'
import IconUser from '~/assets/icons/svg/user.svg?component'
</script>

<style scoped></style>
