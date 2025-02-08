<script setup>
import { ref, onMounted } from 'vue'
import { useKeyManagement } from '@/mock/getKeyRecords'
import NavigationBar from '@/components/NavigationBar.vue'

const { keyRecords, loading, error, fetchKeyRecords } = useKeyManagement()

const userTypeMap = {
  student: '學生',
  teacher: '教師',
  staff: '職員',
  external: '外部人員',
}

const getUserInfo = (borrower) => {
  if (borrower.type === 'external') {
    return {
      name: borrower.userName,
    }
  }
  return {
    name: `${borrower.schoolUid}`,
  }
}

onMounted(async () => {
  await fetchKeyRecords()
})
</script>

<template>
  <NavigationBar />

  <div class="container py-4">
    <!-- Header -->
    <div class="row mb-4">
      <div class="col">
        <h3 class="fw-bold mb-2">當前借用狀態</h3>
      </div>
    </div>

    <!-- Error Alert -->
    <div v-if="error" class="alert alert-danger d-flex align-items-center" role="alert">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
        viewBox="0 0 16 16"
      >
        <path
          d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
        />
      </svg>
      <div>{{ error }}</div>
    </div>

    <!-- Loading State -->
    <div v-if="loading" class="d-flex justify-content-center py-5">
      <div class="spinner-border text-dark" role="status">
        <span class="visually-hidden">載入中...</span>
      </div>
    </div>

    <!-- Key Records Table -->
    <div v-else class="card shadow-sm">
      <div class="table-responsive">
        <table class="table table-hover align-middle mb-0">
          <thead class="table-light">
            <tr>
              <th class="border-0 ps-4">借用編號</th>
              <th class="border-0">鑰匙編號</th>
              <th class="border-0">借用人</th>
              <th class="border-0">借用人類型</th>
              <th class="border-0 pe-4">借用時間</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="record in keyRecords" :key="record.usageId">
              <td class="ps-4">{{ record.usageId }}</td>
              <td>{{ record.keyId }}</td>
              <td>
                {{ getUserInfo(record.borrower).name }}
              </td>
              <td>
                <span
                  class="badge"
                  :class="record.borrower.type === 'external' ? 'bg-warning' : 'bg-secondary'"
                >
                  {{ userTypeMap[record.borrower.type] }}
                </span>
              </td>
              <td class="pe-4">{{ record.formattedBorrowTime }}</td>
            </tr>
            <tr v-if="keyRecords.length === 0">
              <td colspan="5" class="text-center py-4 text-muted">目前沒有進行中的借用記錄</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>
.table-hover tbody tr:hover {
  background-color: rgba(0, 0, 0, 0.025);
}

.table td,
.table th {
  padding: 1rem;
  vertical-align: middle;
}

.badge {
  font-weight: 500;
  padding: 0.5em 0.75em;
}

/* Responsive styles */
@media (max-width: 768px) {
  .table {
    font-size: 0.875rem;
  }

  .badge {
    font-size: 0.75rem;
  }
}
</style>
