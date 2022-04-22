<template>
  <div class="container">
    <div class="row">
      <div class="box-title">
        <div class="title"><a href="">НОВОСТИ</a></div>
        <div class="text">Что нового в сервисе Taqsim</div>
      </div>
    </div>
    <div class="carousel">
      <Carousel :items-to-show="3" :wrap-around="true">
        <Slide v-for="slide in 5" :key="slide">
          <div class="carousel__item">
            <div class="card">
              <div class="card-header">
                <img src="/images/unsplash_Im7lZjxeLhg.png" alt="" />
              </div>
              <div class="card-body">
                <div class="title">Заголовок новости!</div>
                <div class="text">
                  Задача организации, в особенности же рамки и место обучения
                  кадров играет важную роль в формировании направлений
                  прогрессивного развития. Товарищи! сложившаяся структура...
                </div>
              </div>
              <div class="card-footer">
                <div class="data">
                  <q-icon name="calendar_month" />10.09.2021
                </div>
                <q-btn class="btn" label="Читать далее" flat />
              </div>
            </div>
          </div>
        </Slide>

        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide, Pagination } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "WrapAround",
  components: {
    Carousel,
    Slide,
    Navigation,
    Pagination,
  },
});
</script>
<style lang="scss" scoped>
.container {
  background-color: #fff;
  width: 100%;
  border-radius: 0px 0px 37px 37px;
  .box-title {
    margin-top: 30px;
    width: 100%;
    text-align: center;
    .title {
      a {
        text-decoration: none;
        color: #1084fa;
      }
    }
    .text {
      margin: 20px auto;
      font-weight: 700;
      font-size: 44px;
      line-height: 53px;
      width: 550px;
    }
  }
  .carousel {
    width: 1300px;
    margin: 0 auto;
    .carousel__item {
      min-height: 490px;
      width: 400px;
      background-color: white;
      font-size: 20px;
      border-radius: 8px;
      text-align: left;
      border: 1px solid #f2f2f2;
      box-sizing: border-box;
      border-radius: 22px;
      .card {
        padding: 24px;
        .card-body {
          .title {
            margin-top: 20px;
            font-weight: 600;
            font-size: 24px;
            line-height: 34px;
          }
          .text {
            margin-top: 20px;
            color: #a8aab0;
          }
        }
        .card-footer {
          margin-top: 40px;
          display: flex;
          justify-content: space-between;
          .btn {
            color: #1084fa;
          }
          .data {
            color: #a8aab0;
          }
        }
      }
    }

    .carousel__slide {
      padding: 10px;
    }
  }
}
</style>
