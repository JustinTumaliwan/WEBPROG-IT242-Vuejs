<template>
  <div class="grape">
    <h2>{{ name }}</h2>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Grapes & Oranges',
      message: 'I like to eat Grapes and Oranges Lol'
    }
  }
};
</script>

<style>
  .grape {
    border: dashed black 1px;
    display: inline-block;
    margin: 10px;
    padding: 10px;
    background-color: orange;
  }
</style>