<script setup lang="ts">
import { ref } from 'vue'
import { pricingPlans } from '~/data/landingData'
import SectionHeader from '../common/SectionHeader.vue'
import GlassCard from '../common/GlassCard.vue'
import AppButton from '../common/AppButton.vue'
import AppBadge from '../common/AppBadge.vue'
import IconCheck from '../icons/IconCheck.vue'

const isAnnual = ref(true)
</script>

<template>
  <section id="pricing" class="py-24 md:py-32 px-6 md:px-12 bg-[#3a2417]/30 border-y border-[#c8932b]/20 relative z-10 font-sans">
    <div class="max-w-7xl mx-auto">
      <SectionHeader 
        badge="باقات شفافة ومدروسة"
        title="خطط استثمارية متوقعة ومناسبة لكل فريق"
        subtitle="ابدأ بتجربة مجانية شاملة لمدة 14 يوماً، وتوسع بمرونة تامة مع ازدياد حجم معالجة البيانات على بنيتك التحتية."
      />

      <!-- Monthly / Annual Toggle -->
      <div class="flex items-center justify-center gap-4 mb-16 select-none">
        <span class="text-sm font-semibold" :class="!isAnnual ? 'text-white' : 'text-[#ecd9bd]'">الفاتورة الشهرية</span>
        
        <button 
          @click="isAnnual = !isAnnual"
          type="button"
          role="switch"
          :aria-checked="isAnnual"
          aria-label="تبديل الخصم السنوي"
          class="relative w-14 h-8 rounded-full bg-[#3a2417] border border-[#c8932b]/40 transition-colors p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8932b]"
          :class="isAnnual ? 'bg-[#c8932b]/30 border-[#e3b75e]/60' : ''"
        >
          <div 
            class="w-6 h-6 rounded-full bg-white shadow-md transition-transform duration-300"
            :class="isAnnual ? '-translate-x-6 bg-[#e3b75e]' : 'translate-x-0'"
          />
        </button>

        <div class="flex items-center gap-2">
          <span class="text-sm font-semibold" :class="isAnnual ? 'text-white' : 'text-[#ecd9bd]'">الفاتورة السنوية</span>
          <span class="px-2.5 py-0.5 rounded-full bg-gradient-to-l from-[#e3b75e] to-[#c8932b] text-[11px] font-bold text-[#2b1810] uppercase tracking-wider shadow-sm">
            وفّر 20%
          </span>
        </div>
      </div>

      <!-- Pricing Cards Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        <div 
          v-for="plan in pricingPlans" 
          :key="plan.id"
          class="flex flex-col transition-transform duration-300"
          :class="plan.popular ? 'lg:-translate-y-4' : ''"
        >
          <GlassCard 
            :glow-color="plan.popular ? 'rgba(200, 147, 43, 0.35)' : 'rgba(200, 147, 43, 0.15)'"
            padding="p-8"
            class="h-full flex flex-col justify-between border relative text-right"
            :class="plan.popular ? 'bg-[#2b1810]/95 border-[#e3b75e]/60 shadow-2xl shadow-[#c8932b]/25' : 'bg-[#3a2417]/40 border-[#c8932b]/20'"
          >
            <!-- Top Popular Badge -->
            <div v-if="plan.popular" class="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
              <span class="px-4 py-1.5 rounded-full bg-gradient-to-l from-[#e3b75e] via-[#c8932b] to-[#c08a52] text-xs font-bold text-[#2b1810] uppercase tracking-wider shadow-lg shadow-[#c8932b]/40 border border-[#ecd9bd]/30">
                ★ الباقة الأكثر اختياراً
              </span>
            </div>

            <!-- Header & Price -->
            <div>
              <div class="flex items-center justify-between gap-4 mb-4">
                <h3 class="text-2xl font-bold text-white font-display">{{ plan.name }}</h3>
                <AppBadge v-if="plan.badge && !plan.popular" :label="plan.badge" variant="gold" />
              </div>
              
              <p class="text-[#ecd9bd] text-sm leading-relaxed mb-6 min-h-[44px]">
                {{ plan.description }}
              </p>

              <div class="flex items-baseline gap-2 mb-8 pb-6 border-b border-[#c8932b]/20">
                <span v-if="typeof plan.monthlyPrice === 'number'" class="text-5xl font-bold text-white tracking-normal font-display">
                  ${{ isAnnual ? plan.annualPrice : plan.monthlyPrice }}
                </span>
                <span v-else class="text-4xl font-bold text-white tracking-normal font-display">
                  {{ plan.monthlyPrice }}
                </span>
                <span v-if="typeof plan.monthlyPrice === 'number'" class="text-[#c08a52] text-sm">/ شهر</span>
              </div>

              <!-- Features List -->
              <h4 class="text-xs font-semibold uppercase tracking-wider text-[#ecd9bd] mb-4">المزايا والقدرات المشمولة:</h4>
              <ul class="space-y-3.5 mb-8 text-sm">
                <li 
                  v-for="feature in plan.features" 
                  :key="feature.text"
                  class="flex items-start gap-3"
                  :class="feature.included ? 'text-[#f4e8d8]' : 'text-[#6e5847] line-through opacity-60'"
                >
                  <div 
                    class="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    :class="feature.included ? 'bg-[#c8932b]/25 text-[#e3b75e] border border-[#c8932b]/40' : 'bg-[#3a2417] text-[#6e5847]'"
                  >
                    <IconCheck class="w-3.5 h-3.5" />
                  </div>
                  <span>{{ feature.text }}</span>
                </li>
              </ul>
            </div>

            <!-- CTA Button -->
            <AppButton 
              :variant="plan.popular ? 'primary' : 'glass'" 
              size="lg" 
              href="#demo"
              class="w-full"
            >
              {{ plan.ctaText }}
            </AppButton>
          </GlassCard>
        </div>
      </div>
    </div>
  </section>
</template>
