<template>
  <div class="tw-pt-[15px]">
    <div class="tw-container tw-mx-auto tw-mb-5">
      <BannersBannerScroll :banners="banners" />
    </div>
    <div class="tw-container tw-mx-auto tw-mb-5">
      <CategoriesAppCategories />
    </div>
    <ProductLive :products="products" />
    <div class="tw-container tw-mx-auto">
      <div class="tw-flex -tw-mx-[15px]">
        <div class="tw-flex-[0_0_25%] tw-max-w-[25%] tw-px-[15px]">
          <div class="tw-sticky tw-top-[80px]">
            <div class="">
              <LazyLayoutsAppSectionHeader
                link="Смотреть все"
                slug="/site/blog"
                title="Клиенты"
              />
            </div>
            <div class="">
              <LazyLayoutsAppSectionHeader
                link="Смотреть все"
                slug="/site/blog"
                title="Истории"
              />
            </div>
            <div class="">
              <LazyLayoutsAppSectionHeader
                link="Смотреть все"
                slug="/site/blog"
                title="Новости"
              />
            </div>
          </div>
        </div>
        <div class="tw-flex-[0_0_75%] tw-max-w-[75%] tw-px-[15px]">
          <LazyLayoutsAppSectionHeader
            link="Смотреть все"
            slug="/site/blog"
            title="Магазины"
          />
          <div class="tw-flex tw-flex-wrap">
            <div
              v-for="shop in shops"
              :key="shop.id"
              class="tw-w-3/12 tw-px-[7.5px] tw-mb-[15px]"
            >
              <ShopItem :shop="shop" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Banner } from '~/types/banner'

const banners = reactive<Banner[]>([
  {
    id: 1,
    shopId: 1,
    image:
      'https://r.mradx.net/img/65/F00CA6.jpg?resize=fit&width=4096&height=324&gravity=ce&out=webp',
  },
  {
    id: 2,
    shopId: 1,
    image:
      'https://r.mradx.net/img/36/895FE9.jpg?resize=fit&width=4096&height=324&gravity=ce&out=webp',
  },
  {
    id: 3,
    shopId: 1,
    image:
      'https://r.mradx.net/img/65/F00CA6.jpg?resize=fit&width=4096&height=324&gravity=ce&out=webp',
  },
  {
    id: 4,
    shopId: 1,
    image:
      'https://r.mradx.net/img/1B/62A496.jpg?resize=fit&width=4096&height=324&gravity=ce&out=webp',
  },
  {
    id: 5,
    shopId: 1,
    image:
      'https://r.mradx.net/img/18/763BE9.jpg?resize=fit&width=4096&height=324&gravity=ce&out=webp',
  },
  {
    id: 6,
    shopId: 1,
    image:
      'https://r.mradx.net/img/65/F00CA6.jpg?resize=fit&width=4096&height=324&gravity=ce&out=webp',
  },
  {
    id: 7,
    shopId: 1,
    image:
      'https://r.mradx.net/img/65/F00CA6.jpg?resize=fit&width=4096&height=324&gravity=ce&out=webp',
  },
])

const products = ref([
  {
    id: 1,
    image:
      'https://content2.flowwow-images.com/data/flowers/1000x1000/98/1627489421_83382698.jpg',
    name: 'Букет из 101 розовой розы',
    sale: 0,
    shopId: 1,
    oldPrice: 0,
    price: 1200,
    concurentPrice: [1200, 2300, 1980],
  },
  {
    id: 2,
    image:
      'https://content2.flowwow-images.com/data/flowers/1000x1000/98/1627489421_83382698.jpg',
    name: 'Букет из 101 розовой розы',
    sale: 0,
    shopId: 1,
    oldPrice: 0,
    price: 1200,
    concurentPrice: [1200, 2300, 1980],
  },
  {
    id: 3,
    image:
      'https://content2.flowwow-images.com/data/flowers/1000x1000/98/1627489421_83382698.jpg',
    name: 'Букет из 101 розовой розы',
    sale: 0,
    shopId: 1,
    oldPrice: 0,
    price: 1200,
    concurentPrice: [1200, 2300, 1980],
  },
  {
    id: 4,
    image:
      'https://content2.flowwow-images.com/data/flowers/1000x1000/98/1627489421_83382698.jpg',
    name: 'Букет из 101 розовой розы',
    sale: 0,
    shopId: 1,
    oldPrice: 0,
    price: 1200,
    concurentPrice: [1200, 2300, 1980],
  },
  {
    id: 5,
    image:
      'https://content2.flowwow-images.com/data/flowers/1000x1000/98/1627489421_83382698.jpg',
    name: 'Букет из 101 розовой розы',
    sale: 0,
    shopId: 1,
    oldPrice: 0,
    price: 1200,
    concurentPrice: [1200, 2300, 1980],
  },
  {
    id: 6,
    image:
      'https://content2.flowwow-images.com/data/flowers/1000x1000/98/1627489421_83382698.jpg',
    name: 'Букет из 101 розовой розы',
    sale: 0,
    shopId: 1,
    oldPrice: 0,
    price: 1200,
    concurentPrice: [1200, 2300, 1980],
  },
  {
    id: 7,
    image:
      'https://content2.flowwow-images.com/data/flowers/1000x1000/98/1627489421_83382698.jpg',
    name: 'Букет из 101 розовой розы',
    sale: 0,
    shopId: 1,
    oldPrice: 0,
    price: 1200,
    concurentPrice: [1200, 2300, 1980],
  },
  {
    id: 8,
    image:
      'https://content2.flowwow-images.com/data/flowers/1000x1000/98/1627489421_83382698.jpg',
    name: 'Букет из 101 розовой розы',
    sale: 0,
    shopId: 1,
    oldPrice: 0,
    price: 1200,
    concurentPrice: [1200, 2300, 1980],
  },
])

