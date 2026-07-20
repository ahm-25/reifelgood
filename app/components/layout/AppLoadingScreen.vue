<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useNuxtApp } from '#app'
import { useGsap } from '~/composables/useGsap'

const isVisible = ref(true)
const loaderRef = ref<HTMLElement | null>(null)
const { gsap } = useGsap()

let minTimer: ReturnType<typeof setTimeout> | null = null

const hideLoader = () => {
  if (!loaderRef.value || !isVisible.value) return
  
  gsap.to(loaderRef.value, {
    opacity: 0,
    duration: 0.65,
    ease: 'power2.inOut',
    onComplete: () => {
      isVisible.value = false
    }
  })
}

const showLoader = () => {
  isVisible.value = true
  if (loaderRef.value) {
    gsap.set(loaderRef.value, { opacity: 1 })
  }
}

onMounted(() => {
  const nuxtApp = useNuxtApp()

  // Ensure loader stays visible for at least 1300ms to display the luxury brand animation
  const minTimeElapsed = new Promise<void>((resolve) => {
    minTimer = setTimeout(resolve, 1300)
  })

  // Wait for both minimum display time and window ready
  const windowLoaded = new Promise<void>((resolve) => {
    if (document.readyState === 'complete') {
      resolve()
    } else {
      window.addEventListener('load', () => resolve(), { once: true })
    }
  })

  Promise.all([minTimeElapsed, windowLoaded]).then(() => {
    hideLoader()
  })

  // Hook into route navigation
  nuxtApp.hook('page:start', () => {
    showLoader()
  })
  nuxtApp.hook('page:finish', () => {
    setTimeout(hideLoader, 500)
  })
})

onUnmounted(() => {
  if (minTimer) clearTimeout(minTimer)
})
</script>

<template>
  <Teleport to="body">
    <div 
      v-if="isVisible" 
      ref="loaderRef"
      class="fixed inset-0 z-[999999] bg-[#2b1810] flex flex-col items-center justify-center select-none"
    >
      <!-- Golden Circular Ring Spinner (Exactly matching the original design) -->
      <div class="relative flex items-center justify-center">
        <!-- Outer Dark/Faint Track Ring -->
        <div class="w-20 h-20 md:w-24 md:h-24 rounded-full border-[5px] border-[#6b4226]/40" />
        
        <!-- Rotating Golden Gradient Arc -->
        <div class="absolute inset-0 rounded-full border-[5px] border-transparent border-t-[#e3b75e] border-r-[#c8932b] animate-[spin_1.1s_linear_infinite] shadow-[0_0_20px_rgba(200,147,43,0.3)]" />
      </div>

      <!-- Calligraphic Brand Loading Text -->
      <h2 class="mt-8 text-2xl md:text-[1.8rem] font-display text-[#fdf8f0] font-bold tracking-wide text-center drop-shadow-sm leading-relaxed">
        مطابخ جوري تُجهز التفاصيل...
      </h2>
    </div>
  </Teleport>
</template>
