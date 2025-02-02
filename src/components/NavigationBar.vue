<script setup>
import { ref } from "vue";

const navItems = [
  { name: "借用 Borrow", path: "/" },
  { name: "歸還 Return", path: "/" },
  { name: "狀態 Status", path: "/Status" },
  { name: "紀錄 Log", path: "/" },
];
</script>

<template>
  <nav class="navbar navbar-expand-md bg-dark navbar-dark">
    <a class="navbar-brand" href="/">UTCS 物品借用系統</a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav">
        <li v-for="item in navItems" :key="item.path" class="nav-item">
          <RouterLink class="nav-link" :to="item.path">{{ item.name }}</RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  margin-bottom: 20px;
}
</style>
