<script setup lang="ts">
import { computed } from 'vue'
import { useTilt } from '~/composables/useTilt'

const card = useTemplateRef('card')

const { tilt, glareStyle } = useTilt(card, {
  max: 6,
  scale: 1,
  glare: true,
  mobile: true,
})

// parts so the literal never appears in the template
const emailLocal = 'asim'
const emailDomain = 'asimdesign'
const emailTld = 'nl'
const phoneDigits = '+31642202316'

// helper to render text as HTML entities
function encodeHtmlEntities(text: string) {
  return text.split('').map(ch => `&#${ch.charCodeAt(0)};`).join('')
}

const email = computed(() => `${emailLocal}@${emailDomain}.${emailTld}`)
const emailHref = computed(() => `mailto:${email.value}`)
const emailDisplay = computed(() => encodeHtmlEntities(email.value))

const phoneHref = computed(() => `tel:${phoneDigits}`)
const phoneDisplay = computed(() => encodeHtmlEntities('+31 642 2023 16'))
</script>

<template>
  <article
    ref="card" class="card card--glass bg-3 g-border md:col-span-12 lg:col-span-3 row-span-1"
    :style="{ ...tilt, ...glareStyle }"
  >
    <div class="card__glare" />

    <div class="flex flex-col items-center">
      <h2 class="glassy g-border font-unbounded font-medium text-lg mbe-10">
        Get in touch
      </h2>
      <p class="mbs-3.5 mbe-10 flex flex-col items-center gap-6">
        <a :href="emailHref" class="block text-white hover:underline" v-html="emailDisplay" />
        <a :href="phoneHref" class="block text-white hover:underline" v-html="phoneDisplay" />
      </p>
    </div>
  </article>
</template>
