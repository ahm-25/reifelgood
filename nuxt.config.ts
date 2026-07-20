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
      title: 'مطابخ جوري للمطابخ والخزائن والمجالس والستائر — جودة لا تقبل المساومة',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'نصمم وننفذ جميع أنواع المطابخ الخشبية والاكريليك والبولي لاك، والخزائن بكل أشكالها، والمجالس العربية والمودرن، والستائر الفاخرة. خامات أصلية، تفصيل بالمقاس، ومعاينة وتصميم مجاني في موقعك.' },
        { name: 'theme-color', content: '#2b1810' },
        { property: 'og:title', content: 'مطابخ جوري للمطابخ والخزائن والمجالس والستائر' },
        { property: 'og:description', content: 'نصمم وننفذ جميع أنواع المطابخ الخشبية والاكريليك والبولي لاك، والخزائن بكل أشكالها، والمجالس العربية والمودرن، والستائر الفاخرة.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: '/og-preview.png' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Aref+Ruqaa:wght@400;700&family=Cairo:wght@300;400;500;600;700;800;900&display=swap' }
      ]
    }
  }
})
