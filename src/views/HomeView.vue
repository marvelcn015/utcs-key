<script setup></script>

<template>
  <nav class="navbar navbar-expand-md bg-dark navbar-dark">
    <a class="navbar-brand" href="./">UTCS 物品借用系統</a>
    
    <!-- 5.3.1(data-toggle) -> 5.3.3(data-bs-toggle) -->
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>

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
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            帳戶 Account
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="./showapplicationsheet.html">系統使用申請書 Application Sheet (限系外訪客)</a>
            <a class="dropdown-item" href="./manageaccount.html">管理 Admin</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="./manageproperty.html">物品管理 Property Management</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-bs-toggle="modal" data-bs-target="#ContactModal">聯絡 Contact</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
</style>
