<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const contactRef = ref<HTMLElement | null>(null)

// Form fields matching exact original inputs
const fullName = ref('')
const phone = ref('')
const city = ref('')
const serviceType = ref('مطبخ')
const orderDetails = ref('')

// Submit to WhatsApp matching exact lead routing
const handleFormSubmit = (e: Event) => {
  e.preventDefault()
  if (!fullName.value || !phone.value) {
    alert('يرجى كتابة الاسم الكامل ورقم الهاتف على الأقل')
    return
  }

  const msg = `السلام عليكم، لدي طلب استفسار/عرض سعر من موقع مطابخ جوري:\nالاسم: ${fullName.value}\nرقم الهاتف/واتساب: ${phone.value}\nالمدينة: ${city.value || 'غير محدد'}\nالخدمة المطلوبة: ${serviceType.value}\nتفاصيل الطلب: ${orderDetails.value || 'لا توجد تفاصيل إضافية'}`
  
  const whatsappUrl = `https://wa.me/966570993783?text=${encodeURIComponent(msg)}`
  if (typeof window !== 'undefined') {
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }
}

onMounted(() => {
  if (!contactRef.value || typeof window === 'undefined') return

  const ctx = gsap.context(() => {
    gsap.from('.contact-info-reveal', {
      x: 50,
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: contactRef.value,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    })

    gsap.from('.contact-form-reveal', {
      x: -50,
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: contactRef.value,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    })
  }, contactRef)

  return () => ctx.revert()
})
</script>

