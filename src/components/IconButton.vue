<script setup>
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    default: 40,
  },
  color: {
    type: String,
    default: 'var(--color-on-surface-secondary)',
  },
  layerColor: {
    type: String,
    default: 'var(--color-on-surface-secondary)',
  },
});

const emits = defineEmits(['click']);
</script>

<script>
export default {
  name: 'IconButton',
  install(app) {
    app.component('IconButton', this);
  },
};
</script>

<template>
  <div
    class="wrapper"
    :style="{
      width: `${size}px`,
      height: `${size}px`,
    }"
    @click="$emit('click')"
  >
    <div
      class="state-layer"
      :style="{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: layerColor,
      }"
    ></div>
    <div
      class="icon"
      :style="{
        fontSize: `${size * 0.7}px`,
        width: `${size}px`,
        height: `${size}px`,
        color,
      }"
    >
      <i :class="label"></i>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.state-layer {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  border-radius: 100%;
  z-index: 0;
}

.wrapper:hover .state-layer {
  opacity: 0.1;
}

.wrapper:active .state-layer {
  opacity: 0.2;
}

.icon {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  transition: color 1s ease-in-out;
  z-index: 1;
}
</style>
