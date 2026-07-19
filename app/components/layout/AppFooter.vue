<script setup lang="ts">
import { ref } from 'vue'
</script>

<template>
  <footer class="bg-[#1c0f08] text-[#ecd9bd]/70 pt-16 sm:pt-20 border-t border-[#ecd9bd]/10 font-sans relative z-10" dir="rtl">
    
    <div class="max-w-6xl mx-auto px-6 lg:px-12">
      
      <!-- 4-Column Grid exactly matching .foot-grid (1.4fr 1fr 1fr 1.2fr) -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-14 border-b border-[#ecd9bd]/10">
        
        <!-- Col 1: Logo & About (1.4fr) -->
        <div class="lg:col-span-1">
          <div class="flex items-center gap-3 mb-5">
            <div class="w-13 h-13 rounded-full border-2 border-[#c8932b] overflow-hidden shrink-0 bg-[#2b1810] flex items-center justify-center">
              <span class="font-display font-bold text-xl text-[#e3b75e]">ج</span>
            </div>
            <strong class="font-display text-xl sm:text-2xl text-[#f4e8d8] font-bold">
              مطابخ جوري
            </strong>
          </div>
          <p class="text-sm text-[#ecd9bd]/70 leading-relaxed">
            شركة متخصصة في تصميم وتنفيذ وتركيب جميع أنواع المطابخ والخزائن والمجالس والستائر بخبرة طويلة وجودة عالية وضمان حقيقي.
          </p>
        </div>

        <!-- Col 2: Our Services (1fr) -->
        <div>
          <h4 class="font-bold text-base sm:text-[1.05rem] text-[#f4e8d8] mb-5">
            خدماتنا
          </h4>
          <ul class="space-y-3.5 text-sm">
            <li>
              <a href="#kitchens" class="hover:text-[#e3b75e] transition-colors inline-block hover:translate-x-[-4px] duration-200">
                تصميم وتنفيذ المطابخ
              </a>
            </li>
            <li>
              <a href="#services" class="hover:text-[#e3b75e] transition-colors inline-block hover:translate-x-[-4px] duration-200">
                تفصيل الخزائن
              </a>
            </li>
            <li>
              <a href="#services" class="hover:text-[#e3b75e] transition-colors inline-block hover:translate-x-[-4px] duration-200">
                تنفيذ المجالس
              </a>
            </li>
            <li>
              <a href="#services" class="hover:text-[#e3b75e] transition-colors inline-block hover:translate-x-[-4px] duration-200">
                تركيب الستائر
              </a>
            </li>
          </ul>
        </div>

        <!-- Col 3: Quick Links (1fr) -->
        <div>
          <h4 class="font-bold text-base sm:text-[1.05rem] text-[#f4e8d8] mb-5">
            روابط سريعة
          </h4>
          <ul class="space-y-3.5 text-sm">
            <li>
              <a href="#about" class="hover:text-[#e3b75e] transition-colors inline-block hover:translate-x-[-4px] duration-200">
                من نحن
              </a>
            </li>
            <li>
              <a href="#portfolio" class="hover:text-[#e3b75e] transition-colors inline-block hover:translate-x-[-4px] duration-200">
                معرض أعمالنا
              </a>
            </li>
            <li>
              <a href="#faq" class="hover:text-[#e3b75e] transition-colors inline-block hover:translate-x-[-4px] duration-200">
                الأسئلة الشائعة
              </a>
            </li>
            <li>
              <a href="#contact" class="hover:text-[#e3b75e] transition-colors inline-block hover:translate-x-[-4px] duration-200">
                تواصل معنا
              </a>
            </li>
          </ul>
        </div>

        <!-- Col 4: Contact info (1.2fr) -->
        <div>
          <h4 class="font-bold text-base sm:text-[1.05rem] text-[#f4e8d8] mb-5">
            تواصل معنا
          </h4>
          <p class="text-sm text-[#ecd9bd]/80 mb-3" dir="ltr">
            <span dir="rtl">هاتف وواتساب:</span> 0570993783
          </p>
          <p class="text-sm text-[#ecd9bd]/65 leading-relaxed">
            متوفرون يوميًا من 9 صباحًا حتى 11 مساءً لاستقبال طلباتكم واستفساراتكم.
          </p>
        </div>

      </div>

      <!-- Footer Bottom Bar matching exact design without credit text -->
      <div class="py-6 flex items-center justify-center text-center text-xs sm:text-[0.86rem] text-[#ecd9bd]/60">
        <span>© {{ new Date().getFullYear() }} جميع الحقوق محفوظة - مطابخ جوري للمطابخ والخزائن</span>
      </div>

    </div>
  </footer>
</template>
