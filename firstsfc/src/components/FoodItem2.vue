<template>
  <div class="lansones">
    <h2>{{ name }}</h2>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Lansones',
      message: 'I like to eat lansones Lol'
    }
  }
};
</script>

<style>
  .lansones {
    border: dashed black 1px;
    display: inline-block;
    margin: 10px;
    padding: 10px;
    background-color: yellow;
  }
</style>