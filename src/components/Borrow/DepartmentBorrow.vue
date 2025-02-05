<script setup>
import { ref } from 'vue'

const props = defineProps({
  ts: {
    type: String,
    required: true,
  },
  tsshow: {
    type: String,
    required: true,
  },
})

const isSubmitting = ref(false)

const handleSubmit = async (event) => {
  const form = event.target
  if (!form.checkValidity()) {
    event.preventDefault()
    event.stopPropagation()
  }
  form.classList.add('was-validated')

  if (form.checkValidity() && !isSubmitting.value) {
    isSubmitting.value = true
  }
}
</script>

<template>
  <form action="" method="post" class="needs-validation" novalidate @submit="handleSubmit">
    <!-- 表示僅限資科系員生使用校務系統登入 -->
    <div class="alert alert-warning mb-4" role="alert">
      <i class="bi bi-exclamation-triangle-fill me-2"></i>
      請注意：僅限資訊科學系師生使用校務系統登入
    </div>

    <!-- 鑰匙編號輸入區 -->
    <div class="form-floating mb-4">
      <input
        type="text"
        class="form-control"
        id="keynumber"
        name="keynumber"
        required
        placeholder="請輸入該教室的代號"
        pattern="[A-Za-z][0-9]{3,4}"
      />
      <label for="keynumber">鑰匙編號</label>
      <div class="invalid-feedback">請輸入有效的教室代號（如：G508）</div>
    </div>

    <!-- 校務系統帳號 -->
    <div class="form-floating mb-4">
      <input
        type="text"
        class="form-control"
        id="uid"
        name="uid"
        required
        placeholder="請輸入借用者帳號"
      />
      <label for="uid">校務系統帳號</label>
      <div class="invalid-feedback">請輸入正確的校務系統帳號</div>
    </div>

    <!-- 校務系統密碼 -->
    <div class="form-floating mb-4">
      <input
        type="password"
        class="form-control"
        id="password"
        name="password"
        required
        placeholder="請輸入借用者密碼"
      />
      <label for="password">校務系統密碼</label>
      <div class="invalid-feedback">請輸入正確的校務系統密碼</div>
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
      <input type="hidden" name="ts" :value="ts" />
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
        {{ isSubmitting ? '提交中...' : '提交借用' }}
      </button>
    </div>
  </form>
</template>
