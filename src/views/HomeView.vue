<script setup></script>

<template>
  <nav class="navbar navbar-expand-md bg-dark navbar-dark">
    <!-- Brand -->
    <a class="navbar-brand" href="./">UTCS 物品借用系統</a>

    <!-- Toggler/collapsibe Button -->
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#collapsibleNavbar"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- Navbar links -->
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="./borrow.html">借用 Borrow</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="./return.html">歸還 Return</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="./status.php">狀態 Status</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="./log.php">紀錄 Log</a>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            帳戶 Account
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="./showapplicationsheet.html"
              >系統使用申請書 Application Sheet (限系外訪客)</a
            >
            <a class="dropdown-item" href="./manageaccount.html">管理 Admin</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="./manageproperty.html">物品管理 Property Management</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-toggle="modal" data-target="#ContactModal">聯絡 Contact</a>
        </li>
      </ul>
    </div>
  </nav>
  <div class="container">
    <div class="row">
      <div class="card">
        <div class="card-header text-center">
          <h4>Info</h4>
          <div class="card-body">
            <p></p>
            <h5>
              This is the Property Management System of
              <a href="http://cs.utaipei.edu.tw">UTCS</a>.<br />
              Please follow the instructions from the staff in the office and give the correct
              information.
            </h5>
            <h6>
              <br />
              使用時請遵守系辦公室的規範。
            </h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
