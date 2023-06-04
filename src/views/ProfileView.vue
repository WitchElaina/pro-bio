<script setup>
import AvatarInfo from '../components/AvatarInfo.vue';
import config from '../config';
</script>

<template>
  <div class="profile-wrapper">
    <AvatarInfo displayStyle="full" />
    <div class="profile-title">Bio</div>
    <div class="profile-content">{{ config.BIO }}</div>
    <div class="profile-title">Skills</div>
    <div class="profile-content">{{ config.SKILLS }}</div>
  </div>
</template>

<style scoped>
.profile-wrapper {
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
}

.profile-title {
  color: var(--color-on-main-card-primary);
  font-size: 35px;
  font-weight: 600;
  margin-top: 60px;
}

.profile-content {
  color: var(--color-on-main-card-secondary);
  font-size: 25px;
  margin-top: 20px;
  text-align: center;
  width: 60%;
}
</style>
