<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const sketchRef = ref<HTMLElement | null>(null)

const sketchItems = [
  {
    id: 1,
    title: 'مطبخ خشبي',
    icon: 'kitchen'
  },
  {
    id: 2,
    title: 'خزانة ملابس',
    icon: 'wardrobe'
  },
  {
    id: 3,
    title: 'مجلس عربي',
    icon: 'majlis'
  },
  {
    id: 4,
    title: 'غرفة نوم',
    icon: 'bed'
  },
  {
    id: 5,
    title: 'ستائر فاخرة',
    icon: 'curtain'
  },
  {
    id: 6,
    title: 'تصنيع حرفي',
    icon: 'tools'
  }
]

onMounted(() => {
  if (!sketchRef.value || typeof window === 'undefined') return

  const ctx = gsap.context(() => {
    gsap.from('.sketch-card-item', {
      y: 35,
      opacity: 0,
      duration: 0.75,
      stagger: 0.12,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sketchRef.value,
        start: 'top 82%',
        toggleActions: 'play none none none'
      }
    })
  }, sketchRef)

  return () => ctx.revert()
})
</script>

<template>
  <section id="sketch" ref="sketchRef" class="py-20 sm:py-28 bg-[#faf5ec] relative overflow-hidden font-sans text-[#2b1810]" dir="rtl">
    <div class="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c8932b]/15 border border-[#e3b75e]/35 text-[#b8801d] font-bold text-sm mb-5">
          <span class="w-2 h-2 rounded-full bg-[#c8932b] animate-pulse"></span>
          <span>بصمتنا الحرفية</span>
        </div>
        <h2 class="font-display text-3xl sm:text-4xl md:text-[2.8rem] font-bold text-[#2b1810] leading-[1.3] mb-5">
          كل قطعة... رسمة قبل أن تكون منتجاً
        </h2>
        <p class="font-sans text-base sm:text-[1.05rem] text-[#5c4333] leading-relaxed font-semibold">
          قبل كل عملية تصنيع، يبدأ المطبخ أو الخزانة كرسمة ومخطط دقيق يوضح كل تفصيلة من المقاس إلى الخامة.
        </p>
      </div>

      <!-- Sketch Grid: 6 Cards Across on Desktop exactly matching .sketch-grid -->
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 sm:gap-6">
        
        <div 
          v-for="item in sketchItems" 
          :key="item.id"
          class="sketch-card-item group relative bg-white/10 hover:bg-white/20 border border-[#c8932b]/25 hover:border-[#c8932b] border-t-[3px] border-t-[#c8932b]/70 rounded-2xl py-7 px-3 text-center transition-all duration-350 transform hover:-translate-y-2 hover:shadow-lg flex flex-col items-center justify-between min-h-[175px]"
        >
          <!-- SVG Icons matching exact viewBox and stroke paths -->
          <!-- 1. Kitchen Icon -->
          <svg v-if="item.icon === 'kitchen'" class="w-[58px] h-[58px] text-[#2b1810] group-hover:text-[#c8932b] group-hover:scale-110 transition-all duration-300 mb-3.5 shrink-0" viewBox="0 0 64 64" fill="none" stroke="currentColor">
            <path d="M6 50h52M10 50V18a3 3 0 0 1 3-3h38a3 3 0 0 1 3 3v32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            <path d="M10 30h44" fill="none" stroke="currentColor" stroke-width="2"/>
            <rect x="15" y="20" width="10" height="7" rx="1" fill="none" stroke="currentColor" stroke-width="1.6"/>
            <rect x="29" y="20" width="10" height="7" rx="1" fill="none" stroke="currentColor" stroke-width="1.6"/>
            <rect x="43" y="20" width="6" height="7" rx="1" fill="none" stroke="currentColor" stroke-width="1.6"/>
            <path d="M15 38h8v8h-8zM27 38h8v8h-8zM39 38h8v8h-8z" fill="none" stroke="currentColor" stroke-width="1.6"/>
            <circle cx="21" cy="42" r="1" fill="currentColor"/><circle cx="33" cy="42" r="1" fill="currentColor"/><circle cx="45" cy="42" r="1" fill="currentColor"/>
            <path d="M48 16c0-6 6-6 6-12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>

          <!-- 2. Wardrobe Icon -->
          <svg v-else-if="item.icon === 'wardrobe'" class="w-[58px] h-[58px] text-[#2b1810] group-hover:text-[#c8932b] group-hover:scale-110 transition-all duration-300 mb-3.5 shrink-0" viewBox="0 0 64 64" fill="none" stroke="currentColor">
            <rect x="12" y="8" width="40" height="50" rx="2" fill="none" stroke="currentColor" stroke-width="2"/>
            <path d="M32 8v50" fill="none" stroke="currentColor" stroke-width="2"/>
            <circle cx="27" cy="32" r="1.4" fill="currentColor"/><circle cx="37" cy="32" r="1.4" fill="currentColor"/>
            <path d="M16 8v6M48 8v6" fill="none" stroke="currentColor" stroke-width="1.6"/>
          </svg>

          <!-- 3. Majlis Icon -->
          <svg v-else-if="item.icon === 'majlis'" class="w-[58px] h-[58px] text-[#2b1810] group-hover:text-[#c8932b] group-hover:scale-110 transition-all duration-300 mb-3.5 shrink-0" viewBox="0 0 64 64" fill="none" stroke="currentColor">
            <path d="M8 44V30a4 4 0 0 1 4-4h32a4 4 0 0 1 4 4v14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            <path d="M6 44h52v6a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-6Z" fill="none" stroke="currentColor" stroke-width="2"/>
            <path d="M10 30v-6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6M42 30v-6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6" fill="none" stroke="currentColor" stroke-width="1.8"/>
            <path d="M10 53v5M50 53v5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>

          <!-- 4. Bed Icon -->
          <svg v-else-if="item.icon === 'bed'" class="w-[58px] h-[58px] text-[#2b1810] group-hover:text-[#c8932b] group-hover:scale-110 transition-all duration-300 mb-3.5 shrink-0" viewBox="0 0 64 64" fill="none" stroke="currentColor">
            <path d="M6 52V26a3 3 0 0 1 3-3h6v12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            <path d="M58 52V32a4 4 0 0 0-4-4H15a4 4 0 0 0-4 4v6" fill="none" stroke="currentColor" stroke-width="2"/>
            <path d="M6 44h52M6 52v-3M58 52v-3" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            <rect x="16" y="22" width="14" height="10" rx="2" fill="none" stroke="currentColor" stroke-width="1.6"/>
          </svg>

          <!-- 5. Curtain Icon -->
          <svg v-else-if="item.icon === 'curtain'" class="w-[58px] h-[58px] text-[#2b1810] group-hover:text-[#c8932b] group-hover:scale-110 transition-all duration-300 mb-3.5 shrink-0" viewBox="0 0 64 64" fill="none" stroke="currentColor">
            <path d="M8 8h48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>
            <path d="M12 8c0 14-4 20-4 38M22 8c2 16-3 22 1 38M32 8c-3 16 3 22-1 38M42 8c0 14 4 20 4 38M52 8c-2 16 2 22-2 38" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
          </svg>

          <!-- 6. Tools Icon -->
          <svg v-else-if="item.icon === 'tools'" class="w-[58px] h-[58px] text-[#2b1810] group-hover:text-[#c8932b] group-hover:scale-110 transition-all duration-300 mb-3.5 shrink-0" viewBox="0 0 64 64" fill="none" stroke="currentColor">
            <path d="M40 8 24 24M14 50l8-8M44 12l8 8-22 22-8-8Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10 54l4-4 6 6-4 4z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
          </svg>

          <!-- Label -->
          <span class="font-sans text-[0.92rem] font-extrabold text-[#2b1810] group-hover:text-[#c8932b] transition-colors duration-300 pb-2.5">
            {{ item.title }}
          </span>

          <!-- Blueprint Dimension Line at the bottom of the card (|------|) exactly matching .dim-line -->
          <div class="absolute bottom-2 right-3.5 left-3.5 h-[1px] bg-[#c8932b]/40 group-hover:bg-[#c8932b] transition-colors duration-300">
            <span class="absolute -top-[3px] right-0 w-[1px] h-[7px] bg-[#c8932b]/40 group-hover:bg-[#c8932b] transition-colors duration-300"></span>
            <span class="absolute -top-[3px] left-0 w-[1px] h-[7px] bg-[#c8932b]/40 group-hover:bg-[#c8932b] transition-colors duration-300"></span>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>
