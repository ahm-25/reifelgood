<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const categoriesRef = ref<HTMLElement | null>(null)

const categoriesList = [
  {
    id: 'wardrobes',
    eyebrow: 'الخزائن',
    title: 'خزائن بالمقاس تستوعب كل تفاصيل غرفتك بذكاء',
    desc: 'نُصمم ونُنفذ خزائن الملابس العصرية وخزائن الحائط العملية وغرف الدريسروم الواسعة بتقسيمات داخلية ذكية ومدروسة: أرفف قابلة للتعديل، أدراج ناعمة الحركة، معلقات متينة، وأماكن مخصصة بعناية فائقة للأحذية والإكسسوارات والمقتنيات الثمينة. نستخدم خامات فاخرة مقاومة للرطوبة وعوامل الزمن، مع تشطيبات أنيقة وجذابة تتناسب تماماً مع ديكور الغرفة بالكامل لتمنحك مساحة مرتبة وهادئة ومريحة للنظر والاستخدام اليومي المستمر.',
    chips: ['خزائن ملابس', 'خزائن حائط', 'دريسروم', 'خزائن غرف نوم', 'خزائن مكاتب'],
    ctaText: 'اطلب تصميم خزانتك',
    ctaLink: 'https://wa.me/966570993783?text=أرغب%20بعرض%20سعر%20لخزانة%20ملابس',
    image: 'https://reifelgoodnew.vercel.app/Css/ph%20(78).jpeg',
    fallbackImg: 'https://images.unsplash.com/photo-1558997519-83ea9252df8a?q=80&w=1200&auto=format&fit=crop',
    imgOnLeftInRtl: false, // in RTL DOM order 1 is RIGHT, order 2 is LEFT
    bgClass: 'bg-[#4a2d1a]' // cocoa brown
  },
  {
    id: 'majlis',
    eyebrow: 'المجالس',
    title: 'مجالس عربية ومودرن تعكس فخامة وكرم ضيافتك واستقبالك',
    desc: 'نُنفذ المجالس العربية التقليدية الأصيلة والمجالس المودرن والتركية المعاصرة بهياكل خشبية صلبة ومتينة تضمن الاستدامة، وأقمشة مخملية وحريرية مختارة بعناية فائقة تجمع ببراعة بين نعومة الملمس، الراحة الفائقة، والفخامة البصرية. نوفر تصاميم حصرية تناسب مساحات صالات الاستقبال الكبرى، والمجالس الخارجية المتجددة، وغرف الجلوس العائلية الدافئة، لنصنع لك مجلساً يكون فخراً لك أمام ضيوفك وملاذاً مريحاً لعائلتك في كل الأوقات.',
    chips: ['مجالس عربي', 'مجالس مودرن', 'مجالس تركي', 'كنب وركنات', 'مساند ووسائد'],
    ctaText: 'اطلب تصميم مجلسك',
    ctaLink: 'https://wa.me/966570993783?text=أرغب%20بعرض%20سعر%20لمجلس',
    image: 'https://reifelgoodnew.vercel.app/Css/ph%20(103).jpeg',
    fallbackImg: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop',
    imgOnLeftInRtl: true, // reversed order in grid
    bgClass: 'bg-[#623b22]' // warm walnut
  },
  {
    id: 'curtains',
    eyebrow: 'الستائر',
    title: 'ستائر تكمل لمسة الفخامة في كل غرفة',
    desc: 'نُوفر ونُركب جميع أنواع الستائر: ستائر رول البسيطة والعصرية، ستائر اوربية المخرمة، ستائر بليسيه، والستائر الكلاسيك المخملية، بقياسات دقيقة وألوان وخامات تتناسب مع ديكور المطبخ والمجلس وغرف النوم.',
    chips: ['ستائر رول', 'ستائر اوربي', 'ستائر بليسيه', 'ستائر كلاسيك', 'ستائر مطابخ'],
    ctaText: 'اطلب تركيب الستائر',
    ctaLink: 'https://wa.me/966570993783?text=أرغب%20بعرض%20سعر%20للستائر',
    image: 'https://reifelgoodnew.vercel.app/Css/ph%20(60).jpeg',
    fallbackImg: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop',
    imgOnLeftInRtl: false, // same as wardrobes
    bgClass: 'bg-[#4a2d1a]' // cocoa brown
  }
]

