import { onMounted, onUnmounted, ref } from 'vue'
import gsap from 'gsap'

export function useGsap() {
  const ctx = ref<gsap.Context | null>(null)

  const createTimeline = (vars?: gsap.TimelineVars) => {
    return gsap.timeline(vars)
  }

  const registerAnimation = (callback: (g: typeof gsap) => void, scope?: Element | string | null) => {
    onMounted(() => {
      ctx.value = gsap.context(() => {
        callback(gsap)
      }, scope || undefined)
    })

    onUnmounted(() => {
      ctx.value?.revert()
    })
  }

  return {
    gsap,
    createTimeline,
    registerAnimation
  }
}
