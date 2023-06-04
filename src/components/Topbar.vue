<script setup>
import { watch, ref, defineModel } from 'vue';
import IconButton from './IconButton.vue';
import config from '../config.js';

const props = defineProps({
  cardExpanded: {
    type: Boolean,
    default: false,
  },
});

defineModel({
  prop: 'curNav',
  event: 'update:curNav',
});

const primaryColor = ref('var(--color-on-surface-secondary)');
const secondaryColor = ref('var(--color-on-surface-secondary)');
const iconColor = ref('var(--color-on-surface-secondary)');
const iconLayerColor = ref('var(--color-on-surface-secondary)');

watch(
  () => props.cardExpanded,
  (cardExpanded) => {
    primaryColor.value = cardExpanded
      ? 'var(--color-on-main-card-primary)'
      : 'var(--color-on-surface-primary)';
    secondaryColor.value = cardExpanded
      ? 'var(--color-on-main-card-secondary)'
      : 'var(--color-on-surface-secondary)';
    iconColor.value = cardExpanded
      ? 'var(--color-on-main-card-primary)'
      : 'var(--color-on-surface-secondary)';
    iconLayerColor.value = cardExpanded
      ? 'var(--color-on-main-card-secondary)'
      : 'var(--color-on-surface-secondary)';
  },
  {
    immediate: true,
  },
);

const openLink = (link) => {
  window.open(link, '_blank');
};
</script>

<template>
  <div class="topbar-wrapper">
    <div class="nav">
      <div
        class="nav-item"
        @click="$emit('update:curNav', 'home')"
        :style="{
          color: $route.path === '/' ? primaryColor : secondaryColor,
        }"
      >
        Home
      </div>
      <div
        class="nav-item"
        @click="$emit('update:curNav', 'profile')"
        :style="{
          color: $route.path === '/profile' ? primaryColor : secondaryColor,
        }"
      >
        Profile
      </div>
      <div
        class="nav-item"
        @click="$emit('update:curNav', 'project')"
        :style="{ color: $route.path === '/project' ? primaryColor : secondaryColor }"
      >
        Projects
      </div>
      <div
        class="nav-item"
        @click="$emit('update:curNav', 'contact')"
        :style="{ color: $route.path === '/contact' ? primaryColor : secondaryColor }"
      >
        Contact
      </div>
    </div>
    <div class="social-icons">
      <IconButton
        v-for="link in config.SOCIAL_LINKS"
        :key="link.label"
        :label="link.label"
        :color="primaryColor"
        :layerColor="secondaryColor"
        @click="openLink(link.url)"
      />
    </div>
  </div>
</template>

<style scoped>
.topbar-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 40px;
}

.nav {
  display: flex;
  align-items: center;
  font-size: 25px;
  gap: 25px;
  cursor: pointer;
  user-select: none;
}

.nav-item {
  text-decoration: none;
  font-weight: 600;
  transition: color 0.5s ease-in-out;
}

.social-icons {
  display: flex;
  gap: 5px;
}
</style>
