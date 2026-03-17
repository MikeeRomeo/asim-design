<script lang="ts" setup>
import { onClickOutside } from '@vueuse/core'
import content from '~/assets/content.json'

const showSubmenu = ref(false)
const submenuDesktop = useTemplateRef<HTMLElement | null>('submenuDesktop')
const submenuMobile = useTemplateRef<HTMLElement | null>('submenuMobile')

// Close menu when clicking outside (ignore the button inside)
onClickOutside(submenuDesktop, () => {
  showSubmenu.value = false
}, { ignore: ['.nav-link'] })

onClickOutside(submenuMobile, () => {
  showSubmenu.value = false
}, { ignore: ['.nav-link'] })

// CSS classes for submenu visibility state
const submenuClasses = computed(() => ({
  'opacity-100 visible translate-y-0': showSubmenu.value,
  'opacity-0 invisible -translate-y-2': !showSubmenu.value,
}))

const submenuClassesMobile = computed(() => ({
  'opacity-100 visible -translate-y-0': showSubmenu.value,
  'opacity-0 invisible translate-y-2': !showSubmenu.value,
}))

function toggleSubmenu() {
  showSubmenu.value = !showSubmenu.value
}

// CSS classes for chevron rotation
const chevronClasses = computed(() => ({
  'rotate-0': showSubmenu.value,
  'rotate-180': !showSubmenu.value,
}))
</script>

<template>
  <header class="header pbe-6 px-5 relative z-999 lg:py-12 md:px-10 stagger-anim">
    <nav class="flex items-center justify-between py-6 flex-wrap">
      <div class="logo">
        <img src="/img/logo.svg" alt="Logo">
      </div>
      <ul class="navbar" role="navbar">
        <li class="max-md:hidden">
          <a :href="content.approachUrl" class="nav-link g-border" target="_blank">Aanpak</a>
        </li>
        <li ref="submenuDesktop" class="group max-md:hidden">
          <button type="button" class="nav-link g-border cursor-pointer relative">
            <span class="mr-3">Resume</span>
            <img src="/icons/chevron.svg" class="size-4 inline transition-transform" :class="[chevronClasses]" alt="submenu">
          </button>
          <ul class="absolute bg-white rounded-xl px-5 py-3 text-black flex flex-col gap-3 mt-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 transition-all" :class="submenuClasses" @click.stop>
            <li v-for="link in content.resumeSubnav" :key="link.url" class="g-border g-border--white" target="_blank">
              <a :href="link.url" class="hover:text-teal inline-flex items-center gap-1">
                <span>
                  {{ link.name }}
                </span>
                <img src="/icons/share.svg" class="size-4 inline" alt="ga naar">
              </a>
            </li>
          </ul>
        </li>
        <li><span class="nav-link nav-link--active" :class="{ 'nav-link--inactive': !content.isAvailable }">{{ content.isAvailable ? 'Beschikbaar' : 'Niet beschikbaar' }}</span></li>
      </ul>
    </nav>
  </header>

  <ul class="navbar navbar--mobile pbe-6 px-5" role="navbar">
    <li>
      <a :href="content.approachUrl" class="nav-link g-border" target="_blank">Aanpak</a>
    </li>
    <li ref="submenuMobile" class="group relative">
      <button type="button" class="nav-link g-border cursor-pointer relative" @click.stop="toggleSubmenu">
        <span class="mr-3">Resume</span>
        <img src="/icons/chevron.svg" class="size-4 inline transition-transform" :class="[chevronClasses]" alt="submenu">
      </button>
      <ul class="absolute bg-white rounded-xl px-5 py-3 text-black flex flex-col gap-3 mt-3 bottom-[120%] transition-all" :class="submenuClassesMobile" @click.stop>
        <li v-for="link in content.resumeSubnav" :key="link.url" class="g-border g-border--white" target="_blank">
          <a :href="link.url" class="hover:text-teal inline-flex items-center gap-1">
            <span>
              {{ link.name }}
            </span>
            <img src="/icons/share.svg" class="size-4 inline" alt="ga naar">
          </a>
        </li>
      </ul>
    </li>
  </ul>
</template>
