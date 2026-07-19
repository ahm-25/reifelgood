<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'primary' | 'secondary' | 'glass' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  type: 'button'
})

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'px-4 py-2 text-xs rounded-lg gap-1.5'
    case 'lg':
      return 'px-8 py-4 text-base rounded-2xl gap-3'
    case 'md':
    default:
      return 'px-6 py-3 text-sm rounded-xl gap-2'
  }
})

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'secondary':
      return 'bg-[#3a2417] text-[#ecd9bd] hover:bg-[#6b4226] hover:text-white border border-[#c8932b]/30 shadow-sm transition-all duration-300'
    case 'glass':
      return 'bg-[#3a2417]/60 hover:bg-[#6b4226]/80 text-[#f4e8d8] backdrop-blur-xl border border-[#c8932b]/35 shadow-luxury-medium transition-all duration-300'
    case 'outline':
      return 'border-2 border-[#ecd9bd]/50 text-[#f4e8d8] hover:bg-[#3a2417]/50 hover:border-[#e3b75e] transition-all duration-300'
    case 'primary':
    default:
      return 'bg-gradient-to-r from-[#e3b75e] via-[#c8932b] to-[#c08a52] text-[#2b1810] font-bold shadow-lg shadow-[#c8932b]/25 hover:shadow-xl hover:shadow-[#c8932b]/40 hover:-translate-y-0.5 border border-[#ecd9bd]/40 transition-all duration-300 active:translate-y-0'
  }
})
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    :type="!href ? type : undefined"
    :disabled="disabled"
    class="inline-flex items-center justify-center font-display tracking-tight font-bold select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8932b] focus-visible:ring-offset-2 focus-visible:ring-offset-[#2b1810] disabled:opacity-50 disabled:pointer-events-none transition-transform"
    :class="[sizeClasses, variantClasses]"
  >
    <slot name="prefix" />
    <slot />
    <slot name="suffix" />
  </component>
</template>
