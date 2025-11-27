import { useState, onMounted } from '#imports'

export function useCountdown(maxDays = 3) {
  const remaining = useState('countdownRemaining', () => maxDays * 86400)
  const started = useState('countdownStarted', () => false)

  onMounted(() => {
    if (started.value) return
    started.value = true

    setInterval(() => {
      if (remaining.value > 0) remaining.value -= 1
    }, 1000)
  })

  return { remaining }
}
