<template>
  <div class="navbar">
    <nav class="navbar-links">
      <router-link class="navbar-links-item" to="/dashboard">
        <svg class="navbar-links-item-icon" height="20" viewBox="0 0 24 20" width="24" xmlns="http://www.w3.org/2000/svg">
          <path d="m3 11h8v-10h-8zm0 8h8v-6h-8zm10 0h8v-10h-8zm0-18v6h8v-6z"/>
        </svg>
        Dashboard
      </router-link>
      <router-link class="navbar-links-item" to="/settings">
        <svg class="navbar-links-item-icon" height="20" viewBox="0 0 24 20" width="24" xmlns="http://www.w3.org/2000/svg">
          <path d="m19.1401 10.94c.04-.3.06-.61.06-.94001 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.539996c-.04-.24-.24-.41-.48-.41h-3.84c-.23999 0-.42999.17-.46999.41l-.36 2.539996c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22l-1.91 3.32c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94 0 .31001.02.64001.07.94001l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.47999.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zm-7.14 2.66c-1.98 0-3.59999-1.62-3.59999-3.60001 0-1.98 1.61999-3.6 3.59999-3.6s3.6 1.62 3.6 3.6c0 1.98001-1.62 3.60001-3.6 3.60001z"/>
        </svg>
        Settings
      </router-link>
    </nav>
    <div class="navbar-user">
      <div class="navbar-user-details">
        <span class="navbar-user-details-name">
          Human Person
        </span>
        <span class="navbar-user-details-email">
          noreply@gmail.com
        </span>
      </div>
      <router-link to="/logout">
        Logout
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Navbar extends Vue {
  mounted () {
    // Do thing
  }
}
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  height: 48px;
  padding: 25px;
  font-weight: 600;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, .1),
              0 2px 8px rgba(0, 0, 0, .1);
  z-index: 2;
}
.navbar-links {
  flex: 1;
}
.navbar-links-item {
  display: inline-flex;
  align-items: center;
  padding: 12px;
  text-decoration: none;
  color: var(--color-neutral4);
  border-radius: 8px;
  border: 2px solid var(--color-neutral1);
}
.navbar-links-item:focus,
.navbar-links-item:active {
  background: var(--color-accent3);
  color: var(--color-neutral5);
  border: 2px solid var(--color-neutral5);
}
.navbar-links-item:focus .navbar-links-item-icon,
.navbar-links-item:active .navbar-links-item-icon {
  fill: var(--color-neutral5);
}
.navbar-links-item-icon {
  height: 24px;
  margin-right: 5px;
  fill: var(--color-neutral4);
}
.navbar-links .router-link-active {
  background: var(--color-neutral2);
  color: var(--color-neutral5);
  border: 2px solid var(--color-neutral2);
}
.navbar-links .router-link-active .navbar-links-item-icon {
  fill: var(--color-neutral5);
}
</style>
