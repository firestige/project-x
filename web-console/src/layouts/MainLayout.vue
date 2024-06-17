<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useBreakpoint } from 'vuestic-ui'

const breakpoints = useBreakpoint()

const isSidebarVisible = ref(breakpoints.smUp)

watchEffect(() => {
  isSidebarVisible.value = breakpoints.smUp
})

const menu = [
  { icon: 'dashboard', title: 'Dashboard', to: '/dashboard' },
  { icon: 'perm_media', title: 'Library', to: '/library' },
  { icon: 'video_library', title: 'Viewer', to: '/viewer' },
  { icon: 'settings', title: 'Setting', to: '/setting' },
  { icon: 'description', title: 'About', to: '/about' }
]
</script>

<template>
  <VaLayout
    :top="{ fixed: true, order: 1 }"
    :left="{
      fixed: true,
      absolute: breakpoints.smDown,
      order: 2,
      overlay: breakpoints.smDown && isSidebarVisible
    }"
    @left-overlay-click="isSidebarVisible = false"
  >
    <template #top>
      <VaNavbar>
        <template #left>
          <VaButton
            preset="secondary"
            :icon="isSidebarVisible ? 'menu_open' : 'menu'"
            @click="isSidebarVisible = !isSidebarVisible"
          />
        </template>
      </VaNavbar>
      <VaDivider style="margin: 0" />
    </template>

    <template #left>
      <VaSidebar v-model="isSidebarVisible">
        <VaNavbar color="background-element">
          <template #left>
            <VaButton preset="secondary" icon="menu_open" disabled />
          </template>
        </VaNavbar>
        <VaSidebarItem v-for="{ icon, title, to } in menu" :key="icon">
          <RouterLink :to="to">
            <VaSidebarItemContent>
              <VaIcon :name="icon" />
              <VaSidebarItemTitle>
                {{ title }}
              </VaSidebarItemTitle>
            </VaSidebarItemContent>
          </RouterLink>
        </VaSidebarItem>
      </VaSidebar>
    </template>

    <template #content>
      <main>
        <article>
          <slot />
        </article>
      </main>
    </template>
  </VaLayout>
</template>
