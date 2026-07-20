<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const warrantyRef = ref<HTMLElement | null>(null)

const warrantyPoints = [
  {
    title: 'ضمان على الخامات:',
    desc: 'ضمان مكتوب يصل حتى 10 سنوات على بعض الخامات حسب نوع المنتج.'
  },
  {
    title: 'ضمان على التصنيع والتركيب:',
    desc: 'متابعة فنية لأي ملاحظة بعد التركيب مباشرة.'
  },
  {
    title: 'قطع غيار متوفرة:',
    desc: 'توفير المفصلات والإكسسوارات لاحقاً دون الحاجة لاستبدال كامل القطعة.'
  },
  {
    title: 'دعم فني مستمر:',
    desc: 'فريق دعم متاح عبر واتساب لأي استشارة بعد البيع.'
  }
]

onMounted(() => {
  if (!warrantyRef.value || typeof window === 'undefined') return

  const ctx = gsap.context(() => {
    gsap.from('.warranty-card-reveal', {
      x: -50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: warrantyRef.value,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    })

    gsap.from('.warranty-text-reveal', {
      x: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: warrantyRef.value,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    })

    gsap.from('.warranty-item', {
      y: 25,
      opacity: 0,
      duration: 0.6,
      stagger: 0.12,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.warranty-list',
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    })
  }, warrantyRef)

  return () => ctx.revert()
})
</script>

<template>
  <section id="warranty" ref="warrantyRef" class="py-20 sm:py-28 bg-[#faf5ec] relative overflow-hidden font-sans text-[#2b1810]" dir="rtl">
    <div class="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
      
      <!-- Two Columns Grid exactly matching .warranty-grid (.9fr 1.1fr) -->
      <div class="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-14 items-center">
        
        <!-- Right Column: Header & Checkpoints List -->
        <div class="warranty-text-reveal order-2 lg:order-1">
          <!-- Section Header Badge -->
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c8932b]/15 border border-[#c8932b]/35 text-[#c8932b] font-bold text-sm mb-5">
            <span class="w-2 h-2 rounded-full bg-[#c8932b] animate-pulse"></span>
            <span>الضمان وخدمة ما بعد البيع</span>
          </div>

          <!-- Title in Aref Ruqaa -->
          <h2 class="font-display text-3xl sm:text-4xl md:text-[2.8rem] font-bold text-[#2b1810] leading-[1.3] mb-8">
            راحة بالك جزء من المنتج
          </h2>

          <!-- Warranty List exactly matching .warranty-list -->
          <ul class="warranty-list space-y-4.5 m-0 p-0 list-none">
            <li 
              v-for="(item, idx) in warrantyPoints" 
              :key="idx"
              class="warranty-item flex items-start gap-3.5"
            >
              <!-- Check SVG exactly matching #ic-check -->
              <svg class="w-5.5 h-5.5 text-[#c8932b] shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M4 12.5 9 17l11-11" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <p class="font-sans text-sm sm:text-[0.98rem] text-[#5c4333] leading-relaxed m-0">
                <strong class="font-bold text-[#2b1810]">{{ item.title }}</strong>
                {{ item.desc }}
              </p>
            </li>
          </ul>
        </div>

        <!-- Left Column: White Shield Card exactly matching .warranty-card -->
        <div class="warranty-card-reveal order-1 lg:order-2">
          <div class="warranty-card-item bg-white rounded-3xl p-8 sm:p-11 shadow-2xl relative border-2 border-[#c8932b]/35 text-center sm:text-right flex flex-col items-center sm:items-start transition-all duration-350 hover:shadow-2xl hover:border-[#c8932b] transform hover:-translate-y-2">
            
            <!-- Shield Circle Icon exactly matching .big-ic -->
            <div class="w-[90px] h-[90px] rounded-full bg-[#faf5ec] border border-[#c8932b]/25 flex items-center justify-center mb-6 mx-auto sm:mx-0 shadow-inner group">
              <!-- Shield SVG exactly matching #ic-shield -->
              <svg class="w-12 h-12 text-[#c8932b] transform transition-transform duration-500 group-hover:scale-110" viewBox="0 0 64 64" fill="none" stroke="currentColor">
                <path d="M32 6 12 14v16c0 16 9 24 20 28 11-4 20-12 20-28V14Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
                <path d="M23 32l7 7 12-14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>

            <!-- Title in Aref Ruqaa -->
            <h3 class="font-display text-2xl sm:text-3xl font-bold text-[#2b1810] mb-3 leading-snug w-full">
              ضمان حقيقي يحميك بعد التسليم
            </h3>

            <!-- Description -->
            <p class="font-sans text-sm sm:text-[1rem] text-[#5c4333] leading-relaxed m-0 w-full">
              نقف بجانبك بعد التسليم، فضماننا يشمل التصنيع والتركيب وقطع الغيار، مع متابعة دورية لضمان رضاك الكامل.
            </p>

          </div>
        </div>

      </div>

    </div>
  </section>
</template>
