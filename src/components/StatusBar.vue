<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

// 控制不同訊息的顯示狀態
const statusOk = ref(false)
const statusError = ref(false)
const statusNotIntranet = ref(false)
const statusNoIpLimitSystem = ref(false)

onMounted(() => {
  const status = route.query.status

  if (status === 'ok') {
    statusOk.value = true
  } else if (status === 'notintanet') {
    statusNotIntranet.value = true
  } else if (status === 'noiplimitsystem') {
    statusNoIpLimitSystem.value = true
  } else {
    statusError.value = true
  }

  // 5秒後自動導向首頁
  setTimeout(() => {
    router.push('/')
  }, 5000)
})
</script>

<template>
  <nav class="navbar navbar-expand-md bg-dark navbar-dark">
    <RouterLink class="navbar-brand" to="/">UTCS 物品借用系統</RouterLink>

    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapsibleNavbar"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
  </nav>

  <div class="container">
    <div v-if="statusOk" class="alert alert-info col-md-12">
      <strong>恭喜!</strong> 借用/歸還/更新成功！
    </div>

    <div v-if="statusError" class="alert alert-danger col-md-12">
      <strong>錯誤!</strong><br />
      有可能是以下狀況：
      <ul>
        <li>資料錯誤</li>
        <li>系統錯誤</li>
      </ul>
    </div>

    <div v-if="statusNotIntranet" class="alert alert-danger col-md-12">
      <strong>錯誤!</strong><br />
      <ul>
        <li>不在校園網路內</li>
      </ul>
    </div>

    <div v-if="statusNoIpLimitSystem" class="alert alert-danger col-md-12">
      <strong>錯誤!</strong><br />
      <ul>
        <li>IP Limit System 發生故障</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin-top: 20px;
}
</style>
