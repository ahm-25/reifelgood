<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const stylesRef = ref<HTMLElement | null>(null)

const stylesList = [
  {
    id: 1,
    title: 'مودرن',
    desc: 'خطوط نظيفة وألوان هادئة وتشطيبات لمعة عصرية.',
    image: '/images/styles/modern.jpg'
  },
  {
    id: 2,
    title: 'كلاسيك',
    desc: 'زخارف خشبية أنيقة ولمسات ذهبية فاخرة.',
    image: '/images/styles/classic.jpg'
  },
  {
    id: 3,
    title: 'نيوكلاسيك',
    desc: 'مزيج متوازن بين البساطة العصرية والفخامة التقليدية.',
    image: '/images/styles/neoclassic.jpg'
  }
]

onMounted(() => {
  if (!stylesRef.value || typeof window === 'undefined') return

  const ctx = gsap.context(() => {
    gsap.from('.style-card-item', {
      y: 45,
      opacity: 0,
      duration: 0.85,
      stagger: 0.18,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: stylesRef.value,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    })
  }, stylesRef)

  return () => ctx.revert()
})
</script>

<template>
  <section id="styles" ref="stylesRef" class="py-20 sm:py-28 bg-[#faf5ec] relative overflow-hidden font-sans text-[#2b1810]" dir="rtl">
    <div class="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c8932b]/15 border border-[#e3b75e]/35 text-[#b8801d] font-bold text-sm mb-5">
          <span class="w-2 h-2 rounded-full bg-[#c8932b] animate-pulse"></span>
          <span>الستايلات والتصاميم</span>
        </div>
        <h2 class="font-display text-3xl sm:text-4xl md:text-[2.8rem] font-bold text-[#2b1810] leading-[1.3]">
          اختر الطابع الذي يناسب شخصيتك
        </h2>
      </div>

      <!-- Styles Grid: 3 Cards Across on Desktop exactly matching .style-grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
        
        <div 
          v-for="item in stylesList" 
          :key="item.id"
          class="style-card-item group relative rounded-2xl overflow-hidden aspect-[3/4] shadow-md hover:shadow-2xl transition-all duration-400 border-2 border-[#c8932b]/30 hover:border-[#c8932b] transform hover:-translate-y-2"
        >
          <!-- Background Image matching exact portrait ratio -->
          <img 
            :src="item.image" 
            :alt="`مطبخ ${item.title}`"
            loading="lazy"
            class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
          />

          <!-- Protected Caption Overlay: style-overlay-gradient never gets overridden by solid white gradient stops -->
          <div class="style-overlay-gradient absolute inset-0 flex flex-col justify-end p-6 sm:p-8 text-right transition-all duration-300">
            <!-- Title in Aref Ruqaa -->
            <h4 class="font-display text-white text-xl sm:text-[1.35rem] font-extrabold mb-2 leading-snug group-hover:text-[#e3b75e] transition-colors duration-300">
              {{ item.title }}
            </h4>

            <!-- Subtitle description -->
            <p class="font-sans text-xs sm:text-[0.92rem] text-white/90 leading-relaxed m-0 font-semibold">
              {{ item.desc }}
            </p>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>
