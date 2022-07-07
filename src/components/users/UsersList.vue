<template>
  <ul class="list">
    <li class="list_item"
        v-for="user in userStore.users"
        :key="user.id"
    >
      <img
          class="avatar"
          :src="user.photo"
          alt="User avatar"
      >
      <p class="sub">{{ user.name }}</p>
      <p class="sub">{{ user.position }}</p>
      <p class="sub">{{ user.email }}</p>
      <p class="sub">{{ user.phone }}</p>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import {useUserStore} from "@/stores/users-store";

const userStore = useUserStore()
</script>

<style lang="scss" scoped>
p{
  white-space: nowrap;
  overflow: hidden;
}
.list {
  margin-top: -20px;
  margin-left: -20px;

  &_item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    margin-left: 20px;
    padding: 20px;
    font-size: 16px;
    line-height: 26px;
    background-color: $accent_background_color;
    border-radius: 10px;
  }

  .sub{
    max-width: 100%;
    margin-bottom: 20px;
    text-overflow: ellipsis;
  }
}

.avatar {
  width: 70px;
  height: 70px;
  margin-bottom: 20px;
  border-radius: 50%;
}
</style>
