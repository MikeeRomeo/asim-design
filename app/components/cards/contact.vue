<script setup lang="ts">
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
    ref="card" class="card card--glass bg-2 g-border md:-col-span-6 lg:col-span-4 row-span-1"
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
  </article>
</template>
