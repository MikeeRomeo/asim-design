<script setup lang="ts">
import content from '~/assets/content.json'
import { useTilt } from '~/composables/useTilt'

const card = useTemplateRef('card')

const { tilt, glareStyle } = useTilt(card, {
  max: 6,
  scale: 1,
  glare: true,
  mobile: true,
})
</script>

<template>
  <article
    ref="card" class="card card--resume g-border g-border--green md:col-span-6 lg:col-span-5 row-span-2"
    :style="{ ...tilt, ...glareStyle }"
  >
    <h2 class="card__title">
      Simplicity
    </h2>

    <img src="/img/profile-shadow.png" alt="It's a me, Asim-sama" class="card__image card__image--shadow">
    <img src="/img/profile.png" alt="It's a me, Asim-sama" class="card__image">

    <ul class="list z-10">
      <li class="g-border g-border--white">
        <img src="/icons/cup.svg" class="size-6 inline mr-2" alt="">
        Netflix Steller Strategy Awward winner
      </li>
      <li class="g-border g-border--white">
        <img src="/icons/cup.svg" class="size-6 inline mr-2" alt="">
        Dragon’s Den Pitcher
      </li>
    </ul>

    <ul class="list list--dark mbs-52 md:mbs-96 z-10">
      <li v-for="job in content.recentJobs" :key="job.company" class="g-border g-border--white">
        <span>{{ job.startYear }} - {{ job.endYear }}</span> <span>{{ job.company }}</span>
      </li>
    </ul>
    <div class="card__glare" />
  </article>
</template>
