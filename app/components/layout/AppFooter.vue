<script setup lang="ts">
import { navLinks } from '~/data/landingData'
</script>

<template>
  <footer class="border-t border-[#c8932b]/20 bg-[#2b1810] text-sm text-[#ecd9bd] relative z-10 py-16 px-6 md:px-12 font-sans">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
      <!-- Right: Brand & Copyright -->
      <div class="flex flex-col items-center md:items-start gap-3 text-right">
        <NuxtLink to="/" class="flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8932b] rounded-lg">
          <div class="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#c8932b] to-[#e3b75e] p-[1.5px] flex items-center justify-center">
            <span class="text-[#2b1810] font-black text-sm font-display">أ</span>
          </div>
          <span class="text-xl font-bold tracking-tight text-white font-display">أثير</span>
        </NuxtLink>
        <p class="text-xs text-[#c08a52] text-center md:text-right leading-relaxed">
          &copy; {{ new Date().getFullYear() }} شركة أنظمة أثير المحدودة. جميع الحقوق محفوظة. <br />
          صُمم ببراعة ودقة هندسية فائقة مع حوسبة WebAssembly الطرفية.
        </p>
      </div>

      <!-- Center: Navigation Links -->
      <ul class="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-[#ecd9bd]">
        <li v-for="link in navLinks" :key="link.label">
          <a :href="link.href" class="hover:text-[#e3b75e] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8932b] rounded">
            {{ link.label }}
          </a>
        </li>
      </ul>

      <!-- Left: System Status & Telemetry Badge -->
      <div class="flex items-center gap-3 px-4 py-2 rounded-full bg-[#3a2417] border border-[#c8932b]/25 shadow-inner">
        <span class="relative flex h-2.5 w-2.5">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1ebe5d] opacity-75" />
          <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#1ebe5d]" />
        </span>
        <span class="text-xs font-sans font-semibold text-[#f4e8d8] tracking-wide">جميع العناقيد السحابية تعمل بكفاءة</span>
      </div>
    </div>
  </footer>
</template>
