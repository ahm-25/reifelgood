<script setup lang="ts">
import { ref } from 'vue'

const faqList = [
  {
    id: 'q1',
    q: 'كم تستغرق مدة تصنيع وتركيب المطبخ؟',
    a: 'تختلف المدة حسب حجم المطبخ ونوع الخامة، وفي المتوسط تتراوح بين 10 إلى 20 يوم عمل من تاريخ اعتماد التصميم النهائي.'
  },
  {
    id: 'q2',
    q: 'هل التصميم والمعاينة مجانية؟',
    a: 'نعم، نقدم معاينة منزلية وتصميمًا مبدئيًا مجانًا بالكامل قبل أي اتفاق نهائي أو تصنيع.'
  },
  {
    id: 'q3',
    q: 'ما الفرق بين مطابخ الاكريليك والبولي لاك؟',
    a: 'الاكريليك يتميز بلمعة عالية ومظهر فاخر، بينما يتميز البولي لاك بمقاومة أعلى للرطوبة والحرارة وسعر أقل نسبيًا، ويختار العميل حسب احتياجه وميزانيته.'
  },
  {
    id: 'q4',
    q: 'هل يوجد ضمان على المطابخ والخزائن؟',
    a: 'نعم، نقدم ضمانًا مكتوبًا يشمل التصنيع والتركيب، وتختلف مدة الضمان حسب نوع الخامة والمنتج.'
  },
  {
    id: 'q5',
    q: 'هل تغطون جميع مناطق المملكة؟',
    a: 'نعمل في معظم مناطق المملكة، وللتأكد من تغطية منطقتك تحديدًا يرجى التواصل معنا مباشرة عبر واتساب أو الهاتف.'
  },
  {
    id: 'q6',
    q: 'كيف يمكنني معرفة السعر التقريبي لمطبخي؟',
    a: 'يمكنك استخدام أداة التقدير المبدئي في الموقع، أو التواصل المباشر معنا لإرسال صور ومقاسات مبدئية للحصول على تقدير أدق.'
  },
  {
    id: 'q7',
    q: 'هل تقومون بتفصيل المجالس والستائر أيضًا؟',
    a: 'نعم، نُنفذ المجالس العربية والمودرن والتركية، ونوفر ونركب جميع أنواع الستائر بما يتناسب مع ديكور منزلك بالكامل.'
  }
]

const openIndex = ref<number | null>(null)

const toggleFaq = (idx: number) => {
  openIndex.value = openIndex.value === idx ? null : idx
}
</script>

<template>
  <section id="faq" class="py-20 sm:py-28 bg-[#faf5ec] relative overflow-hidden font-sans text-[#2b1810]" dir="rtl">
    <!-- Subtle Decorative Ambient Gold Glow -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#c8932b]/5 rounded-full blur-3xl pointer-events-none" />

    <div class="max-w-4xl mx-auto px-6 lg:px-12 relative z-10">
      
      <!-- Section Header -->
      <div class="text-center mb-14">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c8932b]/15 border border-[#e3b75e]/35 text-[#b8801d] font-bold text-sm mb-5">
          <span class="w-2 h-2 rounded-full bg-[#c8932b] animate-pulse"></span>
          <span>الأسئلة الشائعة</span>
        </div>
        <h2 class="font-display text-3xl sm:text-4xl md:text-[2.8rem] font-bold text-[#2b1810] leading-[1.3]">
          إجابات سريعة لأهم استفساراتكم
        </h2>
      </div>

      <!-- FAQ Accordion List exactly matching .faq-wrap & .faq-item -->
      <div class="space-y-3.5">
        <div 
          v-for="(item, idx) in faqList" 
          :key="item.id"
          class="bg-white rounded-2xl shadow-sm hover:shadow-md border border-[#d3c5b4]/60 hover:border-[#c8932b] transition-all duration-300 overflow-hidden"
          :class="{ 'border-[#c8932b] shadow-md ring-1 ring-[#c8932b]/20': openIndex === idx }"
        >
          <!-- Question Header -->
          <button
            type="button"
            @click="toggleFaq(idx)"
            class="w-full text-right px-6 sm:px-7 py-5 flex items-center justify-between gap-4 font-sans font-bold text-base sm:text-[1.05rem] text-[#2b1810] hover:text-[#c8932b] transition-colors focus:outline-none"
          >
            <span class="leading-snug">
              {{ item.q }}
            </span>

            <!-- Plus / Cross Icon exactly matching #ic-plus -->
            <span 
              class="w-6 h-6 flex items-center justify-center text-[#c8932b] shrink-0 transition-transform duration-350"
              :class="openIndex === idx ? 'rotate-45' : ''"
            >
              <svg class="w-5.5 h-5.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M12 5v14M5 12h14" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
          </button>

          <!-- Answer Panel -->
          <div
            class="overflow-hidden transition-all duration-400 ease-in-out"
            :class="openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'"
          >
            <div class="px-6 sm:px-7 pb-6 pt-1 text-[#5c4333] text-sm sm:text-[0.98rem] leading-relaxed border-t border-[#2b1810]/5 mt-1">
              <p class="m-0">
                {{ item.a }}
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>
