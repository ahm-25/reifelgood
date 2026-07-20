import { ref, watch, onMounted } from 'vue'

export interface ColorPalette {
  id: string
  name: string
  nameAr: string
  subtitle: string
  icon: string
  badge: string
  colors: {
    dark: string      // Maps #2b1810
    dark2: string     // Maps #3a2417
    cocoa: string     // Maps #6b4226
    walnut: string    // Maps #8a5a32
    tan: string       // Maps #c08a52
    beige: string     // Maps #f4e8d8
    beige2: string    // Maps #ecd9bd
    cream: string     // Maps #fdf8f0
    gold: string      // Maps #c8932b
    gold2: string     // Maps #e3b75e
  }
}

export const palettes: ColorPalette[] = [
  {
    id: 'original',
    name: 'Royal Gold & Espresso',
    nameAr: 'الذهبي الملكي والقهوة (الأصلي)',
    subtitle: 'اللون الأصلي الفاخر لمطابخ جوري بالقهوة العربية والذهب',
    icon: '👑',
    badge: 'كلاسيكي داكن',
    colors: {
      dark: '#2b1810',
      dark2: '#3a2417',
      cocoa: '#6b4226',
      walnut: '#8a5a32',
      tan: '#c08a52',
      beige: '#f4e8d8',
      beige2: '#ecd9bd',
      cream: '#fdf8f0',
      gold: '#c8932b',
      gold2: '#e3b75e'
    }
  },
  {
    id: 'warm-rose',
    name: 'Warm Rose & Champagne Gold',
    nameAr: 'الأناقة الدافئة والذهبي الوردي',
    subtitle: 'مزيج رومانسي وفاخر يعكس الأنوثة الهادئة والذوق الرفيع',
    icon: '🌸',
    badge: 'الأكثر طلباً للسيدات',
    colors: {
      dark: '#2f1a23',
      dark2: '#432634',
      cocoa: '#7c505c',
      walnut: '#9e6874',
      tan: '#c795a1',
      beige: '#f9edf1',
      beige2: '#f1d4dc',
      cream: '#fdf5f8',
      gold: '#d8b25c',
      gold2: '#ecd08c'
    }
  },
  {
    id: 'quiet-nude',
    name: 'Quiet Luxury & Nude Earth',
    nameAr: 'الفخامة الهادئة وألوان النيود',
    subtitle: 'بالتة راقية ومريحة للعين مستوحاة من ألوان الأرض الطبيعية والكشمير',
    icon: '🌾',
    badge: 'مودرن هادئ',
    colors: {
      dark: '#24201e',
      dark2: '#332d2a',
      cocoa: '#5c4d43',
      walnut: '#7a675a',
      tan: '#9e8777',
      beige: '#f4f0ed',
      beige2: '#dbcbc0',
      cream: '#f8f6f4',
      gold: '#ab8d6f',
      gold2: '#cca886'
    }
  },
  {
    id: 'sage-marble',
    name: 'Modern Sage & Marble Elegance',
    nameAr: 'انتعاش الميرمية والرخام',
    subtitle: 'الأخضر الميرمي الملكي مع لمسات الرخام والذهبي لراحة نفسية استثنائية',
    icon: '🌿',
    badge: 'عصري وفاخر',
    colors: {
      dark: '#19211c',
      dark2: '#263029',
      cocoa: '#44574a',
      walnut: '#5f7868',
      tan: '#84a18e',
      beige: '#f0f4f1',
      beige2: '#c7d6cd',
      cream: '#f8faf9',
      gold: '#c5a880',
      gold2: '#dec49f'
    }
  },
  {
    id: 'velvet-berry',
    name: 'Velvet Berry & Deep Elegance',
    nameAr: 'الجاذبية المخملية والبرغندي',
    subtitle: 'ألوان البرغندي الملكي العريق مع الروز قولد لإطلالة مبهرة وساحرة',
    icon: '🍷',
    badge: 'فخامة ملكية',
    colors: {
      dark: '#241318',
      dark2: '#361c24',
      cocoa: '#5b2c3f',
      walnut: '#7f3e58',
      tan: '#a26769',
      beige: '#fcf5f7',
      beige2: '#e8c4d0',
      cream: '#fefbfc',
      gold: '#d4af37',
      gold2: '#f0ce62'
    }
  },
  {
    id: 'lavender-mauve',
    name: 'Soft Lavender & Mauve',
    nameAr: 'النقاء الخزامي والموف الهادئ',
    subtitle: 'سحر الخزامى الهادئ والموف المخملي مع لمسات الذهب المعتق',
    icon: '💜',
    badge: 'ناعم وحالم',
    colors: {
      dark: '#211b24',
      dark2: '#312936',
      cocoa: '#52435b',
      walnut: '#6e5a7a',
      tan: '#937b9f',
      beige: '#f6f3f8',
      beige2: '#d4c6dd',
      cream: '#fcfbfe',
      gold: '#bca16d',
      gold2: '#ddc391'
    }
  },
  {
    id: 'jory-care',
    name: 'Jory Care Violet & Orchid',
    nameAr: 'بنفسجي وأوركيد جوري كير',
    subtitle: 'درجات البنفسجي الساحرة مع الوردي الناعم المستوحاة من هوية جوري كير للجمال',
    icon: '💅',
    badge: 'هوية جوري كير',
    colors: {
      dark: '#1e122b',
      dark2: '#2d1c3e',
      cocoa: '#5e3880',
      walnut: '#7b4aa6',
      tan: '#ab7ec4',
      beige: '#faf5fc',
      beige2: '#ebd6f5',
      cream: '#fefaff',
      gold: '#8b5cf6',
      gold2: '#ec4899'
    }
  },
  {
    id: 'royal-emerald',
    name: 'Royal Emerald & Imperial Gold',
    nameAr: 'الزمرد الملكي والذهبي الإمبراطوري',
    subtitle: 'فخامة الأخضر الزمردي الداكن مع بريق الذهب الملكي لإطلالة تسلب الأنفاس',
    icon: '💚',
    badge: 'فخم وجريء',
    colors: {
      dark: '#0a1c15',
      dark2: '#112b21',
      cocoa: '#1a3e30',
      walnut: '#255945',
      tan: '#418267',
      beige: '#f4faf7',
      beige2: '#d1e6dd',
      cream: '#fafefc',
      gold: '#c59b27',
      gold2: '#e2ba43'
    }
  },
  {
    id: 'ocean-navy',
    name: 'Ocean Navy & Champagne',
    nameAr: 'الأزرق البحري والشمبانيا الذهبي',
    subtitle: 'سحر الليل المحيطي الأزرق مع نعومة لون الشمبانيا الذهبي الكلاسيكي الهادئ',
    icon: '💙',
    badge: 'كلاسيكي راقٍ',
    colors: {
      dark: '#0d1726',
      dark2: '#152238',
      cocoa: '#213555',
      walnut: '#3f72af',
      tan: '#90b0d9',
      beige: '#f5f7fa',
      beige2: '#dbe2ef',
      cream: '#f9fbfd',
      gold: '#d8b25c',
      gold2: '#ecd08c'
    }
  },
  {
    id: 'pearl-white-gold',
    name: 'Pearl White & Radiant Gold',
    nameAr: 'الأبيض اللؤلؤي والذهبي المشرق',
    subtitle: 'إشراقة الأبيض اللؤلؤي النقي مع لمسات الذهب الساطع لإطلالة مودرن مبهجة ومريحة للعين',
    icon: '🤍',
    badge: 'الافتراضي الملكي',
    colors: {
      dark: '#f8fafc',
      dark2: '#f1f5f9',
      cocoa: '#cbd5e1',
      walnut: '#94a3b8',
      tan: '#64748b',
      beige: '#1e293b',
      beige2: '#334155',
      cream: '#0f172a',
      gold: '#d97706',
      gold2: '#f59e0b'
    }
  },
  {
    id: 'snow-white-turquoise',
    name: 'Snow White & Cheerful Turquoise',
    nameAr: 'الأبيض الثلجي والفيروزي المبهج',
    subtitle: 'نقاء الأبيض الثلجي مع ألوان البحر والفيروزي المنعشة لبهجة وطاقة إيجابية استثنائية',
    icon: '🩵',
    badge: 'منعش ومبهج',
    colors: {
      dark: '#f9fafb',
      dark2: '#ecfdf5',
      cocoa: '#99f6e4',
      walnut: '#5eead4',
      tan: '#0d9488',
      beige: '#134e4a',
      beige2: '#115e59',
      cream: '#042f2c',
      gold: '#0891b2',
      gold2: '#06b6d4'
    }
  },
  {
    id: 'ivory-white-coral',
    name: 'Ivory White & Cheerful Coral',
    nameAr: 'الأبيض العاجي والكورال المبهج',
    subtitle: 'دفء الأبيض العاجي مع اللون الخوخي والكورال النابض بالحياة لإطلالة أنثوية مبهجة',
    icon: '🍑',
    badge: 'أنثوي مبهج',
    colors: {
      dark: '#fffaf6',
      dark2: '#ffedd5',
      cocoa: '#fed7aa',
      walnut: '#fb923c',
      tan: '#ea580c',
      beige: '#431407',
      beige2: '#7c2d12',
      cream: '#2a0d04',
      gold: '#f97316',
      gold2: '#fb923c'
    }
  },
  {
    id: 'sunny-white-lemon',
    name: 'Sunny White & Lemon Morning',
    nameAr: 'الأبيض المشرق والأصفر الصباحي',
    subtitle: 'إطلالة صباحية مبهجة تجمع بين الأبيض الناصع والشمس الذهبية المشرقة للتفاؤل والبهجة',
    icon: '☀️',
    badge: 'صباحي وإيجابي',
    colors: {
      dark: '#ffffff',
      dark2: '#fefce8',
      cocoa: '#fef08a',
      walnut: '#facc15',
      tan: '#ca8a04',
      beige: '#3f2c06',
      beige2: '#573d09',
      cream: '#1a1202',
      gold: '#eab308',
      gold2: '#facc15'
    }
  },
  {
    id: 'spring-mint-blossom',
    name: 'Spring Mint & Blossom Cheerful',
    nameAr: 'ألوان الربيع والمينت المبهج',
    subtitle: 'ألوان الربيع المبهجة من الأخضر النعناعي الفاتح مع الأبيض النقي ولمسات الذهبي الدافئ',
    icon: '🍃',
    badge: 'ربيعي مبهج',
    colors: {
      dark: '#f0fdf4',
      dark2: '#dcfce7',
      cocoa: '#86efac',
      walnut: '#4ade80',
      tan: '#16a34a',
      beige: '#14532d',
      beige2: '#166534',
      cream: '#052e16',
      gold: '#10b981',
      gold2: '#34d399'
    }
  },
  {
    id: 'cheerful-rose-white',
    name: 'Velvet White & Cheerful Rose',
    nameAr: 'الأبيض المخملي والروز الوردي المبهج',
    subtitle: 'تناغم الأبيض النقي مع درجات الروز الوردي المبهج لإطلالة مفعمة بالحيوية والجمال',
    icon: '🌺',
    badge: 'حيوية وجمال',
    colors: {
      dark: '#fdf2f8',
      dark2: '#fce7f3',
      cocoa: '#fbcfe8',
      walnut: '#f472b6',
      tan: '#db2777',
      beige: '#500724',
      beige2: '#831843',
      cream: '#3b0764',
      gold: '#ec4899',
      gold2: '#f472b6'
    }
  }
]

