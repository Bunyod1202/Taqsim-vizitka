<template>
  <q-layout view="hHh lpR fFf">
    <HeaderTop />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import HeaderTop from "components/common/header/HeaderTop.vue";

export default defineComponent({
  name: "MainLayout",
  components: {
    HeaderTop,
  },
  setup() {
    return {};
  },
});
</script>
