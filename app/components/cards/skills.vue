<script setup lang="ts">
import { useTilt } from '~/composables/useTilt'

const carouselConfig = {
  itemsToShow: 'auto',
  wrapAround: true,
  gap: 16,
  transition: 300,
  transitionEasing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  autoplay: 2000,
}

const card = useTemplateRef('card')

const { tilt, glareStyle } = useTilt(card, {
  max: 6,
  scale: 1,
  glare: true,
  mobile: true,
})

const baseUrl = '/asim-design/'

const brands = [
  {
    name: 'jira',
    logo: 'graphics/skills/jira.svg',
  },
  {
    name: 'figma',
    logo: 'graphics/skills/figma.svg',
  },
  {
    name: 'sketch',
    logo: 'graphics/skills/sketch.svg',
  },
  {
    name: 'azure',
    logo: 'graphics/skills/azure.svg',
  },
  {
    name: 'slack',
    logo: 'graphics/skills/slack.svg',
  },

]
</script>

<template>
  <article
    ref="card" class="card card--glass bg-2 g-border md:col-span-6 lg:col-span-4 row-span-1"
    :style="{ ...tilt, ...glareStyle }"
  >
    <div class="card__glare" />

    <div class="flex flex-col items-center">
      <h2 class="glassy g-border font-unbounded font-medium text-lg mbe-12">
        Tools experience
        <img src="/icons/sextand.svg" class="size-5 inline ml-2" alt="">
      </h2>
    </div>

    <Carousel v-bind="carouselConfig">
      <Slide v-for="brand in brands" :key="brand.name">
        <div class="carousel__item glassy g-border g-border--white rounded-lg cursor-grab">
          <img :src="`${baseUrl}${brand.logo}`" :alt="`${brand.name} logo`" class="h-14 pointer-events-none">
        </div>
      </Slide>
    </Carousel>
  </article>
</template>
