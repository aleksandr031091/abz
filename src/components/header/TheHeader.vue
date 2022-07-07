<template>
  <header class="header">
    <img src="/icons/logo.svg"/>

    <div class="wrapper_options">
      <base-btn class="wrapper_options_item">Users</base-btn>
      <base-btn>Sign up</base-btn>
    </div>

  </header>
</template>

<script lang="ts" setup>
import BaseBtn from "@/components/UI/BaseBtn.vue";

</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  padding: 17px 16px;

  .wrapper_options {
    display: flex;
    align-items: center;

    .wrapper_options_item {
      margin-right: 10px;
    }
  }
}
</style>
