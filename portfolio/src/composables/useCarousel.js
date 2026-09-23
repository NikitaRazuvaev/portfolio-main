import { ref, computed, onMounted, onUnmounted } from 'vue'

export function useCarousel(total, options = {}) {
  const { autoDelay = 6000 } = options

  const current = ref(0)
  const progress = ref(0)

  const isFirst = computed(() => current.value === 0)
  const isLast  = computed(() => current.value === total - 1)

  let autoTimer = null
  let progressRaf = null
  let progressStart = 0
  let paused = false

  function updateProgress() {
    const elapsed = Date.now() - progressStart
    const pct = Math.min(100, (elapsed / autoDelay) * 100)
    progress.value = pct
    if (pct < 100) progressRaf = requestAnimationFrame(updateProgress)
  }

  function next() {
    current.value = isLast.value ? 0 : current.value + 1
    restartAuto()
  }
  function prev() {
    current.value = isFirst.value ? total - 1 : current.value - 1
    restartAuto()
  }
  function goTo(i) {
    current.value = Math.max(0, Math.min(total - 1, i))
    restartAuto()
  }

  function restartAuto() {
    if (!autoDelay) return
    cancelAnimationFrame(progressRaf)
    clearTimeout(autoTimer)
    progressStart = Date.now()
    progress.value = 0
    progressRaf = requestAnimationFrame(updateProgress)
    autoTimer = setTimeout(() => { if (!paused) next() }, autoDelay)
  }

  function pause()  { paused = true;  clearTimeout(autoTimer); cancelAnimationFrame(progressRaf) }
  function resume() { paused = false; restartAuto() }

  function handleVisibility() {
    document.hidden ? pause() : resume()
  }

  onMounted(() => {
    restartAuto()
    document.addEventListener('visibilitychange', handleVisibility)
  })

  onUnmounted(() => {
    clearTimeout(autoTimer)
    cancelAnimationFrame(progressRaf)
    document.removeEventListener('visibilitychange', handleVisibility)
  })

  return { current, progress, isFirst, isLast, next, prev, goTo, pause, resume }
}