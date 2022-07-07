<template>
    <button
        class="button"
        :type="type"
        :disabled="disabled"
    >
      <slot></slot>
    </button>
</template>

<script lang="ts" setup>
defineProps(
    {
      type: {
        type: String,
        default: 'submit'
      },
      disabled: {
        type: Boolean,
        default: false,
      },
    }
)
</script>

<style lang="scss" scoped>
.button{
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100px;
  margin: 0 auto;
  padding: 4px;
  font-size: 16px;
  line-height: 26px;
  color: $btn_primary_text_color;
  background-color: $btn_normal_color;
  border: none;
  border-radius: 80px;

  &:hover{
    background-color: $btn_normal_hover;
  }

  &:disabled{
    color: $btn_secondary_text_color;
    background-color: $btn_normal_disabled;
  }
}
</style>
