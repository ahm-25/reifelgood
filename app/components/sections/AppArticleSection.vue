<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const articleRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!articleRef.value || typeof window === 'undefined') return

  const ctx = gsap.context(() => {
    gsap.from('.article-box-reveal', {
      y: 45,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: articleRef.value,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    })
  }, articleRef)

  return () => ctx.revert()
})
</script>

<template>
  <section id="article" ref="articleRef" class="py-20 sm:py-28 bg-white relative overflow-hidden font-sans text-[#2b1810]" dir="rtl">
    <div class="max-w-4xl mx-auto px-6 lg:px-12 relative z-10 article-box-reveal">
      
      <!-- Eyebrow Badge -->
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c8932b]/15 border border-[#e3b75e]/35 text-[#b8801d] font-bold text-sm mb-5">
        <span class="w-2 h-2 rounded-full bg-[#c8932b] animate-pulse"></span>
        <span>مقال متخصص</span>
      </div>

      <!-- Main Title in Aref Ruqaa -->
      <h2 class="font-display text-2xl sm:text-3xl md:text-[2.4rem] font-bold text-[#2b1810] leading-[1.35] mb-6">
        دليلك الشامل لاختيار مطبخ العمر: كل ما تحتاج معرفته قبل التنفيذ
      </h2>

      <!-- Article Meta Bar exactly matching .article-meta -->
      <div class="flex flex-wrap items-center gap-5 sm:gap-7 text-[#5c4333]/80 text-xs sm:text-sm font-bold mb-8 pb-6 border-b border-[#2b1810]/10">
        
        <!-- Reading Time -->
        <span class="flex items-center gap-2">
          <!-- Clock SVG exactly matching #ic-clock -->
          <svg class="w-4 h-4 text-[#c8932b] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
          </svg>
          9 دقائق قراءة
        </span>

        <!-- Team -->
        <span class="flex items-center gap-2">
          <!-- Team/User SVG exactly matching #ic-team -->
          <svg class="w-4 h-4 text-[#c8932b] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
          فريق مطابخ جوري
        </span>

        <!-- Category -->
        <span class="flex items-center gap-2">
          <!-- Kitchen/Grid SVG exactly matching #ic-kitchen -->
          <svg class="w-4 h-4 text-[#c8932b] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 12h18"/><path d="M12 3v18"/>
          </svg>
          تصميم المطابخ
        </span>

      </div>

      <!-- Article Content Body -->
      <div class="space-y-6 text-[#5c4333] font-sans text-sm sm:text-[1.03rem] leading-relaxed">
        
        <!-- Intro -->
        <p class="m-0">
          يُعد المطبخ أحد أهم المساحات في أي منزل، فهو يجمع بين الجانب العملي اليومي والجانب الجمالي الذي يعكس شخصية أصحاب المنزل. ولهذا فإن اختيار شركة تصميم وتنفيذ مطابخ تمتلك خبرة كافية يُعد خطوة محورية لضمان نتيجة تستحق الاستثمار. في هذا المقال نستعرض أهم النقاط التي يجب مراعاتها عند التخطيط لمطبخ جديد أو تجديد مطبخك الحالي.
        </p>

        <!-- Heading 1 -->
        <h3 class="font-display text-xl sm:text-[1.35rem] font-bold text-[#5c3820] pt-4 mb-2 leading-snug">
          أولًا: تحديد نوع الخامة المناسبة لمطبخك
        </h3>
        <p class="m-0">
          تختلف خامات المطابخ بين الخشب الطبيعي وMDF والاكريليك والبولي لاك، ولكل خامة مميزاتها. فالخشب الطبيعي يمنح طابعًا كلاسيكيًا دافئًا وعمرًا افتراضيًا طويلًا، بينما يتميز الاكريليك بلمعته العصرية وسهولة تنظيفه، في حين يُعتبر البولي لاك خيارًا اقتصاديًا مقاومًا للرطوبة والحرارة بشكل ملحوظ. تحديد الخامة المناسبة يعتمد على الميزانية، ومستوى الاستخدام اليومي، والطابع العام المطلوب للمساحة.
        </p>

        <!-- Heading 2 -->
        <h3 class="font-display text-xl sm:text-[1.35rem] font-bold text-[#5c3820] pt-4 mb-2 leading-snug">
          ثانيًا: التصميم الداخلي وتوزيع المساحات التخزينية
        </h3>
        <p class="m-0">
          لا يقل التصميم الداخلي أهمية عن المظهر الخارجي للمطبخ، فالتقسيم الجيد للأدراج والخزائن العلوية والسفلية يُسهّل الاستخدام اليومي ويزيد من سعة التخزين دون الحاجة لمساحة إضافية. من الجيد كذلك التفكير في إضافة أدراج للأدوات الحادة، وسلال دوارة للزوايا، وأرفف مخصصة للتوابل والمعلبات.
        </p>

        <!-- Highlight Blockquote exactly matching blockquote.q -->
        <blockquote class="border-r-4 border-[#c8932b] bg-[#faf5ec] p-6 sm:p-7 rounded-l-2xl my-7 font-bold text-[#2b1810] text-base sm:text-[1.1rem] shadow-sm leading-relaxed m-0">
          مطبخ مصمم بعناية يوفر عليك سنوات من الإحباط اليومي، ويمنحك مساحة تستمتع بالعمل فيها بدلاً من تجنبها.
        </blockquote>

        <!-- Heading 3 -->
        <h3 class="font-display text-xl sm:text-[1.35rem] font-bold text-[#5c3820] pt-4 mb-2 leading-snug">
          ثالثًا: اختيار الألوان والتشطيبات الخارجية
        </h3>
        <p class="m-0">
          تلعب الألوان دورًا كبيرًا في إحساسك بالمساحة، فالألوان الفاتحة مثل البيج والأبيض تمنح شعورًا بالاتساع والإضاءة، بينما تضيف الألوان الخشبية الدافئة والبني الكاكاوي طابعًا أنيقًا وراقيًا. يمكن أيضًا الدمج بين لونين أو أكثر لتحقيق تباين جذاب بين الخزائن العلوية والسفلية.
        </p>

        <!-- Heading 4 -->
        <h3 class="font-display text-xl sm:text-[1.35rem] font-bold text-[#5c3820] pt-4 mb-2 leading-snug">
          رابعًا: أهمية القياس الدقيق قبل التصنيع
        </h3>
        <p class="m-0">
          تبدأ أي عملية تصميم وتنفيذ مطابخ ناجحة بمعاينة فعلية للموقع وأخذ قياسات دقيقة، حيث يضمن ذلك توافق المطبخ مع المساحة المتاحة بدقة تامة، ويمنع أي مشاكل قد تظهر أثناء التركيب.
        </p>

        <!-- Heading 5 -->
        <h3 class="font-display text-xl sm:text-[1.35rem] font-bold text-[#5c3820] pt-4 mb-2 leading-snug">
          خامسًا: الكاونتر وأسطح العمل
        </h3>
        <p class="m-0">
          يُفضّل اختيار خامات قوية لأسطح العمل مثل الكوارتز أو الجرانيت لما توفره من مقاومة للحرارة والخدوش، مع إمكانية اختيار ألوان متعددة تتناسب مع باقي تفاصيل المطبخ.
        </p>

        <!-- Heading 6 -->
        <h3 class="font-display text-xl sm:text-[1.35rem] font-bold text-[#5c3820] pt-4 mb-2 leading-snug">
          سادسًا: التركيب والمتابعة بعد التنفيذ
        </h3>
        <p class="m-0">
          الخطوة الأخيرة هي التركيب الاحترافي والنظيف، مع التأكد من عمل كافة الأدراج والأبواب بسلاسة، وتسليم ضمان واضح يشمل التصنيع والتركيب لراحة بالك على المدى الطويل.
        </p>

        <!-- Bulleted Checklist exactly matching ul -->
        <ul class="list-disc pr-6 space-y-2.5 text-[#5c4333] text-sm sm:text-base my-6 font-bold">
          <li>اختر خامة تناسب استخدامك اليومي وميزانيتك.</li>
          <li>اطلب معاينة وتصميم مجاني قبل التصنيع.</li>
          <li>راجع التصميم الداخلي للأدراج والخزائن جيدًا.</li>
          <li>اختر ألوانًا تناسب إضاءة وحجم مطبخك.</li>
          <li>تأكد من وجود ضمان مكتوب على التصنيع والتركيب.</li>
        </ul>

        <!-- Conclusion -->
        <p class="m-0 pt-2 font-bold text-[#2b1810]">
          في النهاية، فإن التخطيط الجيد والتعامل مع فريق متخصص في تصميم وتنفيذ المطابخ والخزائن يُحوّل تجربة تجديد أو تنفيذ مطبخك إلى تجربة ممتعة ونتيجة تستمتع بها لسنوات طويلة قادمة.
        </p>

      </div>

    </div>
  </section>
</template>
