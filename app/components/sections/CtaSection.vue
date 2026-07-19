<script setup lang="ts">
import AppButton from '../common/AppButton.vue'
import IconCheck from '../icons/IconCheck.vue'
</script>

<template>
  <section class="py-24 md:py-36 px-6 md:px-12 relative z-10 overflow-hidden font-sans">
    <div class="max-w-6xl mx-auto">
      <!-- Glass Banner Card -->
      <div class="relative rounded-3xl bg-gradient-to-b from-[#3a2417]/80 to-[#2b1810]/90 backdrop-blur-2xl border border-[#c8932b]/40 p-10 md:p-20 text-center overflow-hidden shadow-2xl shadow-[#c8932b]/25">
        <!-- Ambient Glowing Background inside card -->
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-[#c8932b]/30 via-[#e3b75e]/20 to-[#c08a52]/20 rounded-full blur-[100px] pointer-events-none" />

        <div class="relative z-10 max-w-3xl mx-auto">
          <span class="px-3.5 py-1 rounded-full bg-[#3a2417] border border-[#c8932b]/40 text-[#e3b75e] font-sans text-xs uppercase tracking-wider mb-6 inline-block shadow-md">
            جاهز للنشر على الحافة السحابية
          </span>

          <h2 class="text-3xl md:text-6xl font-bold tracking-normal text-white mb-6 leading-tight font-display">
            انشر وبنِ معماريتك السحابية <br />
            <span class="bg-clip-text text-transparent bg-gradient-to-l from-[#e3b75e] via-[#c8932b] to-[#ecd9bd]">الذاتية فائقة السرعة</span>
          </h2>

          <p class="text-base md:text-xl text-[#ecd9bd] font-normal leading-relaxed mb-10 max-w-2xl mx-auto">
            انضم إلى فرق الهندسة المتطورة التي تبني مستقبل الأنظمة الموزعة مع زمن استجابة أقل من جزء من المللي ثانية وتوجيه عصبي ذاتي.
          </p>

          <!-- CTA Actions -->
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <AppButton variant="primary" size="lg" href="#pricing" class="w-full sm:w-auto min-w-[240px]">
              <span>ابدأ التجربة المجانية 14 يوماً</span>
            </AppButton>
            <AppButton variant="glass" size="lg" href="#demo" class="w-full sm:w-auto min-w-[240px]">
              <span>احجز عرضاً تقنياً مباشراً</span>
            </AppButton>
          </div>

          <!-- Trust Checkmarks -->
          <div class="flex flex-wrap items-center justify-center gap-6 text-xs md:text-sm text-[#ecd9bd]">
            <span class="flex items-center gap-2">
              <IconCheck class="w-4 h-4 text-[#1ebe5d]" />
              <span>لا تتطلب بطاقة ائتمان</span>
            </span>
            <span class="flex items-center gap-2">
              <IconCheck class="w-4 h-4 text-[#1ebe5d]" />
              <span>نشر وتفعيل خلال 3 دقائق</span>
            </span>
            <span class="flex items-center gap-2">
              <IconCheck class="w-4 h-4 text-[#1ebe5d]" />
              <span>إلغاء فوري بضغطة زر وبدون قيود</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
