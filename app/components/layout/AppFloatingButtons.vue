<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isVisible = ref(false)

onMounted(() => {
  // Show floating buttons smoothly after initial render
  setTimeout(() => {
    isVisible.value = true
  }, 500)
})
</script>

<template>
  <div 
    class="fixed bottom-6 left-6 z-50 flex flex-col gap-3.5 transition-all duration-500 transform font-sans"
    :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'"
  >
    <!-- Floating Phone Button -->
    <a 
      href="tel:0541384726" 
      aria-label="اتصل بنا الآن"
      class="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#2b1810] border-2 border-[#c8932b] text-[#e3b75e] flex items-center justify-center shadow-2xl hover:bg-[#6b4226] hover:scale-110 active:scale-95 transition-all duration-300 group"
      title="اتصل بنا الآن"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 md:w-7 md:h-7 group-hover:rotate-12 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    </a>

    <!-- Floating WhatsApp Button -->
    <a 
      href="https://wa.me/966541384726?text=السلام%20عليكم%2C%20أرغب%20بمعرفة%20تفاصيل%20عن%20المطابخ%20والخزائن" 
      target="_blank" 
      rel="noopener"
      aria-label="تواصل عبر الواتساب"
      class="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#1ebe5d] text-white flex items-center justify-center shadow-2xl hover:bg-[#19a24f] hover:scale-110 active:scale-95 transition-all duration-300 group relative"
      title="تواصل واتساب مباشر"
    >
      <span class="absolute -top-1 -right-1 flex h-3.5 w-3.5">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
        <span class="relative inline-flex rounded-full h-3.5 w-3.5 bg-white border-2 border-[#1ebe5d]" />
      </span>
      <svg class="w-6 h-6 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0a12 12 0 1 1 0 24 12 12 0 0 1 0-24zm0 2.182a9.818 9.818 0 1 0 0 19.636 9.818 9.818 0 0 0 0-19.636zm5.82 13.91c-.244.686-1.22 1.32-1.745 1.396-.48.068-1.11.1-3.565-.918-3.14-1.302-5.185-4.497-5.342-4.706-.157-.21-1.277-1.704-1.277-3.25 0-1.545.808-2.31 1.096-2.624.288-.314.628-.393.837-.393.21 0 .419.002.602.011.194.01.455-.073.712.545.262.628.89 2.172.968 2.33.078.157.13.34.026.549-.105.21-.157.34-.314.524-.157.183-.33.41-.471.55-.157.157-.32.327-.136.641.183.314.814 1.343 1.745 2.172 1.201 1.07 2.214 1.403 2.528 1.56.314.157.5.13.683-.079.183-.21.785-.916.995-1.23.21-.314.419-.262.706-.157.288.105 1.832.864 2.146 1.02.314.157.523.236.602.367.078.13.078.759-.166 1.445z"/>
      </svg>
    </a>
  </div>
</template>
