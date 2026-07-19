import type { NavLink, HeroContent, FeatureItem, PricingPlan, TestimonialItem, FaqItem } from '~/types/landing'
import IconLightning from '~/components/icons/IconLightning.vue'
import IconShield from '~/components/icons/IconShield.vue'
import IconCode from '~/components/icons/IconCode.vue'
import IconChart from '~/components/icons/IconChart.vue'
import IconSparkle from '~/components/icons/IconSparkle.vue'
import IconCommand from '~/components/icons/IconCommand.vue'

export const navLinks: NavLink[] = [
  { label: 'المميزات الهندسيـة', href: '#features' },
  { label: 'المحاكاة التفاعلية', href: '#demo' },
  { label: 'قياسات الأداء', href: '#metrics' },
  { label: 'الباقات والأسعار', href: '#pricing' },
  { label: 'الأسئلة الشائعة', href: '#faq' }
]

export const heroContent: HeroContent = {
  badge: 'إصدار 4.2 مباشر — معالجة الحوسبة الطرفية في 0.4ms',
  titlePrefix: 'ابنِ وشغّل بنية تحتية',
  titleHighlight: 'ذاتية التحرك وذات سرعة فائقة',
  subtitle: 'منصة أثير تجمع بين مسارات الذكاء الاصطناعي الذاتية، ومراقبة الأداء الفائقة بلغة WebAssembly على الحافة السحابية، وحماية التشفير الكمي في واجهة تحكم واحدة سريعة الاستجابة.',
  primaryCta: {
    label: 'ابدأ التجربة المجانية 14 يوماً',
    href: '#pricing'
  },
  secondaryCta: {
    label: 'استكشف البنية التحتية',
    href: '#demo'
  }
}

export const heroStats = [
  { label: 'طلبات معالجة يومياً', value: '+14.2 مليار' },
  { label: 'زمن استجابة فائق السرعة', value: '0.4 مللي ثانية' },
  { label: 'توافر ونسبة تشغيل مستمرة', value: '99.999%' },
  { label: 'مراكز حافة عالمية سحابية', value: '+320 موقع' }
]

export const socialProofLogos = [
  { name: 'ARAMCO TECH' },
  { name: 'NEOM CLOUD' },
  { name: 'SABIC AI' },
  { name: 'STC EDGE' },
  { name: 'ELM SYSTEMS' },
  { name: 'TAQAT DIGITAL' }
]

export const featuresData: FeatureItem[] = [
  {
    id: 'edge-wasm',
    title: 'تنفيذ بلغة WebAssembly على الحافة',
    description: 'يتم تشغيل الأكواد في صناديق عزل فائقة السرعة مع استجابة أقل من جزء من المللي ثانية في أكثر من 320 مركز بيانات حول العالم، مع استهلاك للذاكرة يقل 10 مرات عن الحاويات التقليدية.',
    icon: IconLightning,
    badge: 'استجابة فائقة 0.4ms',
    colSpan: 2
  },
  {
    id: 'zero-trust',
    title: 'تشفير كمي وحماية الأصفار',
    description: 'يتم تشفير وتأمين جميع الاتصال الداخلي بين مراكز البيانات باستخدام مفاتيح أمان الأجهزة المصممة لمقاومة هجمات الحوسبة الكمية المستقبلية.',
    icon: IconShield,
    colSpan: 1
  },
  {
    id: 'ai-routing',
    title: 'توجيه شبكي بالذكاء الاصطناعي',
    description: 'يقوم محرك التوجيه العصبي بتحليل الازدحام عبر 14 مزود شبكات عالمي كل 50 مللي ثانية واختيار أسرع مسار ضوئي لنقل البيانات بشكل فوري وتلقائي.',
    icon: IconChart,
    colSpan: 1
  },
  {
    id: 'cli-native',
    title: 'واجهة تحكم عبر لوحة المفاتيح',
    description: 'تحكم في بنيتك التحتية وسجل القنوات ونشر التحديثات اللحظية عبر واجهة موجهة بالكامل لاختصارات لوحة المفاتيح، مما يمنح فريق الهندسة سرعة إنتاجية مضاعفة.',
    icon: IconCommand,
    badge: 'تجربة المطورين',
    colSpan: 2
  }
]

