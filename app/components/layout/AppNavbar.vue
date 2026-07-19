<script setup lang="ts">
import { ref, watch, nextTick, onMounted, onUnmounted } from 'vue'
import { useGsap } from '~/composables/useGsap'

const headerRef = ref<HTMLElement | null>(null)
const isScrolled = ref(false)
const mobileMenuOpen = ref(false)

const { registerAnimation, gsap } = useGsap()

registerAnimation((gsap) => {
  gsap.fromTo('.topbar', 
    { opacity: 0, y: -20 }, 
    { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
  )
  gsap.fromTo('.site-header', 
    { opacity: 0, y: -30 }, 
    { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: 'power3.out' }
  )
}, headerRef)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 30
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

watch(mobileMenuOpen, async (isOpen) => {
  if (isOpen) {
    await nextTick()
    gsap.fromTo('.mobile-nav-item', 
      { y: 15, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.35, stagger: 0.05, ease: 'power2.out' }
    )
  }
})

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

// Exact links matching Reif El-Good navigation & sections
const exactNavLinks = [
  { label: 'الرئيسية', href: '#hero' },
  { label: 'من نحن', href: '#features' },
  { label: 'المطابخ', href: '#demo' },
  { label: 'خدماتنا', href: '#metrics' },
  { label: 'أعمالنا', href: '#pricing' },
  { label: 'الأسئلة الشائعة', href: '#faq' },
  { label: 'تواصل معنا', href: '#cta' }
]
</script>

<template>
  <div ref="headerRef" class="w-full font-sans select-none relative z-50">
    <!-- ============ 1. Topbar (Dark Espresso Strip) ============ -->
    <div class="topbar bg-[#2b1810] text-[#ecd9bd] text-[0.85rem] border-b border-[#6b4226]/40">
      <div class="max-w-7xl mx-auto px-6 md:px-12 py-[9px] flex flex-wrap items-center justify-between gap-3">
        <!-- Right: Marquee / Benefits list -->
        <div class="marq-mini flex flex-wrap items-center gap-6 md:gap-8 text-white/70 font-medium text-xs md:text-[0.85rem]">
          <span class="flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-[#e3b75e]" />
            تصميم مجاني للمطابخ
          </span>
          <span class="flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-[#e3b75e]" />
            تركيب في جميع مناطق المملكة
          </span>
          <span class="flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-[#e3b75e]" />
            ضمان حتى 10 سنوات
          </span>
        </div>

        <!-- Left: Contact & WhatsApp Direct Links -->
        <div class="flex items-center gap-5 text-xs md:text-[0.85rem] font-semibold">
          <a 
            href="tel:0570993783" 
            class="inline-flex items-center gap-2 text-[#ecd9bd] hover:text-[#e3b75e] transition-colors group"
          >
            <!-- Phone Icon -->
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-[#e3b75e] group-hover:scale-110 transition-transform shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span dir="ltr">0570993783</span>
          </a>

          <a 
            href="https://wa.me/966570993783" 
            target="_blank" 
            rel="noopener" 
            class="inline-flex items-center gap-2 text-[#ecd9bd] hover:text-[#e3b75e] transition-colors group"
          >
            <!-- WhatsApp Icon -->
            <svg class="w-4 h-4 text-[#1ebe5d] group-hover:scale-110 transition-transform shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0a12 12 0 1 1 0 24 12 12 0 0 1 0-24zm0 2.182a9.818 9.818 0 1 0 0 19.636 9.818 9.818 0 0 0 0-19.636zm5.82 13.91c-.244.686-1.22 1.32-1.745 1.396-.48.068-1.11.1-3.565-.918-3.14-1.302-5.185-4.497-5.342-4.706-.157-.21-1.277-1.704-1.277-3.25 0-1.545.808-2.31 1.096-2.624.288-.314.628-.393.837-.393.21 0 .419.002.602.011.194.01.455-.073.712.545.262.628.89 2.172.968 2.33.078.157.13.34.026.549-.105.21-.157.34-.314.524-.157.183-.33.41-.471.55-.157.157-.32.327-.136.641.183.314.814 1.343 1.745 2.172 1.201 1.07 2.214 1.403 2.528 1.56.314.157.5.13.683-.079.183-.21.785-.916.995-1.23.21-.314.419-.262.706-.157.288.105 1.832.864 2.146 1.02.314.157.523.236.602.367.078.13.078.759-.166 1.445z"/>
            </svg>
            <span>واتساب مباشر</span>
          </a>
        </div>
      </div>
    </div>

    <!-- ============ 2. Site Header (Sticky Cream Luxury Bar) ============ -->
    <header 
      class="site-header sticky top-0 inset-x-0 z-50 transition-all duration-400 bg-[#fdf8f0]/90 backdrop-blur-xl border-b border-[#6b4226]/15"
      :class="isScrolled ? 'shadow-md py-2.5' : 'py-3.5 shadow-none'"
    >
      <div class="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between gap-6 nav-wrap">
        <!-- Logo Section -->
        <a href="#hero" class="logo flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8932b] rounded-xl p-1">
          <!-- Circular Framed Logo -->
          <div class="relative w-[54px] h-[54px] md:w-[58px] md:h-[58px] rounded-full p-[2px] bg-gradient-to-tr from-[#c8932b] via-[#e3b75e] to-[#c08a52] shadow-sm shrink-0 group-hover:scale-105 transition-transform duration-300">
            <img 
              src="https://reifelgoodnew.vercel.app/Css/logo.jpeg" 
              alt="شعار مطابخ جوري للمطابخ والخزائن" 
              class="w-full h-full rounded-full object-cover bg-[#2b1810]"
              @error="(e: any) => { e.target.src = '/favicon.ico' }"
            />
          </div>

          <!-- Logo Text Structure -->
          <div class="logo-text flex flex-col text-right">
            <strong class="font-display text-xl md:text-[1.35rem] text-[#2b1810] leading-tight font-bold group-hover:text-[#6b4226] transition-colors">
              مطابخ جوري
            </strong>
            <span class="text-[0.72rem] md:text-xs text-[#6e5847] tracking-wide font-medium font-sans">
              للمطابخ والخزائن والمجالس والستائر
            </span>
          </div>
        </a>

        <!-- Desktop Navigation Links -->
        <nav class="main-nav hidden lg:block" aria-label="القائمة الرئيسية">
          <ul class="flex items-center gap-7 text-[#2c1c12] font-semibold text-[0.97rem]">
            <li v-for="link in exactNavLinks" :key="link.label">
              <a 
                :href="link.href" 
                class="relative py-2 px-1 hover:text-[#c8932b] transition-colors duration-300 block group"
              >
                <span>{{ link.label }}</span>
                <!-- Animated Golden Underline exactly matching original -->
                <span class="absolute right-0 bottom-0 w-0 h-[2.5px] bg-gradient-to-l from-[#e3b75e] to-[#c8932b] group-hover:w-full transition-all duration-350 rounded-full" />
              </a>
            </li>
          </ul>
        </nav>

        <!-- CTA & Phone Button -->
        <div class="nav-cta flex items-center gap-3">
          <a 
            href="tel:0570993783" 
            class="icon-btn-call hidden sm:flex items-center gap-2 bg-[#2b1810] text-[#fdf8f0] hover:bg-[#6b4226] hover:-translate-y-0.5 py-2.5 px-5 rounded-full font-bold text-[0.92rem] shadow-sm transition-all duration-300 active:translate-y-0 border border-[#c8932b]/20"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-[#e3b75e] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span dir="ltr" class="font-sans">0570993783</span>
          </a>

          <!-- Mobile Hamburger Button -->
          <button 
            @click="toggleMobileMenu" 
            type="button"
            aria-label="فتح القائمة الرئيسية"
            :aria-expanded="mobileMenuOpen"
            class="burger lg:hidden p-2.5 rounded-xl bg-[#2b1810]/10 hover:bg-[#2b1810]/20 text-[#2b1810] transition-colors focus:outline-none flex flex-col justify-center items-center gap-1.2 w-11 h-11"
          >
            <span 
              class="w-6 h-[2.5px] bg-[#2b1810] rounded-full transition-all duration-300"
              :class="mobileMenuOpen ? 'rotate-45 translate-y-[6px]' : ''"
            />
            <span 
              class="w-6 h-[2.5px] bg-[#2b1810] rounded-full transition-all duration-300"
              :class="mobileMenuOpen ? 'opacity-0' : ''"
            />
            <span 
              class="w-6 h-[2.5px] bg-[#2b1810] rounded-full transition-all duration-300"
              :class="mobileMenuOpen ? '-rotate-45 -translate-y-[6px]' : ''"
            />
          </button>
        </div>
      </div>

      <!-- Mobile Navigation Drawer -->
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <div 
          v-if="mobileMenuOpen" 
          class="lg:hidden bg-[#fdf8f0]/98 backdrop-blur-3xl border-b border-[#6b4226]/20 px-6 py-6 shadow-2xl"
        >
          <ul class="flex flex-col gap-4 text-base font-bold text-[#2c1c12] mb-6">
            <li v-for="link in exactNavLinks" :key="link.label" class="mobile-nav-item">
              <a 
                :href="link.href" 
                @click="mobileMenuOpen = false"
                class="flex items-center justify-between py-2.5 px-2 rounded-lg hover:bg-[#2b1810]/5 hover:text-[#c8932b] transition-colors border-b border-[#6b4226]/15 group"
              >
                <span class="font-sans text-lg">{{ link.label }}</span>
                <span class="text-[#c8932b] opacity-0 group-hover:opacity-100 transition-opacity rotate-180">←</span>
              </a>
            </li>
          </ul>

          <div class="mobile-nav-item flex flex-col gap-3 pt-2">
            <a 
              href="tel:0570993783" 
              class="flex items-center justify-center gap-2 bg-[#2b1810] text-[#fdf8f0] hover:bg-[#6b4226] py-3.5 px-6 rounded-full font-bold text-base shadow-md transition-all w-full"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-[#e3b75e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span dir="ltr">0570993783</span>
            </a>

            <a 
              href="https://wa.me/966570993783" 
              target="_blank" 
              rel="noopener"
              class="flex items-center justify-center gap-2 bg-[#1ebe5d] text-white hover:bg-[#19a24f] py-3.5 px-6 rounded-full font-bold text-base shadow-md transition-all w-full"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0a12 12 0 1 1 0 24 12 12 0 0 1 0-24zm0 2.182a9.818 9.818 0 1 0 0 19.636 9.818 9.818 0 0 0 0-19.636zm5.82 13.91c-.244.686-1.22 1.32-1.745 1.396-.48.068-1.11.1-3.565-.918-3.14-1.302-5.185-4.497-5.342-4.706-.157-.21-1.277-1.704-1.277-3.25 0-1.545.808-2.31 1.096-2.624.288-.314.628-.393.837-.393.21 0 .419.002.602.011.194.01.455-.073.712.545.262.628.89 2.172.968 2.33.078.157.13.34.026.549-.105.21-.157.34-.314.524-.157.183-.33.41-.471.55-.157.157-.32.327-.136.641.183.314.814 1.343 1.745 2.172 1.201 1.07 2.214 1.403 2.528 1.56.314.157.5.13.683-.079.183-.21.785-.916.995-1.23.21-.314.419-.262.706-.157.288.105 1.832.864 2.146 1.02.314.157.523.236.602.367.078.13.078.759-.166 1.445z"/>
              </svg>
              <span>واتساب مباشر</span>
            </a>
          </div>
        </div>
      </Transition>
    </header>
  </div>
</template>