// Global shared state
const activePaletteId = ref<string>('pearl-white-gold')
const isSwitcherOpen = ref<boolean>(false)

// Convert hex to RGB object { r, g, b }
function hexToRgb(hex: string) {
  const cleanHex = hex.replace('#', '')
  const bigint = parseInt(cleanHex, 16)
  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255
  }
}

const clampByte = (n: number) => Math.max(0, Math.min(255, Math.round(n)))
const rgbToHex = (r: number, g: number, b: number) =>
  '#' + [r, g, b].map(v => clampByte(v).toString(16).padStart(2, '0')).join('')

// Palette token keys ordered from darkest to lightest, plus the golds.
const TOKEN_KEYS = ['dark', 'dark2', 'cocoa', 'walnut', 'tan', 'beige2', 'beige', 'cream', 'gold', 'gold2'] as const

// Greens (WhatsApp / online dot) must NEVER be re-tinted into the brown palette.
function isGreenish(hex: string) {
  const { r, g, b } = hexToRgb(hex)
  return g > r + 20 && g > b + 20
}

// Map an arbitrary source hex to the target palette. We find the nearest
// original palette token, then re-apply the source's offset from that token on
// top of the target token — this recolours EVERY shade used on the site while
// preserving the relative differences between neighbouring shades.
function mapHexToPalette(
  sourceHex: string,
  original: ColorPalette['colors'],
  target: ColorPalette['colors']
): string {
  const src = hexToRgb(sourceHex)
  let bestKey: typeof TOKEN_KEYS[number] = 'dark'
  let bestDist = Infinity
  for (const key of TOKEN_KEYS) {
    const o = hexToRgb(original[key])
    const d = (o.r - src.r) ** 2 + (o.g - src.g) ** 2 + (o.b - src.b) ** 2
    if (d < bestDist) { bestDist = d; bestKey = key }
  }
  const o = hexToRgb(original[bestKey])
  const t = hexToRgb(target[bestKey])
  return rgbToHex(t.r + (src.r - o.r), t.g + (src.g - o.g), t.b + (src.b - o.b))
}

