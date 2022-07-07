<template>
  <div>

  </div>
</template>

<script lang="ts" setup>
import {onMounted} from "vue";
import {useUserStore} from "@/stores/users-store";

const userStore = useUserStore()

onMounted(()=>{
  userStore.getUsers()
})

</script>

<style lang="scss" scoped>

</style>
