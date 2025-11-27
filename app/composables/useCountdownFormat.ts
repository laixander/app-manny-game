export function useCountdownFormat(remaining: { value: any }) {
  return computed(() => {
    const total = remaining.value
    if (total <= 0) return "00:00:00"

    const hours = Math.floor(total / 3600)
    const minutes = Math.floor((total % 3600) / 60)
    const seconds = total % 60

    const pad = (n: number) => String(n).padStart(2, "0")

    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
  })
}
