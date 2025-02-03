<script setup>
import NavigationBar from '@/components/NavigationBar.vue'
</script>

<template>
  <NavigationBar />
  <div class="container px-4">
    <div
      class="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:shadow-xl pt-5"
    >
      <div class="p-6 md:p-8">
        <div class="text-center space-y-4">
          <h3 class="text-xl font-semibold text-gray-800">Welcome to UTCS Key Management System</h3>

          <p class="text-gray-600 leading-relaxed">
            This is the Key Management System of
            <a
              href="http://cs.utaipei.edu.tw"
              class="text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              UTCS
            </a>
          </p>

          <div class="bg-blue-50 rounded-lg p-4 mt-4">
            <p class="text-gray-700 leading-relaxed">
              Please follow the instructions from the staff in the office and provide the correct
              information.
            </p>
            <p class="text-gray-700 mt-2 font-medium">使用時請遵守系辦公室的規範。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
