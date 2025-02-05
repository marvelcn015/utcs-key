import { ref } from 'vue'

const formatter = new Intl.DateTimeFormat('zh-TW', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false,
})

export const useTimeManager = () => {
  const ts = ref('')
  const tsshow = ref('')
  let timeInterval = null

  const flushTime = () => {
    const now = new Date()
    const formattedTime = formatter.format(now).replace(/\//g, '-')
    ts.value = formattedTime
    tsshow.value = formattedTime
  }

  const startTimer = () => {
    flushTime()
    timeInterval = setInterval(flushTime, 1000)
  }

  const stopTimer = () => {
    if (timeInterval) {
      clearInterval(timeInterval)
    }
  }

  return {
    ts,
    tsshow,
    startTimer,
    stopTimer,
  }
}
