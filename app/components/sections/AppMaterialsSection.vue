<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const materialsRef = ref<HTMLElement | null>(null)

const materialsList = [
  {
    code: 'MDF',
    title: 'ألواح MDF عالية الكثافة',
    desc: 'مقاومة للرطوبة والتشقق، أساس قوي لتشطيبات الاكريليك والبولي لاك.',
    width: 92
  },
  {
    code: 'Acrylic',
    title: 'ألواح الاكريليك اللمعة',
    desc: 'مظهر لامع فاخر سهل التنظيف، يمنح المطبخ طابعاً مودرن مميزاً.',
    width: 88
  },
  {
    code: 'PVC',
    title: 'بولي لاك (PVC) مقاوم',
    desc: 'مقاومة عالية للحرارة والبخار، خيار اقتصادي وعملي وبألوان متعددة.',
    width: 85
  },
  {
    code: 'Wood',
    title: 'خشب طبيعي وقشرة خشبية',
    desc: 'تشطيب كلاسيكي أصيل بملمس طبيعي يضيف دفئاً للمساحة.',
    width: 90
  },
  {
    code: 'Hardware',
    title: 'مفصلات وسكك ألمانية',
    desc: 'حركة سلسة وعمر افتراضي طويل لأدراج الأدوات والأبواب.',
    width: 95
  },
  {
    code: 'Counter',
    title: 'كاونتر كوارتز وجرانيت',
    desc: 'أسطح عمل صلبة مقاومة للخدش والحرارة بألوان متعددة تناسب كل ديكور.',
    width: 93
  }
]

onMounted(() => {
  if (!materialsRef.value || typeof window === 'undefined') return

  const ctx = gsap.context(() => {
    gsap.from('.mat-card-item', {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: materialsRef.value,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    })

    gsap.utils.toArray<HTMLElement>('.mat-bar-inner').forEach((bar) => {
      const targetWidth = bar.getAttribute('data-width') || '85'
      gsap.fromTo(
        bar,
        { width: '0%' },
        {
          width: `${targetWidth}%`,
          duration: 1.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: bar,
            start: 'top 88%',
            toggleActions: 'play none none none'
          }
        }
      )
    })
  }, materialsRef)

  return () => ctx.revert()
})
</script>

<template>
  <section id="materials" ref="materialsRef" class="py-20 sm:py-28 bg-[#2b1810] relative overflow-hidden font-sans text-white" dir="rtl">
    <!-- Subtle Ambient Gold Glow Overlay -->
    <div class="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[550px] bg-[#c8932b]/8 rounded-full blur-3xl pointer-events-none" />

    <div class="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#ecd9bd] font-bold text-sm mb-5">
          <span class="w-2 h-2 rounded-full bg-[#c8932b] animate-pulse"></span>
          <span>الخامات والصناعة</span>
        </div>
        <h2 class="font-display text-3xl sm:text-4xl md:text-[2.8rem] font-bold text-[#f4e8d8] leading-[1.3]">
          خامات مختارة بعناية لمطبخ يدوم لسنوات
        </h2>
      </div>

      <!-- Materials Grid: 3 Cards Across exactly matching .mat-grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6.5">
        
        <div 
          v-for="(mat, idx) in materialsList" 
          :key="idx"
          class="mat-card-item group bg-white/5 hover:bg-white/9 border border-[#f4e8d8]/15 hover:border-[#c8932b] rounded-2xl p-7 sm:p-8 backdrop-blur-md transition-all duration-350 transform hover:-translate-y-2 flex flex-col justify-between"
        >
          <div>
            <!-- English Header Code in Gold Display Font -->
            <div class="font-display text-[#e3b75e] text-2xl sm:text-[1.8rem] font-bold mb-2.5 tracking-wide group-hover:text-[#c8932b] transition-colors duration-300">
              {{ mat.code }}
            </div>

            <!-- Arabic Title in Aref Ruqaa -->
            <h4 class="font-display text-[#f4e8d8] text-lg sm:text-[1.2rem] font-bold mb-2.5 leading-snug">
              {{ mat.title }}
            </h4>

            <!-- Description -->
            <p class="font-sans text-xs sm:text-[0.9rem] text-[#f4e8d8]/75 leading-relaxed m-0">
              {{ mat.desc }}
            </p>
          </div>

          <!-- Progress / Accent Bar -->
          <div class="h-2 rounded-full bg-white/12 overflow-hidden mt-6">
            <span 
              class="mat-bar-inner block h-full rounded-full bg-gradient-to-r from-[#c8932b] to-[#e3b75e] transition-all duration-300 shadow-sm"
              :data-width="mat.width"
            />
          </div>
        </div>

      </div>

    </div>
  </section>
</template>
