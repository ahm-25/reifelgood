<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const mapRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!mapRef.value || typeof window === 'undefined') return

  const ctx = gsap.context(() => {
    gsap.from('.map-float-reveal', {
      y: -30,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: mapRef.value,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    })
  }, mapRef)

  return () => ctx.revert()
})
</script>

<template>
  <section id="map" ref="mapRef" class="relative overflow-hidden font-sans text-[#2b1810] bg-[#faf5ec]" dir="rtl">
    
    <!-- Floating Info Card exactly matching .map-card-float -->
    <div class="map-float-reveal z-10 static sm:absolute sm:top-9 sm:right-9 bg-white p-6 sm:p-7 rounded-2xl shadow-xl max-w-sm border border-[#2b1810]/5 mx-6 my-6 sm:mx-0 sm:my-0 text-right">
      <h4 class="font-display font-bold text-lg sm:text-xl text-[#2b1810] mb-2">
        موقعنا على الخريطة
      </h4>
      <p class="text-[#5c4333] text-xs sm:text-sm leading-relaxed mb-4">
        زورونا لمعاينة الخامات والتصاميم عن قرب، أو تواصلوا معنا لمعاينة منزلية مجانية.
      </p>
      <a 
        href="tel:0570993783" 
        class="inline-flex items-center gap-2 bg-[#2b1810] hover:bg-[#c8932b] text-[#f4e8d8] hover:text-[#2b1810] font-bold py-2.5 px-5 rounded-xl text-sm transition-all duration-300 shadow-md group"
      >
        <!-- Phone SVG -->
        <svg class="w-4 h-4 text-[#e3b75e] group-hover:text-[#2b1810] transition-colors shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
        <span>اتصل بنا</span>
      </a>
    </div>

    <!-- Google Maps Iframe exactly matching .map-frame -->
    <iframe 
      class="w-full h-[400px] sm:h-[480px] border-0 block filter grayscale-[15%] sepia-[18%]" 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.89464232174!2d46.735846900000006!3d24.592831999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f0f13dc106783%3A0x982b3ce4971ca2a2!2z2YXYpNiz2LPYqSDYsdmK2YEg2KfZhNis2YjYryDYp9mE2KrYrNin2LHZitipINmE2YTZhdi32KfYqNiuINmI2KfZhNiu2LLYp9im2YY!5e0!3m2!1sar!2seg!4v1782005903578!5m2!1sar!2seg" 
      width="600" 
      height="480" 
      allowfullscreen="" 
      loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade"
      title="موقع مطابخ جوري للمطابخ والخزائن على الخريطة"
    ></iframe>

  </section>
</template>
