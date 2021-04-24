<template>
  <div class="sidebar-container">
    <div class="sidebar-logo">
      <img src="../assets/logo-light.svg" alt="Moto Dashboard"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Sidebar extends Vue {
  @Prop() private msg!: string
}
</script>

<style scoped>
.sidebar-container {
  color: var(--color-neutral1);
  font-weight: 500;
}
.sidebar-logo {
  height: 48px;
  padding: 25px;
  border-bottom: 2px solid #1C110F;
}
</style>
