<script setup lang="ts">
import { ref } from 'vue'
import { useGsap } from '~/composables/useGsap'
import { socialProofLogos } from '~/data/landingData'

const sectionRef = ref<HTMLElement | null>(null)
const { registerAnimation } = useGsap()

registerAnimation((gsap) => {
  gsap.fromTo('.social-logo',
    { opacity: 0, y: 15 },
    {
      opacity: 0.65,
      y: 0,
      duration: 0.8,
      stagger: 0.1,
      scrollTrigger: {
        trigger: sectionRef.value,
        start: 'top 90%'
      }
    }
  )
}, sectionRef)
</script>

<template>
  <section ref="sectionRef" class="py-16 px-6 md:px-12 border-y border-[#c8932b]/20 bg-[#3a2417]/30 relative z-10 font-sans">
    <div class="max-w-7xl mx-auto">
      <p class="text-center text-xs md:text-sm font-sans uppercase tracking-wider text-[#c08a52] mb-10 font-bold">
        موثوق من قادة وخبراء الهندسة الذين يبنون البنية التحتية الأكثر حساسية
      </p>

      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12 items-center justify-center">
        <div
          v-for="logo in socialProofLogos"
          :key="logo.name"
          class="social-logo flex items-center justify-center grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer text-[#ecd9bd] hover:text-[#e3b75e] font-display font-extrabold text-xl tracking-tighter"
        >
          {{ logo.name }}
        </div>
      </div>
    </div>
  </section>
</template>
