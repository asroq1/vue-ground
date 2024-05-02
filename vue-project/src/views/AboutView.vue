<template>
  <div>about view</div>
  <p>{{ $router.path }}</p>
  <button class="btn btn-primary" @click="$router.push('/')">홈으로 이동</button>
</template>

<script setup>
import { useRoute } from 'vue-router'

const router = useRoute()
console.log('router', router)
</script>

<style lang="scss" scoped></style>
