<script setup lang="ts">
import { ref } from 'vue'
import { useGsap } from '~/composables/useGsap'
import { featuresData } from '~/data/landingData'
import SectionHeader from '../common/SectionHeader.vue'
import GlassCard from '../common/GlassCard.vue'

const sectionRef = ref<HTMLElement | null>(null)
const { registerAnimation } = useGsap()

registerAnimation((gsap) => {
  const cards = gsap.utils.toArray('.bento-card')
  
  cards.forEach((card: any, idx: number) => {
    gsap.fromTo(card,
      { y: 50, opacity: 0, scale: 0.96 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        delay: idx * 0.1,
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  })
}, sectionRef)
</script>

<template>
  <section id="features" ref="sectionRef" class="py-24 md:py-36 px-6 md:px-12 relative z-10 font-sans">
    <div class="max-w-7xl mx-auto">
      <SectionHeader 
        badge="التفوق المعماري والهندسي"
        title="صُمم للنمو والتوسع الذاتي الفائق"
        subtitle="كل مكون في بنية أثير التحتية تم تصميمه من أشباه الموصلات صعوداً لتوفير أداء فوري دون أي إهدار للموارد وبموثوقية حاسمة."
      />

      <!-- Linear / Apple Inspired Bento Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        <GlassCard
          v-for="feature in featuresData"
          :key="feature.id"
          :class="[
            'bento-card flex flex-col justify-between overflow-hidden',
            feature.colSpan === 2 ? 'md:col-span-2' : 'md:col-span-1'
          ]"
          padding="p-8 md:p-10"
          glow-color="rgba(200, 147, 43, 0.25)"
        >
          <!-- Top Feature Icon & Badge -->
          <div class="flex items-center justify-between mb-8">
            <div class="w-14 h-14 rounded-2xl bg-[#3a2417] border border-[#c8932b]/35 flex items-center justify-center text-[#e3b75e] shadow-lg shadow-[#c8932b]/15">
              <component :is="feature.icon" class="w-7 h-7" />
            </div>

            <span v-if="feature.badge" class="px-3 py-1 rounded-full bg-[#c8932b]/15 border border-[#c8932b]/35 text-[11px] font-sans text-[#e3b75e] uppercase tracking-wider font-semibold">
              {{ feature.badge }}
            </span>
          </div>

          <!-- Title & Description -->
          <div>
            <h3 class="text-2xl md:text-3xl font-bold text-white mb-4 tracking-normal font-display">
              {{ feature.title }}
            </h3>
            <p class="text-base md:text-lg text-[#ecd9bd] leading-relaxed font-normal max-w-2xl">
              {{ feature.description }}
            </p>
          </div>

          <!-- Bottom Decorative / Interactive Visual Hint -->
          <div class="mt-8 pt-6 border-t border-[#c8932b]/20 flex items-center justify-between text-xs text-[#c08a52] font-sans font-medium">
            <span class="flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-[#e3b75e]" />
              <span>تنفيذ حتمي حاسم وموثوق</span>
            </span>
            <span class="group-hover:-translate-x-1 transition-transform text-[#e3b75e] font-bold">استكشف المواصفات ←</span>
          </div>
        </GlassCard>
      </div>
    </div>
  </section>
</template>
