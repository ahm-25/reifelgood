<script setup lang="ts">
import { ref, computed } from 'vue'

const TOTAL_IMAGES = 149
const TOTAL_VIDEOS = 21

const imgsShown = ref(20)
const vidsShown = ref(8)

// Generate exact URLs matching reifelgoodnew.vercel.app
const allImages = Array.from({ length: TOTAL_IMAGES }, (_, i) => i + 1).map(
  n => `https://reifelgoodnew.vercel.app/Css/ph%20(${n}).jpeg`
)

const allVideos = Array.from({ length: TOTAL_VIDEOS }, (_, i) => i + 1).map(
  n => `https://reifelgoodnew.vercel.app/Css/v${n}.mp4`
)

const displayedImages = computed(() => allImages.slice(0, imgsShown.value))
const displayedVideos = computed(() => allVideos.slice(0, vidsShown.value))

function loadMoreImgs() {
  imgsShown.value += 20
}

function loadMoreVids() {
  vidsShown.value += 8
}

// Lightbox Modal State
const lightboxOpen = ref(false)
const lightboxType = ref<'img' | 'video'>('img')
const lightboxSrc = ref('')

function openLightbox(type: 'img' | 'video', src: string) {
  lightboxType.value = type
  lightboxSrc.value = src
  lightboxOpen.value = true
}

function closeLightbox() {
  lightboxOpen.value = false
  lightboxSrc.value = ''
}
</script>

