<script setup lang="ts">
interface Props {
  label: string
  variant?: 'gold' | 'cocoa' | 'neutral' | 'dark'
  size?: 'sm' | 'md'
}

withDefaults(defineProps<Props>(), {
  variant: 'gold',
  size: 'md'
})
</script>

<template>
  <span 
    class="inline-flex items-center gap-1.5 font-mono uppercase tracking-widest font-semibold rounded-full border shadow-sm select-none"
    :class="[
      size === 'sm' ? 'px-2.5 py-0.5 text-[10px]' : 'px-3.5 py-1 text-xs',
      variant === 'gold' ? 'bg-[#c8932b]/15 border-[#c8932b]/35 text-[#e3b75e]' : '',
      variant === 'cocoa' ? 'bg-[#6b4226]/40 border-[#8a5a32]/50 text-[#ecd9bd]' : '',
      variant === 'neutral' ? 'bg-[#3a2417]/60 border-[#c8932b]/20 text-[#ecd9bd]' : '',
      variant === 'dark' ? 'bg-[#2b1810]/80 border-[#c8932b]/30 text-[#f4e8d8]' : ''
    ]"
  >
    <span class="w-1.5 h-1.5 rounded-full bg-[#e3b75e] animate-pulse" />
    {{ label }}
  </span>
</template>
