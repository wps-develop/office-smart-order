<script setup lang="ts">
import { RouterView } from "vue-router";
import { useMasterStorage } from "./common/storages/useMasterStorage";
import { onMounted } from "vue";
const masterStorage = useMasterStorage();
onMounted(() => {
  masterStorage.getStaff();
});
</script>

<template>
  <RouterView />
</template>
