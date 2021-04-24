<template>
  <div class="dashboard-container">
    <div class="dashboard-sidebar">
      <Sidebar/>
    </div>
    <div class="dashboard-view">
      <Navbar/>
      <Map/>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import Navbar from '@/components/Navbar.vue'
import Map from '@/components/Map.vue'

export default {
  name: 'Dashboard',
  components: {
    Sidebar,
    Navbar,
    Map
  }
}
</script>

<style scoped>
.dashboard-container {
  display: flex;
}
.dashboard-sidebar {
  flex: 1;
}
.dashboard-view {
  display: flex;
  flex-direction: column;
  flex: 4;
  height: 100vh;
  background: var(--color-neutral1);
  overflow: hidden;
  border-radius: 16px 0 0 16px;
}
</style>
