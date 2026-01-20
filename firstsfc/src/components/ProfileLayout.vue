<template>
  <div class="container">
    <header class="head"><slot name="header"></slot></header>
    <nav class="nav"><slot name="nav"></slot></nav>
    <main class="content"><slot name="content"></slot></main>
    <aside class="sidebar"><slot name="sidebar"></slot></aside>
    <aside class="ads"><slot name="ads"></slot></aside>
    <footer class="footer"><slot name="footer"></slot></footer>
  </div>
</template>

<style>
.container {
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
  gap: 20px;
  color: black;
}

.container > * {
  border: 1px solid black;
  background-color: lightblue;
  padding: 10px;
  grid-column: col-start / span 12;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

@media (min-width: 576px) {
  .sidebar {
    grid-column: col-start / span 3;
    grid-row: 3;
  }
  .ads {
    grid-column: col-start / span 3;
  }
  .content, .footer {
    grid-column: col-start 4 / span 9;
  }
}

@media (min-width: 768px) {
  .nav {
    grid-column: col-start / span 2;
    grid-row: 2 / 4;
  }
  .content {
    grid-column: col-start 3 / span 8;
    grid-row: 2 / 4;
  }
  .sidebar {
    grid-column: col-start 11 / span 2;
  }
  .ads {
    grid-column: col-start 11 / span 2;
  }
  .footer {
    grid-column: col-start / span 12;
  }
}
</style>