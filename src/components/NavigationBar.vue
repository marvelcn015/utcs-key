<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const showAdminMenu = ref(false) // 控制管理選單的顯示狀態
const showOtherMenu = ref(false) // 控制其他選單的顯示狀態

const navItems = [
  { name: '借用 Borrow', path: '/borrow', icon: 'bi-box-arrow-in-right' },
  { name: '歸還 Return', path: '/return', icon: 'bi-box-arrow-in-left' },
  { name: '狀態 Status', path: '/status', icon: 'bi-clipboard-data' },
  {
    name: '管理 Admin',
    path: '/admin',
    icon: 'bi-gear',
    subMenu: [{ name: '歸還紀錄', path: '/record' }],
  },
  {
    name: '其他 Others',
    path: '/others',
    icon: 'bi-three-dots',
    subMenu: [
      { name: '管理員資料', path: '/control' },
      { name: '報修', path: '/fix' },
    ],
  },
]

const currentPath = computed(() => route.path)

// 切換管理選單顯示
const toggleAdminMenu = () => {
  showAdminMenu.value = !showAdminMenu.value
  showOtherMenu.value = false // 保證不會同時展開其他選單
}

// 切換其他選單顯示
const toggleOtherMenu = () => {
  showOtherMenu.value = !showOtherMenu.value
  showAdminMenu.value = false // 保證不會同時展開管理選單
}
</script>

<template>
  <nav class="navbar navbar-expand-md bg-dark navbar-dark shadow-sm">
    <div class="container-fluid px-md-4">
      <!-- Brand -->
      <a class="navbar-brand d-flex align-items-center" href="/">
        <i class="bi bi-box-seam me-2 brand-icon"></i>
        <span>UTCS 鑰匙借用系統</span>
      </a>

      <!-- Toggle Button -->
      <button
        class="navbar-toggler border-0 shadow-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarContent"
        aria-controls="navbarContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Navigation Items -->
      <div class="collapse navbar-collapse" id="navbarContent">
        <ul class="navbar-nav ms-auto mb-2 mb-md-0">
          <li v-for="item in navItems" :key="item.path" class="nav-item">
            <template v-if="item.subMenu">
              <!-- 如果有子選單 -->
              <a
                href="#"
                class="nav-link d-flex align-items-center px-3 nav-link-animated"
                :class="{ active: currentPath === item.path }"
                @click.prevent="item.name === '管理 Admin' ? toggleAdminMenu() : toggleOtherMenu()"
              >
                <i :class="['bi', item.icon, 'me-2 nav-icon']"></i>
                <span>{{ item.name }}</span>
                <i class="bi bi-chevron-down ms-2"></i>
              </a>

              <!-- 顯示對應的子選單 -->
              <ul
                v-if="
                  (item.name === '管理 Admin' && showAdminMenu) ||
                  (item.name === '其他 Others' && showOtherMenu)
                "
                class="dropdown-menu show"
              >
                <li v-for="subItem in item.subMenu" :key="subItem.path">
                  <RouterLink :to="subItem.path" class="dropdown-item">
                    {{ subItem.name }}
                  </RouterLink>
                </li>
              </ul>
            </template>

            <template v-else>
              <RouterLink
                :to="item.path"
                class="nav-link d-flex align-items-center px-3 nav-link-animated"
                :class="{ active: currentPath === item.path }"
              >
                <i :class="['bi', item.icon, 'me-2 nav-icon']"></i>
                <span>{{ item.name }}</span>
              </RouterLink>
            </template>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* 調整管理選單的樣式 */
.dropdown-menu {
  background-color: #343a40;
  border: none;
  padding: 0.5rem 0;
  margin-top: 0.5rem;
}

.dropdown-item {
  color: white;
  padding: 0.5rem 1rem;
  transition: background 0.2s ease;
}

.dropdown-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>
