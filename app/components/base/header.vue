<script lang="ts" setup>
import content from '~/assets/content.json'
</script>

<template>
  <header class="header py-12 px-16">
    <nav class="flex items-center justify-between py-6">
      <div class="logo">
        <img src="/img/logo.svg" alt="Logo">
      </div>
      <ul class="navbar">
        <li><a :href="content.approachUrl" class="nav-link g-border">Aanpak</a></li>
        <li>
          <span href="#" class="nav-link g-border cursor-pointer">Resume</span>
          <ul class="absolute bg-white rounded-xl px-5 py-3 text-black flex flex-col gap-3 mt-3">
            <li v-for="link in content.resumeSubnav" :key="link.url" class="g-border g-border--white">
              <a :href="link.url" class="hover:text-teal inline-flex items-center gap-1">
                <span>
                  {{ link.name }}
                </span>
                <img src="/icons/share.svg" class="size-4 inline" alt="ga naar">
              </a>
            </li>
          </ul>
        </li>
        <li><span class="nav-link g-border">{{ content.isAvailable ? 'Beschikbaar' : 'Niet beschikbaar' }}</span></li>
      </ul>
    </nav>
  </header>
</template>
