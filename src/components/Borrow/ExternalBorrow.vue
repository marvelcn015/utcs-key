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

const LoadData = () => {
  isSubmitting.value = true
  fetch()
    .then((response) => response.json())
    .then((data) => {
      if (!data) {
        alert('查無此人 Data not found.')
      } else {
        document.getElementById('userName').value = data[1]
        document.getElementById('affiliation').value = data[2]
        document.getElementById('email').value = data[3]
        document.getElementById('phone').value = data[4]
      }
    })
    .catch((error) => {
      console.error('Error fetching data:', error)
      alert('載入資料時發生錯誤，請稍後再試')
    })
    .finally(() => {
      isSubmitting.value = false
    })
}
</script>

<template>
  <form action="" method="post" class="needs-validation" novalidate @submit="handleSubmit">
    <!-- 物品條碼輸入區 -->
    <div class="form-floating mb-4">
      <input
        type="text"
        class="form-control"
        id="keyId"
        name="keyId"
        required
        placeholder="請輸入該教室的代號"
        pattern="[A-Za-z][0-9]{3,4}"
      />
      <label for="keyId">鑰匙編號</label>
      <div class="invalid-feedback">請輸入有效的教室代號（如：G508）</div>
    </div>

    <!-- 個人資料表單區 -->
    <div class="form-floating mb-4">
      <input
        type="text"
        class="form-control"
        id="userName"
        name="userName"
        required
        placeholder="請輸入借用者姓名"
      />
      <label for="userName">全名</label>
      <div class="invalid-feedback">請輸入借用者全名</div>
    </div>

    <div class="form-floating mb-4">
      <input
        type="text"
        class="form-control"
        id="affiliation"
        name="affiliation"
        required
        placeholder="請輸入服務單位"
      />
      <label for="affiliation">服務單位（如：NTU, NCCU）</label>
      <div class="invalid-feedback">請輸入服務單位名稱</div>
    </div>

    <div class="form-floating mb-4">
      <input
        type="email"
        class="form-control"
        id="email"
        name="email"
        required
        placeholder="請輸入電子郵件"
      />
      <label for="email">電子郵件</label>
      <div class="invalid-feedback">請輸入有效的電子郵件地址</div>
    </div>

    <div class="form-floating mb-4">
      <input
        type="tel"
        class="form-control"
        id="phone"
        name="phone"
        required
        placeholder="請輸入聯絡電話"
        pattern="[0-9]+"
      />
      <label for="phone">聯絡電話</label>
      <div class="invalid-feedback">請輸入有效的電話號碼</div>
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
      <input type="hidden" name="borrowTime" :value="ts" />
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

<style scoped>
.btn-outline-dark:hover {
  background-color: #212529;
  color: white;
}
</style>
