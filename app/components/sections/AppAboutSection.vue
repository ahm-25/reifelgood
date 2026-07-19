<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const aboutRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!aboutRef.value || typeof window === 'undefined') return

  const ctx = gsap.context(() => {
    gsap.from('.about-text-content', {
      x: -50,
      opacity: 0,
      duration: 1.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: aboutRef.value,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    })

    gsap.from('.about-media-box', {
      x: 50,
      opacity: 0,
      duration: 1.1,
      delay: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: aboutRef.value,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    })

    gsap.from('.about-list-item', {
      y: 25,
      opacity: 0,
      duration: 0.7,
      stagger: 0.15,
      delay: 0.4,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: aboutRef.value,
        start: 'top 75%',
        toggleActions: 'play none none none'
      }
    })
  }, aboutRef)

  return () => ctx.revert()
})
</script>

<template>
  <section id="about" ref="aboutRef" class="py-20 sm:py-28 bg-[#faf5ec] relative overflow-hidden font-sans text-[#2b1810]" dir="rtl">
    <!-- Subtle background decorative glow -->
    <div class="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-[#c8932b]/5 rounded-full blur-3xl pointer-events-none" />
    
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        
        <!-- Right Column (In RTL first child is on the right): Media & Experience +15 Badge -->
        <div class="about-media-box relative px-2 sm:px-4 lg:px-0 mt-8 lg:mt-0">
          <div class="relative rounded-[2.2rem] overflow-hidden shadow-2xl shadow-[#2b1810]/20 aspect-[4/5] border border-[#2b1810]/10 bg-[#e6ded1]">
            <img 
              src="https://reifelgoodnew.vercel.app/Css/ph%20(11).jpeg" 
              alt="ورشة تنفيذ مطابخ وخزائن مطابخ جوري الخشبية" 
              loading="lazy"
              class="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
              @error="(e: any) => { e.target.src = 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200&auto=format&fit=crop' }"
            />
          </div>

          <!-- +15 Years Badge Overlaid at Bottom Left -->
          <div class="absolute -bottom-6 left-4 sm:-bottom-8 sm:-left-6 bg-[#2b1810] text-[#faf5ec] py-5 px-7 sm:py-6 sm:px-8 rounded-2xl shadow-2xl border-4 border-[#faf5ec] text-center z-10 min-w-[210px] sm:min-w-[240px]">
            <strong class="block font-display text-4xl sm:text-[2.6rem] font-bold text-[#e3b75e] leading-none mb-1.5 tracking-tight">+15</strong>
            <span class="text-xs sm:text-[0.82rem] text-[#ecd9bd] block font-medium font-sans tracking-wide">
              سنة خبرة في صناعة المطابخ والخزائن
            </span>
          </div>
        </div>

        <!-- Left Column: Text & Features List -->
        <div class="about-text-content">
          <!-- Eyebrow Badge -->
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c8932b]/15 border border-[#e3b75e]/30 text-[#b8801d] font-bold text-sm mb-5">
            <span class="w-2 h-2 rounded-full bg-[#c8932b] animate-pulse"></span>
            <span>من نحن</span>
          </div>

          <!-- Section Title in Aref Ruqaa -->
          <h2 class="font-display text-3xl sm:text-4xl md:text-[2.7rem] font-bold text-[#2b1810] leading-[1.3] mb-6">
            حرفية أصيلة في عالم المطابخ والخزائن والديكور الخشبي
          </h2>

          <!-- Detailed Paragraph Description -->
          <p class="font-sans text-base sm:text-[1.08rem] text-[#5c4333] leading-relaxed mb-10">
            مطابخ جوري للمطابخ والخزائن اسم موثوق ورائد في مجال تصميم وتنفيذ وتركيب المطابخ الخشبية والاكريليك والبولي لاك، إلى جانب تفصيل الخزائن الحائطية وخزائن غرف النوم المبتكرة، وتنفيذ المجالس العربية والمودرن والتركية الراقية، وتركيب الستائر بجميع أنواعها وأشكالها. نعمل بفريق من النجارين والحرفيين المتخصصين ذوي الخبرة الواسعة، ونستخدم أحدث خطوط التصنيع وأفضل الخامات المستوردة والمحلية المعتمدة عالمياً لضمان مطبخ يدوم لسنوات طويلة بأقل تكلفة ممكنة وأعلى معايير الجودة. نحن نؤمن بأن كل منزل يستحق لمسة فنية فريدة تعكس ذوق أصحابه وتلبي احتياجاتهم اليومية بكفاءة، لذلك نحرص دوماً على تقديم تصاميم مخصصة تجمع بين الجمال الأصيل والعملية المطلقة، ونلتزم التزاماً كاملاً بمواعيد التسليم لضمان راحة عملائنا التامة وتحقيق رؤيتهم على أرض الواقع.
          </p>

          <!-- 3 Feature Points List -->
          <ul class="space-y-6">
            <!-- Item 1: Ruler / Custom Measurement -->
            <li class="about-list-item flex items-start gap-4">
              <div class="w-12 h-12 rounded-full bg-[#c8932b]/15 border border-[#e3b75e]/30 flex items-center justify-center text-[#c8932b] shrink-0 shadow-sm mt-0.5">
                <svg class="w-6 h-6" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="6" y="26" width="52" height="12" rx="2" transform="rotate(-25 32 32)" fill="none" stroke="currentColor" stroke-width="2"/>
                  <path d="M16 30l2 4M24 26l2 4M32 22l2 4M40 18l2 4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
                </svg>
              </div>
              <div>
                <strong class="block text-lg font-bold text-[#2b1810] font-sans mb-1">تفصيل دقيق بالمقاس</strong>
                <p class="text-sm sm:text-base text-[#5c4333] leading-relaxed font-sans m-0">
                  قياس وتصميم مجاني في موقعك قبل التصنيع لضمان توافق المطبخ والخزانة مع المساحة تمامًا.
                </p>
              </div>
            </li>

            <!-- Item 2: Shield / Warranty -->
            <li class="about-list-item flex items-start gap-4">
              <div class="w-12 h-12 rounded-full bg-[#c8932b]/15 border border-[#e3b75e]/30 flex items-center justify-center text-[#c8932b] shrink-0 shadow-sm mt-0.5">
                <svg class="w-6 h-6" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M32 6 12 14v16c0 16 9 24 20 28 11-4 20-12 20-28V14Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
                  <path d="M23 32l7 7 12-14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div>
                <strong class="block text-lg font-bold text-[#2b1810] font-sans mb-1">ضمان شامل على التصنيع والتركيب</strong>
                <p class="text-sm sm:text-base text-[#5c4333] leading-relaxed font-sans m-0">
                  نقدم ضمانًا حقيقيًا على الخامات والتصنيع وخدمة ما بعد البيع لجميع منتجاتنا.
                </p>
              </div>
            </li>

            <!-- Item 3: Truck / Delivery across regions -->
            <li class="about-list-item flex items-start gap-4">
              <div class="w-12 h-12 rounded-full bg-[#c8932b]/15 border border-[#e3b75e]/30 flex items-center justify-center text-[#c8932b] shrink-0 shadow-sm mt-0.5">
                <svg class="w-6 h-6" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="4" y="20" width="32" height="22" rx="2" fill="none" stroke="currentColor" stroke-width="2"/>
                  <path d="M36 28h12l8 8v6h-20Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
                  <circle cx="16" cy="46" r="4.5" fill="none" stroke="currentColor" stroke-width="2"/>
                  <circle cx="46" cy="46" r="4.5" fill="none" stroke="currentColor" stroke-width="2"/>
                </svg>
              </div>
              <div>
                <strong class="block text-lg font-bold text-[#2b1810] font-sans mb-1">توريد وتركيب في جميع المناطق</strong>
                <p class="text-sm sm:text-base text-[#5c4333] leading-relaxed font-sans m-0">
                  نغطي معظم مناطق المملكة بفريق تركيب متنقل وسرعة في التنفيذ والتسليم.
                </p>
              </div>
            </li>
          </ul>
        </div>

      </div>
    </div>
  </section>
</template>
