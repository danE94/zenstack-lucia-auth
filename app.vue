<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { provideHooksContext } from "./lib/hooks";

provideHooksContext({
  endpoint: "http://localhost:3000/api/model",
});
</script>
