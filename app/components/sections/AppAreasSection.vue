<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const areasRef = ref<HTMLElement | null>(null)

const citiesList = [
  'الرياض',
  'جدة',
  'الدمام',
  'مكة المكرمة',
  'المدينة المنورة',
  'الخبر',
  'الطائف',
  'القصيم',
  'الأحساء',
  'تبوك',
  'أبها',
  'حائل'
]

onMounted(() => {
  if (!areasRef.value || typeof window === 'undefined') return

  const ctx = gsap.context(() => {
    gsap.from('.area-chip-item', {
      y: 25,
      opacity: 0,
      duration: 0.6,
      stagger: 0.06,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.areas-grid',
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    })
  }, areasRef)

  return () => ctx.revert()
})
</script>

<template>
  <section id="areas" ref="areasRef" class="py-20 sm:py-28 bg-[#2b1810] relative overflow-hidden font-sans text-white" dir="rtl">
    <div class="max-w-5xl mx-auto px-6 lg:px-12 relative z-10 text-center">
      
      <!-- Section Header -->
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#ecd9bd] font-bold text-sm mb-5">
        <span class="w-2 h-2 rounded-full bg-[#c8932b] animate-pulse"></span>
        <span>مناطق التغطية</span>
      </div>
      <h2 class="font-display text-3xl sm:text-4xl md:text-[2.8rem] font-bold text-[#f4e8d8] leading-[1.3] mb-12">
        نخدمك في مختلف مناطق المملكة
      </h2>

      <!-- Cities Grid exactly matching .areas-grid & .area-chip -->
      <div class="areas-grid flex flex-wrap justify-center gap-3.5 sm:gap-4 max-w-4xl mx-auto">
        <span 
          v-for="(city, idx) in citiesList" 
          :key="idx"
          class="area-chip-item group flex items-center gap-2 sm:gap-2.5 bg-white/6 hover:bg-[#c8932b] border border-[#f4e8d8]/18 hover:border-[#c8932b] text-[#ecd9bd] hover:text-[#2b1810] px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-sans font-bold text-sm sm:text-[0.94rem] transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-lg cursor-default select-none"
        >
          <!-- Location SVG exactly matching #ic-location -->
          <svg class="w-4 h-4 text-[#c8932b] group-hover:text-[#2b1810] transition-colors duration-300 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M12 2C8 2 5 5 5 9c0 5.5 7 13 7 13s7-7.5 7-13c0-4-3-7-7-7Z" fill="none" stroke="currentColor" stroke-width="1.8"/>
            <circle cx="12" cy="9" r="2.6" fill="currentColor"/>
          </svg>
          <span>{{ city }}</span>
        </span>
      </div>

    </div>
  </section>
</template>
