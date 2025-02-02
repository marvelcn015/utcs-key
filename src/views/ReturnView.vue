<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const ts = ref('')
const tsshow = ref('')
const isSubmitting = ref(false)
let timeInterval

const formatter = new Intl.DateTimeFormat('zh-TW', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false,
})

const flushTime = () => {
  const now = new Date()
  const formattedTime = formatter.format(now).replace(/\//g, '-')
  ts.value = formattedTime
  tsshow.value = formattedTime
}

const handleSubmit = async (event) => {
  const form = event.target
  if (!form.checkValidity()) {
    event.preventDefault()
    event.stopPropagation()
  }
  form.classList.add('was-validated')

  // 防止重複提交
  if (form.checkValidity() && !isSubmitting.value) {
    isSubmitting.value = true
    // 未來殼以添加表單提交邏輯
  }
}

onMounted(() => {
  flushTime()
  timeInterval = setInterval(flushTime, 1000)
})

onUnmounted(() => {
  if (timeInterval) {
    clearInterval(timeInterval)
  }
})
</script>

<template>
  <div class="container-fluid min-vh-80 py-5">
    <div class="row justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card shadow-lg border-0 rounded-lg">
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
              <!-- 物品條碼輸入區 -->
              <div class="form-floating mb-4">
                <input
                  type="text"
                  class="form-control"
                  id="keynumber-myut"
                  name="keynumber"
                  required
                  placeholder="請輸入該教室的代號"
                  pattern="[A-Za-z][0-9]{3,4}"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="請輸入正確的教室代號格式，例如：G508"
                />
                <label for="keynumber-myut">物品條碼</label>
                <div class="invalid-feedback">請輸入有效的教室代號（如：G508）</div>
              </div>

              <!-- 時間顯示區 -->
              <div class="form-floating mb-4">
                <input
                  type="text"
                  class="form-control bg-light"
                  id="current-time"
                  name="tsshow"
                  v-model="tsshow"
                  disabled
                  placeholder="當前時間"
                />
                <label for="current-time">當前時間</label>
                <input type="hidden" name="ts" v-model="ts" />
              </div>

              <!-- 提交按鈕 -->
              <div class="d-grid gap-2 mt-4">
                <button type="submit" class="btn btn-dark btn-lg" :disabled="isSubmitting">
                  <span
                    v-if="isSubmitting"
                    class="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  {{ isSubmitting ? '提交中...' : '提交歸還' }}
                </button>
              </div>
            </form>
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

/* 輸入框焦點效果 */
.form-control:focus {
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.15);
}
</style>
