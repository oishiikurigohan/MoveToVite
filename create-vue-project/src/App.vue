<script setup lang="ts">
import { useStore } from '@/store/index'
const store = useStore()
</script>

<template>
  <p>Hello World!!!</p>
  <button id="button" @click="store.increment()">increment</button>
  <p id="current">current: {{ store.count }}</p>
  <p id="next">next: {{ store.next }}</p>
</template>

<style></style>