// Scan the live DOM for every arbitrary hex colour actually used in a class
// (e.g. bg-[#5c4333], text-[#faf5ec]/30) so nothing is left un-themed.
function collectUsedHexes(): string[] {
  const set = new Set<string>()
  if (typeof document !== 'undefined') {
    const re = /#[0-9a-fA-F]{6}/g
    document.querySelectorAll<HTMLElement>('[class]').forEach(el => {
      const cls = typeof el.className === 'string' ? el.className : el.getAttribute('class') || ''
      const matches = cls.match(re)
      if (matches) matches.forEach(m => set.add(m.toLowerCase()))
    })
  }
  return [...set]
}

// Generate comprehensive CSS overrides for exact hex classes & opacities across all Vue components
function generatePaletteCSS(palette: ColorPalette): string {
  if (palette.id === 'original') {
    return '' // No overrides needed when original is selected
  }

  const originalColors = palettes[0].colors
  const c = palette.colors // active palette's color tokens live under `.colors`
  const opacities = [3, 4, 5, 6, 8, 10, 12, 14, 15, 16, 18, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 98]

  let css = `/* Dynamic Theme Palette Override: ${palette.nameAr} */\n`

  // 1. Root and Global element overrides
  css += `
:root {
  --color-primary: ${c.cocoa} !important;
  --color-primary-light: ${c.walnut} !important;
  --color-primary-dark: ${c.dark2} !important;
  --color-gold: ${c.gold} !important;
  --color-gold-light: ${c.gold2} !important;
  --color-gold-dark: ${c.cocoa} !important;
  --color-bg: ${c.cream} !important;
  --color-surface: #ffffff !important;
  --color-text: ${c.dark} !important;
  --color-text-muted: ${c.cocoa} !important;
}

html, body {
  background-color: ${c.dark} !important;
  color: ${c.beige} !important;
}

.topbar {
  background-color: ${c.dark} !important;
  color: ${c.beige2} !important;
  border-color: rgba(${hexToRgb(c.cocoa).r}, ${hexToRgb(c.cocoa).g}, ${hexToRgb(c.cocoa).b}, 0.4) !important;
}

.site-header {
  background-color: rgba(${hexToRgb(c.cream).r}, ${hexToRgb(c.cream).g}, ${hexToRgb(c.cream).b}, 0.92) !important;
  border-color: rgba(${hexToRgb(c.cocoa).r}, ${hexToRgb(c.cocoa).g}, ${hexToRgb(c.cocoa).b}, 0.18) !important;
}

.particle {
  background: ${c.gold2} !important;
}

::-webkit-scrollbar-track {
  background: ${c.dark} !important;
}
::-webkit-scrollbar-thumb {
  background: ${c.cocoa} !important;
}
::-webkit-scrollbar-thumb:hover {
  background: ${c.gold} !important;
}

::selection {
  background-color: rgba(${hexToRgb(c.gold).r}, ${hexToRgb(c.gold).g}, ${hexToRgb(c.gold).b}, 0.35) !important;
  color: #ffffff !important;
}

/* Universal protection for AppStylesSection photo gallery cards */
.style-card-item {
  border: 2px solid rgba(245, 158, 11, 0.4) !important;
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.22) !important;
}
.style-card-item:hover {
  border-color: ${c.gold} !important;
  box-shadow: 0 25px 50px rgba(245, 158, 11, 0.32) !important;
  transform: translateY(-8px) !important;
}
.style-overlay-gradient {
  background: linear-gradient(to top, rgba(15, 23, 42, 0.94) 0%, rgba(15, 23, 42, 0.55) 45%, rgba(15, 23, 42, 0.15) 75%, transparent 100%) !important;
}
.style-card-item:hover .style-overlay-gradient {
  background: linear-gradient(to top, rgba(15, 23, 42, 0.96) 0%, rgba(15, 23, 42, 0.65) 50%, rgba(15, 23, 42, 0.25) 80%, transparent 100%) !important;
}
.style-card-item h4,
.style-card-item h4[class*="text-"] {
  color: #ffffff !important;
  font-weight: 800 !important;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.6) !important;
}
.style-card-item:hover h4,
.style-card-item:hover h4[class*="text-"] {
  color: ${c.gold} !important;
}
.style-card-item p,
.style-card-item p[class*="text-"] {
  color: rgba(255, 255, 255, 0.92) !important;
  font-weight: 600 !important;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.6) !important;
}

/* Universal protection for AppReviewsSection customer feedback cards */
.review-card-item {
  border: 1.5px solid rgba(245, 158, 11, 0.35) !important;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.18) !important;
}
.review-card-item:hover {
  border-color: ${c.gold} !important;
  box-shadow: 0 20px 45px rgba(245, 158, 11, 0.28) !important;
  transform: translateY(-6px) !important;
}
.review-card-item svg {
  color: ${c.gold} !important;
  fill: ${c.gold} !important;
}
.review-card-item [class*="rounded-full"][class*="w-[42px]"] {
  background: linear-gradient(135deg, ${c.gold2}, ${c.gold}) !important;
  color: #0f172a !important;
  border: 2px solid #ffffff !important;
  box-shadow: 0 4px 12px rgba(245, 158, 11, 0.35) !important;
  font-weight: 800 !important;
}

/* Universal protection for AppWarrantySection shield card and checklists */
.warranty-card-item {
  border: 1.5px solid rgba(245, 158, 11, 0.45) !important;
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.18) !important;
}
.warranty-card-item:hover {
  border-color: ${c.gold} !important;
  box-shadow: 0 25px 50px rgba(245, 158, 11, 0.32) !important;
  transform: translateY(-8px) !important;
}
.warranty-card-item [class*="w-[90px]"][class*="h-[90px]"] {
  background: linear-gradient(135deg, ${c.gold2}, ${c.gold}) !important;
  border: 3px solid #ffffff !important;
  box-shadow: 0 6px 18px rgba(245, 158, 11, 0.35) !important;
}
.warranty-card-item [class*="w-[90px]"][class*="h-[90px]"] svg {
  color: #0f172a !important;
}
.warranty-card-item:hover [class*="w-[90px]"][class*="h-[90px]"] {
  background: #0f172a !important;
  border-color: ${c.gold2} !important;
}
.warranty-card-item:hover [class*="w-[90px]"][class*="h-[90px]"] svg {
  color: #ffffff !important;
}

/* Universal protection for AppFaqSection accordion cards and answers */
.faq-card-item {
  border: 1.5px solid rgba(245, 158, 11, 0.45) !important;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.16) !important;
}
.faq-card-item:hover {
  border-color: ${c.gold} !important;
  box-shadow: 0 18px 40px rgba(245, 158, 11, 0.25) !important;
  transform: translateY(-3px) !important;
}
.faq-card-item p,
.faq-card-item [class*="text-[#5c4333]"] {
  color: #334155 !important;
  font-weight: 700 !important;
  line-height: 1.8 !important;
  opacity: 1 !important;
}

/* Universal protection for AppArticleSection (#article) across all palettes */
#article,
#article[class*="bg-"] {
  background: #ffffff !important;
}
#article h2,
#article h2[class*="text-"],
#article h3,
#article h3[class*="text-"],
#article [class*="text-[#2b1810]"],
#article [class*="text-[#5c3820]"] {
  color: #0f172a !important;
  font-weight: 800 !important;
  text-shadow: none !important;
}
#article p,
#article ul li,
#article [class*="text-[#5c4333]"] {
  color: #334155 !important;
  font-weight: 600 !important;
  line-height: 1.85 !important;
  opacity: 1 !important;
  text-shadow: none !important;
}
#article blockquote,
#article blockquote[class*="bg-"] {
  background: #f8fafc !important;
  border-right: 4px solid ${c.gold} !important;
  color: #0f172a !important;
  font-weight: 800 !important;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05) !important;
}
#article .border-b span,
#article .border-b {
  color: #475569 !important;
  font-weight: 700 !important;
}
#article svg {
  color: ${c.gold} !important;
}

/* Universal protection for AppAreasSection city chips across all palettes */
.area-chip-item {
  border: 1.5px solid rgba(245, 158, 11, 0.45) !important;
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.15) !important;
}
.area-chip-item:hover {
  border-color: ${c.gold} !important;
  box-shadow: 0 14px 30px rgba(245, 158, 11, 0.3) !important;
  transform: translateY(-4px) !important;
}

/* Universal protection for AppCtaSection (.cta-form-card, .cta-info-card) across all palettes */
.cta-form-card,
.cta-info-card {
  border: 1.5px solid rgba(245, 158, 11, 0.45) !important;
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.16) !important;
}
.cta-form-card label,
.cta-info-card h3,
.cta-info-card strong {
  color: #0f172a !important;
  font-weight: 800 !important;
}
.cta-form-card input,
.cta-form-card select,
.cta-form-card textarea {
  background: #f8fafc !important;
  border: 1.5px solid #cbd5e1 !important;
  color: #0f172a !important;
  font-weight: 700 !important;
}
.cta-form-card input:focus,
.cta-form-card select:focus,
.cta-form-card textarea:focus {
  background: #ffffff !important;
  border-color: ${c.gold} !important;
  box-shadow: 0 0 0 3.5px rgba(245, 158, 11, 0.22) !important;
}
.cta-form-card input::placeholder,
.cta-form-card textarea::placeholder {
  color: #64748b !important;
  opacity: 1 !important;
}
.cta-form-card p,
.cta-info-card p,
.cta-info-card span {
  color: #334155 !important;
  font-weight: 700 !important;
  opacity: 1 !important;
}
.cta-info-card [class*="w-11.5"][class*="h-11.5"] {
  background: linear-gradient(135deg, ${c.gold2}, ${c.gold}) !important;
  border: 2px solid #ffffff !important;
  box-shadow: 0 4px 12px rgba(245, 158, 11, 0.35) !important;
}
.cta-info-card [class*="w-11.5"][class*="h-11.5"] svg {
  color: #0f172a !important;
}
.cta-info-card [class*="border-t"] span {
  color: #475569 !important;
  font-weight: 700 !important;
}
.cta-info-card [class*="border-t"] span[class*="text-"] {
  color: ${c.gold} !important;
  font-weight: 800 !important;
}

/* Universal protection for AppCtaBannerSection and AppFooter across all palettes */
.cta-banner-reveal h2,
.cta-banner-reveal h2[class*="text-"],
.site-footer h4,
.site-footer h4[class*="text-"],
.site-footer strong,
.site-footer strong[class*="text-"] {
  color: #0f172a !important;
  font-weight: 800 !important;
  text-shadow: none !important;
}

.cta-banner-reveal p,
.cta-banner-reveal p[class*="text-"],
.site-footer p,
.site-footer p[class*="text-"],
.site-footer p span,
.site-footer li a,
.site-footer [class*="py-6"] span {
  color: #334155 !important;
  font-weight: 700 !important;
  opacity: 1 !important;
  text-shadow: none !important;
}

.site-footer li a:hover {
  color: ${c.gold} !important;
  transform: translateX(-4px) !important;
}

.cta-banner-phone-btn {
  background: #ffffff !important;
  border: 1.5px solid rgba(245, 158, 11, 0.45) !important;
  color: #0f172a !important;
  font-weight: 800 !important;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12) !important;
}
.cta-banner-phone-btn:hover {
  background: #f8fafc !important;
  border-color: ${c.gold} !important;
  color: ${c.gold} !important;
}
.cta-banner-phone-btn svg {
  color: ${c.gold} !important;
}

.site-footer .w-13.h-13 {
  background: linear-gradient(135deg, ${c.gold2}, ${c.gold}) !important;
  border: 2px solid #ffffff !important;
  box-shadow: 0 4px 14px rgba(245, 158, 11, 0.35) !important;
}
.site-footer .w-13.h-13 span {
  color: #0f172a !important;
  font-weight: 800 !important;
}

/* Universal protection for Topbar (.topbar, .marq-mini) across all palettes */
.topbar {
  border-bottom: 1px solid rgba(245, 158, 11, 0.25) !important;
}
.topbar .marq-mini,
.topbar .marq-mini span,
.topbar .marq-mini [class*="text-"],
.topbar a,
.topbar a span,
.topbar a [class*="text-"] {
  font-weight: 800 !important;
  opacity: 1 !important;
  text-shadow: none !important;
}
.topbar .marq-mini [class*="w-1.5"][class*="h-1.5"] {
  background-color: ${c.gold} !important;
  box-shadow: 0 0 6px rgba(245, 158, 11, 0.7) !important;
  transform: scale(1.3) !important;
}
.topbar a:hover,
.topbar a:hover span {
  color: ${c.gold} !important;
}
`

  // 2. Map EVERY hex colour used anywhere on the site (not just the 10 base
  // tokens). We scan the live DOM and always include the base tokens so the
  // full palette is covered even for colours below the fold.
  const usedHexes = new Set<string>(collectUsedHexes())
  for (const key of TOKEN_KEYS) usedHexes.add(originalColors[key].toLowerCase())

  for (const oldHex of usedHexes) {
    // Never re-tint brand greens (WhatsApp button, online status dot).
    if (isGreenish(oldHex)) continue

    const newHex = mapHexToPalette(oldHex, originalColors, c)
    if (oldHex.toLowerCase() === newHex.toLowerCase()) continue

    const rgb = hexToRgb(newHex)

    // Base solid-color rules. NOTE: no :not([class*="/"]) exclusion here —
    // most elements combine a solid color with an opacity class elsewhere in
    // the same class list (e.g. "bg-[#2b1810] border-[#6b4226]/40"), and that
    // exclusion would skip them entirely. The per-opacity rules below are
    // emitted afterwards, so their !important wins by source order for any
    // element that actually uses that color with an opacity suffix.
    css += `
[class*="bg-[${oldHex}]"] { background-color: ${newHex} !important; }
[class*="text-[${oldHex}]"] { color: ${newHex} !important; }
[class*="border-[${oldHex}]"] { border-color: ${newHex} !important; }
[class*="fill-[${oldHex}]"] { fill: ${newHex} !important; }
[class*="stroke-[${oldHex}]"] { stroke: ${newHex} !important; }
[class*="from-[${oldHex}]"] { --tw-gradient-from: ${newHex} !important; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to) !important; }
[class*="via-[${oldHex}]"] { --tw-gradient-via: ${newHex} !important; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-via), var(--tw-gradient-to) !important; }
[class*="to-[${oldHex}]"] { --tw-gradient-to: ${newHex} !important; }
`

    // With opacity values (e.g. bg-[#2b1810]/10)
    for (const op of opacities) {
      const alpha = op / 100
      css += `
[class*="bg-[${oldHex}]/${op}"] { background-color: rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha}) !important; }
[class*="text-[${oldHex}]/${op}"] { color: rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha}) !important; }
[class*="border-[${oldHex}]/${op}"] { border-color: rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha}) !important; }
`
    }
  }

  // Make navigation and header links crisp white (#ffffff) for the new color palettes
  const whiteLinkPalettes = [
    'pearl-white-gold',
    'snow-white-turquoise',
    'ivory-white-coral',
    'sunny-white-lemon',
    'spring-mint-blossom',
    'cheerful-rose-white'
  ]
  if (whiteLinkPalettes.includes(palette.id) || (hexToRgb(c.cream).r + hexToRgb(c.cream).g + hexToRgb(c.cream).b < 450)) {
    css += `
/* Ensure main navigation and header links are crisp white (#ffffff) */
.site-header .main-nav ul li a,
.site-header .main-nav ul li a[class*="text-"],
.mobile-nav-item a,
.mobile-nav-item a[class*="text-"],
.site-header .logo strong,
.site-header .logo-text strong,
.site-header .logo-text strong[class*="text-"] {
  color: #ffffff !important;
}

/* Luxury glowing golden phone call button inside the header */
.site-header .icon-btn-call,
.site-header .icon-btn-call[class*="bg-"],
.site-header .icon-btn-call[class*="text-"] {
  background: linear-gradient(135deg, ${c.gold2}, ${c.gold}) !important;
  color: #0f172a !important;
  border: 1px solid rgba(255, 255, 255, 0.65) !important;
  box-shadow: 0 3px 14px rgba(245, 158, 11, 0.4) !important;
  font-weight: 800 !important;
  letter-spacing: 0.5px !important;
}

.site-header .icon-btn-call svg,
.site-header .icon-btn-call[class*="text-"] svg {
  color: #0f172a !important;
}

.site-header .icon-btn-call:hover,
.site-header .icon-btn-call[class*="bg-"]:hover {
  background: #ffffff !important;
  color: ${c.gold} !important;
  transform: translateY(-2px) !important;
  box-shadow: 0 6px 22px rgba(255, 255, 255, 0.5) !important;
}
.site-header .icon-btn-call:hover svg {
  color: ${c.gold} !important;
}

.site-header .logo-text span,
.site-header .logo-text span[class*="text-"] {
  color: rgba(255, 255, 255, 0.88) !important;
}

.site-header .main-nav ul li a:hover,
.mobile-nav-item a:hover,
.site-header .logo:hover strong {
  color: ${c.gold2} !important;
}

/* Universal Card Readability & Luxury Styling Guarantee for all cards inside sections */
.service-card-item,
.service-card-item[class*="bg-"],
.why-card-item,
.why-card-item[class*="bg-"],
.team-card-item,
.team-card-item[class*="bg-"],
.kit-card-item,
.kit-card-item[class*="bg-"],
.est-card-reveal,
.est-card-reveal[class*="bg-"],
.proc-card-item,
.proc-card-item[class*="bg-"],
.mat-card-item,
.mat-card-item[class*="bg-"],
.sketch-card-item,
.sketch-card-item[class*="bg-"],
.review-card-item,
.review-card-item[class*="bg-"],
.warranty-card-item,
.warranty-card-item[class*="bg-"],
.faq-card-item,
.faq-card-item[class*="bg-"],
.area-chip-item,
.area-chip-item[class*="bg-"],
.cta-form-card,
.cta-form-card[class*="bg-"],
.cta-info-card,
.cta-info-card[class*="bg-"] {
  background: #ffffff !important;
  border: 1.5px solid rgba(245, 158, 11, 0.45) !important;
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.16) !important;
  backdrop-filter: none !important;
}

.topbar,
.topbar[class*="bg-"] {
  background: #ffffff !important;
  border-bottom: 1.5px solid rgba(245, 158, 11, 0.35) !important;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05) !important;
}
.topbar .marq-mini,
.topbar .marq-mini span,
.topbar .marq-mini [class*="text-"],
.topbar a,
.topbar a span,
.topbar a [class*="text-"] {
  color: #0f172a !important;
  font-weight: 800 !important;
}

.service-card-item h3,
.service-card-item h3[class*="text-"],
.service-card-item h4,
.service-card-item h4[class*="text-"],
.why-card-item h3,
.why-card-item h3[class*="text-"],
.why-card-item h4,
.why-card-item h4[class*="text-"],
.team-card-item h3,
.team-card-item h3[class*="text-"],
.team-card-item h4,
.team-card-item h4[class*="text-"],
.kit-card-item h3,
.kit-card-item h3[class*="text-"],
.kit-card-item h4,
.kit-card-item h4[class*="text-"],
.est-card-reveal h3,
.est-card-reveal h3[class*="text-"],
.est-card-reveal h4,
.est-card-reveal h4[class*="text-"],
.proc-card-item h4,
.proc-card-item h4[class*="text-"],
.mat-card-item h4,
.mat-card-item h4[class*="text-"],
.sketch-card-item span,
.sketch-card-item span[class*="text-"],
.review-card-item strong,
.review-card-item strong[class*="text-"],
.warranty-card-item h3,
.warranty-card-item h3[class*="text-"],
.faq-card-item button,
.faq-card-item button[class*="text-"],
.faq-card-item button span,
.faq-card-item button span[class*="text-"],
.area-chip-item span,
.area-chip-item span[class*="text-"] {
  color: #0f172a !important;
  font-weight: 800 !important;
}

.service-card-item p,
.service-card-item p[class*="text-"],
.why-card-item p,
.why-card-item p[class*="text-"],
.team-card-item p,
.team-card-item p[class*="text-"],
.kit-card-item p,
.kit-card-item p[class*="text-"],
.est-card-reveal p,
.est-card-reveal p[class*="text-"],
.proc-card-item p,
.proc-card-item p[class*="text-"],
.mat-card-item p,
.mat-card-item p[class*="text-"],
.review-card-item p,
.review-card-item p[class*="text-"],
.warranty-card-item p,
.warranty-card-item p[class*="text-"],
.faq-card-item p,
.faq-card-item p[class*="text-"],
.faq-card-item [class*="text-[#5c4333]"] {
  color: #334155 !important;
  font-weight: 700 !important;
  line-height: 1.8 !important;
  opacity: 1 !important;
}

.review-card-item span,
.review-card-item span[class*="text-"] {
  color: #64748b !important;
  font-weight: 600 !important;
  opacity: 1 !important;
}

.service-card-item .w-20.h-20,
.why-card-item .w-20.h-20 {
  background: #f8fafc !important;
  border: 1.5px solid #cbd5e1 !important;
}

.service-card-item svg,
.why-card-item svg,
.sketch-card-item svg {
  color: #0f172a !important;
}

.service-card-item:hover,
.why-card-item:hover,
.team-card-item:hover,
.kit-card-item:hover,
.sketch-card-item:hover {
  border-color: ${c.gold2} !important;
  box-shadow: 0 20px 45px rgba(245, 158, 11, 0.28) !important;
  transform: translateY(-6px) !important;
}

.service-card-item:hover h3,
.why-card-item:hover h3 {
  color: ${c.gold} !important;
}

.service-card-item:hover .w-20.h-20,
.why-card-item:hover .w-20.h-20 {
  background: ${c.gold2} !important;
  border-color: ${c.gold} !important;
}

.service-card-item:hover svg,
.why-card-item:hover svg,
.sketch-card-item:hover svg {
  color: ${c.gold} !important;
}

/* Completely disable and hide gradient overlays inside all cards in light/bright themes so cards stay pure, crisp, elegant white on hover */
.why-card-item .absolute.inset-0,
.service-card-item .absolute.inset-0,
.team-card-item .absolute.inset-0,
.kit-card-item .absolute.inset-0,
.proc-card-item .absolute.inset-0,
.mat-card-item .absolute.inset-0 {
  display: none !important;
  opacity: 0 !important;
}

.why-card-item .font-display.text-4xl,
.why-card-item [class*="text-4xl"] {
  color: ${c.gold} !important;
  text-shadow: 0 2px 8px rgba(245, 158, 11, 0.25) !important;
}
.why-card-item:hover .font-display.text-4xl,
.why-card-item:hover [class*="text-4xl"] {
  color: ${c.gold2} !important;
}

.proc-card-item:hover,
.mat-card-item:hover,
.why-card-item:hover,
.service-card-item:hover,
.team-card-item:hover,
.kit-card-item:hover,
.sketch-card-item:hover,
.review-card-item:hover,
.warranty-card-item:hover,
.faq-card-item:hover,
.area-chip-item:hover {
  background: #ffffff !important;
  border-color: ${c.gold} !important;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.12) !important;
  transform: translateY(-3px) !important;
}
.proc-card-item:hover h4,
.mat-card-item:hover h4,
.why-card-item:hover h3,
.why-card-item:hover h4,
.service-card-item:hover h3,
.service-card-item:hover h4,
.sketch-card-item:hover span,
.sketch-card-item:hover svg,
.review-card-item:hover strong,
.warranty-card-item:hover h3,
.faq-card-item:hover button,
.faq-card-item:hover button span,
.area-chip-item:hover span,
.area-chip-item:hover svg {
  color: ${c.gold} !important;
}
.faq-card-item svg,
.area-chip-item svg {
  color: ${c.gold} !important;
}
.review-card-item svg {
  color: ${c.gold} !important;
  fill: ${c.gold} !important;
}
.review-card-item [class*="rounded-full"][class*="w-[42px]"] {
  background: linear-gradient(135deg, ${c.gold2}, ${c.gold}) !important;
  color: #0f172a !important;
  border: 2px solid #ffffff !important;
  box-shadow: 0 4px 12px rgba(245, 158, 11, 0.35) !important;
  font-weight: 800 !important;
}
.warranty-card-item [class*="w-[90px]"][class*="h-[90px]"] {
  background: linear-gradient(135deg, ${c.gold2}, ${c.gold}) !important;
  border: 3px solid #ffffff !important;
  box-shadow: 0 6px 18px rgba(245, 158, 11, 0.35) !important;
}
.warranty-card-item [class*="w-[90px]"][class*="h-[90px]"] svg {
  color: #0f172a !important;
}
.warranty-card-item:hover [class*="w-[90px]"][class*="h-[90px]"] {
  background: #0f172a !important;
  border-color: ${c.gold2} !important;
}
.warranty-card-item:hover [class*="w-[90px]"][class*="h-[90px]"] svg {
  color: #ffffff !important;
}
#warranty h2 {
  color: #ffffff !important;
  font-weight: 800 !important;
}
#warranty .warranty-list strong {
  color: ${c.gold} !important;
  font-weight: 800 !important;
}
#warranty .warranty-list p {
  color: rgba(255, 255, 255, 0.92) !important;
  font-weight: 600 !important;
}
#warranty .warranty-list svg {
  color: ${c.gold2} !important;
}
.proc-card-item .proc-circle {
  background: linear-gradient(135deg, ${c.gold2}, ${c.gold}) !important;
  color: #0f172a !important;
  border: 3.5px solid #ffffff !important;
  box-shadow: 0 4px 15px rgba(245, 158, 11, 0.4) !important;
}
.proc-card-item:hover .proc-circle {
  background: #0f172a !important;
  color: #ffffff !important;
  border-color: ${c.gold2} !important;
}

.mat-card-item .font-display[class*="text-2xl"],
.mat-card-item [class*="text-[#e3b75e]"] {
  color: ${c.gold} !important;
  font-weight: 800 !important;
  letter-spacing: 1px !important;
}

.mat-card-item .h-2\\.5,
.mat-card-item [class*="overflow-hidden"][class*="rounded-full"] {
  background: #f1f5f9 !important;
  border: 1px solid #cbd5e1 !important;
}

.mat-card-item .mat-bar-inner {
  background: linear-gradient(90deg, ${c.gold2}, ${c.gold}) !important;
}

/* Ensure the style cards (AppStylesSection) display their full-height photos clearly with a protected, sleek bottom shadow overlay and luxury gold borders across all light themes */
.style-card-item {
  border: 2px solid rgba(245, 158, 11, 0.4) !important;
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.22) !important;
}
.style-card-item:hover {
  border-color: ${c.gold} !important;
  box-shadow: 0 25px 50px rgba(245, 158, 11, 0.32) !important;
  transform: translateY(-8px) !important;
}
.style-overlay-gradient {
  background: linear-gradient(to top, rgba(15, 23, 42, 0.94) 0%, rgba(15, 23, 42, 0.55) 45%, rgba(15, 23, 42, 0.15) 75%, transparent 100%) !important;
}
.style-card-item:hover .style-overlay-gradient {
  background: linear-gradient(to top, rgba(15, 23, 42, 0.96) 0%, rgba(15, 23, 42, 0.65) 50%, rgba(15, 23, 42, 0.25) 80%, transparent 100%) !important;
}
.style-card-item h4,
.style-card-item h4[class*="text-"] {
  color: #ffffff !important;
  font-weight: 800 !important;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.6) !important;
}
.style-card-item:hover h4,
.style-card-item:hover h4[class*="text-"] {
  color: ${c.gold} !important;
}
.style-card-item p,
.style-card-item p[class*="text-"] {
  color: rgba(255, 255, 255, 0.92) !important;
  font-weight: 600 !important;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.6) !important;
}
`
  }

  if (palette.id === 'pearl-white-gold') {
    css += `
/* Ensure the hero background image is crystal clear and glowing with luxury in Pearl White & Radiant Gold */
#hero .hero-pearl-overlay,
#hero .absolute.inset-0.z-10 {
  background: linear-gradient(100deg, rgba(248, 250, 252, 0.85) 10%, rgba(248, 250, 252, 0.58) 50%, rgba(248, 250, 252, 0.28) 100%) !important;
}

/* Make all text, description, and tags pop with high contrast and crystal clarity over the kitchen background */
#hero .hero-eyebrow span {
  background: rgba(255, 255, 255, 0.95) !important;
  border-color: rgba(245, 158, 11, 0.6) !important;
  color: #b45309 !important;
  font-weight: 700 !important;
  box-shadow: 0 4px 15px rgba(245, 158, 11, 0.15) !important;
}

#hero .hero-title,
#hero .hero-title[class*="text-"] {
  color: #0f172a !important;
  text-shadow: 0 2px 15px rgba(255, 255, 255, 0.95) !important;
}

#hero .hero-title em,
#hero .hero-title em[class*="text-"] {
  color: #d97706 !important;
  text-shadow: 0 2px 15px rgba(255, 255, 255, 0.95) !important;
}

#hero .hero-desc,
#hero .hero-desc[class*="text-"],
#hero p.hero-desc {
  color: #0f172a !important;
  font-weight: 700 !important;
  background: rgba(255, 255, 255, 0.88) !important;
  backdrop-filter: blur(12px) !important;
  padding: 1.25rem 1.75rem !important;
  border-radius: 1.25rem !important;
  border: 1.5px solid rgba(255, 255, 255, 0.95) !important;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.1) !important;
  line-height: 1.85 !important;
}

#hero .hero-tags-group span,
#hero .hero-tags-group span[class*="text-"] {
  background: rgba(255, 255, 255, 0.92) !important;
  backdrop-filter: blur(10px) !important;
  border: 1.5px solid #cbd5e1 !important;
  color: #0f172a !important;
  font-weight: 700 !important;
  box-shadow: 0 4px 14px rgba(15, 23, 42, 0.08) !important;
  padding: 0.65rem 1.35rem !important;
}

#hero .hero-tags-group span:hover {
  background: #ffffff !important;
  border-color: #f59e0b !important;
  color: #d97706 !important;
  transform: translateY(-2px) !important;
}

#hero .scroll-cue,
#hero .scroll-cue[class*="text-"] {
  color: #0f172a !important;
  font-weight: 700 !important;
  text-shadow: 0 1px 6px rgba(255, 255, 255, 0.95) !important;
}
#hero .scroll-cue .border-2 {
  border-color: #0f172a !important;
}
`
  }

  return css
}