<template>
  <section id="works" class="py-20 sm:py-28 bg-[#f3ebe1] relative overflow-hidden font-sans text-[#2b1810]" dir="rtl">
    <!-- Main Container -->
    <div class="max-w-[1400px] mx-auto px-6 sm:px-10">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c8932b]/15 border border-[#e3b75e]/35 text-[#b8801d] font-bold text-sm mb-5">
          <span class="w-2 h-2 rounded-full bg-[#c8932b] animate-pulse"></span>
          <span>معرض أعمالنا</span>
        </div>
        <h2 class="font-display text-3xl sm:text-4xl md:text-[2.8rem] font-bold text-[#2b1810] leading-[1.3] mb-5">
          شاهد بنفسك جودة التنفيذ
        </h2>
        <p class="font-sans text-base sm:text-lg text-[#5c4333] leading-relaxed">
          مجموعة من أعمالنا الفعلية في تنفيذ المطابخ والخزائن والمجالس والستائر، صورًا ومقاطع فيديو حية من موقع التركيب.
        </p>
      </div>

      <!-- ==================== 1. Photos Gallery Sub-Header ==================== -->
      <div class="text-center mb-8">
        <h3 class="font-display text-2xl sm:text-[1.65rem] font-bold text-[#2b1810] inline-flex items-center justify-center gap-2.5 mb-1.5">
          <svg class="w-6 h-6 text-[#c8932b] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="4" width="18" height="14" rx="2" fill="none" stroke="currentColor" stroke-width="1.8"/>
            <circle cx="8" cy="9" r="1.6" fill="currentColor"/>
            <path d="M3 16l5-5 4 4 3-3 6 6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
          </svg>
          <span>معرض الصور</span>
        </h3>
        <p class="text-sm sm:text-base text-[#5c4333] font-medium">مجموعة مختارة من تنفيذاتنا الفعلية</p>
      </div>

      <!-- Photos Grid: 5 Columns on Large Desktop -->
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4 mb-10">
        <figure 
          v-for="(src, idx) in displayedImages" 
          :key="idx"
          class="group relative aspect-square rounded-xl overflow-hidden shadow-sm hover:shadow-xl bg-[#e6ded1] cursor-zoom-in transition-all duration-300 border border-[#2b1810]/5"
          @click="openLightbox('img', src)"
        >
          <img 
            :src="src" 
            :alt="`نموذج تنفيذ رقم ${idx + 1} - مطابخ جوري للمطابخ والخزائن`"
            loading="lazy"
            class="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500 ease-out"
            @error="(e: any) => { e.target.src = 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=600&auto=format&fit=crop' }"
          />
          <!-- Dark overlay on hover -->
          <div class="absolute inset-0 bg-[#2b1810]/0 group-hover:bg-[#2b1810]/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <div class="w-10 h-10 rounded-full bg-white/90 text-[#2b1810] flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
              </svg>
            </div>
          </div>
        </figure>
      </div>

      <!-- Load More Images Button -->
      <div v-if="imgsShown < TOTAL_IMAGES" class="text-center mb-20">
        <button 
          @click="loadMoreImgs"
          class="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#2b1810] text-[#faf5ec] font-bold text-base shadow-lg hover:bg-[#3d2318] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 active:translate-y-0"
        >
          <span>عرض المزيد من الصور</span>
          <svg class="w-4 h-4 text-[#e3b75e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      <!-- Divider Spacer -->
      <div class="h-4 sm:h-8"></div>

      <!-- ==================== 2. Videos Gallery Sub-Header ==================== -->
      <div class="text-center mb-8">
        <h3 class="font-display text-2xl sm:text-[1.65rem] font-bold text-[#2b1810] inline-flex items-center justify-center gap-2.5 mb-1.5">
          <svg class="w-6 h-6 text-[#c8932b] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="5" width="14" height="14" rx="2" fill="none" stroke="currentColor" stroke-width="1.8"/>
            <path d="M17 9l4-2v10l-4-2Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
          </svg>
          <span>معرض الفيديوهات</span>
        </h3>
        <p class="text-sm sm:text-base text-[#5c4333] font-medium">لقطات حية من ورشة التصنيع وموقع التركيب</p>
      </div>

      <!-- Videos Grid: 4 Columns on Desktop (9:12 aspect ratio) -->
      <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-10">
        <div 
          v-for="(src, idx) in displayedVideos" 
          :key="idx"
          class="group relative aspect-[9/12] rounded-xl overflow-hidden shadow-md hover:shadow-2xl bg-black cursor-pointer transition-all duration-300 border border-[#2b1810]/10"
          @click="openLightbox('video', src)"
        >
          <video 
            :src="`${src}#t=0.5`" 
            muted 
            playsinline 
            preload="metadata"
            class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          ></video>
          
          <!-- Play Icon Overlay -->
          <div class="absolute inset-0 bg-black/35 group-hover:bg-black/15 transition-colors duration-300 flex items-center justify-center">
            <div class="w-14 h-14 rounded-full bg-[#c8932b]/90 text-white flex items-center justify-center shadow-2xl transform group-hover:scale-110 group-hover:bg-[#e3b75e] transition-all duration-300 border-2 border-white/80">
              <svg class="w-7 h-7 ml-0.5 fill-current text-white" viewBox="0 0 24 24">
                <path d="M7 4.5v15l13-7.5Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Load More Videos Button -->
      <div v-if="vidsShown < TOTAL_VIDEOS" class="text-center mb-6">
        <button 
          @click="loadMoreVids"
          class="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#2b1810] text-[#faf5ec] font-bold text-base shadow-lg hover:bg-[#3d2318] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 active:translate-y-0"
        >
          <span>عرض المزيد من الفيديوهات</span>
          <svg class="w-4 h-4 text-[#e3b75e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

    </div>

    <!-- ==================== 3. Fullscreen Lightbox Modal ==================== -->
    <Transition name="fade">
      <div 
        v-if="lightboxOpen" 
        class="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 select-none"
        @click.self="closeLightbox"
      >
        <!-- Close Button Top Right -->
        <button 
          @click="closeLightbox"
          class="absolute top-6 left-6 sm:top-8 sm:left-8 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all duration-200 border border-white/20 hover:rotate-90"
          title="إغلاق"
        >
          <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- Lightbox Content Box -->
        <div class="relative max-w-5xl max-h-[88vh] w-full flex items-center justify-center overflow-hidden rounded-2xl shadow-2xl">
          <img 
            v-if="lightboxType === 'img'" 
            :src="lightboxSrc" 
            alt="صورة مكبرة من أعمال مطابخ جوري للمطابخ"
            class="max-h-[85vh] max-w-full object-contain rounded-xl shadow-2xl animate-fade-in"
          />
          <video 
            v-else-if="lightboxType === 'video'" 
            :src="lightboxSrc" 
            controls 
            autoplay 
            class="max-h-[85vh] max-w-full rounded-xl shadow-2xl bg-black animate-fade-in"
          ></video>
        </div>
      </div>
    </Transition>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
