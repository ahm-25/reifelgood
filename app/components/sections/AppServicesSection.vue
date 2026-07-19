<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const servicesRef = ref<HTMLElement | null>(null)

const servicesList = [
  {
    id: 1,
    title: 'تصميم وتنفيذ المطابخ',
    desc: 'مطابخ خشب، اكريليك، بولي لاك وMDF بتصاميم مودرن وكلاسيك ونيوكلاسيك، بأعلى جودة تصنيع وتركيب.',
    badge: 'الأهم',
    iconType: 'kitchen'
  },
  {
    id: 2,
    title: 'تفصيل الخزائن',
    desc: 'خزائن ملابس، خزائن حائط، دريسروم، وخزائن غرف نوم بتصاميم داخلية عملية تناسب جميع المساحات.',
    badge: '',
    iconType: 'wardrobe'
  },
  {
    id: 3,
    title: 'تنفيذ المجالس',
    desc: 'مجالس عربية، مجالس مودرن، ومجالس تركية بأقمشة وخامات فاخرة وتصاميم تناسب جميع الأذواق.',
    badge: '',
    iconType: 'majlis'
  },
  {
    id: 4,
    title: 'تركيب الستائر',
    desc: 'ستائر رول، ستائر اوربية، ستائر بليسيه وستائر كلاسيك بخامات عالية الجودة وتركيب احترافي.',
    badge: '',
    iconType: 'curtain'
  }
]

onMounted(() => {
  if (!servicesRef.value || typeof window === 'undefined') return

  const ctx = gsap.context(() => {
    gsap.from('.service-card-item', {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.18,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: servicesRef.value,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    })
  }, servicesRef)

  return () => ctx.revert()
})
</script>

