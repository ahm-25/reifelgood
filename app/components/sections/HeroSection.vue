<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useGsap } from '~/composables/useGsap'

const heroRef = ref<HTMLElement | null>(null)
const particlesContainerRef = ref<HTMLElement | null>(null)
const { registerAnimation, gsap } = useGsap()

// Exact particle spawner matching original site logic: spawnParticles('heroParticles', 22)
const spawnParticles = (container: HTMLElement | null, count: number) => {
  if (!container) return
  container.innerHTML = ''
  
  for (let i = 0; i < count; i++) {
    const p = document.createElement('span')
    p.className = 'particle'
    const size = 3 + Math.random() * 5
    p.style.width = `${size}px`
    p.style.height = `${size}px`
    p.style.left = `${Math.random() * 100}%`
    p.style.setProperty('--drift', `${(Math.random() * 80 - 40)}px`)
    p.style.animationDuration = `${7 + Math.random() * 8}s`
    p.style.animationDelay = `${Math.random() * 8}s`
    container.appendChild(p)
  }
}

onMounted(() => {
  spawnParticles(particlesContainerRef.value, 22)
})

registerAnimation((gsap) => {
  const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })

  // Exact reveal.in feel with cubic-bezier(0.16, 1, 0.3, 1) timing via GSAP
  tl.fromTo('.hero-eyebrow', 
      { y: 38, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' }
    )
    .fromTo('.hero-title', 
      { y: 38, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' }, 
      '-=0.6'
    )
    .fromTo('.hero-desc', 
      { y: 38, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' }, 
      '-=0.6'
    )
    .fromTo('.hero-actions-group', 
      { y: 38, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' }, 
      '-=0.6'
    )
    .fromTo('.hero-tags-group', 
      { y: 25, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, 
      '-=0.6'
    )
    .fromTo('.hero-side-stepper', 
      { x: -40, opacity: 0 }, 
      { x: 0, opacity: 1, duration: 1.0, ease: 'power4.out' }, 
      '-=0.7'
    )
    .fromTo('.scroll-cue', 
      { y: 20, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, 
      '-=0.5'
    )
}, heroRef)
</script>

<template>
  <section id="hero" ref="heroRef" class="relative min-h-[96vh] flex items-center justify-center overflow-hidden bg-[#1c100a] font-sans pt-32 pb-24 md:pt-40 md:pb-28">
    <!-- ============ 1. Background Image & Dark Overlay ============ -->
    <div class="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
      <img 
        src="https://reifelgoodnew.vercel.app/Css/hero.jpeg" 
        alt="تصميم وتنفيذ مطابخ خشبية فاخرة - مطابخ جوري"
        class="w-full h-full object-cover object-center"
        @error="(e: any) => { e.target.src = 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2000&auto=format&fit=crop' }"
      />
      <!-- Exact Gradient Overlay: linear-gradient(100deg, rgba(28,16,10,.94) 10%, rgba(28,16,10,.74) 45%, rgba(28,16,10,.42) 100%) -->
      <div class="absolute inset-0 bg-gradient-to-l from-[#1c100a]/95 via-[#1c100a]/75 to-[#1c100a]/50 z-10" />
      
      <!-- Exact 22 Dynamic Floating Golden Particles Container -->
      <div ref="particlesContainerRef" id="heroParticles" class="particles z-15" />
    </div>

    <!-- ============ 2. Left Side Vertical Stepper ============ -->
    <div class="hero-side-stepper hidden xl:flex flex-col gap-3 absolute left-8 top-1/2 -translate-y-1/2 z-30 p-4 rounded-2xl bg-[#1c100a]/40 backdrop-blur-md border border-[#c8932b]/25 shadow-2xl text-[#ecd9bd] text-xs font-semibold select-none w-40">
      <div class="flex items-center gap-3 p-2 rounded-xl border border-white/5 hover:border-[#e3b75e]/50 hover:bg-[#c8932b]/15 transition-all">
        <div class="w-7 h-7 rounded-lg bg-[#c8932b]/20 flex items-center justify-center text-[#e3b75e] shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
        </div>
        <span>تصميم</span>
      </div>

      <div class="flex items-center gap-3 p-2 rounded-xl border border-white/5 hover:border-[#e3b75e]/50 hover:bg-[#c8932b]/15 transition-all">
        <div class="w-7 h-7 rounded-lg bg-[#c8932b]/20 flex items-center justify-center text-[#e3b75e] shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
          </svg>
        </div>
        <span>تفصيل</span>
      </div>

      <div class="flex items-center gap-3 p-2 rounded-xl border border-white/5 hover:border-[#e3b75e]/50 hover:bg-[#c8932b]/15 transition-all">
        <div class="w-7 h-7 rounded-lg bg-[#c8932b]/20 flex items-center justify-center text-[#e3b75e] shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <span>تركيب</span>
      </div>

      <div class="flex items-center gap-3 p-2 rounded-xl border border-white/5 hover:border-[#e3b75e]/50 hover:bg-[#c8932b]/15 transition-all">
        <div class="w-7 h-7 rounded-lg bg-[#c8932b]/20 flex items-center justify-center text-[#e3b75e] shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <span>ضمان</span>
      </div>

      <div class="flex items-center gap-3 p-2 rounded-xl border border-white/5 hover:border-[#e3b75e]/50 hover:bg-[#c8932b]/15 transition-all">
        <div class="w-7 h-7 rounded-lg bg-[#c8932b]/20 flex items-center justify-center text-[#e3b75e] shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </div>
        <span>خدمة ما بعد البيع</span>
      </div>
    </div>

    <!-- ============ 3. Center Hero Content ============ -->
    <div class="max-w-4xl mx-auto px-6 relative z-20 text-center flex flex-col items-center">
      <!-- Eyebrow Badge -->
      <div class="hero-eyebrow mb-6">
        <span class="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-[#c8932b]/15 border border-[#c8932b]/40 text-[#e3b75e] text-xs md:text-[0.88rem] font-semibold tracking-wide shadow-md">
          <span class="w-1.5 h-1.5 rounded-full bg-[#e3b75e] animate-pulse" />
          تصميم وتنفيذ وتركيب — جودة لا تقبل المساومة
        </span>
      </div>

      <!-- Main Title in Aref Ruqaa -->
      <h1 class="hero-title text-[2.4rem] sm:text-[3.2rem] md:text-[4.2rem] lg:text-[4.5rem] font-bold text-[#fdf8f0] mb-6 leading-[1.18] font-display max-w-4xl">
        مطابخك بالشكل الذي 
        <em class="not-italic text-[#e3b75e] font-display">تتخيله بالضبط</em>
      </h1>

      <!-- Description Paragraph -->
      <p class="hero-desc text-base sm:text-lg md:text-[1.18rem] text-[#ecd9bd]/90 max-w-[640px] mb-10 font-normal leading-relaxed font-sans">
        مطابخ جوري للمطابخ والخزائن: نُصمم ونُنفذ وننفذ جميع أنواع المطابخ الخشبية والاكريليك والبولي لاك، والخزائن بكل أشكالها، والمجالس العربية والمودرن، والستائر الفاخرة. خامات أصلية، تفصيل بالمقاس، ومعاينة وتصميم مجاني في موقعك.
      </p>

      <!-- Action Buttons Group -->
      <div class="hero-actions-group flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-12">
        <!-- Gold WhatsApp Quote Button -->
        <a 
          href="https://wa.me/966570993783?text=السلام%20عليكم%2C%20أرغب%20بمعرفة%20تفاصيل%20عن%20المطابخ%20والخزائن" 
          target="_blank" 
          rel="noopener"
          class="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-l from-[#e3b75e] via-[#c8932b] to-[#b8801d] text-[#2b1810] font-bold text-base shadow-xl shadow-[#c8932b]/35 hover:brightness-110 hover:-translate-y-0.5 transition-all duration-300 active:translate-y-0"
        >
          <svg class="w-5 h-5 text-[#2b1810] shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0a12 12 0 1 1 0 24 12 12 0 0 1 0-24zm0 2.182a9.818 9.818 0 1 0 0 19.636 9.818 9.818 0 0 0 0-19.636zm5.82 13.91c-.244.686-1.22 1.32-1.745 1.396-.48.068-1.11.1-3.565-.918-3.14-1.302-5.185-4.497-5.342-4.706-.157-.21-1.277-1.704-1.277-3.25 0-1.545.808-2.31 1.096-2.624.288-.314.628-.393.837-.393.21 0 .419.002.602.011.194.01.455-.073.712.545.262.628.89 2.172.968 2.33.078.157.13.34.026.549-.105.21-.157.34-.314.524-.157.183-.33.41-.471.55-.157.157-.32.327-.136.641.183.314.814 1.343 1.745 2.172 1.201 1.07 2.214 1.403 2.528 1.56.314.157.5.13.683-.079.183-.21.785-.916.995-1.23.21-.314.419-.262.706-.157.288.105 1.832.864 2.146 1.02.314.157.523.236.602.367.078.13.078.759-.166 1.445z"/>
          </svg>
          <span>احصل على عرض سعر فوري</span>
        </a>

        <!-- Outline Call Button -->
        <a 
          href="tel:0570993783" 
          class="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#2b1810]/60 backdrop-blur-md border-[1.5px] border-[#ecd9bd]/40 text-[#fdf8f0] font-bold text-base hover:bg-[#c8932b]/20 hover:border-[#e3b75e] hover:-translate-y-0.5 transition-all duration-300 active:translate-y-0 shadow-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-[#e3b75e] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span>اتصل بنا الآن</span>
        </a>
      </div>

      <!-- Hero Tags (Service Pills) -->
      <div class="hero-tags-group flex flex-wrap items-center justify-center gap-3 max-w-3xl">
        <span class="px-4 py-2 rounded-full bg-white/[0.07] border border-[#ecd9bd]/25 text-[#ecd9bd] text-xs md:text-[0.85rem] font-semibold hover:border-[#e3b75e] transition-colors">
          مطابخ خشب وMDF
        </span>
        <span class="px-4 py-2 rounded-full bg-white/[0.07] border border-[#ecd9bd]/25 text-[#ecd9bd] text-xs md:text-[0.85rem] font-semibold hover:border-[#e3b75e] transition-colors">
          اكريليك وبولي لاك
        </span>
        <span class="px-4 py-2 rounded-full bg-white/[0.07] border border-[#ecd9bd]/25 text-[#ecd9bd] text-xs md:text-[0.85rem] font-semibold hover:border-[#e3b75e] transition-colors">
          خزائن بالمقاس
        </span>
        <span class="px-4 py-2 rounded-full bg-white/[0.07] border border-[#ecd9bd]/25 text-[#ecd9bd] text-xs md:text-[0.85rem] font-semibold hover:border-[#e3b75e] transition-colors">
          مجالس عربي ومودرن
        </span>
        <span class="px-4 py-2 rounded-full bg-white/[0.07] border border-[#ecd9bd]/25 text-[#ecd9bd] text-xs md:text-[0.85rem] font-semibold hover:border-[#e3b75e] transition-colors">
          ستائر بجميع الأنواع
        </span>
      </div>
    </div>

    <!-- ============ 4. Scroll Cue (Mouse Indicator with animated Dot) ============ -->
    <div class="scroll-cue absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-[#ecd9bd] text-[0.78rem] font-medium pointer-events-none">
      <span>مرر للأسفل لاستكشاف أعمالنا</span>
      <!-- Animated Mouse Frame -->
      <div class="w-[26px] h-[42px] border-2 border-[#ecd9bd] rounded-[14px] relative flex justify-center">
        <!-- Exact scrollDot animation: 0% opacity 1 top 8px -> 80% opacity 0 top 22px -> 100% top 8px -->
        <span class="w-[4px] h-[8px] bg-[#e3b75e] rounded-full absolute top-[8px] scroll-dot-animated" />
      </div>
    </div>
  </section>
</template>
