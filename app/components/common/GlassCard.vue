<script setup lang="ts">
import { ref } from 'vue'
import { useMouseGlow } from '~/composables/useMouseGlow'

interface Props {
  hoverEffect?: boolean
  glowColor?: string
  padding?: string
  border?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  hoverEffect: true,
  glowColor: 'rgba(200, 147, 43, 0.22)', // Royal gold glow
  padding: 'p-6 md:p-8',
  border: true
})

const cardRef = ref<HTMLElement | null>(null)
const { glowStyle, handleMouseMove, handleMouseLeave } = useMouseGlow(cardRef, props.glowColor)
</script>

<template>
  <div
    ref="cardRef"
    @mousemove="hoverEffect ? handleMouseMove($event) : undefined"
    @mouseleave="hoverEffect ? handleMouseLeave() : undefined"
    class="relative rounded-2xl bg-[#3a2417]/50 backdrop-blur-2xl transition-all duration-500 overflow-hidden group"
    :class="[
      padding,
      border ? 'border border-[#c8932b]/20 hover:border-[#e3b75e]/45' : '',
      hoverEffect ? 'hover:shadow-luxury-heavy hover:-translate-y-1' : ''
    ]"
  >
    <!-- Dynamic Spotlight Glow -->
    <div
      v-if="hoverEffect"
      class="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-0 rounded-2xl"
      :style="glowStyle"
    />

    <!-- Card Content Layer -->
    <div class="relative z-10">
      <slot />
    </div>
  </div>
</template>
