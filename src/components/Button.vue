<template>
  <button class="button">
    <span v-if="icon">
      <img :src="icon.src" :alt="icon.alt"/>
    </span>
    {{ label }}
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Sidebar extends Vue {
  @Prop()
  public label!: string

  @Prop()
  public icon: object | undefined = undefined
}
</script>

<style scoped>
.button {
  display: block;
}
</style>
