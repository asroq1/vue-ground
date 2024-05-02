<template>
  <div>포스트 리스트</div>
  <hr class="my-4" />
  <div class="row g-3">
    <div v-for="post in posts" :key="post.id" class="col-4">
      <PostItem
        :title="post.title"
        :content="post.content"
        :createdAt="post.createdAt"
        @click="toPost(post.id)"
      />
    </div>
  </div>
</template>

<script setup>
import PostItem from '@/components/posts/PostItem.vue'
import { ref } from 'vue'
import { getPosts } from '../../apI/post'
import { useRouter } from 'vue-router'

const posts = ref([])
const router = useRouter()

const fetchPosts = () => {
  posts.value = getPosts()
}

fetchPosts()

const toPost = (id) => {
  router.push(`/posts/${id}`)
}
</script>

<style lang="scss" scoped></style>
