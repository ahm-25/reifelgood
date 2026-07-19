<script setup lang="ts">
import HeroSection from '~/components/sections/HeroSection.vue'
import AppTicker from '~/components/sections/AppTicker.vue'
import AppAboutSection from '~/components/sections/AppAboutSection.vue'
import AppPortfolioSection from '~/components/sections/AppPortfolioSection.vue'
import AppStatsSection from '~/components/sections/AppStatsSection.vue'
import AppServicesSection from '~/components/sections/AppServicesSection.vue'
import AppKitchensSection from '~/components/sections/AppKitchensSection.vue'
import AppCategoriesSection from '~/components/sections/AppCategoriesSection.vue'
import AppWhyUsSection from '~/components/sections/AppWhyUsSection.vue'
import AppTeamSection from '~/components/sections/AppTeamSection.vue'
import AppProcessSection from '~/components/sections/AppProcessSection.vue'
import AppMaterialsSection from '~/components/sections/AppMaterialsSection.vue'
import AppSketchSection from '~/components/sections/AppSketchSection.vue'
import AppStylesSection from '~/components/sections/AppStylesSection.vue'
import AppReviewsSection from '~/components/sections/AppReviewsSection.vue'
import AppWarrantySection from '~/components/sections/AppWarrantySection.vue'
import AppEstimatorSection from '~/components/sections/AppEstimatorSection.vue'
import FaqSection from '~/components/sections/FaqSection.vue'
import AppArticleSection from '~/components/sections/AppArticleSection.vue'
import AppAreasSection from '~/components/sections/AppAreasSection.vue'
import CtaSection from '~/components/sections/CtaSection.vue'
import AppMapSection from '~/components/sections/AppMapSection.vue'
import AppCtaBannerSection from '~/components/sections/AppCtaBannerSection.vue'

useSeoMeta({
  title: 'مطابخ جوري للمطابخ والخزائن والمجالس والستائر — جودة لا تقبل المساومة',
  description: 'نصمم وننفذ جميع أنواع المطابخ الخشبية والاكريليك والبولي لاك، والخزائن بكل أشكالها، والمجالس العربية والمودرن، والستائر الفاخرة. خامات أصلية، تفصيل بالمقاس، ومعاينة وتصميم مجاني في موقعك.',
  ogTitle: 'مطابخ جوري للمطابخ والخزائن والمجالس والستائر',
  ogDescription: 'نصمم وننفذ جميع أنواع المطابخ الخشبية والاكريليك والبولي لاك، والخزائن بكل أشكالها، والمجالس العربية والمودرن، والستائر الفاخرة.',
  ogImage: '/og-preview.png',
  twitterCard: 'summary_large_image',
  twitterTitle: 'مطابخ جوري للمطابخ والخزائن والمجالس والستائر',
  twitterDescription: 'تصميم وتنفيذ وتركيب — ضمان حتى 10 سنوات ومعاينة وتصميم مجاني في موقعك.',
})
</script>

<template>
  <main class="relative z-10 selection:bg-[#c8932b]/35 selection:text-white">
    <HeroSection />
    <AppTicker />
    <AppAboutSection />
    <AppPortfolioSection />
    <AppStatsSection />
    <AppServicesSection />
    <AppKitchensSection />
    <AppCategoriesSection />
    <AppWhyUsSection />
    <AppTeamSection />
    <AppProcessSection />
    <AppMaterialsSection />
    <AppSketchSection />
    <AppStylesSection />
    <AppReviewsSection />
    <AppWarrantySection />
    <AppEstimatorSection />
    <FaqSection />
    <AppArticleSection />
    <AppAreasSection />
    <CtaSection />
    <AppMapSection />
    <AppCtaBannerSection />
  </main>
</template>
