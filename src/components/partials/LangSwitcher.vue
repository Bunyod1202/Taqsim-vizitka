<template>
  <q-btn-dropdown
    dropdown-icon="keyboard_arrow_down"
    no-caps
    class="dropdown text-black lang-switcher"
    unelevated
    :class="{ 'full-width': fullWidth }"
  >
    <template #label>
      <img
        draggable="false"
        :src="currentLocale.icon"
        :alt="currentLocale.locale + '-locale-icon'"
      />
      <span class="name-title">
        {{ currentLocale.name }}
      </span>
    </template>
    <q-list class="list">
      <q-item
        v-for="locale in availableLocales"
        :key="locale.code"
        clickable
        v-close-popup
        @click="switchLang(locale)"
      >
        <q-item-section
          class="item-section"
          avatar
          style="min-width: 20px; padding-right: 6px"
        >
          <img
            :src="locale.icon"
            draggable="false"
            :alt="locale.code + '-locale-icon'"
          />
        </q-item-section>
        <q-item-section>
          <q-item-label>
            <span class="name-title">{{ locale.title }}</span>
          </q-item-label>
        </q-item-section>
        <q-item-section>
          <q-item-label>
            <span class="check"> <q-checkbox v-model="locale.check" /></span>
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-btn-dropdown>
</template>

<script>
import { defineComponent, computed, ref } from "vue";
import { useI18n } from "vue-i18n";
import { useStore } from "vuex";
const localeOptions = [
  {
    locale: "ru",
    name: "RYC",
    icon: "/images/flags/ru.png",
    title: "Русский",
    check: true,
  },
  {
    locale: "uz",
    name: "UZB",
    icon: "/images/flags/uz.png",
    title: "O’zbekcha",
    check: false,
  },
];
export default defineComponent({
  name: "DownloadAppDropdown",
  props: {
    fullWidth: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const { locale } = useI18n();
    const store = useStore();
    return {
      availableLocales: computed(() =>
        localeOptions.filter((lang) => lang.locale)
      ),
      currentLocale: computed(() =>
        localeOptions.find((i) => i.locale === locale.value)
      ),
      async switchLang(lang) {
        store.dispatch("setLanguage", lang);
      },
      check1: ref(true),
      check2: ref(false),
    };
  },
});
</script>
<style lang="scss" scoped>
.dropdown {
  width: 105px;
  padding: 7px 15px;
  border: 0.5px solid #e0e0e0;
  box-sizing: border-box;
  border-radius: 23.5px;
  .name-title {
    margin-left: 8px;
  }

  .item-section {
    border-color: aquamarine;
  }
}
</style>
<style lang="scss">
.absolute,
.absolute-full,
.absolute-center,
.absolute-bottom,
.absolute-left,
.absolute-right,
.absolute-top,
.absolute-top-left,
.absolute-top-right,
.absolute-bottom-left,
.absolute-bottom-right {
  border-radius: 50%;
}
.q-checkbox__inner--truthy .q-checkbox__bg,
.q-checkbox__inner--indet .q-checkbox__bg {
  background-color: #fff;
  border-radius: 50%;
}
.q-menu {
  min-width: 243px !important;
  padding: 8px;

  border-radius: 13px;
  .q-item {
    .check {
      margin-left: 50px;
    }
    padding: 14px 10px;
    height: 48px;
  }
}
.q-btn-dropdown--simple * + .q-btn-dropdown__arrow {
  color: #a8aab0;
}
.lang-switcher {
  color: #fff;
  &.full-width {
    .q-btn__content {
      justify-content: flex-start;
      .q-btn-dropdown__arrow {
        margin-left: auto;
      }
    }
  }
}
</style>
