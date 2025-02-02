<script setup>
import { ref, onMounted } from 'vue'

const tsshow = ref('')
const ts = ref('')

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
  tsshow.value = datetime
  ts.value = datetime
}

onMounted(() => {
  setInterval(flushTime, 1000)
})

const LoadData = () => {
  const goal = document.getElementById('idd').value.trim()
  fetch(`./getexternaldata.php?id=${goal}`)
    .then((response) => response.json())
    .then((data) => {
      if (!data) {
        alert('查無此人 Data not found.')
      } else {
        document.getElementById('fullname').value = data[1]
        document.getElementById('yi').value = data[2]
        document.getElementById('email').value = data[3]
        document.getElementById('phone').value = data[4]
      }
    })
    .catch((error) => console.error('Error fetching data:', error))
}
</script>

<template>
  <div class="d-flex justify-content-center align-items-center container" style="height: 120vh">
    <div class="row">
      <form action="externalapply.php" method="post" class="needs-validation" novalidate>
        <h3>系外訪客借用</h3>

        <div class="form-group">
          <label for="keynumber">物品條碼:</label>
          <input
            type="text"
            class="form-control"
            name="keynumber"
            id="keynumber"
            required
            placeholder="請輸入該教室的代號"
          />
          <div class="invalid-feedback">請輸入教室代號，例如:G508。</div>
        </div>

        <div class="form-group">
          <label for="idd">身分證 ID / Resident Certificate No. / Passport No. :</label>
          <input
            type="text"
            class="form-control"
            name="idd"
            id="idd"
            required
            placeholder="請輸入請輸入身分證字號/居留證號碼/護照號碼"
          />
          <button type="button" class="btn btn-primary btn-sm mt-2" @click="LoadData">
            帶入現有資料 Load the recorded data.
          </button>
          <div class="invalid-feedback">請輸入正確的代碼。</div>
          <br />
        </div>

        <div class="form-group">
          <label for="fullname">全名 Full Name :</label>
          <input
            type="text"
            class="form-control"
            name="fullname"
            id="fullname"
            required
            placeholder="請輸入借用者姓名"
          />
          <div class="invalid-feedback">請輸入借用者全名。</div>
          <br />
        </div>

        <div class="form-group">
          <label for="yi">服務單位 Your Institution (EX: NTU, NCCU, NTNU, AS, SCU...):</label>
          <input
            type="text"
            class="form-control"
            name="yi"
            id="yi"
            required
            placeholder="請輸入工作單位"
          />
          <div class="invalid-feedback">請輸入公司行號名稱。</div>
          <br />
        </div>

        <div class="form-group">
          <label for="email">Email :</label>
          <input
            type="email"
            class="form-control"
            name="email"
            id="email"
            required
            placeholder="請輸入經常使用的郵件帳號"
          />
          <div class="invalid-feedback">請輸入含有@且正確的電子郵件地址。</div>
          <br />
        </div>

        <div class="form-group">
          <label for="phone">Phone No. :</label>
          <input
            type="text"
            class="form-control"
            name="phone"
            id="phone"
            required
            placeholder="請輸入手機號碼"
          />
          <div class="invalid-feedback">請輸入正確的電話號碼。</div>
          <br />
        </div>

        <div class="form-group">
          <label for="tsshow">當前時間:</label>
          <input
            type="text"
            class="form-control"
            name="tsshow"
            id="tsshow"
            v-model="tsshow"
            disabled
          />
          <input type="hidden" name="ts" id="ts" v-model="ts" />
        </div>

        <button type="submit" value="submit" class="btn btn-primary mt-3">Submit</button>
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
