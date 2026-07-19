<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const teamRef = ref<HTMLElement | null>(null)

const teamList = [
  {
    id: 1,
    title: 'قسم التصميم الداخلي',
    desc: 'تصميم ثلاثي الأبعاد ومخططات دقيقة',
    icon: 'team'
  },
  {
    id: 2,
    title: 'قسم النجارة والتصنيع',
    desc: 'تصنيع داخل الورشة بأحدث الآلات',
    icon: 'tools'
  },
  {
    id: 3,
    title: 'قسم التوريد والشحن',
    desc: 'توصيل آمن لجميع مناطق المملكة',
    icon: 'truck'
  },
  {
    id: 4,
    title: 'قسم التركيب والجودة',
    desc: 'تركيب نهائي وفحص جودة شامل',
    icon: 'award'
  }
]

onMounted(() => {
  if (!teamRef.value || typeof window === 'undefined') return

  const ctx = gsap.context(() => {
    gsap.from('.team-card-item', {
      y: 35,
      opacity: 0,
      duration: 0.75,
      stagger: 0.14,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: teamRef.value,
        start: 'top 82%',
        toggleActions: 'play none none none'
      }
    })
  }, teamRef)

  return () => ctx.revert()
})
</script>

<template>
  <section id="team" ref="teamRef" class="py-20 sm:py-24 bg-[#faf5ec] relative overflow-hidden font-sans text-[#2b1810]" dir="rtl">
    <!-- Subtle Ambient Gold Glow -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#c8932b]/5 rounded-full blur-3xl pointer-events-none" />

    <div class="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-14">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c8932b]/15 border border-[#e3b75e]/35 text-[#b8801d] font-bold text-sm mb-4">
          <span class="w-2 h-2 rounded-full bg-[#c8932b] animate-pulse"></span>
          <span>فريق العمل</span>
        </div>
        <h2 class="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-[#2b1810] leading-[1.3] mb-4">
          حرفيون متخصصون في كل تفصيلة
        </h2>
        <p class="font-sans text-base sm:text-[1.05rem] text-[#5c4333] leading-relaxed">
          يضم فريقنا مصممين داخليين ونجارين ومركبين متخصصين يعملون معاً لتحويل تصميم المطبخ من رسمة إلى واقع ملموس بدقة عالية.
        </p>
      </div>

      <!-- Team Grid: 4 Cards Across exactly matching .team-grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <div 
          v-for="member in teamList" 
          :key="member.id"
          class="team-card-item group bg-white rounded-[1.2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-350 transform hover:-translate-y-2 flex flex-col border border-[#2b1810]/5 text-center"
        >
          <!-- Top Dark Box: exact height 150px with exact 160deg linear-gradient(#4a2d1a, #2b1810) -->
          <div 
            class="h-[150px] flex items-center justify-center transition-all duration-350 relative overflow-hidden shrink-0"
            style="background: linear-gradient(160deg, #4a2d1a, #2b1810);"
          >
            <!-- Subtle Gold Glow overlay on hover -->
            <div class="absolute inset-0 bg-[#c8932b]/12 opacity-0 group-hover:opacity-100 transition-opacity duration-350" />
            
            <!-- 1. Interior Design Icon (#ic-team) -->
            <svg v-if="member.icon === 'team'" class="w-16 h-16 text-[#e3b75e] group-hover:scale-110 transition-transform duration-300 relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="12" cy="8" r="3.4" fill="none" stroke="currentColor" stroke-width="1.8"/>
              <path d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6" fill="none" stroke="currentColor" stroke-width="1.8"/>
            </svg>

            <!-- 2. Carpentry & Manufacturing Icon (#ic-tools) -->
            <svg v-else-if="member.icon === 'tools'" class="w-16 h-16 text-[#e3b75e] group-hover:scale-110 transition-transform duration-300 relative z-10" viewBox="0 0 64 64" fill="none" stroke="currentColor">
              <path d="M40 8 24 24M14 50l8-8M44 12l8 8-22 22-8-8Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M10 54l4-4 6 6-4 4z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
            </svg>

            <!-- 3. Supply & Shipping Icon (#ic-truck) -->
            <svg v-else-if="member.icon === 'truck'" class="w-16 h-16 text-[#e3b75e] group-hover:scale-110 transition-transform duration-300 relative z-10" viewBox="0 0 64 64" fill="none" stroke="currentColor">
              <rect x="4" y="20" width="32" height="22" rx="2" fill="none" stroke="currentColor" stroke-width="2"/>
              <path d="M36 28h12l8 8v6h-20Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
              <circle cx="16" cy="46" r="4.5" fill="none" stroke="currentColor" stroke-width="2"/>
              <circle cx="46" cy="46" r="4.5" fill="none" stroke="currentColor" stroke-width="2"/>
            </svg>

            <!-- 4. Installation & Quality Icon (#ic-award) -->
            <svg v-else-if="member.icon === 'award'" class="w-16 h-16 text-[#e3b75e] group-hover:scale-110 transition-transform duration-300 relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="12" cy="9" r="6" fill="none" stroke="currentColor" stroke-width="1.8"/>
              <path d="M8 14l-2 7 6-3 6 3-2-7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
            </svg>
          </div>

          <!-- Bottom White Box exact padding-top 18px and padding-bottom 18px matching original CSS -->
          <div class="pt-[18px] pb-[18px] px-6 text-center flex-grow flex flex-col justify-center bg-white">
            <h3 class="font-display text-[1.08rem] sm:text-[1.12rem] font-bold text-[#2b1810] mb-1.5 leading-snug group-hover:text-[#c8932b] transition-colors duration-300">
              {{ member.title }}
            </h3>
            <span class="block font-sans text-[0.85rem] text-[#6e5847] leading-relaxed">
              {{ member.desc }}
            </span>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>
