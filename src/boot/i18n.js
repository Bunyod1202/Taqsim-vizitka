import { boot } from "quasar/wrappers";
import { createI18n } from "vue-i18n";
import messages from "src/i18n";
import pluralizationRules from "./pluralizationRules";

const i18n = createI18n({
  // locale: 'en-US',
  locale: "ru",
  fallbackLocale: "ru",
  // legacy: false,
  messages,
  pluralizationRules,
});

export { i18n };
export default boot(({ app }) => {
  // Set i18n instance on app
  app.use(i18n);
});
