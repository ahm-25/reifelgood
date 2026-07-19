<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import gsap from 'gsap'

const estRef = ref<HTMLElement | null>(null)

// Form state matching exact option values from original site
const kitchenType = ref('1') // 1: PVC, 1.3: Acrylic, 1.6: Wood
const kitchenLength = ref(5) // 2 to 12 meters
const finishLevel = ref('1.25') // 1: Economic, 1.25: Medium, 1.6: Luxury

const BASE_PRICE_PER_METER = 1800

// Calculation matching exact original formula
const priceRange = computed(() => {
  const len = Number(kitchenLength.value)
  const typeMult = Number(kitchenType.value)
  const levelMult = Number(finishLevel.value)

  const total = Math.round(len * BASE_PRICE_PER_METER * typeMult * levelMult)
  const low = Math.round((total * 0.92) / 100) * 100
  const high = Math.round((total * 1.12) / 100) * 100

  return {
    lowFormatted: low.toLocaleString('ar-EG'),
    highFormatted: high.toLocaleString('ar-EG'),
    lowRaw: low,
    highRaw: high
  }
})

// WhatsApp link generator matching exact message structure
const whatsappUrl = computed(() => {
  const typeLabels: Record<string, string> = {
    '1': 'بولي لاك (PVC)',
    '1.3': 'اكريليك لمعة',
    '1.6': 'خشب طبيعي / قشرة خشبية'
  }
  const levelLabels: Record<string, string> = {
    '1': 'اقتصادي',
    '1.25': 'متوسط',
    '1.6': 'فاخر'
  }

  const typeText = typeLabels[kitchenType.value] || 'بولي لاك (PVC)'
  const levelText = levelLabels[finishLevel.value] || 'متوسط'
  const len = kitchenLength.value
  const { lowRaw, highRaw } = priceRange.value

  const msg = `السلام عليكم، أرغب بعرض سعر لمطبخ من موقع مطابخ جوري:\nالنوع: ${typeText}\nالطول التقريبي: ${len} متر\nمستوى التشطيب: ${levelText}\nالتقدير المبدئي: ${lowRaw.toLocaleString('ar-EG')}-${highRaw.toLocaleString('ar-EG')} ريال`
  return `https://wa.me/966570993783?text=${encodeURIComponent(msg)}`
})

onMounted(() => {
  if (!estRef.value || typeof window === 'undefined') return

  const ctx = gsap.context(() => {
    gsap.from('.est-card-reveal', {
      y: 50,
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: estRef.value,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    })
  }, estRef)

  return () => ctx.revert()
})
</script>

