<script setup lang="ts">
import { useStore } from 'vuex'
const store = useStore()
</script>

<template>
  <p>Hello World!!!</p>
  <button id="button" @click="store.commit('increment')">increment</button>
  <p id="current">current: {{ store.state.count }}</p>
  <p id="next">next: {{ store.getters.next }}</p>
</template>

<style></style>
