<script setup lang="ts">
const tickerWords = [
  "تصميم مطابخ",
  "تنفيذ مطابخ",
  "مطابخ خشب",
  "مطابخ اكريليك",
  "مطابخ بولي لاك",
  "مطابخ مودرن",
  "مطابخ كلاسيك",
  "خزائن ملابس",
  "خزائن حائط",
  "دريسروم",
  "مجالس عربي",
  "مجالس مودرن",
  "مجالس تركي",
  "ستائر رول",
  "ستائر اوربي",
  "ستائر بليسيه",
  "تفصيل بالمقاس",
  "ضمان حتى 10 سنوات",
  "تركيب في كل مناطق المملكة"
]
</script>

<template>
  <div class="ticker-wrap select-none py-4 relative overflow-hidden bg-gradient-to-r from-[#c8932b] via-[#e3b75e] to-[#c8932b] shadow-lg z-20 border-y border-[#2b1810]/15" dir="rtl">
    <div class="ticker-track flex items-center gap-12 whitespace-nowrap w-max hover:[animation-play-state:paused]">
      <!-- Double array to ensure infinite seamless looping -->
      <span 
        v-for="(word, idx) in [...tickerWords, ...tickerWords]" 
        :key="idx"
        class="flex items-center gap-4 text-[#2b1810] font-extrabold text-[1.05rem] tracking-wide font-sans cursor-default"
      >
        <span>{{ word }}</span>
        <span class="text-[0.7rem] opacity-60 text-[#2b1810] select-none">◆</span>
      </span>
    </div>
  </div>
</template>

<style scoped>
.ticker-track {
  animation: tickerMove 42s linear infinite;
}

@keyframes tickerMove {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(50%);
  }
}
</style>