<template>
  <section id="contact" ref="contactRef" class="py-20 sm:py-28 bg-[#faf5ec] relative overflow-hidden font-sans text-[#2b1810]" dir="rtl">
    <!-- Subtle Decorative Ambient Gold Glow -->
    <div class="absolute bottom-0 right-1/4 w-[600px] h-[500px] bg-[#c8932b]/6 rounded-full blur-3xl pointer-events-none" />

    <div class="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-14">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c8932b]/15 border border-[#e3b75e]/35 text-[#b8801d] font-bold text-sm mb-5">
          <span class="w-2 h-2 rounded-full bg-[#c8932b] animate-pulse"></span>
          <span>تواصل معنا</span>
        </div>
        <h2 class="font-display text-3xl sm:text-4xl md:text-[2.8rem] font-bold text-[#2b1810] leading-[1.3] mb-4">
          احصل على عرض سعرك الآن مجاناً
        </h2>
        <p class="font-sans text-sm sm:text-base text-[#5c4333] leading-relaxed">
          عبّئ النموذج وسيتم تحويل طلبك مباشرة إلى واتساب فريقنا للرد عليك في أقرب وقت.
        </p>
      </div>

      <!-- Contact Grid exactly matching .contact-grid (.85fr 1.15fr) -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        
        <!-- Right Column (in RTL): Contact Form Card (lg:col-span-7) -->
        <div class="contact-form-reveal lg:col-span-7 bg-white rounded-3xl p-7 sm:p-11 shadow-2xl border border-[#2b1810]/5 order-1">
          <form @submit="handleFormSubmit" class="space-y-5">
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              <!-- Field 1: Full Name -->
              <div>
                <label class="block font-bold text-[#2b1810] text-[0.92rem] mb-2">
                  الاسم الكامل
                </label>
                <input 
                  v-model="fullName"
                  type="text" 
                  required
                  placeholder="اكتب اسمك"
                  class="w-full px-4.5 py-3.5 rounded-xl border-1.5 border-[#d3c5b4]/60 bg-[#faf5ec] text-[#2b1810] font-sans text-[0.95rem] focus:outline-none focus:border-[#c8932b] focus:ring-4 focus:ring-[#c8932b]/15 transition-all"
                />
              </div>

              <!-- Field 2: Phone / WhatsApp -->
              <div>
                <label class="block font-bold text-[#2b1810] text-[0.92rem] mb-2">
                  رقم الهاتف / واتساب
                </label>
                <input 
                  v-model="phone"
                  type="tel" 
                  required
                  placeholder="05XXXXXXXX"
                  class="w-full px-4.5 py-3.5 rounded-xl border-1.5 border-[#d3c5b4]/60 bg-[#faf5ec] text-[#2b1810] font-sans text-[0.95rem] focus:outline-none focus:border-[#c8932b] focus:ring-4 focus:ring-[#c8932b]/15 transition-all text-right"
                  dir="ltr"
                />
              </div>

              <!-- Field 3: City -->
              <div>
                <label class="block font-bold text-[#2b1810] text-[0.92rem] mb-2">
                  المدينة
                </label>
                <input 
                  v-model="city"
                  type="text" 
                  placeholder="مثال: الرياض"
                  class="w-full px-4.5 py-3.5 rounded-xl border-1.5 border-[#d3c5b4]/60 bg-[#faf5ec] text-[#2b1810] font-sans text-[0.95rem] focus:outline-none focus:border-[#c8932b] focus:ring-4 focus:ring-[#c8932b]/15 transition-all"
                />
              </div>

              <!-- Field 4: Required Service -->
              <div>
                <label class="block font-bold text-[#2b1810] text-[0.92rem] mb-2">
                  الخدمة المطلوبة
                </label>
                <select 
                  v-model="serviceType"
                  class="w-full px-4.5 py-3.5 rounded-xl border-1.5 border-[#d3c5b4]/60 bg-[#faf5ec] text-[#2b1810] font-sans text-[0.95rem] focus:outline-none focus:border-[#c8932b] focus:ring-4 focus:ring-[#c8932b]/15 transition-all cursor-pointer"
                >
                  <option value="مطبخ">مطبخ</option>
                  <option value="خزانة">خزانة</option>
                  <option value="مجلس">مجلس</option>
                  <option value="ستائر">ستائر</option>
                  <option value="أكثر من خدمة">أكثر من خدمة</option>
                </select>
              </div>

              <!-- Field 5: Order Details -->
              <div class="sm:col-span-2">
                <label class="block font-bold text-[#2b1810] text-[0.92rem] mb-2">
                  تفاصيل الطلب
                </label>
                <textarea 
                  v-model="orderDetails"
                  rows="3"
                  placeholder="اكتب مساحة المطبخ تقريبًا، الألوان المفضلة، أو أي تفاصيل أخرى"
                  class="w-full px-4.5 py-3.5 rounded-xl border-1.5 border-[#d3c5b4]/60 bg-[#faf5ec] text-[#2b1810] font-sans text-[0.95rem] focus:outline-none focus:border-[#c8932b] focus:ring-4 focus:ring-[#c8932b]/15 transition-all resize-y min-h-[110px]"
                ></textarea>
              </div>

            </div>

            <!-- Submit Button -->
            <button 
              type="submit"
              class="w-full mt-4 bg-gradient-to-r from-[#c8932b] to-[#e3b75e] hover:from-[#e3b75e] hover:to-[#c8932b] text-[#2b1810] font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2.5 transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-0.5 text-base sm:text-[1.05rem] group cursor-pointer"
            >
              <!-- WhatsApp Icon -->
              <svg class="w-5.5 h-5.5 fill-current transform group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.28.072.383-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.601.723 4.914 2.036 1.312 1.312 2.035 3.058 2.036 4.914-.001 3.825-3.113 6.93-6.949 6.93z"/>
              </svg>
              <span>إرسل الطلب عبر واتساب</span>
            </button>

            <!-- Note -->
            <p class="text-[0.8rem] text-[#5c4333]/80 text-center pt-1 font-bold m-0">
              بمجرد الضغط على إرسال، سيتم تحويلك إلى واتساب مباشرة مع تعبئة بياناتك تلقائيًا.
            </p>

          </form>
        </div>

        <!-- Left Column (in RTL): Contact Info Card (lg:col-span-5) -->
        <div class="contact-info-reveal lg:col-span-5 bg-[#2b1810] rounded-3xl p-8 sm:p-11 text-[#f4e8d8] shadow-xl flex flex-col justify-between order-2">
          
          <div>
            <h3 class="font-display font-bold text-xl sm:text-2xl text-[#f4e8d8] mb-3.5">
              بيانات التواصل
            </h3>
            <p class="text-[#ecd9bd]/80 text-sm sm:text-[0.93rem] mb-9 leading-relaxed">
              تواصل معنا مباشرة عبر الهاتف أو واتساب، أو زورونا في موقع الورشة لمعاينة الخامات والتصاميم.
            </p>

            <div class="space-y-6">
              
              <!-- Row 1: Direct Phone -->
              <div class="flex items-center gap-4">
                <div class="w-11.5 h-11.5 rounded-full bg-[#c8932b]/18 flex items-center justify-center shrink-0">
                  <svg class="w-5.5 h-5.5 text-[#e3b75e]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <strong class="block text-[#f4e8d8] font-bold text-[0.95rem] mb-0.5">اتصال مباشر</strong>
                  <span class="text-[#ecd9bd]/70 text-sm font-sans" dir="ltr">0570993783</span>
                </div>
              </div>

              <!-- Row 2: WhatsApp -->
              <div class="flex items-center gap-4">
                <div class="w-11.5 h-11.5 rounded-full bg-[#c8932b]/18 flex items-center justify-center shrink-0">
                  <svg class="w-5.5 h-5.5 text-[#e3b75e] fill-current" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.28.072.383-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.601.723 4.914 2.036 1.312 1.312 2.035 3.058 2.036 4.914-.001 3.825-3.113 6.93-6.949 6.93z"/>
                  </svg>
                </div>
                <div>
                  <strong class="block text-[#f4e8d8] font-bold text-[0.95rem] mb-0.5">واتساب</strong>
                  <span class="text-[#ecd9bd]/70 text-sm font-sans" dir="ltr">0570993783</span>
                </div>
              </div>

              <!-- Row 3: Location -->
              <div class="flex items-center gap-4">
                <div class="w-11.5 h-11.5 rounded-full bg-[#c8932b]/18 flex items-center justify-center shrink-0">
                  <svg class="w-5.5 h-5.5 text-[#e3b75e]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 2C8 2 5 5 5 9c0 5.5 7 13 7 13s7-7.5 7-13c0-4-3-7-7-7Z"/>
                    <circle cx="12" cy="9" r="2.6" fill="currentColor"/>
                  </svg>
                </div>
                <div>
                  <strong class="block text-[#f4e8d8] font-bold text-[0.95rem] mb-0.5">الموقع</strong>
                  <span class="text-[#ecd9bd]/70 text-sm">المملكة العربية السعودية</span>
                </div>
              </div>

              <!-- Row 4: Working Hours -->
              <div class="flex items-center gap-4">
                <div class="w-11.5 h-11.5 rounded-full bg-[#c8932b]/18 flex items-center justify-center shrink-0">
                  <svg class="w-5.5 h-5.5 text-[#e3b75e]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                  </svg>
                </div>
                <div>
                  <strong class="block text-[#f4e8d8] font-bold text-[0.95rem] mb-0.5">أوقات العمل</strong>
                  <span class="text-[#ecd9bd]/70 text-sm">يوميًا من 9 صباحًا حتى 11 مساءً</span>
                </div>
              </div>

            </div>
          </div>

          <!-- Decorative bottom brand guarantee badge -->
          <div class="mt-10 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-[#ecd9bd]/60">
            <span>ضمان الجودة حتى 10 سنوات</span>
            <span class="text-[#e3b75e] font-bold">● مطابخ جوري</span>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>