export function useThemePalette() {
  function applyPalette(id: string) {
    const target = palettes.find(p => p.id === id) || palettes.find(p => p.id === 'pearl-white-gold') || palettes[0]
    activePaletteId.value = target.id

    if (typeof window !== 'undefined') {
      localStorage.setItem('jory_active_palette', target.id)

      let styleEl = document.getElementById('jory-dynamic-theme-style')
      if (!styleEl) {
        styleEl = document.createElement('style')
        styleEl.id = 'jory-dynamic-theme-style'
        document.head.appendChild(styleEl)
      }
      styleEl.textContent = generatePaletteCSS(target)
    }
  }

  function toggleSwitcher(open?: boolean) {
    if (typeof open === 'boolean') {
      isSwitcherOpen.value = open
    } else {
      isSwitcherOpen.value = !isSwitcherOpen.value
    }
  }

  onMounted(() => {
    if (typeof window !== 'undefined') {
      const savedId = localStorage.getItem('jory_active_palette')
      if (savedId && palettes.some(p => p.id === savedId)) {
        applyPalette(savedId)
      } else {
        applyPalette('pearl-white-gold')
      }
    }
  })

  watch(activePaletteId, (newId) => {
    applyPalette(newId)
  })

  return {
    palettes,
    activePaletteId,
    isSwitcherOpen,
    applyPalette,
    toggleSwitcher
  }
}
