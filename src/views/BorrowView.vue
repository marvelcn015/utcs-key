<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import NavigationBar from '@/components/NavigationBar.vue'
import DepartmentBorrow from '@/components/Borrow/DepartmentBorrow.vue'
import ExternalBorrow from '@/components/Borrow/ExternalBorrow.vue'
import { useTimeManager } from '@/utils/flushTime'

const { ts, tsshow, startTimer, stopTimer } = useTimeManager()
const activeTab = ref('department')

const switchTab = (tab) => {
  activeTab.value = tab
}

onMounted(() => {
  startTimer()
})

onUnmounted(() => {
  stopTimer()
})
</script>

<template>
  <NavigationBar />

  <div class="container-fluid min-vh-80 py-5">
    <div class="row justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card shadow-lg border-0 rounded-lg">
          <div class="card-header bg-dark bg-gradient text-white">
            <h3 class="text-center font-weight-bold my-2">
              <i class="bi bi-key-fill me-2"></i>借用鑰匙
            </h3>
          </div>

          <div class="card-body p-4">
            <!-- 標籤切換區域 -->
            <div class="nav-container mb-4">
              <div class="nav nav-pills nav-justified" role="tablist">
                <button
                  class="nav-link"
                  :class="{ active: activeTab === 'department' }"
                  @click="switchTab('department')"
                  type="button"
                  role="tab"
                  aria-selected="activeTab === 'department'"
                >
                  <i class="bi bi-person-badge me-2"></i>校務系統認證
                </button>
                <button
                  class="nav-link"
                  :class="{ active: activeTab === 'external' }"
                  @click="switchTab('external')"
                  type="button"
                  role="tab"
                  aria-selected="activeTab === 'external'"
                >
                  <i class="bi bi-person-plus me-2"></i>系外訪客
                </button>
              </div>
            </div>

            <!-- 表單內容區域 -->
            <div class="tab-content">
              <Transition name="fade" mode="out-in">
                <div v-if="activeTab === 'department'" key="department" class="tab-pane active">
                  <DepartmentBorrow :ts="ts" :tsshow="tsshow" />
                </div>
                <div v-else key="external" class="tab-pane active">
                  <ExternalBorrow :ts="ts" :tsshow="tsshow" />
                </div>
              </Transition>
            </div>
          </div>

          <!-- 卡片底部提示信息 -->
          <div class="card-footer text-center py-3 bg-light">
            <div class="small text-muted">
              如遇系統問題，請聯繫管理員
              <i class="bi bi-telephone-fill ms-1"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.min-vh-80 {
  min-height: 80vh;
}

/* 表單控制項樣式 */
.form-control:focus {
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.15);
}

/* 導航標籤樣式 */
.nav-link {
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  padding: 0.75rem 1.25rem;
  font-weight: 500;
  color: #495057;
}

.nav-pills .nav-link {
  border-radius: 0.5rem;
  margin: 0 0.25rem;
  border: 0.5px solid #495057;
}

.nav-pills .nav-link.active {
  background-color: #212529;
  color: white;
}

.nav-pills .nav-link:not(.active):hover {
  background-color: #f8f9fa;
  color: #212529;
}

/* 標籤切換動畫 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 響應式設計調整 */
@media (max-width: 768px) {
  .card-body {
    padding: 1.5rem;
  }

  .nav-pills .nav-link {
    padding: 0.5rem 0.75rem;
    font-size: 0.9rem;
  }

  .nav-container {
    margin-bottom: 1.5rem;
  }
}

@media (max-width: 576px) {
  .container-fluid {
    padding: 1rem;
  }

  .card-header h3 {
    font-size: 1.5rem;
  }

  .nav-link i {
    display: none;
  }
}

/* 表單切換時的過渡 */
.tab-pane {
  width: 100%;
}

.tab-content {
  position: relative;
  min-height: 400px; /* 根據實際表單高度調整 */
}
</style>
