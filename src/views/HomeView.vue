<template>
<div>
  <the-header></the-header>
  <main>
    <the-hero />
    <users-list/>
  </main>
</div>
</template>

<script setup lang="ts">

import TheHero from "@/components/hero/TheHero.vue";
import TheHeader from "@/components/header/TheHeader.vue";
import UsersList from "@/components/users/UsersList.vue";
</script>


