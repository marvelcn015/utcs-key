<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import NavigationBar from '@/components/NavigationBar.vue'
import { useTimeManager } from '@/utils/flushTime'

const isSubmitting = ref(false)
const { ts, tsshow, startTimer, stopTimer } = useTimeManager()

const handleSubmit = async (event) => {
  const form = event.target
  if (!form.checkValidity()) {
    event.preventDefault()
    event.stopPropagation()
  }
  form.classList.add('was-validated')

  if (form.checkValidity() && !isSubmitting.value) {
    isSubmitting.value = true
    try {
      // 在這裡可以添加實際的表單提交邏輯
      // await submitForm(formData)
    } catch (error) {
      console.error('提交表單時發生錯誤:', error)
    } finally {
      isSubmitting.value = false
    }
  }
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
        <div class="card shadow-lg border-0 rounded-lg hover-lift">
          <div class="card-header bg-dark bg-gradient text-white">
            <h3 class="text-center font-weight-bold my-2">
              <i class="bi bi-key-fill me-2"></i>歸還鑰匙
            </h3>
          </div>

          <div class="card-body p-4">
            <form
              action="return.php"
              method="post"
              class="needs-validation"
              novalidate
              @submit="handleSubmit"
            >
              <!-- 鑰匙編號輸入區 -->
              <div class="form-floating mb-4">
                <input
                  type="text"
                  class="form-control"
                  id="keyId-return"
                  name="keyId"
                  required
                  placeholder="請輸入該教室的代號"
                  pattern="[A-Za-z][0-9]{3,4}"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="請輸入正確的教室代號格式，例如：G508"
                  autocomplete="off"
                />
                <label for="keyId-return">鑰匙編號</label>
                <div class="invalid-feedback">請輸入有效的教室代號（如：G508）</div>
              </div>

              <!-- 時間顯示區 -->
              <div class="form-floating mb-4">
                <input
                  type="text"
                  class="form-control bg-light"
                  id="current-time"
                  name="tsshow"
                  :value="tsshow"
                  disabled
                  placeholder="當前時間"
                />
                <label for="current-time">當前時間</label>
                <input type="hidden" name="returnTime" :value="ts" />
              </div>

              <!-- 提交按鈕 -->
              <div class="d-grid gap-2 mt-4">
                <button
                  type="submit"
                  class="btn btn-dark btn-lg position-relative overflow-hidden"
                  :disabled="isSubmitting"
                >
                  <div class="d-flex align-items-center justify-content-center">
                    <span
                      v-if="isSubmitting"
                      class="spinner-border spinner-border-sm me-2"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    <span>{{ isSubmitting ? '提交中...' : '提交歸還' }}</span>
                  </div>
                </button>
              </div>
            </form>
          </div>

          <!-- 卡片底部提示信息 -->
          <div class="card-footer text-center py-3 bg-light">
            <div class="small text-muted d-flex align-items-center justify-content-center gap-2">
              <span>如遇系統問題，請聯繫管理員</span>
              <i class="bi bi-telephone-fill"></i>
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

/* 響應式調整 */
@media (max-width: 768px) {
  .card-body {
    padding: 1.5rem;
  }

  .form-floating > label {
    font-size: 0.9rem;
  }
}

@media (max-width: 576px) {
  .container-fluid {
    padding: 1rem;
  }

  .card-header h3 {
    font-size: 1.5rem;
  }
}
</style>