<template>
  <section id="estimator" ref="estRef" class="py-20 sm:py-28 bg-[#faf5ec] relative overflow-hidden font-sans text-[#2b1810]" dir="rtl">
    <!-- Subtle Decorative Ambient Gold Glow -->
    <div class="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[550px] bg-[#c8932b]/5 rounded-full blur-3xl pointer-events-none" />

    <div class="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-14">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c8932b]/15 border border-[#e3b75e]/35 text-[#b8801d] font-bold text-sm mb-5">
          <span class="w-2 h-2 rounded-full bg-[#c8932b] animate-pulse"></span>
          <span>تقدير مبدئي سريع</span>
        </div>
        <h2 class="font-display text-3xl sm:text-4xl md:text-[2.8rem] font-bold text-[#2b1810] leading-[1.3] mb-4.5">
          احصل على فكرة تقريبية عن تكلفة مطبخك
        </h2>
        <p class="font-sans text-sm sm:text-[1.02rem] text-[#5c4333] leading-relaxed">
          أداة تقديرية مبدئية فقط لمساعدتك على وضع ميزانية تقريبية. السعر النهائي يُحدد بعد المعاينة الفعلية والتصميم المعتمد.
        </p>
      </div>

      <!-- Calculator Card exactly matching .est-card -->
      <div class="est-card-reveal bg-white rounded-3xl p-7 sm:p-12 shadow-2xl border border-[#2b1810]/5 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        
        <!-- Right Column: Form Controls -->
        <div class="space-y-6">
          
          <!-- Field 1: Kitchen Type -->
          <div>
            <label class="block font-bold text-[#2b1810] text-[0.95rem] mb-2.5">
              نوع المطبخ
            </label>
            <select 
              v-model="kitchenType"
              class="w-full px-4.5 py-3.5 rounded-xl border-1.5 border-[#d3c5b4]/60 bg-[#faf5ec] text-[#2b1810] font-sans text-base focus:outline-none focus:border-[#c8932b] transition-colors cursor-pointer shadow-sm"
            >
              <option value="1">بولي لاك (PVC)</option>
              <option value="1.3">اكريليك لمعة</option>
              <option value="1.6">خشب طبيعي / قشرة خشبية</option>
            </select>
          </div>

          <!-- Field 2: Kitchen Length Slider -->
          <div>
            <label class="block font-bold text-[#2b1810] text-[0.95rem] mb-2.5">
              طول المطبخ التقريبي (بالمتر الطولي)
            </label>
            <div class="pt-1">
              <input 
                v-model.number="kitchenLength"
                type="range" 
                min="2" 
                max="12" 
                step="0.5"
                class="w-full accent-[#c8932b] h-2.5 bg-[#d3c5b4]/40 rounded-lg cursor-pointer"
              />
              <div class="flex justify-between items-center text-xs sm:text-sm text-[#5c4333] font-bold mt-2.5">
                <span>2م</span>
                <span class="text-[#c8932b] text-base px-3 py-0.5 rounded-full bg-[#c8932b]/10">{{ kitchenLength }} متر</span>
                <span>12م</span>
              </div>
            </div>
          </div>

          <!-- Field 3: Finish Level -->
          <div>
            <label class="block font-bold text-[#2b1810] text-[0.95rem] mb-2.5">
              مستوى التشطيب
            </label>
            <select 
              v-model="finishLevel"
              class="w-full px-4.5 py-3.5 rounded-xl border-1.5 border-[#d3c5b4]/60 bg-[#faf5ec] text-[#2b1810] font-sans text-base focus:outline-none focus:border-[#c8932b] transition-colors cursor-pointer shadow-sm"
            >
              <option value="1">اقتصادي</option>
              <option value="1.25">متوسط</option>
              <option value="1.6">فاخر</option>
            </select>
          </div>

        </div>

        <!-- Left Column: Dark Result Box exactly matching .est-result -->
        <div class="bg-[#2b1810] rounded-2xl sm:rounded-3xl p-8 sm:p-10 text-center flex flex-col justify-between shadow-xl text-[#f4e8d8] h-full min-h-[340px]">
          
          <div>
            <span class="block text-[#f4e8d8]/75 text-sm font-bold tracking-wide">
              السعر التقريبي المبدئي
            </span>

            <!-- Price Output -->
            <div class="font-display text-3xl sm:text-[2.6rem] text-[#e3b75e] font-bold my-5 sm:my-6 leading-tight tracking-wide">
              {{ priceRange.lowFormatted }} - {{ priceRange.highFormatted }} ريال
            </div>

            <!-- Disclaimer -->
            <small class="block text-[#f4e8d8]/60 text-xs sm:text-[0.82rem] mb-7 leading-relaxed max-w-sm mx-auto">
              تقدير مبدئي غير نهائي، يختلف حسب التصميم والخامة الفعلية بعد المعاينة
            </small>
          </div>

          <!-- WhatsApp Button -->
          <a 
            :href="whatsappUrl"
            target="_blank" 
            rel="noopener noreferrer"
            class="bg-gradient-to-r from-[#c8932b] to-[#e3b75e] hover:from-[#e3b75e] hover:to-[#c8932b] text-[#2b1810] font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2.5 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 w-full text-sm sm:text-base group"
          >
            <!-- WhatsApp Icon -->
            <svg class="w-5.5 h-5.5 fill-current transform group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.28.072.383-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.601.723 4.914 2.036 1.312 1.312 2.035 3.058 2.036 4.914-.001 3.825-3.113 6.93-6.949 6.93z"/>
            </svg>
            <span>أرسل هذا التقدير عبر واتساب</span>
          </a>

        </div>

      </div>

    </div>
  </section>
</template>
