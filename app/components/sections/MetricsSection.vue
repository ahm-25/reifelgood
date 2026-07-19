<script setup lang="ts">
import { ref } from 'vue'
import { useGsap } from '~/composables/useGsap'
import { performanceMetrics } from '~/data/landingData'
import SectionHeader from '../common/SectionHeader.vue'
import GlassCard from '../common/GlassCard.vue'

const metricsRef = ref<HTMLElement | null>(null)
const { registerAnimation } = useGsap()

registerAnimation((gsap) => {
  const cards = gsap.utils.toArray('.metric-card')
  cards.forEach((card: any, idx: number) => {
    gsap.fromTo(card, 
      { y: 35, opacity: 0, scale: 0.96 },
      { 
        y: 0, 
        opacity: 1, 
        scale: 1,
        duration: 0.8, 
        delay: idx * 0.12,
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  })
}, metricsRef)
</script>

<template>
  <section id="metrics" ref="metricsRef" class="py-24 md:py-32 px-6 md:px-12 relative z-10 font-sans">
    <div class="max-w-7xl mx-auto">
      <SectionHeader 
        badge="القياسات العالمية الفورية"
        title="أداء لا يضاهى على الحافة السحابية"
        subtitle="يعالج محرك WebAssembly الموزع لدينا أكثر من 14 مليار حدث يومياً عبر 320 مركز بيانات استراتيجي."
      />

      <!-- Metrics Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <GlassCard 
          v-for="metric in performanceMetrics" 
          :key="metric.label"
          class="metric-card flex flex-col justify-between"
          padding="p-8"
        >
          <div>
            <div class="flex items-baseline gap-1.5 mb-3">
              <span class="text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-l from-[#e3b75e] via-[#c8932b] to-[#ecd9bd] font-display">{{ metric.value }}</span>
              <span class="text-2xl md:text-3xl font-extrabold text-white font-display">{{ metric.suffix }}</span>
            </div>
            <h3 class="text-base font-bold text-white mb-2 tracking-normal font-display">
              {{ metric.label }}
            </h3>
          </div>
          
          <p class="text-xs md:text-sm text-[#ecd9bd] leading-relaxed pt-4 border-t border-[#c8932b]/20 mt-4 font-sans">
            {{ metric.description }}
          </p>
        </GlassCard>
      </div>
    </div>
  </section>
</template>
