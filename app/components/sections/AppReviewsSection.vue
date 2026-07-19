<script setup lang="ts">
import { ref } from 'vue'

const reviewsList = [
  {
    name: 'أبو فهد',
    city: 'الرياض',
    text: 'تعامل راقٍ من أول معاينة، والمطبخ خرج تماماً كما تصورناه، دقة عالية في المقاسات والتشطيب.'
  },
  {
    name: 'أم سلطان',
    city: 'جدة',
    text: 'خزانة غرفة النوم عملية جداً والتقسيم الداخلي وفر علينا مساحة كبيرة، شكراً لفريق مطابخ جوري.'
  },
  {
    name: 'خالد',
    city: 'الدمام',
    text: 'المجلس العربي تنفيذ فخم وخامات ممتازة والتركيب كان نظيف وسريع جداً.'
  },
  {
    name: 'سارة',
    city: 'الخبر',
    text: 'الستائر بالضبط كما طلبتها، وفريق التركيب محترم وسريع في إنهاء المهمة.'
  },
  {
    name: 'محمد العتيبي',
    city: 'مكة المكرمة',
    text: 'أسعار منافسة جدًا مقارنة بالجودة المقدمة، وأنصح بهم بشدة لكل من يبحث عن مطبخ مميز.'
  },
  {
    name: 'نورة',
    city: 'المدينة المنورة',
    text: 'تصميم المطبخ كان عمليًا واستغلال ذكي جدًا لكل زاوية، فعلاً يستحقون الثقة.'
  }
]
</script>

<template>
  <section id="reviews" class="py-20 sm:py-28 bg-[#2b1810] relative overflow-hidden font-sans text-white" dir="rtl">
    <!-- Subtle Decorative Ambient Gold Glow -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[550px] bg-[#c8932b]/8 rounded-full blur-3xl pointer-events-none" />

    <div class="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 mb-14 text-center">
      <!-- Section Header -->
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#ecd9bd] font-bold text-sm mb-5">
        <span class="w-2 h-2 rounded-full bg-[#c8932b] animate-pulse"></span>
        <span>آراء عملائنا</span>
      </div>
      <h2 class="font-display text-3xl sm:text-4xl md:text-[2.8rem] font-bold text-[#f4e8d8] leading-[1.3]">
        ثقة عملائنا هي شهادتنا الحقيقية
      </h2>
    </div>

    <!-- Infinite Horizontal Marquee Track exactly matching .test-track -->
    <div class="overflow-hidden relative z-10 py-2 group">
      <div class="flex gap-6 w-max animate-reviews-scroll hover:animation-paused">
        <!-- We render list twice for seamless infinite looping -->
        <div 
          v-for="(rev, idx) in [...reviewsList, ...reviewsList]" 
          :key="idx"
          class="w-[340px] shrink-0 bg-white/6 hover:bg-white/10 border border-[#f4e8d8]/15 hover:border-[#c8932b] rounded-2xl p-7 backdrop-blur-md transition-all duration-350 transform hover:-translate-y-2 flex flex-col justify-between text-right shadow-lg"
        >
          <div>
            <!-- 5 Golden Stars exactly matching .test-stars -->
            <div class="flex items-center gap-1 mb-4 text-[#e3b75e]">
              <svg v-for="star in 5" :key="star" class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            </div>

            <!-- Review Text -->
            <p class="font-sans text-[0.93rem] text-[#f4e8d8]/85 leading-relaxed mb-6 m-0">
              {{ rev.text }}
            </p>
          </div>

          <!-- Client Avatar & Info exactly matching .test-who -->
          <div class="flex items-center gap-3 pt-4 border-t border-white/10">
            <div class="w-[42px] h-[42px] rounded-full bg-[#5c3820] text-[#e3b75e] font-display font-bold text-lg flex items-center justify-center shrink-0 shadow-inner border border-[#e3b75e]/30">
              {{ rev.name.charAt(0) }}
            </div>
            <div class="flex flex-col">
              <strong class="font-sans text-[0.92rem] font-bold text-[#f4e8d8] leading-snug">
                {{ rev.name }}
              </strong>
              <span class="font-sans text-[0.78rem] text-[#f4e8d8]/55">
                {{ rev.city }}
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes reviewsScroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(50%);
  }
}

.animate-reviews-scroll {
  animation: reviewsScroll 40s linear infinite;
}

.hover\:animation-paused:hover {
  animation-play-state: paused;
}
</style>
