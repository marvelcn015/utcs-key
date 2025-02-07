import { ref } from 'vue'

const mockKeyRecords = [
  {
    id: 'K001',
    keyNumber: 'R521',
    borrower: {
      uid: '109598001',
      name: '王小明',
      type: 'student',
    },
    borrowTime: '2025-02-03T09:30:00',
    returnTime: '2025-02-04T09:30:00',
  },
  {
    id: 'K001',
    keyNumber: 'R521',
    borrower: {
      uid: '109598001',
      name: '王大名',
      type: 'teacher',
    },
    borrowTime: '2025-02-04T09:30:00',
    returnTime: '2025-02-04T10:30:00',
  },
  {
    id: 'K002',
    keyNumber: 'R522',
    borrower: {
      uid: 'T123456',
      name: '張教授',
      type: 'teacher',
    },
    borrowTime: '2025-02-03T08:00:00',
  },
  {
    id: 'K003',
    keyNumber: 'R523',
    borrower: {
      uid: 'EXT001',
      name: '李訪問',
      type: 'external',
    },
    borrowTime: '2025-02-03T13:00:00',
    returnTime: '2025-02-04T13:00:00',
  },
  {
    id: 'K004',
    keyNumber: 'R524',
    borrower: {
      uid: '109598002',
      name: '陳小華',
      type: 'student',
    },
    borrowTime: '2025-02-03T14:00:00',
  },
  {
    id: 'K005',
    keyNumber: 'R525',
    borrower: {
      uid: 'A987654',
      name: '林助教',
      type: 'staff',
    },
    borrowTime: '2025-02-03T10:00:00',
  },
]

const externalUserCache = {
  EXT001: {
    institution: '台大電機系',
    email: 'ext001@ntu.edu.tw',
    phone: '02-3366-3366',
  },
}

export function useKeyManagement() {
  const keyRecords = ref([])
  const loading = ref(false)
  const error = ref(null)

  const formatDateTime = (dateTimeStr) => {
    return new Date(dateTimeStr).toLocaleString('zh-TW', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    })
  }

  const fetchKeyRecords = async () => {
    loading.value = true
    error.value = null

    try {
      await new Promise((resolve) => setTimeout(resolve, 500))
      keyRecords.value = mockKeyRecords.map((record) => ({
        ...record,
        formattedBorrowTime: formatDateTime(record.borrowTime),
        formattedReturnTime: record.returnTime ? formatDateTime(record.returnTime) : '尚未歸還',
      }))
    } catch (e) {
      error.value = '無法載入鑰匙借用記錄'
      console.error('Error fetching key records:', e)
    } finally {
      loading.value = false
    }
  }

  const fetchKeyDetails = async (keyId) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 300))
      return keyRecords.value.find((r) => r.id === keyId)
    } catch (e) {
      console.error('Error fetching key details:', e)
      throw new Error('無法載入鑰匙詳細信息')
    }
  }

  const fetchExternalUserInfo = async (userId) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 300))
      const userInfo = externalUserCache[userId]
      if (!userInfo) {
        throw new Error('找不到外部使用者資訊')
      }
      return userInfo
    } catch (e) {
      console.error('Error fetching external user info:', e)
      throw new Error('無法載入外部使用者資訊')
    }
  }

  return {
    keyRecords,
    loading,
    error,
    fetchKeyRecords,
    fetchKeyDetails,
    fetchExternalUserInfo,
  }
}
