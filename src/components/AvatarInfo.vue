<script setup>
import config from '../config';

const props = defineProps({
  displayStyle: {
    type: String,
    default: 'compact',
  },
});
</script>

<template>
  <div
    class="wrapper"
    :style="{
      flexDirection: displayStyle === 'compact' ? 'row' : 'column',
      alignItems: displayStyle === 'compact' ? 'flex-end' : 'center',
      justifyContent: displayStyle === 'compact' ? 'flex-start' : 'center',
      paddingLeft: displayStyle === 'compact' ? '60px' : '0px',
      gap: displayStyle === 'compact' ? '30px' : '30px',
    }"
  >
    <div
      class="avatar"
      :style="{
        width: displayStyle === 'compact' ? '170px' : '100px',
        height: displayStyle === 'compact' ? '170px' : '100px',
      }"
    >
      <img :src="config.AVATAR" alt="ava" draggable="false" />
    </div>
    <div class="info">
      <div
        class="name"
        :style="{
          fontSize: displayStyle === 'compact' ? '50px' : '34px',
          color:
            displayStyle === 'compact'
              ? 'var(--color-on-surface-main)'
              : 'var(--color-on-main-card-primary)',
        }"
      >
        {{ config.NAME }}
      </div>
      <div class="tags">
        <div
          v-for="tag in config.TAGS"
          class="tag-item"
          :style="{
            fontSize: displayStyle === 'compact' ? '30px' : '23px',
            color:
              displayStyle === 'compact'
                ? 'var(--color-on-surface-secondary)'
                : 'var(--color-on-main-card-secondary)',
          }"
        >
          {{ tag }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  user-select: none;
}

.avatar img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.name {
  font-weight: 500;
}

.tags {
  display: flex;
  flex-direction: row;
  gap: 10px;
}
</style>
