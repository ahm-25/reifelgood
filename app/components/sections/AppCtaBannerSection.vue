<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const bannerRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!bannerRef.value || typeof window === 'undefined') return

  const ctx = gsap.context(() => {
    gsap.from('.cta-banner-reveal', {
      y: 40,
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: bannerRef.value,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    })
  }, bannerRef)

  return () => ctx.revert()
})
</script>

<template>
  <section ref="bannerRef" class="py-20 sm:py-28 bg-gradient-to-l from-[#2b1810] via-[#3b2316] to-[#5c3820] relative overflow-hidden font-sans text-center text-white" dir="rtl">
    
    <!-- Subtle Decorative Ambient Gold Glow -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#c8932b]/10 rounded-full blur-3xl pointer-events-none" />

    <div class="max-w-4xl mx-auto px-6 lg:px-12 relative z-10 cta-banner-reveal">
      
      <h2 class="font-display text-3xl sm:text-4xl md:text-[2.8rem] font-bold text-[#f4e8d8] leading-[1.3] mb-5">
        جاهز تبدأ مطبخ أحلامك؟
      </h2>

      <p class="font-sans text-sm sm:text-[1.08rem] text-[#ecd9bd]/80 leading-relaxed max-w-2xl mx-auto mb-9">
        فريق مطابخ جوري جاهز لتصميم وتنفيذ مطبخك أو خزانتك أو مجلسك أو ستائرك بأعلى مستوى من الجودة والاحترافية، تواصل معنا الآن واحصل على معاينة مجانية.
      </p>

      <div class="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
        
        <!-- WhatsApp Button -->
        <a 
          href="https://wa.me/966570993783" 
          target="_blank" 
          rel="noopener noreferrer"
          class="bg-gradient-to-r from-[#c8932b] to-[#e3b75e] hover:from-[#e3b75e] hover:to-[#c8932b] text-[#2b1810] font-bold py-4 px-7 rounded-xl flex items-center justify-center gap-2.5 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-base"
        >
          <svg class="w-5.5 h-5.5 fill-current" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.28.072.383-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.601.723 4.914 2.036 1.312 1.312 2.035 3.058 2.036 4.914-.001 3.825-3.113 6.93-6.949 6.93z"/>
          </svg>
          <span>تواصل عبر واتساب</span>
        </a>

        <!-- Phone Button -->
        <a 
          href="tel:0570993783" 
          class="bg-white/10 hover:bg-white/20 border border-[#f4e8d8]/30 hover:border-[#e3b75e] text-[#f4e8d8] font-bold py-4 px-7 rounded-xl flex items-center justify-center gap-2.5 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-base"
        >
          <svg class="w-5 h-5 text-[#e3b75e] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
          <span dir="ltr">0570993783</span>
        </a>

      </div>

    </div>
  </section>
</template>
