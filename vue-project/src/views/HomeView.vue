<template>
  <div>home view</div>
  <p>{{ $router.path }}</p>
  <button class="btn btn-primary" @click="toAbout">About 이동</button>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const toAbout = () => {
  router.push('/about')
}
</script>

<style lang="scss" scoped></style>
