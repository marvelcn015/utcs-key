<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="navbar navbar-expand-md bg-dark navbar-dark">
    <RouterLink class="navbar-brand">UTCS 物品借用系統</RouterLink>

    <!-- 5.3.1(data-toggle) -> 5.3.3(data-bs-toggle) -->
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapsibleNavbar"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <RouterLink class="nav-link">借用 Borrow</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link">歸還 Return</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link">狀態 Status</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link">紀錄 Log</RouterLink>
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
            <RouterLink class="dropdown-item"
              >系統使用申請書 Application Sheet (限系外訪客)</RouterLink
            >
            <RouterLink class="dropdown-item">管理 Admin</RouterLink>
          </div>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link">物品管理 Property Management</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" data-bs-toggle="modal" data-bs-target="#ContactModal"
            >聯絡 Contact</RouterLink
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped></style>