onMounted(() => {
  if (!categoriesRef.value || typeof window === 'undefined') return

  const ctx = gsap.context(() => {
    gsap.utils.toArray<HTMLElement>('.split-block').forEach((block) => {
      const media = block.querySelector('.cat-media')
      const text = block.querySelector('.cat-text')

      if (media && text) {
        gsap.from(media, {
          scale: 0.94,
          opacity: 0,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: block,
            start: 'top 82%',
            toggleActions: 'play none none none'
          }
        })

        gsap.from(text, {
          y: 40,
          opacity: 0,
          duration: 1,
          delay: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: block,
            start: 'top 82%',
            toggleActions: 'play none none none'
          }
        })
      }
    })
  }, categoriesRef)

  return () => ctx.revert()
})
</script>

<template>
  <div ref="categoriesRef" class="font-sans overflow-hidden" dir="rtl">
    
    <section 
      v-for="cat in categoriesList" 
      :key="cat.id"
      :id="cat.id"
      class="split-block overflow-hidden relative"
      :class="cat.bgClass"
    >
      <div class="grid grid-cols-1 lg:grid-cols-2 min-h-[500px] lg:min-h-[540px] items-stretch">
        
        <!-- Media Column -->
        <div 
          class="cat-media relative min-h-[340px] sm:min-h-[420px] lg:min-h-full overflow-hidden group"
          :class="cat.imgOnLeftInRtl ? 'lg:order-2' : 'lg:order-1'"
        >
          <img 
            :src="cat.image" 
            :alt="cat.title"
            loading="lazy"
            class="absolute inset-0 w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-1000 ease-out"
            @error="(e: any) => { e.target.src = cat.fallbackImg }"
          />
          <!-- Subtle Dark Shadow Gradient Overlap -->
          <div class="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/40 via-transparent to-transparent pointer-events-none" />
        </div>

        <!-- Text Column -->
        <div 
          class="cat-text p-8 sm:p-12 lg:p-16 xl:p-20 flex flex-col justify-center text-white relative z-10"
          :class="cat.imgOnLeftInRtl ? 'lg:order-1' : 'lg:order-2'"
        >
          <!-- Eyebrow Pill -->
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/12 border border-white/25 text-[#ecd9bd] font-bold text-xs sm:text-sm w-fit mb-6">
            <span class="w-2 h-2 rounded-full bg-[#c8932b] animate-pulse"></span>
            <span>{{ cat.eyebrow }}</span>
          </div>

          <!-- Title in Aref Ruqaa -->
          <h2 class="font-display text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-[#f4e8d8] leading-[1.3] mb-5">
            {{ cat.title }}
          </h2>

          <!-- Detailed Paragraph Description -->
          <p class="font-sans text-base sm:text-[1.03rem] text-[#f4e8d8]/85 leading-relaxed mb-7">
            {{ cat.desc }}
          </p>

          <!-- Chips List -->
          <div class="flex flex-wrap gap-2.5 mb-8">
            <span 
              v-for="(chip, i) in cat.chips" 
              :key="i"
              class="bg-white/10 hover:bg-white/20 text-[#ecd9bd] font-bold text-xs sm:text-sm px-4 py-2 rounded-full border border-white/20 transition-colors duration-200 cursor-default"
            >
              {{ chip }}
            </span>
          </div>

          <!-- Call To Action WhatsApp Button -->
          <div>
            <a 
              :href="cat.ctaLink" 
              target="_blank" 
              rel="noopener"
              class="inline-flex items-center justify-center bg-[#c8932b] hover:bg-[#e3b75e] text-[#2b1810] font-extrabold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0"
            >
              <span>{{ cat.ctaText }}</span>
            </a>
          </div>
        </div>

      </div>
    </section>

  </div>
</template>
