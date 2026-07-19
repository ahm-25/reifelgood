<script setup lang="ts">
import { testimonialsData } from '~/data/landingData'
import SectionHeader from '../common/SectionHeader.vue'
import GlassCard from '../common/GlassCard.vue'
</script>

<template>
  <section class="py-24 md:py-32 px-6 md:px-12 relative z-10 font-sans">
    <div class="max-w-7xl mx-auto">
      <SectionHeader 
        badge="شهادات وموثوقية المؤسسات"
        title="موثوق من قادة وخبراء الهندسة"
        subtitle="اكتشف لماذا ينتقل كبار مديري البنية التحتية من أنظمة المراقبة التقليدية إلى منصة أثير الطرفية الفائقة."
      />

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <GlassCard 
          v-for="item in testimonialsData" 
          :key="item.id"
          class="flex flex-col justify-between text-right"
          padding="p-8"
        >
          <div>
            <!-- Star Rating -->
            <div class="flex items-center gap-1 mb-6 text-[#e3b75e]">
              <span v-for="n in item.rating" :key="n" class="text-base">★</span>
            </div>

            <!-- Quote Text -->
            <blockquote class="text-[#f4e8d8] text-base md:text-lg leading-relaxed mb-8 font-normal">
              "{{ item.quote }}"
            </blockquote>
          </div>

          <!-- Author Info -->
          <div class="flex items-center gap-4 pt-6 border-t border-[#c8932b]/20">
            <img 
              :src="item.avatar" 
              :alt="item.author" 
              class="w-12 h-12 rounded-full object-cover border border-[#c8932b]/40 bg-[#3a2417] shrink-0"
              loading="lazy"
            />
            <div>
              <h4 class="font-bold text-white tracking-normal text-base font-display">{{ item.author }}</h4>
              <p class="text-xs text-[#ecd9bd] font-sans">{{ item.role }} في <span class="text-[#e3b75e] font-semibold">{{ item.company }}</span></p>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  </section>
</template>
