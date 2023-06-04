<script setup>
import Topbar from './components/Topbar.vue';
import AvatarInfo from './components/AvatarInfo.vue';

import { ref, watch, Transition } from 'vue';
import { useRouter } from 'vue-router';

const cardExpanded = ref(false);
const curNav = ref('home');
const router = useRouter();

const lastView = ref('');
let mutex = false;

addEventListener('wheel', (e) => {
  if (mutex) return;
  if (e.deltaY > 0) {
    if (curNav.value === 'home') {
      curNav.value = lastView.value || 'profile';
    }
  } else {
    if (curNav.value === 'home') return;
    lastView.value = curNav.value;
    curNav.value = 'home';
  }
});

watch(curNav, (curNav) => {
  if (mutex) return;

  // deal cardExpand animation
  if (curNav === 'home') {
    cardExpanded.value = false;
  } else {
    cardExpanded.value = true;
  }
  // router
  mutex = true;
  setTimeout(() => {
    router.push({ name: curNav });
    mutex = false;
  }, 0);
});
</script>

<template>
  <div class="header">
    <Topbar :cardExpanded="cardExpanded" v-model:curNav="curNav" />
  </div>
  <div class="content">
    <div
      class="main"
      :style="{
        height: cardExpanded ? '0px' : '250px',
        opacity: cardExpanded ? 0 : 1,
      }"
    >
      <AvatarInfo displayStyle="compact" />
    </div>
    <div
      class="view-state-layer"
      :style="{
        height: cardExpanded ? '100vh' : '200px',
        borderRadius: cardExpanded ? '0' : '65px 65px 0 0',
      }"
    >
      <div
        class="card-content"
        :style="{
          opacity: curNav !== 'home' ? 1 : 0.5,
        }"
      >
        <router-view v-slot="{ Component, route }">
          <transition
            mode="out-in"
            :enter-active-class="route.meta.transitionEnter"
            :leave-active-class="route.meta.transitionLeave"
          >
            <component :is="Component" :tip="lastView" />
          </transition>
        </router-view>
      </div>
    </div>
    <div class="router-wrapper"></div>
  </div>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
}

.main {
  transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.content {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  height: 100vh;
}

.view-state-layer {
  position: relative;
  z-index: 0;
  background-color: var(--color-main-card);
  width: 100%;
  transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1);
  overflow: hidden;
}

.card-content {
  position: absolute;
  top: 20px;
  left: 0;
  width: 100%;
  color: var(--color-on-main-card-secondary);
  font-size: 3rem;
  transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1);
  text-align: center;
}

.animate__fadeInUp {
  animation-duration: 0.65s;
}
.animate__fadeOut {
  animation-duration: 0.55s;
}
</style>
