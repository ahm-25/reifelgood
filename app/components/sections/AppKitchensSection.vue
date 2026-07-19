<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const kitchensRef = ref<HTMLElement | null>(null)

const kitchenTypes = [
  {
    num: '01',
    title: 'مطابخ خشب طبيعي وMDF',
    desc: 'متانة عالية وعمر افتراضي طويل مع تشطيبات خشبية أصلية تناسب الطابع الكلاسيك والريفي.'
  },
  {
    num: '02',
    title: 'مطابخ اكريليك لمعة عالية',
    desc: 'مظهر عصري لامع، سهل التنظيف، ومقاوم للبقع والخدوش، مثالي للمطابخ المودرن.'
  },
  {
    num: '03',
    title: 'مطابخ بولي لاك (PVC)',
    desc: 'مقاومة للرطوبة والحرارة بشكل كبير، خيار اقتصادي وعملي بألوان متعددة.'
  },
  {
    num: '04',
    title: 'تصاميم مودرن، كلاسيك ونيوكلاسيك',
    desc: 'نُنفذ تصميمك المفضل بدقة، مع اقتراحات تصميم داخلي تناسب مساحة وإضاءة مطبخك.'
  }
]

onMounted(() => {
  if (!kitchensRef.value || typeof window === 'undefined') return

  const ctx = gsap.context(() => {
    gsap.from('.kit-text-col', {
      x: 45,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: kitchensRef.value,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    })

    gsap.from('.kit-media-col', {
      x: -45,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: kitchensRef.value,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    })

    gsap.from('.kit-card-item', {
      y: 20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.12,
      delay: 0.35,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: kitchensRef.value,
        start: 'top 75%',
        toggleActions: 'play none none none'
      }
    })
  }, kitchensRef)

  return () => ctx.revert()
})
</script>

<template>
  <section id="kitchens" ref="kitchensRef" class="py-20 sm:py-28 bg-[#f3ebe1] relative overflow-hidden font-sans text-[#2b1810]" dir="rtl">
    <!-- Subtle Ambient Background Decorative Glow -->
    <div class="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#c8932b]/5 rounded-full blur-3xl pointer-events-none" />

    <div class="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
      
      <!-- Main Grid: Text & List on Right (1.1fr), Photo on Left (0.9fr) -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        
        <!-- Right Column (Text & 4 Numbered Cards) -->
        <div class="kit-text-col lg:col-span-7">
          <!-- Eyebrow Badge -->
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c8932b]/15 border border-[#e3b75e]/35 text-[#b8801d] font-bold text-sm mb-5">
            <span class="w-2 h-2 rounded-full bg-[#c8932b] animate-pulse"></span>
            <span>الأكثر طلبًا</span>
          </div>

          <!-- Title in Aref Ruqaa -->
          <h2 class="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-[#2b1810] leading-[1.3] mb-6">
            عالم المطابخ: تصميم وتنفيذ كل أنواع المطابخ بالمقاس
          </h2>

          <!-- Detailed Paragraph Description -->
          <p class="font-sans text-base sm:text-[1.05rem] text-[#5c4333] leading-relaxed mb-9">
            نُصمم مطبخك من الصفر بخطوات علمية وعملية بناءً على مساحتك الفعلية واحتياجاتك اليومية المتنوعة، ونُنفذه بخامات قوية ومضمونة تتحمل الاستخدام اليومي المستمر وتغيرات الحرارة والرطوبة، مع تشطيبات نهائية دقيقة واحترافية في كل التفاصيل الدقيقة من المقابض المريحة إلى أدراج التخزين الذكية والمبتكرة. المطبخ بالنسبة لنا ليس مجرد مكان لإعداد الطعام، بل هو قلب المنزل النابض ومركز تجمع العائلة الدافئ، لذلك نهتم بتوفير مساحات حركة سلسة ومريحة وإضاءة مناسبة تبرز جمال ورقي التصميم. سواء كنت تفضل الطابع العصري المليء بالحيوية، أو النمط الكلاسيكي الهادئ والفخم، فإن فريقنا من الخبراء يقدم لك استشارات احترافية لمساعدتك في اختيار الأفضل لما يلائم أسلوب حياتك وميزانيتك الخاصة.
          </p>

          <!-- 4 Kitchen Types Numbered Cards -->
          <div class="space-y-3.5">
            <div 
              v-for="(kit, idx) in kitchenTypes" 
              :key="idx"
              class="kit-card-item group bg-white rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md border border-[#2b1810]/5 hover:border-[#c8932b] flex items-center justify-between gap-5 transition-all duration-300 transform hover:-translate-x-2 cursor-pointer"
            >
              <!-- Number on the Right inside the flex order in RTL -->
              <div class="flex items-center gap-5">
                <span class="font-display text-2xl sm:text-3xl font-bold text-[#c8932b] group-hover:scale-110 transition-transform duration-300 w-11 shrink-0 text-center">
                  {{ kit.num }}
                </span>
                <div>
                  <h4 class="font-display text-lg sm:text-[1.18rem] font-bold text-[#2b1810] mb-1 group-hover:text-[#c8932b] transition-colors duration-300">
                    {{ kit.title }}
                  </h4>
                  <p class="text-xs sm:text-sm text-[#6e5847] leading-relaxed m-0 font-sans">
                    {{ kit.desc }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Left Column (Media Box & Ribbon) -->
        <div class="kit-media-col lg:col-span-5 relative">
          <div class="relative rounded-[2.2rem] overflow-hidden shadow-2xl shadow-[#2b1810]/20 aspect-[3/4] border border-[#2b1810]/10 bg-[#e6ded1] group">
            <img 
              src="https://reifelgoodnew.vercel.app/Css/ph%20(10).jpeg" 
              alt="مطبخ خشبي مودرن واكريليك من تنفيذ مطابخ جوري للمطابخ والخزائن" 
              loading="lazy"
              class="w-full h-full object-cover object-center transform group-hover:scale-107 transition-transform duration-700 ease-out"
              @error="(e: any) => { e.target.src = 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1000&auto=format&fit=crop' }"
            />

            <!-- Golden Ribbon Badge at Top Right exactly matching input_file_0.png -->
            <div class="absolute top-6 right-6 bg-[#c8932b] text-[#2b1810] font-extrabold text-sm sm:text-base px-6 py-2.5 rounded-xl shadow-lg border border-white/20 tracking-wide z-10">
              تنفيذ حديث
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>