const shops = reactive([
  {
    id: 1,
    cover:
      'https://content2.flowwow-images.com/data/flowers/1000x1000/15/1641463638_40879815.jpg',
    name: 'Katyalavanda_cake',
    logo: 'https://content3.flowwow-images.com/data/shop/180x180/1623133168_22053187.png',
    description:
      'Здравствуйте! Меня зовут Катя Лаванда и я очень рада, что вы нашли мою кондитерскую:) Каждую коробочку я готовлю вручную и уже больше 450 коробочек уехали в разные части Москвы и Подмосковья☺️',
    slug: 'florachain',
  },
  {
    id: 2,
    cover:
      'https://content2.flowwow-images.com/data/flowers/1000x1000/06/1606049156_46465806.jpg',
    name: 'FMART by Flowwow',
    logo: 'https://content3.flowwow-images.com/data/shop/180x180/1627469936_64716410.png',
    description:
      'Официальный партнёр Flowwow. Наши ценности - это тщательно, до малейших деталей продуманный сервис и максимальная вовлеченность в цели и пожелания клиента.',
    slug: 'florachain-s',
  },
  {
    id: 3,
    cover:
      'https://content2.flowwow-images.com/data/flowers/1000x1000/60/1638953292_17045860.jpg',
    name: 'ALMOND',
    logo: 'https://content3.flowwow-images.com/data/shop/180x180/1616758297_41695651.png',
    description:
      'Премиальный сервис доставки цветов. Всегда свежие цветы, прямые поставки. Welcome!',
    slug: 'florachain-t',
  },
  {
    id: 4,
    cover:
      'https://content2.flowwow-images.com/data/flowers/1000x1000/98/1627489421_83382698.jpg',
    name: 'Verria Chocolate',
    logo: 'https://content3.flowwow-images.com/data/shop/180x180/1580741152_93587856.png',
    description:
      'Verria Сhocolate – шоколадная мастерская по созданию уникальных десертов из свежих фруктов, ягод, орехов и шоколада премиум класса. С заботой о вас и ваших близких мы создаем необычные сладости, отличающиеся красотой и вкусом, начиная с 2017 года.',
    slug: 'florachain-f',
  },
  {
    id: 5,
    cover:
      'https://content2.flowwow-images.com/data/flowers/1000x1000/15/1641463638_40879815.jpg',
    name: 'Katyalavanda_cake',
    logo: 'https://content3.flowwow-images.com/data/shop/180x180/1623133168_22053187.png',
    description:
      'Здравствуйте! Меня зовут Катя Лаванда и я очень рада, что вы нашли мою кондитерскую:) Каждую коробочку я готовлю вручную и уже больше 450 коробочек уехали в разные части Москвы и Подмосковья☺️',
    slug: 'florachain',
  },
  {
    id: 6,
    cover:
      'https://content2.flowwow-images.com/data/flowers/1000x1000/06/1606049156_46465806.jpg',
    name: 'FMART by Flowwow',
    logo: 'https://content3.flowwow-images.com/data/shop/180x180/1627469936_64716410.png',
    description:
      'Официальный партнёр Flowwow. Наши ценности - это тщательно, до малейших деталей продуманный сервис и максимальная вовлеченность в цели и пожелания клиента.',
    slug: 'florachain-s',
  },
  {
    id: 7,
    cover:
      'https://content2.flowwow-images.com/data/flowers/1000x1000/60/1638953292_17045860.jpg',
    name: 'ALMOND',
    logo: 'https://content3.flowwow-images.com/data/shop/180x180/1616758297_41695651.png',
    description:
      'Премиальный сервис доставки цветов. Всегда свежие цветы, прямые поставки. Welcome!',
    slug: 'florachain-t',
  },
  {
    id: 8,
    cover:
      'https://content2.flowwow-images.com/data/flowers/1000x1000/98/1627489421_83382698.jpg',
    name: 'Verria Chocolate',
    logo: 'https://content3.flowwow-images.com/data/shop/180x180/1580741152_93587856.png',
    description:
      'Verria Сhocolate – шоколадная мастерская по созданию уникальных десертов из свежих фруктов, ягод, орехов и шоколада премиум класса. С заботой о вас и ваших близких мы создаем необычные сладости, отличающиеся красотой и вкусом, начиная с 2017 года.',
    slug: 'florachain-f',
  },
  {
    id: 9,
    cover:
      'https://content2.flowwow-images.com/data/flowers/1000x1000/15/1641463638_40879815.jpg',
    name: 'Katyalavanda_cake',
    logo: 'https://content3.flowwow-images.com/data/shop/180x180/1623133168_22053187.png',
    description:
      'Здравствуйте! Меня зовут Катя Лаванда и я очень рада, что вы нашли мою кондитерскую:) Каждую коробочку я готовлю вручную и уже больше 450 коробочек уехали в разные части Москвы и Подмосковья☺️',
    slug: 'florachain',
  },
  {
    id: 10,
    cover:
      'https://content2.flowwow-images.com/data/flowers/1000x1000/06/1606049156_46465806.jpg',
    name: 'FMART by Flowwow',
    logo: 'https://content3.flowwow-images.com/data/shop/180x180/1627469936_64716410.png',
    description:
      'Официальный партнёр Flowwow. Наши ценности - это тщательно, до малейших деталей продуманный сервис и максимальная вовлеченность в цели и пожелания клиента.',
    slug: 'florachain-s',
  },
  {
    id: 11,
    cover:
      'https://content2.flowwow-images.com/data/flowers/1000x1000/60/1638953292_17045860.jpg',
    name: 'ALMOND',
    logo: 'https://content3.flowwow-images.com/data/shop/180x180/1616758297_41695651.png',
    description:
      'Премиальный сервис доставки цветов. Всегда свежие цветы, прямые поставки. Welcome!',
    slug: 'florachain-t',
  },
  {
    id: 12,
    cover:
      'https://content2.flowwow-images.com/data/flowers/1000x1000/98/1627489421_83382698.jpg',
    name: 'Verria Chocolate',
    logo: 'https://content3.flowwow-images.com/data/shop/180x180/1580741152_93587856.png',
    description:
      'Verria Сhocolate – шоколадная мастерская по созданию уникальных десертов из свежих фруктов, ягод, орехов и шоколада премиум класса. С заботой о вас и ваших близких мы создаем необычные сладости, отличающиеся красотой и вкусом, начиная с 2017 года.',
    slug: 'florachain-f',
  },
  {
    id: 13,
    cover:
      'https://content2.flowwow-images.com/data/flowers/1000x1000/15/1641463638_40879815.jpg',
    name: 'Katyalavanda_cake',
    logo: 'https://content3.flowwow-images.com/data/shop/180x180/1623133168_22053187.png',
    description:
      'Здравствуйте! Меня зовут Катя Лаванда и я очень рада, что вы нашли мою кондитерскую:) Каждую коробочку я готовлю вручную и уже больше 450 коробочек уехали в разные части Москвы и Подмосковья☺️',
    slug: 'florachain',
  },
  {
    id: 14,
    cover:
      'https://content2.flowwow-images.com/data/flowers/1000x1000/06/1606049156_46465806.jpg',
    name: 'FMART by Flowwow',
    logo: 'https://content3.flowwow-images.com/data/shop/180x180/1627469936_64716410.png',
    description:
      'Официальный партнёр Flowwow. Наши ценности - это тщательно, до малейших деталей продуманный сервис и максимальная вовлеченность в цели и пожелания клиента.',
    slug: 'florachain-s',
  },
  {
    id: 15,
    cover:
      'https://content2.flowwow-images.com/data/flowers/1000x1000/60/1638953292_17045860.jpg',
    name: 'ALMOND',
    logo: 'https://content3.flowwow-images.com/data/shop/180x180/1616758297_41695651.png',
    description:
      'Премиальный сервис доставки цветов. Всегда свежие цветы, прямые поставки. Welcome!',
    slug: 'florachain-t',
  },
  {
    id: 16,
    cover:
      'https://content2.flowwow-images.com/data/flowers/1000x1000/98/1627489421_83382698.jpg',
    name: 'Verria Chocolate',
    logo: 'https://content3.flowwow-images.com/data/shop/180x180/1580741152_93587856.png',
    description:
      'Verria Сhocolate – шоколадная мастерская по созданию уникальных десертов из свежих фруктов, ягод, орехов и шоколада премиум класса. С заботой о вас и ваших близких мы создаем необычные сладости, отличающиеся красотой и вкусом, начиная с 2017 года.',
    slug: 'florachain-f',
  },
])
</script>

<style scoped></style>
