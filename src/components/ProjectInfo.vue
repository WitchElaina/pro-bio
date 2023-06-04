<script setup>
import IconButton from './IconButton.vue';
defineProps({
  info: {
    type: Object,
    required: true,
  },
});

const openLink = (link) => {
  window.open(link, '_blank');
};
</script>

<template>
  <div class="project-info-wrapper">
    <div class="project-info-title">{{ info.name }}</div>
    <div class="project-info-link" @click="openLink(info.link)">
      <IconButton
        label="fa-brands fa-github"
        :size="30"
        color="var(--color-on-main-card-primary)"
        layerColor="rgba(0,0,0,0)"
      />
      <div class="project-info-link-label">{{ info.fullName }}</div>
    </div>
    <div class="project-info-tag">{{ info.tags }}</div>
    <div class="project-info-description">{{ info.desp }}</div>
  </div>
</template>

<style scoped>
.project-info-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 80px;
  gap: 10px;
}

.project-info-title {
  color: var(--color-on-main-card-primary);
  font-size: 46px;
  font-weight: 600;
  margin-left: 5px;
}

.project-info-link {
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  user-select: none;
}

.project-info-link-label {
  color: var(--color-on-main-card-primary);
  font-size: 19px;
}

.project-info-tag {
  color: var(--color-on-main-card-secondary);
  background-color: var(--color-on-main-card-container);
  border-radius: 5px;
  padding: 0px 5px;
  line-height: 20px;
  font-size: 15px;

  margin-left: 5px;
}

.project-info-description {
  color: var(--color-on-main-card-secondary);
  font-size: 25px;

  margin-left: 5px;
}
</style>
