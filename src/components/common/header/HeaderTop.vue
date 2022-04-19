<template>
  <div class="header-top">
    <div class="navbar">
      <div class="logo">
        <a href="/"> <img src="/images/Logo.png" alt="" /></a>

        <q-tabs
          class="nav"
          v-model="one"
          indicator-color="transparent"
          active-color="black"
        >
          <q-tab class="nav-item" to="/" label="Как это работает" name="one" />
          <q-tab class="nav-item" to="/" label="Магазины" name="two" />
          <q-tab class="nav-item" to="/" label="Новости" name="three" />
          <q-tab class="nav-item" to="/" label="FAQ" name="four" />
        </q-tabs>
      </div>
      <div class="btn-group">
        <q-btn class="phone-number" flat>998 (90) 951-91-29</q-btn>
        <LangSwitcher />
      </div>
    </div>
  </div>
</template>

<script>
import LangSwitcher from "src/components/partials/LangSwitcher.vue";

import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "MainLayout",
  components: {
    LangSwitcher,
  },
  setup() {
    return {
      one: ref("one"),
    };
  },
});
</script>

<style lang="scss" scoped>
.header-top {
  padding: 34px 0;
  background-color: #f7f7f7;
}
.navbar {
  padding: 0 40px;
  margin: 0 auto;

  align-items: center;
  justify-content: space-between;
  display: flex;
  width: 1240px;
  height: 69px;
  border-radius: 75px;
  background: #ffffff;
  border: 0.5px solid #e0e0e0;
  .logo {
    display: flex;
    align-items: center;
    .nav {
      margin-left: 35px;
      display: flex;
      list-style-type: none;
      .nav-item {
        background-color: #fff;
        margin-right: 40px;
        padding: 0;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #a8aab0;
        &:hover {
          background-color: #fff;
        }
      }
    }
  }
  .btn-group {
    .phone-number {
      font-weight: 600;
      font-size: 16px;
      line-height: 19px;
    }
  }
}
</style>
