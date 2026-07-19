import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  vite: {
    plugins: [
      tailwindcss()
    ]
  },

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      htmlAttrs: {
        lang: 'ar',
        dir: 'rtl',
        class: 'dark'
      },
      title: 'أثير — نظام التشغيل والبنية التحتية للهندسة الحديثة',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'منصة أثير تجمع بين مسارات الذكاء الاصطناعي الذاتية، ومراقبة الأداء الفائقة بلغة WebAssembly على الحافة السحابية، وحماية التشفير الكمي في واجهة تحكم واحدة.' },
        { name: 'theme-color', content: '#2b1810' },
        { property: 'og:title', content: 'أثير — نظام التشغيل والبنية التحتية للهندسة الحديثة' },
        { property: 'og:description', content: 'منصة أثير تجمع بين مسارات الذكاء الاصطناعي الذاتية، ومراقبة الأداء الفائقة على الحافة السحابية.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: '/og-preview.png' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Aref+Ruqaa:wght@400;700&family=Cairo:wght@300;400;500;600;700;800;900&display=swap' }
      ]
    }
  }
})
