<script setup lang="ts">
import { useThemePalette } from '~/composables/useThemePalette'

const { palettes, activePaletteId, isSwitcherOpen, applyPalette, toggleSwitcher } = useThemePalette()
</script>

<template>
  <div>
    <!-- Floating Palette Trigger Pill Button (Fixed on middle/bottom left) -->
    <!--
    <div class="fixed left-6 bottom-24 z-50 transition-all duration-300 font-sans">
      <button
        @click="toggleSwitcher(true)"
        type="button"
        aria-label="تغيير ألوان الموقع والاقتراحات"
        class="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#2b1810]/95 backdrop-blur-xl border-2 border-[#c8932b] text-[#fdf8f0] shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden cursor-pointer"
      >
        <span class="absolute inset-0 bg-gradient-to-r from-[#c8932b]/20 via-[#e3b75e]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <span class="text-xl group-hover:rotate-12 transition-transform duration-300 inline-block">🌸</span>
        <span class="font-bold text-sm md:text-[0.92rem] text-[#ecd9bd] group-hover:text-white transition-colors">
          ألوان الموقع للسيدات
        </span>
        <span class="w-2 h-2 rounded-full bg-[#1ebe5d] animate-pulse" />
      </button>
    </div>
    -->

    <!-- Teleport modal to <body> so no parent (relative / backdrop-blur) can trap
         the fixed overlay in its own stacking context and hide it. -->
    <Teleport to="body">
      <!-- Backdrop Overlay -->
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="isSwitcherOpen"
          @click="toggleSwitcher(false)"
          class="fixed inset-0 bg-black/70 backdrop-blur-md"
          style="z-index: 2147483646"
        />
      </Transition>

      <!-- Centered Modal Layer -->
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 scale-95 translate-y-6"
        enter-to-class="opacity-100 scale-100 translate-y-0"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100 scale-100 translate-y-0"
        leave-to-class="opacity-0 scale-95 translate-y-6"
      >
        <div
          v-if="isSwitcherOpen"
          class="fixed inset-0 flex items-center justify-center p-4 md:p-6 pointer-events-none"
          style="z-index: 2147483647"
        >
          <!-- Luxury Modal Panel -->
          <div
            class="pointer-events-auto w-full max-w-[760px] max-h-[88vh] bg-[#2b1810] border-2 border-[#c8932b]/60 rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.85)] flex flex-col overflow-hidden text-right font-sans"
            dir="rtl"
          >
            <!-- Modal Header -->
            <div class="px-6 py-5 border-b border-[#6b4226]/40 flex items-center justify-between gap-3 bg-gradient-to-l from-[#3a2417] to-transparent shrink-0">
              <div class="flex items-center gap-3">
                <span class="w-11 h-11 rounded-2xl bg-[#c8932b]/20 border border-[#c8932b]/40 flex items-center justify-center text-2xl shrink-0">
                  🎨
                </span>
                <div>
                  <h3 class="font-display text-xl md:text-2xl font-bold text-[#fdf8f0]">
                    اقتراحات الألوان الفاخرة للسيدات
                  </h3>
                  <p class="text-xs md:text-sm text-[#ecd9bd] mt-0.5">
                    اختاري أي مجموعة لونية لتغيير مظهر الموقع بالكامل فوراً وتجربتها بشكل حي
                  </p>
                </div>
              </div>

              <button
                @click="toggleSwitcher(false)"
                aria-label="إغلاق نافذة الألوان"
                class="w-10 h-10 rounded-full bg-[#6b4226]/30 hover:bg-[#6b4226] text-[#ecd9bd] hover:text-white transition-all flex items-center justify-center text-lg font-bold shrink-0 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <!-- Palettes Grid (Scrollable) -->
            <div class="p-6 overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-4">
              <div
                v-for="palette in palettes"
                :key="palette.id"
                @click="applyPalette(palette.id)"
                class="group relative rounded-2xl p-4 border-2 transition-all duration-300 cursor-pointer flex flex-col justify-between"
                :class="[
                  activePaletteId === palette.id
                    ? 'bg-[#3a2417] border-[#c8932b] shadow-[0_0_25px_rgba(200,147,43,0.35)] scale-[1.02]'
                    : 'bg-[#2b1810]/60 border-[#6b4226]/30 hover:border-[#c8932b]/60 hover:bg-[#3a2417]/60'
                ]"
              >
                <!-- Top info -->
                <div>
                  <div class="flex items-center justify-between gap-2 mb-2">
                    <div class="flex items-center gap-2">
                      <span class="text-2xl">{{ palette.icon }}</span>
                      <div>
                        <h4 class="font-bold text-base md:text-lg text-[#fdf8f0] group-hover:text-[#e3b75e] transition-colors">
                          {{ palette.nameAr }}
                        </h4>
                        <span class="text-[0.7rem] text-[#ecd9bd]/70 block font-mono">
                          {{ palette.name }}
                        </span>
                      </div>
                    </div>

                    <!-- Active Indicator / Checkmark -->
                    <span
                      class="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all shrink-0"
                      :class="activePaletteId === palette.id ? 'bg-[#c8932b] text-[#2b1810] scale-110 shadow-md' : 'bg-[#6b4226]/30 text-transparent group-hover:bg-[#6b4226]/50'"
                    >
                      ✓
                    </span>
                  </div>

                  <p class="text-xs text-[#ecd9bd] leading-relaxed mb-4">
                    {{ palette.subtitle }}
                  </p>
                </div>

                <!-- Color Swatches Preview Bar -->
                <div class="pt-3 border-t border-[#6b4226]/20 flex items-center justify-between gap-2">
                  <div class="flex items-center gap-1.5 flex-1">
                    <div
                      class="h-6 flex-1 rounded-md shadow-inner border border-white/10"
                      :style="{ backgroundColor: palette.colors.dark }"
                      title="الخلفية الأساسية"
                    />
                    <div
                      class="h-6 flex-1 rounded-md shadow-inner border border-white/10"
                      :style="{ backgroundColor: palette.colors.cocoa }"
                      title="اللون الثانوي"
                    />
                    <div
                      class="h-6 flex-1 rounded-md shadow-inner border border-white/10"
                      :style="{ backgroundColor: palette.colors.gold }"
                      title="اللون الملكي / الذهبي"
                    />
                    <div
                      class="h-6 flex-1 rounded-md shadow-inner border border-white/10"
                      :style="{ backgroundColor: palette.colors.cream }"
                      title="البطاقات والخلفيات الفاتحة"
                    />
                    <div
                      class="h-6 flex-1 rounded-md shadow-inner border border-white/10"
                      :style="{ backgroundColor: palette.colors.beige }"
                      title="نصوص العناوين"
                    />
                  </div>

                  <!-- Badge -->
                  <span class="text-[0.68rem] px-2.5 py-1 rounded-full bg-[#6b4226]/40 text-[#e3b75e] font-semibold tracking-wide shrink-0">
                    {{ palette.badge }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Modal Footer -->
            <div class="px-6 py-4 border-t border-[#6b4226]/40 bg-[#2b1810] flex items-center justify-between gap-4 shrink-0">
              <button
                @click="applyPalette('pearl-white-gold')"
                type="button"
                class="text-xs md:text-sm text-[#ecd9bd] hover:text-[#e3b75e] underline transition-colors cursor-pointer"
              >
                🔄 إعادة الضبط للأبيض اللؤلؤي والذهبي (الافتراضي)
              </button>

              <button
                @click="toggleSwitcher(false)"
                type="button"
                class="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#c8932b] to-[#e3b75e] text-[#2b1810] font-bold text-sm shadow-lg hover:brightness-110 active:scale-95 transition-all cursor-pointer shrink-0"
              >
                تأكيد واختيار المجموعة ✨
              </button>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>
