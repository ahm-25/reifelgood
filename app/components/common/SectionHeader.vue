<script setup lang="ts">
import AppBadge from './AppBadge.vue'

interface Props {
  badge?: string
  title: string
  subtitle?: string
  align?: 'center' | 'left' | 'right'
}

withDefaults(defineProps<Props>(), {
  align: 'center'
})
</script>

<template>
  <div 
    class="max-w-3xl mb-16 md:mb-24 font-sans"
    :class="[
      align === 'center' ? 'mx-auto text-center' : '',
      align === 'right' ? 'text-right' : '',
      align === 'left' ? 'text-left' : ''
    ]"
  >
    <div v-if="badge" class="mb-5">
      <AppBadge :label="badge" variant="gold" />
    </div>

    <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 font-display leading-[1.25]">
      {{ title }}
    </h2>

    <p v-if="subtitle" class="text-base sm:text-lg md:text-xl text-[#ecd9bd] leading-relaxed font-normal">
      {{ subtitle }}
    </p>
  </div>
</template>
