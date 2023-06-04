<script setup>
import ProjectInfo from '../components/ProjectInfo.vue';
import config from '../config';
</script>

<template>
  <div class="projects-wrapper">
    <div class="projects-content">
      <ProjectInfo v-for="project in config.PROJECTS" :key="project.name" :info="project" />
    </div>
  </div>
</template>

<style scoped>
.projects-wrapper {
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
}

.projects-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  width: 60%;
}
</style>
