<script setup lang="ts">
import { ref } from 'vue'
import { useGsap } from '~/composables/useGsap'
import SectionHeader from '../common/SectionHeader.vue'
import AppBadge from '../common/AppBadge.vue'

const demoRef = ref<HTMLElement | null>(null)
const activeNode = ref<'client' | 'edge' | 'wasm' | 'db'>('edge')
const { registerAnimation, gsap } = useGsap()

registerAnimation((gsap) => {
  gsap.fromTo(demoRef.value?.querySelector('.demo-canvas'),
    { y: 40, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: demoRef.value,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    }
  )
}, demoRef)
</script>

<template>
  <section id="demo" ref="demoRef" class="py-24 md:py-36 px-6 md:px-12 relative z-10 bg-[#3a2417]/40 border-y border-[#c8932b]/20 font-sans">
    <div class="max-w-7xl mx-auto">
      <SectionHeader 
        badge="المخطط الهندسي التفاعلي"
        title="استكشف مسار البيانات الآلي الفوري"
        subtitle="انقر على أي عقدة في الشبكة العالمية لعرض قياسات الأداء الفورية، وضمانات تنفيذ WebAssembly، وتزامن الحالة الموزع."
      />

      <div class="demo-canvas rounded-3xl bg-[#2b1810]/90 backdrop-blur-2xl border border-[#c8932b]/30 shadow-luxury-heavy overflow-hidden p-6 md:p-12 text-right">
        <!-- Node Selector Navigation -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <button
            @click="activeNode = 'client'"
            class="p-4 rounded-2xl border text-right transition-all duration-300 flex flex-col justify-between font-sans"
            :class="activeNode === 'client' ? 'bg-[#c8932b]/20 border-[#e3b75e] shadow-lg shadow-[#c8932b]/20 translate-y-[-2px]' : 'bg-[#3a2417]/60 border-[#c8932b]/20 hover:border-[#c8932b]/50'"
          >
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs font-mono uppercase tracking-wider text-[#c08a52]">01. المصدر</span>
              <span class="w-2 h-2 rounded-full" :class="activeNode === 'client' ? 'bg-[#e3b75e] animate-ping' : 'bg-[#6b4226]'" />
            </div>
            <div class="font-bold font-display text-white text-base">طلب العميل العالمي</div>
          </button>

          <button
            @click="activeNode = 'edge'"
            class="p-4 rounded-2xl border text-right transition-all duration-300 flex flex-col justify-between font-sans"
            :class="activeNode === 'edge' ? 'bg-[#c8932b]/20 border-[#e3b75e] shadow-lg shadow-[#c8932b]/20 translate-y-[-2px]' : 'bg-[#3a2417]/60 border-[#c8932b]/20 hover:border-[#c8932b]/50'"
          >
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs font-mono uppercase tracking-wider text-[#c08a52]">02. التوجيه</span>
              <span class="w-2 h-2 rounded-full" :class="activeNode === 'edge' ? 'bg-[#e3b75e] animate-ping' : 'bg-[#6b4226]'" />
            </div>
            <div class="font-bold font-display text-white text-base">شبكة التوجيه العصبي</div>
          </button>

          <button
            @click="activeNode = 'wasm'"
            class="p-4 rounded-2xl border text-right transition-all duration-300 flex flex-col justify-between font-sans"
            :class="activeNode === 'wasm' ? 'bg-[#c8932b]/20 border-[#e3b75e] shadow-lg shadow-[#c8932b]/20 translate-y-[-2px]' : 'bg-[#3a2417]/60 border-[#c8932b]/20 hover:border-[#c8932b]/50'"
          >
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs font-mono uppercase tracking-wider text-[#c08a52]">03. المعالجة</span>
              <span class="w-2 h-2 rounded-full" :class="activeNode === 'wasm' ? 'bg-[#e3b75e] animate-ping' : 'bg-[#6b4226]'" />
            </div>
            <div class="font-bold font-display text-white text-base">صناديق عزل Wasm</div>
          </button>

          <button
            @click="activeNode = 'db'"
            class="p-4 rounded-2xl border text-right transition-all duration-300 flex flex-col justify-between font-sans"
            :class="activeNode === 'db' ? 'bg-[#c8932b]/20 border-[#e3b75e] shadow-lg shadow-[#c8932b]/20 translate-y-[-2px]' : 'bg-[#3a2417]/60 border-[#c8932b]/20 hover:border-[#c8932b]/50'"
          >
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs font-mono uppercase tracking-wider text-[#c08a52]">04. التخزين</span>
              <span class="w-2 h-2 rounded-full" :class="activeNode === 'db' ? 'bg-[#e3b75e] animate-ping' : 'bg-[#6b4226]'" />
            </div>
            <div class="font-bold font-display text-white text-base">مستودع الحالة الموزع</div>
          </button>
        </div>

        <!-- Node Details Panel -->
        <div class="rounded-2xl bg-[#3a2417] border border-[#c8932b]/30 p-8 md:p-10 min-h-[260px] flex flex-col justify-between font-sans">
          <div v-if="activeNode === 'client'">
            <div class="flex items-center justify-between mb-4">
              <AppBadge label="TLS 1.3 / حماية كمية" variant="gold" />
              <span class="text-xs font-mono text-[#c08a52]" dir="ltr">Latency: 0.12ms</span>
            </div>
            <h3 class="text-2xl font-bold text-white mb-3 font-display">استقبال وتأمين طلبات العملاء</h3>
            <p class="text-[#ecd9bd] leading-relaxed max-w-3xl mb-6">
              يتم استقبال الطلبات وتصديقها برمجياً وتشفيرها عبر مفاتيح أمان معزولة داخل المعالجات قبل وصولها إلى أي نقطة عبور إقليمية.
            </p>
          </div>

          <div v-else-if="activeNode === 'edge'">
            <div class="flex items-center justify-between mb-4">
              <AppBadge label="توجيه BGP Anycast الفوري" variant="gold" />
              <span class="text-xs font-mono text-[#c08a52]">320 مركز حافة حول العالم</span>
            </div>
            <h3 class="text-2xl font-bold text-white mb-3 font-display">مُوجه المسارات العصبي الذكي</h3>
            <p class="text-[#ecd9bd] leading-relaxed max-w-3xl mb-6">
              يقوم محرك الذكاء الاصطناعي بتحليل ازدحام كابلات الألياف الضوئية العالمية عبر 14 مزود اتصالات كل 50 مللي ثانية لضمان اختيار أسرع مسار ممكن.
            </p>
          </div>

          <div v-else-if="activeNode === 'wasm'">
            <div class="flex items-center justify-between mb-4">
              <AppBadge label="محرك V8 Wasm الفائق" variant="gold" />
              <span class="text-xs font-mono text-[#c08a52]" dir="ltr">0.4ms Cold Start</span>
            </div>
            <h3 class="text-2xl font-bold text-white mb-3 font-display">صناديق التنفيذ الفورية المعزولة</h3>
            <p class="text-[#ecd9bd] leading-relaxed max-w-3xl mb-6">
              يتم تنفيذ الأكواد البرمجية داخل بيئات WebAssembly آمنة لا تشارك الذاكرة، مما يلغي أعباء الحاويات ويوفر سرعة معالجة للملايين من الطلبات بالثانية.
            </p>
          </div>

          <div v-else>
            <div class="flex items-center justify-between mb-4">
              <AppBadge label="تزامن CRDT اللحظي" variant="gold" />
              <span class="text-xs font-mono text-[#c08a52]">تسق بيانات عالمي</span>
            </div>
            <h3 class="text-2xl font-bold text-white mb-3 font-display">مستودع الحالة متعدد الأقاليم</h3>
            <p class="text-[#ecd9bd] leading-relaxed max-w-3xl mb-6">
              يتم نسخ التحديثات وتزامن البيانات فورياً عبر جميع عناقيد الحافة باستخدام خوارزميات خالية من التعارض لضمان الاتساق الفوري في كل القارات.
            </p>
          </div>

          <div class="flex items-center justify-between pt-6 border-t border-[#c8932b]/20 text-xs font-mono text-[#e3b75e]">
            <span>الحالة: بيئة معالجة نشطة</span>
            <span>مواصفات المعمارية الإصدار 4.2</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
