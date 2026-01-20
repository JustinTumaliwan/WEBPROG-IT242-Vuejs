<template>
  <div class="info-block">
    <p class="paragraph">
      <slot></slot>
    </p>
  </div>
</template>

<style scoped>
.paragraph {
  text-align: center;
  font-family: 'Courier New', Courier, monospace;
  font-size: 18px;
  line-height: 1.6;
}
</style>