<template>
  <q-layout class="page" view="hHh lpR fFf">
    <HeaderTop />
    <HeaderBottom />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import HeaderTop from "components/common/header/HeaderTop.vue";
import HeaderBottom from "components/common/header/HeaderBottom.vue";

export default defineComponent({
  name: "MainLayout",
  components: {
    HeaderTop,
    HeaderBottom,
  },
  setup() {
    return {};
  },
});
</script>
<style lang="scss" scoped></style>
