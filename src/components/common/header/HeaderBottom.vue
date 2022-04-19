<template>
  <div class="header-bottom">
    <q-tabs
      v-model="tab"
      indicator-color="transparent"
      active-color="black"
      class="navbar text-grey-5"
    >
      <q-tab class="tab" name="mails" label="Для покупателей" />
      <q-tab class="tab" name="alarms" label="Для бизнеса" />
      <q-tab class="tab" name="movies" label="Для инвесторов" />
    </q-tabs>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    return {
      tab: ref("mails"),
    };
  },
};
</script>

<style lang="scss" scoped>
.header-bottom {
  background-color: #f7f7f7;
}
.navbar {
  padding: 4px;
  width: 470px;
  height: 50px;
  margin: 0 auto;
  border: 0.5px solid #e0e0e0;
  background-color: #fff;
  box-sizing: border-box;
  border-radius: 33px;
  .q-tab--active {
    background-color: #e1e1e1 !important;
  }
  .q-tab--inactive {
    background-color: #fff !important;
    height: 40px;
    border-radius: 24px;
  }

  .q-focus-helper:after .tab {
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    background: #f7f8fa;
    border-radius: 33px;
  }
}
</style>
<style lang="scss">
body.desktop .header-bottom .q-focus-helper {
  height: 83%;
}
.header-bottom .navbar .q-tab--active[data-v-0ddca066] {
  min-height: 83%;
  border-radius: 33px;
}
</style>
