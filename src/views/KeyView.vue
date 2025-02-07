<script setup>
import { ref, onMounted } from 'vue'
import { useKeyManagement } from '@/mock/useKeyManagement'
import NavigationBar from '@/components/NavigationBar.vue'

const { keyRecords, loading, error, fetchKeyRecords, fetchExternalUserInfo } = useKeyManagement()

// External user modal state management
const externalUserModal = ref({
  isVisible: false,
  isLoading: false,
  error: null,
  data: null,
})

const userTypeMap = {
  student: '學生',
  teacher: '教師',
  staff: '職員',
  external: '外部人員',
}

const getUserTypeName = (type) => userTypeMap[type] || type

// Modal management
const showExternalUserInfo = async (userId) => {
  externalUserModal.value = {
    isVisible: true,
    isLoading: true,
    error: null,
    data: null,
  }

  try {
    const userInfo = await fetchExternalUserInfo(userId)
    externalUserModal.value.data = userInfo
  } catch (error) {
    externalUserModal.value.error = error.message
  } finally {
    externalUserModal.value.isLoading = false
  }
}

const closeExternalUserModal = () => {
  externalUserModal.value = {
    isVisible: false,
    isLoading: false,
    error: null,
    data: null,
  }
}

// Lifecycle hooks
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
        <h3 class="fw-bold mb-2">歷史借用紀錄</h3>
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
              <th class="border-0 px-4">鑰匙編號</th>
              <th class="border-0 px-4">借用人</th>
              <th class="border-0 px-4">借用時間</th>
              <th class="border-0 px-4">歸還時間</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="record in keyRecords" :key="record.id">
              <td class="ps-4">{{ record.keyNumber }}</td>
              <td>
                <span v-if="record.borrower.type === 'external'">
                  <a
                    href="#"
                    @click.prevent="showExternalUserInfo(record.borrower.uid)"
                    class="text-primary text-decoration-none fw-bold"
                    >{{ record.borrower.name }}</a
                  >
                </span>
                <span v-else>{{ record.borrower.name }}</span>
                <span class="badge bg-secondary ms-1">
                  {{ getUserTypeName(record.borrower.type) }}
                </span>
              </td>
              <td class="pe-4">{{ record.formattedBorrowTime }}</td>
              <td class="pe-4">{{ record.formattedReturnTime || '未歸還' }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- External User Info Modal -->
    <div
      class="modal fade"
      tabindex="-1"
      :class="{ show: externalUserModal.isVisible }"
      v-if="externalUserModal.isVisible"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header border-bottom-0">
            <h5 class="modal-title fw-bold">外部使用者資訊</h5>
            <button type="button" class="btn-close" @click="closeExternalUserModal"></button>
          </div>

          <div class="modal-body">
            <!-- Loading State -->
            <div v-if="externalUserModal.isLoading" class="text-center py-4">
              <div class="spinner-border text-dark" role="status">
                <span class="visually-hidden">載入中...</span>
              </div>
            </div>

            <!-- Error State -->
            <div v-else-if="externalUserModal.error" class="alert alert-danger mb-0">
              {{ externalUserModal.error }}
            </div>

            <!-- User Info -->
            <div v-else-if="externalUserModal.data" class="card bg-light border-0">
              <div class="card-body">
                <div class="d-flex flex-column gap-3">
                  <div>
                    <div class="text-muted small mb-1">所屬機構</div>
                    <div class="fw-medium">{{ externalUserModal.data.institution }}</div>
                  </div>
                  <div>
                    <div class="text-muted small mb-1">電子郵件</div>
                    <div class="fw-medium">
                      <a
                        :href="'mailto:' + externalUserModal.data.email"
                        class="text-decoration-none"
                      >
                        {{ externalUserModal.data.email }}
                      </a>
                    </div>
                  </div>
                  <div>
                    <div class="text-muted small mb-1">聯絡電話</div>
                    <div class="fw-medium">
                      {{ externalUserModal.data.phone }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="modal-footer border-top-0">
            <button
              type="button"
              class="btn btn-secondary btn-sm px-4"
              @click="closeExternalUserModal"
            >
              關閉
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  @use '@/assets/main.scss' as *;
</style>

