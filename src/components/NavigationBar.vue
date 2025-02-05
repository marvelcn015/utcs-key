<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const navItems = [
  { name: '借用 Borrow', path: '/borrow', icon: 'bi-box-arrow-in-right' },
  { name: '歸還 Return', path: '/return', icon: 'bi-box-arrow-in-left' },
  { name: '狀態 Status', path: '/status', icon: 'bi-clipboard-data' },
  { name: '管理 Admin', path: '/admin', icon: 'bi-gear' },
  { name: '其他 Others', path: '/others', icon: 'bi-three-dots' },
]

const currentPath = computed(() => route.path)
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
            <RouterLink
              :to="item.path"
              class="nav-link d-flex align-items-center px-3 nav-link-animated"
              :class="{ active: currentPath === item.path }"
            >
              <i :class="['bi', item.icon, 'me-2 nav-icon']"></i>
              <span>{{ item.name }}</span>
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  margin-bottom: 1.5rem;
  padding: 0.75rem 0;
}

.navbar-brand {
  font-size: 1.25rem;
  font-weight: 500;
  position: relative;
  overflow: hidden;
}

.brand-icon {
  transform: translateY(-1px);
  transition: transform 0.3s ease;
}

.navbar-brand:hover .brand-icon {
  transform: translateY(-1px) scale(1.1);
}

.nav-link-animated {
  position: relative;
  font-weight: 500;
  transition: all 0.3s ease;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
}

.nav-link-animated::before {
  content: '';
  position: absolute;
  bottom: 0.375rem;
  left: 1rem;
  right: 1rem;
  height: 2px;
  background-color: #fff;
  transform: scaleX(0);
  transition: transform 0.3s ease;
  transform-origin: center;
  border-radius: 2px;
  opacity: 0;
}

.nav-link-animated:hover {
  color: rgba(255, 255, 255, 0.95) !important;
}

.nav-link-animated:hover::before {
  transform: scaleX(0.7);
  opacity: 0.5;
}

.nav-link-animated.active {
  color: #fff !important;
}

.nav-link-animated.active::before {
  transform: scaleX(1);
  opacity: 1;
}

.nav-icon {
  transition: transform 0.3s ease;
}

.nav-link-animated:hover .nav-icon {
  transform: translateY(-1px);
}

/* 為切換按鈕添加過渡效果 */
.navbar-toggler {
  transition: transform 0.2s ease;
}

.navbar-toggler:hover {
  transform: scale(1.05);
}

.navbar-toggler:active {
  transform: scale(0.95);
}

/* 響應式調整 */
@media (max-width: 767.98px) {
  .nav-link-animated {
    padding: 0.75rem 1rem;
  }

  .nav-link-animated::before {
    left: 0;
    right: 0;
    bottom: 0;
  }

  .nav-link-animated:hover::before {
    transform: scaleX(1);
  }
}

/* 添加導航展開/收起的過渡效果 */
.navbar-collapse {
  transition: height 0.35s ease;
}
</style>
