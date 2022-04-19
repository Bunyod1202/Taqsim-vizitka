<template>
  <Swiper
    :modules="modules"
    :slides-per-view="sliderOption.slidesPerView"
    :space-between="sliderOption.spaceBetween"
    :breakpoints="sliderOption.breakpoints"
    @swiper="onSwiper"
    :navigation="sliderOption.navigation"
  >
    <slot />
  </Swiper>
</template>

<script>
import { Navigation } from "swiper";
import { Swiper } from "swiper/vue";
import { defineComponent, ref } from "vue";
import { onMounted } from "vue";
import "swiper/css";
import "swiper/css/navigation";
export default defineComponent({
  components: { Swiper },
  props: {
    options: {
      type: Object,
      default: () => {},
    },
  },
  setup(props) {
    const swiper = ref(null);

    const defaultOption = {
      spaceBetween: 20,
      slidesPerView: 1,
      clickable: true,
      isCustomNav: false,
      navigation: {
        nextEl: ".swiper-button-1",
        prevEl: ".swiper-button-2",
      },
    };
    const sliderOption = { ...defaultOption, ...props.options };

    const onSwiper = (sw) => {
      swiper.value = sw;
    };

    return {
      onSwiper,
      sliderOption,
      modules: [Navigation],
    };
  },
});
</script>
