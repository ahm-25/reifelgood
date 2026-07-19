<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const processRef = ref<HTMLElement | null>(null)

const stepsList = [
  {
    num: '1',
    title: 'التواصل والاستشارة',
    desc: 'تواصل معنا واتساب أو هاتف ونناقش احتياجاتك وميزانيتك.'
  },
  {
    num: '2',
    title: 'المعاينة والقياس',
    desc: 'زيارة الموقع وأخذ المقاسات الدقيقة مجاناً.'
  },
  {
    num: '3',
    title: 'التصميم والاعتماد',
    desc: 'تصميم مبدئي يناسب مساحتك، نُعدّله حتى موافقتك النهائية.'
  },
  {
    num: '4',
    title: 'التصنيع',
    desc: 'تصنيع داخل ورشتنا بخامات مختارة ودقة عالية.'
  },
  {
    num: '5',
    title: 'التركيب والتسليم',
    desc: 'تركيب نظيف وسريع، وتسليم نهائي مع الضمان.'
  }
]

onMounted(() => {
  if (!processRef.value || typeof window === 'undefined') return

  const ctx = gsap.context(() => {
    gsap.from('.proc-card-item', {
      y: 35,
      opacity: 0,
      duration: 0.75,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: processRef.value,
        start: 'top 82%',
        toggleActions: 'play none none none'
      }
    })
  }, processRef)

  return () => ctx.revert()
})
</script>

<template>
  <section id="process" ref="processRef" class="py-20 sm:py-28 bg-[#fdfdfd] relative overflow-hidden font-sans text-[#2b1810]" dir="rtl">
    <!-- Subtle Ambient Decorative Glow -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-[#c8932b]/5 rounded-full blur-3xl pointer-events-none" />

    <div class="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c8932b]/15 border border-[#e3b75e]/35 text-[#b8801d] font-bold text-sm mb-5">
          <span class="w-2 h-2 rounded-full bg-[#c8932b] animate-pulse"></span>
          <span>خطوات العمل</span>
        </div>
        <h2 class="font-display text-3xl sm:text-4xl md:text-[2.8rem] font-bold text-[#2b1810] leading-[1.3]">
          من أول اتصال إلى تسليم المفتاح
        </h2>
      </div>

      <!-- Process 5 Steps Horizontal Grid exactly matching .process-row -->
      <div class="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-5">
        
        <!-- Dashed Golden Connecting Line on Desktop (Exactly matching top: 34px, right: 8%, left: 8%) -->
        <div 
          class="hidden lg:block absolute top-[34px] right-[8%] left-[8%] h-[2px] z-0 pointer-events-none"
          style="background: repeating-linear-gradient(90deg, #c8932b 0 10px, transparent 10px 20px);"
        />

        <div 
          v-for="(step, idx) in stepsList" 
          :key="idx"
          class="proc-card-item relative z-10 text-center group flex flex-col items-center"
        >
          <!-- Circle 70px x 70px with Dark Brown Background and Gold Number exactly matching .proc-circle -->
          <div class="w-[70px] h-[70px] rounded-full bg-[#2b1810] text-[#e3b75e] group-hover:bg-[#c8932b] group-hover:text-[#2b1810] flex items-center justify-center font-display text-2xl font-bold mb-4 shadow-md border-[3px] border-[#fdfdfd] transition-all duration-300 transform group-hover:scale-110 shrink-0">
            {{ step.num }}
          </div>

          <!-- Title in Aref Ruqaa -->
          <h4 class="font-display text-lg sm:text-[1.12rem] font-bold text-[#2b1810] mb-2 leading-snug group-hover:text-[#c8932b] transition-colors duration-300">
            {{ step.title }}
          </h4>

          <!-- Description -->
          <p class="font-sans text-xs sm:text-[0.88rem] text-[#6e5847] leading-relaxed max-w-[220px] m-0">
            {{ step.desc }}
          </p>
        </div>

      </div>

    </div>
  </section>
</template>
