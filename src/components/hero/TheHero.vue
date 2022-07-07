<template>
  <div class="hero">

    <h1 class="title">Test assignment for front-end developer</h1>

    <p class="description">What defines a good front-end developer is
      one that has skilled knowledge of HTML,
      CSS, JS with a vast understanding of User
      design thinking as they'll be building web
      interfaces with accessibility in mind. They
      should also be excited to learn, as the world of Front-End Development
      keeps evolving.
    </p>

    <base-btn class="submit_btn">Sign up</base-btn>

  </div>
</template>

<script lang="ts" setup>
import BaseBtn from "@/components/UI/BaseBtn.vue";
</script>

<style lang="scss" scoped>

.hero {
  //height: 500px;
  padding: 40px 16px 71px;
  text-align: center;
  background-image: url("/images/hero-360.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  color: $secondary_text_color;

  .title {
    margin-bottom: 21px;
    font-size: 40px;
    line-height: 40px;
  }

  .description {
    font-size: 16px;
    line-height: 26px;
    margin-bottom: 32px;
  }

  .submit_btn {

  }
}
</style>