export const performanceMetrics = [
  { label: 'زمن استجابة البدء البارد', value: '0.4', suffix: 'ms', description: 'أسرع بـ 100 مرة من منصات الـ Serverless والحاويات التقليدية.' },
  { label: 'معدل أحداث ومعالجة يومية', value: '14.2', suffix: 'مليار', description: 'يتم توزيع وإدارة الحمل آلياً عبر العناقيد السحابية دون تدخل بشري.' },
  { label: 'ضمان توافر الخدمة (SLA)', value: '99.999', suffix: '%', description: 'تعويض مؤكد وموثق مالياً عند حدوث أي انقطاع يزيد عن 5 دقائق سنوياً.' },
  { label: 'تقليص فاتورة البنية التحتية', value: '64', suffix: '%', description: 'توفير ملموس مقارنة بتشغيل الخوادم التقليدية والحاويات الافتراضية.' }
]

export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'المطور للشركات الناشئة',
    description: 'مثالية للفرق الصغيرة ومشاريع التطوير السريع التي تتطلب أداءً فائقاً وحماية حافة متكاملة.',
    monthlyPrice: 49,
    annualPrice: 39,
    features: [
      { text: 'معالجة حتى 50 مليون طلب شهرياً', included: true },
      { text: 'الوصول إلى 50 مركز حافة سحابي', included: true },
      { text: 'واجهة سطر أوامر تفاعلية (CLI)', included: true },
      { text: 'حماية التشفير القياسي الأساسية', included: true },
      { text: 'دعم التوجيه العصبي المتقدم', included: false },
      { text: 'مدير فني مخصص وضمان SLA 99.999%', included: false }
    ],
    ctaText: 'ابدأ الباقة الأساسية مجاناً',
    popular: false
  },
  {
    id: 'scale',
    name: 'نمو الأعمال والمؤسسات',
    description: 'الخيار المفضل لفرق الهندسة السريعة التي تتطلب انتشاراً عالمياً شاملاً وأتمتة مسارات الذكاء الاصطناعي.',
    monthlyPrice: 199,
    annualPrice: 159,
    features: [
      { text: 'معالجة حتى 500 مليون طلب شهرياً', included: true },
      { text: 'الوصول إلى 320+ مركز حافة حول العالم', included: true },
      { text: 'أتمتة مسارات الذكاء الاصطناعي والتوجيه العصبي', included: true },
      { text: 'حماية التشفير الكمي المتقدم (Zero-Trust)', included: true },
      { text: 'مراقبة التنبيهات والأداء في الوقت الفعلي', included: true },
      { text: 'مدير فني مخصص وضمان SLA 99.999%', included: false }
    ],
    ctaText: 'انشر الآن على الحافة العالمية',
    popular: true
  },
  {
    id: 'enterprise',
    name: 'الأنظمة السيادية والمؤسسات الكبرى',
    description: 'بنية تحتية مخصصة وعناقيد حافة معزولة للقطاعات الحساسة والبنوك والجهات الحكومية التي تتطلب سيادة بيانات مطلقة.',
    monthlyPrice: 'مخصص',
    features: [
      { text: 'عدد لا محدود من معالجة الطلبات الشهرية', included: true },
      { text: 'تخصيص نقاط وصول حصرية للبنية التحتية', included: true },
      { text: 'الامتثال الكامل لسيادة البيانات والمعايير العالمية', included: true },
      { text: 'حماية التشفير الكمي المتقدم (Zero-Trust)', included: true },
      { text: 'اتفاقية مستوى خدمة SLA بنسبة 99.999% موثقة', included: true },
      { text: 'فريق دعم هندسي واستشاري مخصص على مدار الساعة', included: true }
    ],
    ctaText: 'تواصل مع فريق الهندسة',
    badge: 'أقصى أداء',
    popular: false
  }
]