<template>
  <section id="services" ref="servicesRef" class="py-20 sm:py-28 bg-[#faf5ec] relative overflow-hidden font-sans text-[#2b1810]" dir="rtl">
    <!-- Subtle Background Glow -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#c8932b]/5 rounded-full blur-3xl pointer-events-none" />

    <div class="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c8932b]/15 border border-[#e3b75e]/35 text-[#b8801d] font-bold text-sm mb-5">
          <span class="w-2 h-2 rounded-full bg-[#c8932b] animate-pulse"></span>
          <span>خدماتنا الشاملة</span>
        </div>
        <h2 class="font-display text-3xl sm:text-4xl md:text-[2.8rem] font-bold text-[#2b1810] leading-[1.3] mb-5">
          من المطبخ إلى آخر تفاصيل المنزل
        </h2>
        <p class="font-sans text-base sm:text-lg text-[#5c4333] leading-relaxed">
          تنفيذ جميع أنواع المطابخ والخزائن والمجالس والستائر، بفريق تصميم وتصنيع وتركيب واحد، من أول قياس وحتى تسليم المفتاح.
        </p>
      </div>

      <!-- Services Grid: 4 Cards Across on Desktop -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
        
        <div 
          v-for="svc in servicesList" 
          :key="svc.id"
          class="service-card-item group relative bg-white rounded-[1.4rem] p-8 sm:p-9 text-center shadow-sm hover:shadow-2xl border border-[#2b1810]/10 hover:border-[#c8932b] transition-all duration-400 transform hover:-translate-y-2.5 overflow-hidden flex flex-col items-center justify-between"
        >
          <!-- Top Tag Badge ("الأهم") positioned at top-right exactly like input_file_0.png -->
          <span 
            v-if="svc.badge" 
            class="absolute top-3.5 right-3.5 bg-[#c8932b] text-[#2b1810] text-[0.72rem] font-extrabold px-3.5 py-1 rounded-full shadow-sm tracking-wide z-10"
          >
            {{ svc.badge }}
          </span>

          <!-- Hover Subtle Gradient Background Overlay -->
          <div class="absolute inset-0 bg-gradient-to-b from-[#f3ebe1]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />

          <div class="w-full flex flex-col items-center relative z-10">
            <!-- Circle Icon Container -->
            <div class="w-20 h-20 rounded-full bg-[#f3ebe1] group-hover:bg-[#e3b75e]/25 flex items-center justify-center mb-6 transition-colors duration-400 border border-[#2b1810]/5 group-hover:border-[#e3b75e]/40 shadow-sm shrink-0">
              
              <!-- 1. Kitchen Icon -->
              <svg v-if="svc.iconType === 'kitchen'" class="w-11 h-11 text-[#5c4333] group-hover:text-[#2b1810] transition-colors duration-300" viewBox="0 0 64 64" fill="none" stroke="currentColor">
                <path d="M6 50h52M10 50V18a3 3 0 0 1 3-3h38a3 3 0 0 1 3 3v32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <path d="M10 30h44" fill="none" stroke="currentColor" stroke-width="2"/>
                <rect x="15" y="20" width="10" height="7" rx="1" fill="none" stroke="currentColor" stroke-width="1.6"/>
                <rect x="29" y="20" width="10" height="7" rx="1" fill="none" stroke="currentColor" stroke-width="1.6"/>
                <rect x="43" y="20" width="6" height="7" rx="1" fill="none" stroke="currentColor" stroke-width="1.6"/>
                <path d="M15 38h8v8h-8zM27 38h8v8h-8zM39 38h8v8h-8z" fill="none" stroke="currentColor" stroke-width="1.6"/>
                <circle cx="21" cy="42" r="1.3" fill="currentColor"/>
                <circle cx="33" cy="42" r="1.3" fill="currentColor"/>
                <circle cx="45" cy="42" r="1.3" fill="currentColor"/>
                <path d="M48 16c0-6 6-6 6-12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>

              <!-- 2. Wardrobe Icon -->
              <svg v-else-if="svc.iconType === 'wardrobe'" class="w-11 h-11 text-[#5c4333] group-hover:text-[#2b1810] transition-colors duration-300" viewBox="0 0 64 64" fill="none" stroke="currentColor">
                <rect x="12" y="8" width="40" height="50" rx="2" fill="none" stroke="currentColor" stroke-width="2"/>
                <path d="M32 8v50" fill="none" stroke="currentColor" stroke-width="2"/>
                <circle cx="27" cy="32" r="1.5" fill="currentColor"/>
                <circle cx="37" cy="32" r="1.5" fill="currentColor"/>
                <path d="M16 8v6M48 8v6" fill="none" stroke="currentColor" stroke-width="1.6"/>
              </svg>

              <!-- 3. Majlis Icon -->
              <svg v-else-if="svc.iconType === 'majlis'" class="w-11 h-11 text-[#5c4333] group-hover:text-[#2b1810] transition-colors duration-300" viewBox="0 0 64 64" fill="none" stroke="currentColor">
                <path d="M8 44V30a4 4 0 0 1 4-4h32a4 4 0 0 1 4 4v14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <path d="M6 44h52v6a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-6Z" fill="none" stroke="currentColor" stroke-width="2"/>
                <path d="M10 30v-6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6M42 30v-6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6" fill="none" stroke="currentColor" stroke-width="1.8"/>
                <path d="M10 53v5M50 53v5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>

              <!-- 4. Curtain Icon -->
              <svg v-else-if="svc.iconType === 'curtain'" class="w-11 h-11 text-[#5c4333] group-hover:text-[#2b1810] transition-colors duration-300" viewBox="0 0 64 64" fill="none" stroke="currentColor">
                <path d="M8 8h48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>
                <path d="M12 8c0 14-4 20-4 38M22 8c2 16-3 22 1 38M32 8c-3 16 3 22-1 38M42 8c0 14 4 20 4 38M52 8c-2 16 2 22-2 38" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
              </svg>

            </div>

            <!-- Title in Aref Ruqaa -->
            <h3 class="font-display text-xl sm:text-[1.35rem] font-bold text-[#2b1810] mb-3 leading-snug">
              {{ svc.title }}
            </h3>

            <!-- Description -->
            <p class="font-sans text-sm sm:text-[0.96rem] text-[#5c4333] leading-relaxed">
              {{ svc.desc }}
            </p>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>
