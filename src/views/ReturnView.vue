<script setup>
import { ref, onMounted } from 'vue'

const ts = ref('')
const tsshow = ref('')

const flushTime = () => {
  const currentdate = new Date()
  const datetime =
    currentdate.getFullYear() +
    '/' +
    (currentdate.getMonth() + 1) +
    '/' +
    currentdate.getDate() +
    ' ' +
    currentdate.getHours() +
    ':' +
    currentdate.getMinutes()
  ts.value = datetime
  tsshow.value = datetime
}

onMounted(() => {
  flushTime()
  setInterval(flushTime, 1000)
})
</script>

<template>
  <div class="d-flex justify-content-center align-items-center container" style="height: 80vh">
    <div class="row">
      <form action="return.php" method="post" class="needs-validation" novalidate>
        <h3>歸還鑰匙</h3>
        <div class="form-group">
          <label for="keynumber-myut">物品條碼:</label>
          <input
            type="text"
            class="form-control"
            id="keynumber-myut"
            name="keynumber"
            required
            placeholder="請輸入該教室的代號"
          />
          <div class="invalid-feedback">請輸入教室代號，例如:G508。</div>
          <br />
        </div>
        <div class="form-group">
          <label>當前時間:</label>
          <input type="text" name="tsshow" class="form-control" v-model="tsshow" disabled /><br />
          <input type="hidden" name="ts" v-model="ts" /><br />
        </div>
        <button type="submit" value="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.nav-link {
  border-radius: 0.5rem;
}

.form-label {
  font-weight: bold;
}

button {
  border-radius: 0.5rem;
}
</style>