export const testimonialsData: TestimonialItem[] = [
  {
    id: 'test-1',
    author: 'م. طارق العتيبي',
    role: 'مدير البنية التحتية السحابية',
    company: 'ARAMCO TECH',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=250&auto=format&fit=crop',
    quote: 'الانتقال إلى حوسبة WebAssembly مع أثير خفض زمن الاستجابة في أنظمتنا الحساسة من 45ms إلى أقل من مللي ثانية واحدة، مع توفير 60% في تكاليف الخوادم.',
    rating: 5
  },
  {
    id: 'test-2',
    author: 'د. نورة السليمان',
    role: 'رئيسة الذكاء الاصطناعي',
    company: 'NEOM CLOUD',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=250&auto=format&fit=crop',
    quote: 'واجهة التحكم الموجهة بلوحة المفاتيح ونظام التوجيه العصبي غيّرا بالكامل طريقة إدارتنا لعناقيد الحوسبة، مما مكننا من نشر آلاف التحديثات يومياً بأمان مطلق.',
    rating: 5
  },
  {
    id: 'test-3',
    author: 'عمر القحطاني',
    role: 'كبير مهندسي الأمن السيبراني',
    company: 'ELM SYSTEMS',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=250&auto=format&fit=crop',
    quote: 'بصفتنا مؤسسة تتعامل مع بيانات سيادية، فإن التشفير الكمي وعزل الصناديق الفوري الذي توفره أثير منحنا راحة بال تامة وتفوقاً في كل اختبارات الاختراق الأمني.',
    rating: 5
  }
]

export const faqData: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'كيف يختلف أثير عن منصات الاستضافة السحابية التقليدية؟',
    answer: 'يعتمد أثير على تقنية صناديق عزل WebAssembly (Wasm) بدلاً من الحاويات الافتراضية الثقيلة (مثل Docker/Kubernetes). هذا يعني أن بدء تشغيل أكوادك لا يستغرق ثوانٍ بل 0.4 مللي ثانية فقط، مما يلغي تماماً مشكلة "البدء البارد" (Cold Start) ويضمن توزيعاً آنياً على 320+ مركز بيانات في جميع أنحاء العالم دون أي تكوين يدوي.'
  },
  {
    id: 'faq-2',
    question: 'هل يمكنني نقل تطبيقي الحالي للعمل على حافة أثير بسهولة؟',
    answer: 'نعم، يدعم أثير جميع اللغات الرئيسية بما في ذلك Rust، Go، TypeScript، Python، و C++. يمكنك ببساطة استخدام أمر CLI الخاص بنا (aether edge deploy) وسيقوم المترجم تلقائياً بتحويل كود برمجياتك إلى ملف WebAssembly محسّن ونشره عالمياً في أقل من 3 ثوانٍ.'
  },
  {
    id: 'faq-3',
    question: 'ما المقصود بالتشفير الكمي وحماية Zero-Trust في المنصة؟',
    answer: 'نحن نستخدم بروتوكولات تشفير متطورة مصممة لمقاومة أي محاولات فك تشفير مستقبلية باستخدام الحواسيب الكمية. يتم التحقق من كل طلب وحزمة بيانات على حدة عبر مفاتيح أجهزة مؤمنة داخل المعالجات، دون الافتراض بأن أي نقطة اتصال داخلية آمنة.'
  },
  {
    id: 'faq-4',
    question: 'ما هو الضمان المالي المترتب على اتفاقية مستوى الخدمة SLA بنسبة 99.999%؟',
    answer: 'إذا واجهت أي توقف في الخدمة يزيد عن 5 دقائق فقط في السنة التقويمية الكاملة، نلتزم بتعويض مالي مباشر في رصيد حسابك يصل إلى 100% من قيمة اشتراكك الشهري، وذلك وفق العقد الموثق للباقات المتقدمة والمؤسسات.'
  },
  {
    id: 'faq-5',
    question: 'كيف أستفيد من واجهة التحكم وأوامر لوحة المفاتيح؟',
    answer: 'تم تصميم منصتنا بالكامل بمبدأ "الكيبورد أولاً". من خلال الضغط على ⌘K (أو Ctrl+K)، يمكنك التنقل عبر جميع قنوات النظام، ومراقبة الـ Telemetry، ونشر أو التراجع عن أي تحديث في ثوانٍ معدودة دون الحاجة للمس الفأرة، مما يرفع سرعة واستجابة المهندسين والمطورين.'
  }
]
