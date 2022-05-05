// @ts-check
import { defineStore } from 'pinia'
import { Category } from '@/types/category'

export const useCategoryStore = defineStore({
  id: 'category',
  state: () => ({
    categories: [
      {
        id: 1,
        name: 'Шары',
        image: '/tmp/categories/1.png',
        slug: 'Шары',
      },
      {
        id: 2,
        name: 'Фейерверки',
        image: '/tmp/categories/2.png',
        slug: 'Фейерверки',
      },
      {
        id: 3,
        name: 'Сладости',
        image: '/tmp/categories/3.png',
        slug: 'Сладости',
      },
      {
        id: 4,
        name: 'Hand made',
        image: '/tmp/categories/4.png',
        slug: 'Hand made',
      },
      {
        id: 5,
        name: 'Сборные букеты',
        image: '/tmp/categories/5.png',
        slug: 'Сборные букеты',
      },
      {
        id: 6,
        name: 'Игрушки из цветов',
        image: '/tmp/categories/6.png',
        slug: 'Игрушки из цветов',
      },
      {
        id: 7,
        name: 'Композиции',
        image: '/tmp/categories/7.png',
        slug: 'Композиции',
      },
      {
        id: 8,
        name: 'Мягкие игрушки',
        image: '/tmp/categories/8.png',
        slug: 'Мягкие игрушки',
      },
      {
        id: 9,
        name: 'Свадебная флористика',
        image: '/tmp/categories/9.png',
        slug: 'Свадебная флористика',
      },
      {
        id: 10,
        name: 'Открытки',
        image: '/tmp/categories/10.png',
        slug: 'Открытки',
      },
    ],
  }),
  getters: {
    getCategories(state): Category[] {
      return state.categories
    },
  },
})
