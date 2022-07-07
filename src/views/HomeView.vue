<template>
  <div>
    <the-header></the-header>
    <main>
      <the-hero/>
      <users-list/>

      <base-btn
          :style="{display: `${userStore.isLastPage ? 'none' : 'flex'}` }"
          @click="onClickLoadMore"
      >
        Load More
        </base-btn>

    </main>
  </div>
</template>

<script lang="ts" setup>
import TheHero from "@/components/hero/TheHero.vue";
import TheHeader from "@/components/header/TheHeader.vue";
import UsersList from "@/components/users/UsersList.vue";
import BaseBtn from "@/components/UI/BaseBtn.vue";

import {onMounted} from "vue";
import {useUserStore} from "@/stores/users-store";

const userStore = useUserStore()

onMounted(() => {
  userStore.getUsers()
})


const onClickLoadMore = () => {
  userStore.getUsers()
}
</script>


