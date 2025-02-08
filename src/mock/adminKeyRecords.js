import { ref } from 'vue'

const mockKeyRecords = [
  {
    usageId: 'K001',
    keyId: 'G508',
    borrower: {
      type: 'student',
      schoolUid: 'U11216000',
    },
    borrowTime: '2025-02-08 09:07:27',
  },
  {
    usageId: 'K002',
    keyId: 'G313',
    borrower: {
      type: 'teacher',
      schoolUid: 'T123456',
    },
    borrowTime: '2025-02-08 09:07:27',
  },
  {
    usageId: 'K003',
    keyId: 'G314',
    borrower: {
      type: 'external',
      userName: '李訪問',
      affiliation: '臺大電機系',
      phone: '0912345678',
      email: '123456@gmail.com',
    },
    borrowTime: '2025-02-08 09:07:27',
  },
  {
    usageId: 'K004',
    keyId: 'G316',
    borrower: {
      type: 'student',
      schoolUid: 'U11316000',
    },
    borrowTime: '2025-02-08 09:07:27',
    returnTime: '2025-02-08 12:07:27',
  },
]

const dateTimeFormatter = new Intl.DateTimeFormat('zh-TW', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
})

export const formatDateTime = (dateTimeStr) => {
  if (!dateTimeStr) return ''
  const date = new Date(dateTimeStr)
  return dateTimeFormatter.format(date).replace(/\//g, '-')
}

export function useKeyManagement() {
  const keyRecords = ref([])
  const loading = ref(false)
  const error = ref(null)

  const fetchKeyRecords = async () => {
    loading.value = true
    error.value = null

    try {
      await new Promise((resolve) => setTimeout(resolve, 500))
      keyRecords.value = mockKeyRecords.map((record) => ({
        ...record,
        formattedBorrowTime: formatDateTime(record.borrowTime),
        formattedReturnTime: formatDateTime(record.returnTime),
      }))
    } catch (e) {
      error.value = '無法載入鑰匙借用記錄'
      console.error('Error fetching key records:', e)
    } finally {
      loading.value = false
    }
  }

  return {
    keyRecords,
    loading,
    error,
    fetchKeyRecords,
  }
}
