<template>
  <template v-for="(menu, k) in options">
    <q-btn
      v-if="menu.type === 'link'"
      flat
      class="q-ma-md primary-text menuIteratorItem"
      :outline="menu.outline"
      :rounded="menu.rounded"
      :label="menu.label"
      :icon-right="menu.iconRight"
      :aria-label="menu.ariaLabel"
      :class="menu.class"
      :style="menu.style"
      :key="k"
      @click="scrollPageTo(menu.scrollTo)"
    />
    <q-btn
      v-if="['action'].includes(menu.type)"
      flat
      class="q-ma-md primary-text menuIteratorItem"
      :outline="menu.outline"
      :rounded="menu.rounded"
      :label="menu.label"
      :icon-right="menu.iconRight"
      :aria-label="menu.ariaLabel"
      :class="menu.class"
      :style="menu.style"
      :key="k"
      @click="toggleLang"
    />
    <q-btn
      v-if="['download'].includes(menu.type)"
      flat
      target="_blank"
      class="q-ma-md primary-text menuIteratorItem TopNavBtn_download"
      :outline="menu.outline"
      :rounded="menu.rounded"
      :label="menu.label"
      :icon-right="menu.iconRight"
      :aria-label="menu.ariaLabel"
      :class="menu.class"
      :href="menu.link"
      :style="menu.style"
      :key="k"
    />
  </template>
</template>

<script>
// import scrollPageTo from "src/composables/scrollPageTo.js";

import { useI18n } from "vue-i18n";
export default {
  props: {
    options: {
      type: Array,
      default: () => [],
    },
  },
  emits: ["toggleLang", "updateLeftDrawerOpen"],
  setup(props, { emit }) {
    const { locale } = useI18n({ useScope: "global" });
    function toggleLang() {
      locale.value = locale.value === "en-US" ? "es" : "en-US";
      emit("toggleLang", "inDrawer");
    }
    function scrollPageTo(navEl) {
      if (navEl) {
        emit("updateLeftDrawerOpen", navEl);
        // gtm.logPage(navEl);
      }
    }

    return {
      toggleLang,
      scrollPageTo,
    };
  },
};
</script>

<style>
.leftDrawer .TopNavBtn_download {
  width: 87%;
}
.leftDrawer .menuIteratorItem {
  width: 89%;
}
</style>
