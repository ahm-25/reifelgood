<script setup lang="ts">
import { ref } from 'vue'
import { useGsap } from '~/composables/useGsap'

const bgRef = ref<HTMLElement | null>(null)
const { registerAnimation } = useGsap()

registerAnimation((gsap) => {
  if (!bgRef.value) return
  const shapes = bgRef.value.querySelectorAll('.ambient-shape')
  
  shapes.forEach((shape, i) => {
    gsap.to(shape, {
      x: 'random(-60, 60)',
      y: 'random(-60, 60)',
      rotation: 'random(-15, 15)',
      scale: 'random(0.9, 1.1)',
      duration: 'random(8, 14)',
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: i * 1.5
    })
  })
}, bgRef)
</script>

<template>
  <div ref="bgRef" class="fixed inset-0 overflow-hidden pointer-events-none z-0">
    <!-- Base Warm Vignette -->
    <div class="absolute inset-0 bg-gradient-to-b from-[#2b1810] via-[#3a2417] to-[#2b1810]" />

    <!-- Subtle Grain Overlay matching Reif El-Good -->
    <div class="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#c8932b_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

    <!-- Shape 1: Top Left Royal Gold -->
    <div 
      class="ambient-shape absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#c8932b]/25 via-[#e3b75e]/15 to-transparent blur-[130px]"
    />

    <!-- Shape 2: Top Right Warm Cocoa -->
    <div 
      class="ambient-shape absolute top-1/4 -right-32 w-[550px] h-[550px] rounded-full bg-gradient-to-tl from-[#6b4226]/35 via-[#8a5a32]/20 to-transparent blur-[140px]"
    />

    <!-- Shape 3: Bottom Center Bright Gold Glow -->
    <div 
      class="ambient-shape absolute -bottom-48 left-1/3 w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-[#c08a52]/25 via-[#c8932b]/20 to-transparent blur-[150px]"
    />
  </div>
</template>
