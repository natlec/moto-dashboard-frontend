<template>
  <div class="settings-container">
    <div class="settings-sidebar">
      <Sidebar/>
    </div>
    <div class="settings-view">
      <Navbar/>
      <div class="settings-view-content">
        <p>Hello</p>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Settings',
  components: {
    Sidebar,
    Navbar
  }
}
</script>

<style scoped>
.settings-container {
  display: flex;
}
.settings-sidebar {
  flex: 1;
}
.settings-view {
  display: flex;
  flex-direction: column;
  flex: 4;
  height: 100vh;
  background: var(--color-neutral1);
  overflow: hidden;
  border-radius: 16px 0 0 16px;
}
.settings-view-content {
  padding: 25px;
}
</style>
