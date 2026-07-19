<script setup lang="ts">
import HeroSection from '~/components/sections/HeroSection.vue'
import SocialProof from '~/components/sections/SocialProof.vue'
import FeaturesBento from '~/components/sections/FeaturesBento.vue'
import InteractiveDemo from '~/components/sections/InteractiveDemo.vue'
import MetricsSection from '~/components/sections/MetricsSection.vue'
import PricingSection from '~/components/sections/PricingSection.vue'
import Testimonials from '~/components/sections/Testimonials.vue'
import FaqSection from '~/components/sections/FaqSection.vue'
import CtaSection from '~/components/sections/CtaSection.vue'

useSeoMeta({
  title: 'AETHER — The Operating System for Modern Engineering',
  description: 'Uniting autonomous AI workflows, sub-millisecond edge telemetry, and quantum-safe zero-trust security into a single ultra-fast keyboard control plane.',
  ogTitle: 'AETHER — The Operating System for Modern Engineering',
  ogDescription: 'Experience the next evolution of autonomous cloud computing and edge intelligence.',
  ogImage: '/og-preview.png',
  twitterCard: 'summary_large_image',
  twitterTitle: 'AETHER — Autonomous Edge Intelligence',
  twitterDescription: 'Sub-millisecond Wasm telemetry and self-healing AI models.',
})
</script>

<template>
  <main class="relative z-10 selection:bg-[#c8932b]/35 selection:text-white">
    <HeroSection />
    <SocialProof />
    <FeaturesBento />
    <InteractiveDemo />
    <MetricsSection />
    <PricingSection />
    <Testimonials />
    <FaqSection />
    <CtaSection />
  </main>
</template>
