<script setup>
import NavigationBar from '@/components/NavigationBar.vue'
import { ref } from 'vue'

const admins = ref([{ name: '葉聖羣', contact: '' }])
</script>

<template>
  <NavigationBar />
  <div class="container mt-4 text-align">
    <h2 class="custom-font">管理員資料</h2>
    <div class="table-container">
      <table class="table rounded-table">
        <thead class="table-dark">
          <tr>
            <th>姓名</th>
            <th>聯繫方式</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(admin, index) in admins" :key="index">
            <td>{{ admin.name }}</td>
            <td>{{ admin.contact || '未提供' }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
h2 {
  text-align: center;
}
.text-align {
  text-align: center;
}
.custom-font {
  font-family: 'Arial', sans-serif;
  font-size: 30px;
  color: #5608e8d8;
  font-weight: bold;
}
.rounded-table {
  border-radius: 12px;
  overflow: hidden;
}
.table-container {
  max-width: 300px;
  margin: 0 auto;
  overflow-x: auto;
}
</style>
