<script setup>
import { RouterLink } from 'vue-router'

function flushTime() {
  var currentdate = new Date()
  var datetime =
    currentdate.getFullYear() +
    '/' +
    (currentdate.getMonth() + 1) +
    '/' +
    currentdate.getDate() +
    ' ' +
    currentdate.getHours() +
    ':' +
    currentdate.getMinutes()

  document.getElementById('ts1').value = datetime
  document.getElementById('tsshow1').value = datetime

  document.getElementById('ts2').value = datetime
  document.getElementById('tsshow2').value = datetime
}

setInterval(flushTime, 1000)
</script>

<template>
  <div class="d-flex justify-content-center align-items-center container" style="height: 100vh">
    <div class="col-12">
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <button
            class="nav-link active"
            id="MYUT-tab"
            data-bs-toggle="tab"
            data-bs-target="#MYUT-pane"
            type="button"
            role="tab"
            aria-controls="MYUT-pane"
            aria-selected="true"
          >
            校務系統認證(限系上)
          </button>
        </li>
        <li class="nav-item">
          <button
            class="nav-link"
            id="ID-tab"
            data-bs-toggle="tab"
            data-bs-target="#ID-pane"
            type="button"
            role="tab"
            aria-controls="ID-pane"
            aria-selected="false"
          >
            身分證認證(限系上)
          </button>
        </li>
        <li class="nav-item">
          <RouterLink to="/externalborrow" class="nav-link">系外訪客</RouterLink>
        </li>
      </ul>

      <div class="tab-content">
        <!-- 校務系統認證 -->
        <div
          class="tab-pane container fade show active"
          id="MYUT-pane"
          role="tabpanel"
          aria-labelledby="MYUT-tab"
        >
          <div class="d-flex justify-content-center align-items-center container">
            <div class="row">
              <form action="myut.php" method="post" class="needs-validation" novalidate>
                <div class="form-group">
                  <br />
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
                  <label for="uid">校務系統帳號 (Account):</label>
                  <input
                    type="text"
                    class="form-control"
                    id="uid"
                    name="uid"
                    required
                    placeholder="請輸入借用者帳號"
                  />
                  <div class="invalid-feedback">請輸入正確的校務系統帳號。</div>
                  <br />
                </div>

                <div class="form-group">
                  <label for="password">校務系統密碼 (Password):</label>
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    name="password"
                    required
                    placeholder="請輸入借用者密碼"
                  />
                  <div class="invalid-feedback">請輸入正確的校務系統密碼。</div>
                  <br />
                </div>

                <div class="form-group">
                  <label for="tsshow1">當前時間:</label>
                  <input type="text" class="form-control" id="tsshow1" name="tsshow" disabled />
                  <input type="hidden" id="ts1" name="ts" value="2025/2/2 2:21" /><br />
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>

        <!-- 身分證認證 -->
        <div class="tab-pane container fade" id="ID-pane" role="tabpanel" aria-labelledby="ID-tab">
          <div class="d-flex justify-content-center align-items-center container">
            <div class="row">
              <form action="borrow.php" method="post" class="needs-validation" novalidate>
                <div class="form-group">
                  <br />
                  <label for="keynumber-id">物品條碼:</label>
                  <input
                    type="text"
                    class="form-control"
                    id="keynumber-id"
                    name="keynumber"
                    required
                    placeholder="請輸入教室代號"
                  />
                  <div class="invalid-feedback">請輸入教室代號，例如:G508。</div>
                  <br />
                </div>

                <div class="form-group">
                  <label for="idd">身分證 ID / Resident Certificate No. / Passport No.:</label>
                  <input
                    type="text"
                    class="form-control"
                    id="idd"
                    name="idd"
                    required
                    placeholder="請輸入身分證字號/居留證號碼/護照號碼"
                  />
                  <div class="invalid-feedback">請輸入正確的代碼。</div>
                  <br />
                </div>

                <div class="form-group">
                  <label for="tsshow2">當前時間:</label>
                  <input type="text" class="form-control" id="tsshow2" name="tsshow" disabled />
                  <input type="hidden" id="ts2" name="ts" value="2025/2/2 2:21" /><br />
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
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
