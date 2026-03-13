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

const brands = [
  {
    name: 'PGGM',
    logo: '/graphics/logos/pggm.svg',
  },
  {
    name: 'NS',
    logo: '/graphics/logos/ns.svg',
  },
  {
    name: 'aegon',
    logo: '/graphics/logos/aegon.svg',
  },
  {
    name: 'estg',
    logo: '/graphics/logos/estg.svg',
  },
  {
    name: 'nshift',
    logo: '/graphics/logos/nshift.svg',
  },
  {
    name: 'skillzilla',
    logo: '/graphics/logos/skillzilla.svg',
  },
  {
    name: 'timing',
    logo: '/graphics/logos/timing.svg',
  },
  {
    name: 'valtech',
    logo: '/graphics/logos/valtech.svg',
  },
  {
    name: 'volkswagen',
    logo: '/graphics/logos/volkswagen.svg',
  },
  {
    name: 'trackbee',
    logo: '/graphics/logos/trackbee.svg',
  },
]
</script>

<template>
  <article
    ref="card" class="card card--glass g-border  md:col-span-6 lg:col-span-7 row-span-1"
    :style="{ ...tilt, ...glareStyle }"
  >
    <div class="card__glare" />

    <div class="flex flex-col items-center">
      <h2 class="glassy g-border font-unbounded font-medium text-lg ">
        Brands
      </h2>
      <p class="mbs-3.5 mbe-12">
        Bedrijven waar ik voor heb gewerkt
      </p>
    </div>

    <Carousel v-bind="carouselConfig">
      <Slide v-for="brand in brands" :key="brand.name">
        <div class="carousel__item glassy g-border g-border--white rounded-lg cursor-grab">
          <img :src="brand.logo" :alt="`${brand.name} logo`" class="h-14 px-3 pointer-events-none">
        </div>
      </Slide>
    </Carousel>
  </article>
</template>
