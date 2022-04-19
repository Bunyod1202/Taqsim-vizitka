import { boot } from "quasar/wrappers";
import { addMethodsForRounding } from "src/utils";
import { SwiperSlide } from "swiper/vue";
import Notifications from "@kyvg/vue3-notification";

export default boot(({ app }) => {
  addMethodsForRounding();

  app.component("swiper-slide", SwiperSlide);

  // app.config.compilerOptions.isCustomElement = (tag) =>
  //   tag.startsWith("swiper-slide");

  app.use(Notifications);
});
