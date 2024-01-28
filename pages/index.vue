<script lang="ts" setup>
import { useFindManyPost } from "~/lib/hooks";

const user = useUser();
async function logout() {
  await useFetch("/api/auth/logout", {
    method: "POST",
  });
  navigateTo("/login");
}

const {
  data: posts,
  error,
  isLoading,
} = useFindManyPost({ include: { user: true } });
</script>

<template>
  <h1>Current User:</h1>
  <br />
  {{ user }}
  <br />
  <br />
  <form @submit.prevent="logout">
    <button>Sign out</button>
  </form>
  <div>
    loading:{{ isLoading }}
    <br />
    error: {{ error }}
    <br />
    <div v-if="posts && posts.length > 0">posts: {{ posts }}</div>
  </div>
</template>
