<script setup>
import IconButton from '../components/IconButton.vue';
import config from '../config';

defineProps({
  tip: {
    type: String,
    default: 'Scroll to see more',
  },
});

const tipmap = {
  '': 'Scroll to see more',
  profile: 'Continue to see profile',
  project: 'Continue to see projects',
  contact: 'Continue to see contact',
};
</script>

<template>
  <div class="home-wrapper">
    <IconButton
      label="fas fa-chevron-up"
      color="var(--color-on-main-card-secondary)"
      layerColor="rgba(0,0,0,0)"
      style="cursor: default"
    >
    </IconButton>
    <div class="ui-tips">{{ tipmap[tip] }}</div>
    <div class="bio">{{ config.BIO }}</div>
  </div>
</template>

<style scoped>
.home-wrapper {
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
}

.ui-tips {
  color: var(--color-on-main-card-secondary);
  font-size: 20px;
}

.bio {
  color: var(--color-on-main-card-primary);
  font-size: 25px;
  margin-top: 20px;
  text-align: center;
  width: 80%;
}
</style>
