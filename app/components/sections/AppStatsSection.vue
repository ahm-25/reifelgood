<script setup lang="ts">
import { ref, onMounted } from 'vue'

const statsRef = ref<HTMLElement | null>(null)

const statsData = [
  { id: 1, target: 1500, prefix: '+', suffix: '', label: 'مطبخ تم تنفيذه', current: ref(0) },
  { id: 2, target: 980, prefix: '+', suffix: '', label: 'خزانة وغرفة نوم', current: ref(0) },
  { id: 3, target: 15, prefix: '', suffix: '', label: 'سنة خبرة وحرفية', current: ref(0) },
  { id: 4, target: 99, prefix: '%', suffix: '', label: 'رضا عملائنا', current: ref(0) }
]

onMounted(() => {
  if (!statsRef.value || typeof window === 'undefined') return

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        statsData.forEach(item => {
          const target = item.target
          const step = Math.max(1, Math.ceil(target / 60))
          let cur = 0
          const timer = setInterval(() => {
            cur += step
            if (cur >= target) {
              cur = target
              clearInterval(timer)
            }
            item.current.value = cur
          }, 30)
        })
        observer.disconnect()
      }
    })
  }, { threshold: 0.3 })

  observer.observe(statsRef.value)
})
</script>

<template>
  <section id="stats" ref="statsRef" class="relative py-16 sm:py-24 bg-[#2b1810] overflow-hidden font-sans text-[#faf5ec] border-y border-[#e3b75e]/20" dir="rtl">
    <!-- Subtle Ambient Gold Glow in Background -->
    <div class="absolute inset-0 bg-gradient-to-r from-[#1c100a]/80 via-transparent to-[#1c100a]/80 pointer-events-none" />
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-full bg-[#c8932b]/5 blur-3xl pointer-events-none" />

    <div class="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 text-center items-center">
        
        <div 
          v-for="stat in statsData" 
          :key="stat.id"
          class="stat-card p-4 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-[#e3b75e]/40 hover:bg-[#c8932b]/10 transition-all duration-500 transform hover:-translate-y-1 group"
        >
          <!-- Animated Number -->
          <div class="stat-num font-display text-4xl sm:text-5xl md:text-[3.6rem] font-bold text-[#e3b75e] group-hover:text-[#fdf8f0] transition-colors duration-300 flex items-baseline justify-center gap-1 leading-none mb-3">
            <span v-if="stat.prefix" class="text-3xl sm:text-4xl font-normal">{{ stat.prefix }}</span>
            <span>{{ stat.current.value }}</span>
            <span v-if="stat.suffix" class="text-3xl sm:text-4xl font-normal">{{ stat.suffix }}</span>
          </div>

          <!-- Label -->
          <p class="text-sm sm:text-[1.08rem] font-semibold text-[#ecd9bd] tracking-wide group-hover:text-white transition-colors duration-300">
            {{ stat.label }}
          </p>
        </div>

      </div>
    </div>
  </section>
</template>
