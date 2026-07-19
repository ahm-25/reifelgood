<script setup lang="ts">
import { ref } from 'vue'
import { faqData } from '~/data/landingData'
import SectionHeader from '../common/SectionHeader.vue'

const openId = ref<string | null>(faqData[0].id)

const toggleFaq = (id: string) => {
  if (openId.value === id) {
    openId.value = null
  } else {
    openId.value = id
  }
}
</script>

<template>
  <section id="faq" class="py-24 md:py-32 px-6 md:px-12 relative z-10 font-sans">
    <div class="max-w-4xl mx-auto">
      <SectionHeader 
        badge="هل لديك استفسار؟"
        title="الأسئلة الشائعة والأجوبة الفنية"
        subtitle="كل ما تحتاج معرفته حول معمارية أثير الطرفية، وبروتوكولات التشفير والأمان الكمي، وضمانات الأداء الفائقة."
      />

      <!-- Handcrafted Accordion List -->
      <div class="space-y-4 text-right">
        <div 
          v-for="item in faqData" 
          :key="item.id"
          class="rounded-2xl bg-[#3a2417]/40 backdrop-blur-xl border border-[#c8932b]/20 overflow-hidden transition-all duration-300"
          :class="openId === item.id ? 'border-[#e3b75e]/60 bg-[#3a2417]/70 shadow-xl shadow-[#c8932b]/15' : 'hover:border-[#c8932b]/40'"
        >
          <h3>
            <button
              type="button"
              @click="toggleFaq(item.id)"
              :aria-expanded="openId === item.id"
              :aria-controls="`faq-content-${item.id}`"
              :id="`faq-heading-${item.id}`"
              class="w-full text-right p-6 md:p-7 flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8932b]"
            >
              <span class="text-base md:text-lg font-bold text-white tracking-normal font-display">
                {{ item.question }}
              </span>

              <span 
                class="w-8 h-8 rounded-full bg-[#2b1810] border border-[#c8932b]/30 flex items-center justify-center text-[#e3b75e] shrink-0 transition-transform duration-300"
                :class="openId === item.id ? 'rotate-180 bg-[#c8932b] text-[#2b1810]' : ''"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
          </h3>

          <!-- Accordion Panel Body -->
          <div
            :id="`faq-content-${item.id}`"
            role="region"
            :aria-labelledby="`faq-heading-${item.id}`"
            v-show="openId === item.id"
            class="px-6 pb-7 md:px-7 text-[#ecd9bd] text-sm md:text-base leading-relaxed border-t border-[#c8932b]/20 pt-4 font-sans"
          >
            {{ item.answer }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
