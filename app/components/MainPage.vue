<script lang="ts" setup>
import content from '~/assets/content.json'
</script>

<template>
  <BaseHeader />
  <main class="font-base lg:pbs-4">
    <h1 class="main-title stagger-anim stagger-anim--delay-1">
      Creative <br>
      ux designer
    </h1>
    <p class="font-normal pbs-6 stagger-anim stagger-anim--delay-2">
      {{ content.description }}
    </p>
    <p class="font-normal italic pbs-4 stagger-anim stagger-anim--delay-3">
      {{ content.author }}
    </p>
    <section class="grid grid-cols-1 md:grid-cols-12 mbs-14 gap-8 mbe-14 max-md:mbe-24 stagger-anim stagger-anim--delay-4">
      <CardsResume />
      <CardsBrands />
      <CardsSkills />
      <CardsContact />
    </section>
  </main>
</template>
