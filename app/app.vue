<script setup lang="ts">
import AppNavbar from '~/components/layout/AppNavbar.vue'
import AppFooter from '~/components/layout/AppFooter.vue'
import AmbientBackground from '~/components/layout/AmbientBackground.vue'
import AppFloatingButtons from '~/components/layout/AppFloatingButtons.vue'
import AppLoadingScreen from '~/components/layout/AppLoadingScreen.vue'
import AppThemePaletteSwitcher from '~/components/common/AppThemePaletteSwitcher.vue'
</script>

<template>
  <div class="min-h-screen bg-[#2b1810] text-[#f4e8d8] antialiased font-sans flex flex-col relative selection:bg-[#c8932b]/35 selection:text-white" dir="rtl">
    <!-- Global Luxury Loading Screen Overlay -->
    <AppLoadingScreen />

    <!-- Accessible Skip to Main Content Link -->
    <a 
      href="#main-content" 
      class="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-4 focus:right-4 px-4 py-2 bg-[#c8932b] text-[#2b1810] font-bold rounded-lg shadow-xl"
    >
      تخطي إلى المحتوى الرئيسي
    </a>

    <!-- Floating Soft Glass Ambient Background -->
    <AmbientBackground />

    <!-- Sticky Navigation Bar -->
    <AppNavbar />

    <!-- Main Content Area -->
    <div id="main-content" class="flex-1">
      <NuxtPage />
    </div>

    <!-- Floating Contact Corner Buttons (WhatsApp & Phone) -->
    <AppFloatingButtons />

    <!-- Interactive Color Palette Switcher for Ladies/Luxury Themes -->
    <AppThemePaletteSwitcher />

    <!-- Minimal Apple-Inspired Footer -->
    <AppFooter />
  </div>
</template>

<style>
/* Global resets & smoothness */
html, body {
  margin: 0;
  padding: 0;
  background-color: #2b1810;
  color: #f4e8d8;
  direction: rtl;
  text-align: right;
}
</style>
