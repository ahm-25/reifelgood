<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const whyUsRef = ref<HTMLElement | null>(null)

const reasonsList = [
  {
    num: '01',
    title: 'تصميم مجاني ومعاينة دقيقة',
    desc: 'نزور موقعك ونأخذ المقاسات الدقيقة ونقدم تصميماً مجانياً يناسب احتياجاتك ومساحتك قبل أي تنفيذ.'
  },
  {
    num: '02',
    title: 'خامات أصلية ومضمونة',
    desc: 'نتعامل مباشرة مع موردين موثوقين لضمان جودة الخشب والاكسسوارات والمفصلات المستخدمة.'
  },
  {
    num: '03',
    title: 'تصنيع داخل ورشة متخصصة',
    desc: 'خطوط تصنيع وآلات حديثة تضمن دقة القطع والتجميع وسرعة في إنهاء الطلبات.'
  },
  {
    num: '04',
    title: 'فريق تركيب محترف',
    desc: 'تركيب نظيف وسريع بدون أي إضرار بجدران أو أرضيات منزلك، مع متابعة بعد التركيب.'
  },
  {
    num: '05',
    title: 'أسعار منافسة وضمان حقيقي',
    desc: 'عروض تنافسية تناسب جميع الميزانيات، مع ضمان حقيقي مكتوب على التصنيع والتركيب.'
  },
  {
    num: '06',
    title: 'متابعة وخدمة ما بعد البيع',
    desc: 'نبقى على تواصل معك بعد التسليم لأي صيانة أو تعديل يحتاجه مطبخك أو خزانتك.'
  }
]

onMounted(() => {
  if (!whyUsRef.value || typeof window === 'undefined') return

  const ctx = gsap.context(() => {
    gsap.from('.why-card-item', {
      y: 45,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: whyUsRef.value,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    })
  }, whyUsRef)

  return () => ctx.revert()
})
</script>

<template>
  <section id="why-us" ref="whyUsRef" class="py-20 sm:py-28 bg-[#faf5ec] relative overflow-hidden font-sans text-[#2b1810]" dir="rtl">
    <!-- Subtle Background Glow -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-[#c8932b]/6 rounded-full blur-3xl pointer-events-none" />

    <div class="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c8932b]/15 border border-[#e3b75e]/35 text-[#b8801d] font-bold text-sm mb-5">
          <span class="w-2 h-2 rounded-full bg-[#c8932b] animate-pulse"></span>
          <span>لماذا تختار مطابخ جوري</span>
        </div>
        <h2 class="font-display text-3xl sm:text-4xl md:text-[2.8rem] font-bold text-[#2b1810] leading-[1.3]">
          خمسة أسباب تجعلنا الخيار الأول لمطبخك
        </h2>
      </div>

      <!-- Why Us Grid: 3 Cards Across in 2 Rows on Desktop -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        
        <div 
          v-for="(item, idx) in reasonsList" 
          :key="idx"
          class="why-card-item group relative bg-white rounded-2xl p-8 sm:p-9 text-center shadow-sm hover:shadow-2xl border border-[#2b1810]/5 border-t-4 border-t-[#c8932b] transition-all duration-400 transform hover:-translate-y-2.5 overflow-hidden flex flex-col items-center justify-start"
        >
          <!-- Hover Subtle Gradient Overlay -->
          <div class="absolute inset-0 bg-gradient-to-b from-[#f3ebe1]/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />

          <!-- Big Golden Number -->
          <div class="font-display text-4xl sm:text-[2.6rem] font-bold text-[#e3b75e]/75 group-hover:text-[#c8932b] transition-colors duration-300 mb-3 relative z-10 tracking-wide">
            {{ item.num }}
          </div>

          <!-- Title in Aref Ruqaa -->
          <h3 class="font-display text-xl sm:text-[1.35rem] font-bold text-[#2b1810] mb-3 leading-snug relative z-10 group-hover:text-[#c8932b] transition-colors duration-300">
            {{ item.title }}
          </h3>

          <!-- Description -->
          <p class="font-sans text-sm sm:text-[0.96rem] text-[#5c4333] leading-relaxed relative z-10">
            {{ item.desc }}
          </p>
        </div>

      </div>

    </div>
  </section>
</template>
