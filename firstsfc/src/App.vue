<script setup>
import ProfileLayout from './components/ProfileLayout.vue';
import InfoSection from './components/InfoSection.vue';
</script>

<template>
  <div class="main-wrapper">
    <h1>Personal Profile Web page</h1>
    
    <InfoSection>
      <strong>About Me</strong><br>
      Education / Achievements<br>
      STEM-IT SHS - Asia Pacific College<br>
      BSIT (SOCIT) - Asia Pacific College<br>
      <strong>Course:</strong> BSIT<br>
      <strong>IT Experience:</strong> Programming, Scrum Certificate, Coding<br>
      <strong>Hobbies:</strong> Games, Music, Gardening, Keyboard Making
    </InfoSection>

    <ProfileLayout>
      <template #header>Hobbies and Interests</template>
      
      <template #nav>
        <ul class="nav-links">
          <li><a href="https://en.wikipedia.org/wiki/Knives_Out">Knives Out</a></li>
          <li><a href="https://en.wikipedia.org/wiki/Spider-Man:_No_Way_Home">No Way Home</a></li>
          <li><a href="https://en.wikipedia.org/wiki/Spider-Man:_Across_the_Spider-Verse">Spider Verse</a></li>
        </ul>
      </template>

      <template #content>
        <h2>Movies and Impact</h2>
        <p>Movies are impactful because they serve as a powerful mirror and molder of human experience. They possess a unique ability to transport viewers into new realities.</p>
      </template>

      <template #sidebar>
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/Knives_Out_poster.jpeg/250px-Knives_Out_poster.jpeg" alt="knives out" class="responsive-img">
      </template>

      <template #ads>
        <img src="https://upload.wikimedia.org/wikipedia/en/b/b4/Spider-Man-_Across_the_Spider-Verse_poster.jpg" alt="spider verse" class="responsive-img">
      </template>

      <template #footer>
        The Movies above are one of my favorite movies to watch and binge
      </template>
    </ProfileLayout>
  </div>
</template>

<style>
body {
  background-color: lightgreen;
  margin: 0;
  padding: 20px;
  font-family: Verdana, Geneva, sans-serif;
}

h1 {
  color: navy;
  text-align: center;
  margin-bottom: 30px;
}

.responsive-img {
  width: 100%;
  height: auto;
  max-width: 200px;
  display: block;
  margin: 0 auto;
}

.nav-links {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>