<script setup>
import NavigationBar from '@/components/NavigationBar.vue'
</script>

<template>
  <NavigationBar />
  <div class="d-flex">
    <div class="sidebar">
      <RouterLink to="/admin_key">
        <i class="bi bi-journal-text"></i>
        <span class="menu-text">鑰匙借用紀錄</span>
      </RouterLink>

      <!-- <div class="menu-item">
                <div class="parent-menu">
                    <i class="bi bi-person"></i>
                    <span class="menu-text">帳戶</span>
                </div>
                <div class="submenu">
                    
                    <RouterLink to="/account/management">管理</RouterLink>
                </div>
            </div> -->
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  width: 60px;
  height: calc(100vh - 56px);
  background: #343a40;
  position: fixed;
  top: 56px;
  left: 0;
  padding-top: 20px;
  transition: width 0.3s;
  overflow: hidden;
}

.sidebar:hover {
  width: 200px;
}

.sidebar a {
  display: flex;
  align-items: center;
  padding: 10px;
  color: white;
  text-decoration: none;
  transition: background 0.3s;
}

.sidebar a:hover {
  background: #495057;
}

.sidebar i {
  font-size: 20px;
  margin-right: 10px;
}

.menu-text {
  opacity: 0;
  white-space: nowrap;
  transition: opacity 0.3s;
}

.sidebar:hover .menu-text {
  opacity: 1;
}

.menu-item {
  position: relative;
  width: 100%;
}

.parent-menu {
  display: flex;
  align-items: center;
  padding: 10px;
  color: white;
  background: #343a40;
  cursor: default;
}

.submenu {
  position: absolute;
  top: 100%;
  left: 60px;
  background: #495057;
  width: 140px;
  display: none;
  flex-direction: column;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.submenu a {
  padding: 10px;
  color: white;
  display: block;
  transition: background 0.3s;
}

.submenu a:hover {
  background: #6c757d;
}

.menu-item:hover .submenu {
  display: flex;
}
</style>
