<script setup>
import config from '../config';
import IconButton from '../components/IconButton.vue';

const openLink = (url) => {
  window.open(url, '_blank');
};
</script>

<template>
  <div class="contact-wrapper">
    <div class="contact-title">Contact</div>
    <div class="contact-items">
      <div class="contact-item" v-for="contact in config.CONTACTS" :key="contact.label">
        <div class="contact-header" @click="openLink(contact.url)">
          <div class="icon" style="display: flex; justify-content: center">
            <IconButton
              :label="contact.icon"
              :size="30"
              color="var(--color-on-main-card-primary)"
              layerColor="rgba(0,0,0,0)"
            />
          </div>
          <div class="contact-label">{{ contact.label }}</div>
        </div>
        <div class="contact-content">{{ contact.content }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-wrapper {
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: 100px;
}

.contact-title {
  color: var(--color-on-main-card-primary);
  font-size: 35px;
  font-weight: 600;
  margin: 60px 0px;
}

.contact-items {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.contact-header {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}

.contact-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.contact-label {
  color: var(--color-on-main-card-primary);
  font-size: 25px;
  font-weight: 600;

  padding-bottom: 10px;
  cursor: pointer;
  user-select: none;
}

.contact-content {
  color: var(--color-on-main-card-secondary);
  font-size: 30px;
}
</style>
