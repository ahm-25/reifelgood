import { ref, onMounted, onUnmounted } from 'vue'

export function useMouseGlow() {
  const cardRef = ref<HTMLElement | null>(null)
  const mouseX = ref(0)
  const mouseY = ref(0)
  const isHovered = ref(false)

  const handleMouseMove = (e: MouseEvent) => {
    if (!cardRef.value) return
    const rect = cardRef.value.getBoundingClientRect()
    mouseX.value = e.clientX - rect.left
    mouseY.value = e.clientY - rect.top
  }

  const handleMouseEnter = () => {
    isHovered.value = true
  }

  const handleMouseLeave = () => {
    isHovered.value = false
  }

  return {
    cardRef,
    mouseX,
    mouseY,
    isHovered,
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave
  }
}
