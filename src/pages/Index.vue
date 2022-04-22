<template>
  <div class="home-page">
    <div class="container container1">
      <div class="row">
        <div class="banners">
          <h1 class="text">Taqsim — тысячи товаров в рассрочку</h1>
          <div class="title">
            Мы — торговая площадка с правильными принципами, где можно найти
            широкий ассортимент товаров, который точно не оставит вас
            равнодушным.
          </div>
          <q-btn class="btn-primary btn" label="Начать покупки" />
        </div>
      </div>
      <div class="row carousel1">
        <Carousel :items-to-show="9" :wrap-around="true">
          <Slide v-for="item in slide" :key="item">
            <div class="carousel__item" :class="item.class">
              <img :src="item.src" alt="" />
            </div>
          </Slide>
        </Carousel>
        <Carousel :items-to-show="9" :wrap-around="true">
          <Slide v-for="item in slide" :key="item">
            <div class="carousel__item" :class="item.class">
              <img :src="item.src" alt="" />
            </div>
          </Slide>
        </Carousel>
      </div>
      <div class="bottom"></div>
    </div>
    <div class="container container2">
      <div class="row">
        <Steps />
      </div>
      <div class="row color">
        <div class="bordr1"></div>
        <div class="bordr2"></div>
      </div>
      <div class="row">
        <div class="carousel">
          <div class="text"><a href="">Магазины</a></div>
          <div class="titlee">Берите в рассрочку у наших партнёров</div>
          <div class="titl">
            В нашей системе зарегистрировано более 100 магазинов по всей
            Республике
          </div>
          <Carousel :itemsToShow="4" :wrapAround="true">
            <Slide v-for="item in slides" :key="item">
              <div class="carousel__item">
                <div class="card">
                  <div class="model">
                    <div class="logo">
                      <img src="/images/brend/image 3.png" alt="" />
                    </div>
                    <div class="name">Mediapark</div>
                    <div class="madel">Электроника</div>
                    <div class="step">
                      <q-rating
                        v-model="ratingModel"
                        size="2em"
                        max="5"
                        color="yellow-5"
                        icon="star_border"
                        icon-selected="star"
                      />
                      <span>{{ ratingModel }}/5</span>
                    </div>
                    <div class="link">
                      <q-btn
                        class="btn"
                        icon-right="navigate_next"
                        flat
                        label="Перейти на сайт"
                        no-caps
                      />
                    </div>
                  </div>
                  <div class="img">
                    <img src="/images/brend/image 54.png" alt="" />
                  </div>
                  <div class="images">
                    <div class="col">
                      <div class="img1">
                        <img src="/images/brend/image 54 (1).png" alt="" />
                      </div>
                      <div class="img1">
                        <img src="/images/brend/image 54 (2).png" alt="" />
                      </div>
                    </div>
                    <div class="col">
                      <div class="img1">
                        <img src="/images/brend/image 54 (3).png" alt="" />
                      </div>
                      <div class="img1">
                        <img src="/images/brend/image 54 (4).png" alt="" />
                      </div>
                    </div>
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
      <div class="row color">
        <div class="bordr1"></div>
      </div>
      <div class="row">
        <Carousels />
      </div>
      <div class="row">
        <SwiperCarousel />
      </div>
      <div class="row"></div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent, defineComponent, ref } from "vue";
import { Carousel, Slide, Navigation, Pagination } from "vue3-carousel";
import Carousels from "src/components/Carousels.vue";
import SwiperCarousel from "src/components/UI/SwiperCarousel.vue";
import Steps from "src/components/Steps.vue";
import "vue3-carousel/dist/carousel.css";
export default defineComponent({
  name: "PageIndex",
  components: {
    Carousel,
    Slide,
    Steps,
    Navigation,
    Pagination,
    Carousels,
    SwiperCarousel,
  },
  setup() {
    const ratingModel = ref(4);
    const slide = [
      {
        src: "/images/cards/1 7 1.png",
        class: "a1",
      },
      {
        src: "/images/cards/1 7 (2).png",
        class: "a2",
      },
      {
        src: "/images/cards/1 7 (3).png",
        class: "a3",
      },
      {
        src: "/images/cards/1 7 (4).png",
        class: "a31",
      },
      {
        src: "/images/cards/1 7 (5).png",
        class: "a4",
      },
      {
        src: "/images/cards/1 7 (6).png",
        class: "a5",
      },
      {
        src: "images/cards/1 7 (7).png",
        class: "a6",
      },
      {
        src: "images/cards/1 7 (8).png",
        class: "a7",
      },
      {
        src: "images/cards/1 7 (9).png",
        class: "a8",
      },
      {
        src: "images/cards/1 7 (10).png",
        class: "a9",
      },
      {
        src: "images/cards/1 7 (11).png",
        class: "a10",
      },
      {
        src: "images/cards/1 7 (12).png",
        class: "a11",
      },
      {
        src: "images/cards/1 7 (13).png",
        class: "a12",
      },
      {
        src: "images/cards/1 7 (14).png",
        class: "a13",
      },
      {
        src: "images/cards/1 7 (15).png",
        class: "a14",
      },
      {
        src: "images/cards/1 7 (16).png",
        class: "a15",
      },
    ];
    const slides = [{ s: "s" }, { s: "s" }, { s: "s" }, { s: "s" }, { s: "s" }];
    return {
      Carousel,
      Slide,
      slide,
      slides,
      ratingModel,
    };
  },
});
</script>
<style lang="scss" scoped>
.home-page {
  .container1 {
    background-color: #f7f7f7;
    border-radius: 0px 0px 37px 37px;
    .row {
      display: flex;
      justify-content: center;
      .banners {
        .text {
          width: 823px;
          text-align: center;
          font-weight: 700;
          font-size: 68px;
          line-height: 72px;
          color: #272a39;
        }
        .title {
          margin: 0 auto;
          text-align: center;
          width: 510px;
          font-weight: 500;
          font-size: 16px;
          line-height: 26px;
          color: #a8aab0;
        }
        .btn {
          margin: 0 267px;
          margin-top: 34px;
        }
      }

      .carousel {
        width: 100%;
      }
      .a1 {
        &:hover {
          background-color: #ffbb6b;
        }
      }
      .a2 {
        &:hover {
          background-color: #828eff;
        }
      }
      .a3 {
        &:hover {
          background-color: #82ff8e;
        }
      }
      .a31 {
        &:hover {
          background-color: #ff8282;
        }
      }
      .a4 {
        &:hover {
          background-color: #5a90ff;
        }
      }
      .a5 {
        &:hover {
          background-color: #ff79da;
        }
      }
      .a6 {
        &:hover {
          background-color: #fef74c;
        }
      }
      .a7 {
        &:hover {
          background-color: #71ffdd;
        }
      }
      .a8 {
        &:hover {
          background-color: #ff6666;
        }
      }
      .a9 {
        &:hover {
          background-color: #be6bff;
        }
      }
      .a10 {
        &:hover {
          background-color: #ffdd66;
        }
      }
      .a11 {
        &:hover {
          background-color: #ff4bed;
        }
      }
      .a12 {
        &:hover {
          background-color: #89ff8e;
        }
      }
      .a13 {
        &:hover {
          background-color: #ef4545;
        }
      }
      .a14 {
        &:hover {
          background-color: #708fff;
        }
      }
      .a15 {
        &:hover {
          background-color: #79f7ff;
        }
      }
      .carousel__item {
        transition: all 0.5s linear;
        height: 160px;
        width: 160px;
        background-color: white;
        border: 0.5px solid #e0e0e0;
        box-sizing: border-box;
        border-radius: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 140px;
        }
      }

      .carousel__slide {
        padding: 10px;
      }
    }
    .carousel1 {
      margin-top: 68px;
    }
    .bottom {
      height: 60px;
      width: 100%;
      background-color: #f7f7f7;
      border-radius: 0px 0px 37px 37px;
    }
  }
  .container2 {
    background-color: #fff;
    .color {
      width: 100%;
      background-color: #f7f7f7;

      .bordr1 {
        width: 100%;
        height: 50px;
        background-color: #fff;
        border-radius: 0px 0px 37px 37px;
      }
      .bordr2 {
        width: 100%;
        margin-top: 30px;
        height: 50px;
        background-color: #fff;
        border-radius: 37px 37px 0px 0px;
      }
    }
    .row {
      width: 100%;
    }
    .carousel {
      margin: 0 auto;

      .text {
        a {
          text-decoration: none;
          color: #1084fa;
        }
      }
      .titlee {
        margin: 0 auto;
        font-weight: 700;
        font-size: 44px;
        line-height: 53px;
        color: #000;
        width: 720px;
        margin-bottom: 30px;
      }
      .titl {
        margin-bottom: 30px;
        margin: 0 auto;
        font-weight: 500;
        font-size: 16px;
        line-height: 26px;
        color: #a8aab0;
        width: 500px;
      }
      .carousel {
        width: 980px;
        background-color: #fff;

        .carousel__slide > .carousel__item {
          transform: scale(1);
          opacity: 0.5;
          transition: 0.5s;
          height: 350px;
          .card {
            margin-top: 20px;
            padding: 24px;
            width: 820px;
            height: 310px;
            background: #f7f7f7;
            box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            display: flex;

            .img {
              width: 261px;
              height: 261px;
              background: #ffffff;
              border: 0.5px solid #f2f2f2;
              box-sizing: border-box;
              border-radius: 10px;
            }
            .images {
              .col {
                margin-bottom: 12px;
                display: flex;
                .img1 {
                  width: 144px;
                  height: 120px;
                  background: #ffffff;
                  margin-left: 12px;
                  border: 0.5px solid #f2f2f2;
                  box-sizing: border-box;
                  border-radius: 10px;
                }
              }
            }
            .model {
              text-align: left;
              .logo {
                width: 74px;
                height: 74px;
                border-radius: 10px;
                background-color: #fff;
              }
              .name {
                margin-top: 10px;
                font-weight: 600;
                font-size: 24px;
                line-height: 29px;
                color: #000;
              }
              .madel {
                font-weight: 400;
                font-size: 14px;
                line-height: 17px;
                color: #a8aab0;
              }
              .step {
                align-items: center;
                display: flex;
                margin-top: 30px;
                .q-rating {
                  width: 165px;
                }
                span {
                  margin-right: 30px;
                }
              }
              .link {
                margin-top: 40px;
                .btn {
                  color: #1084fa;
                }
              }
            }
          }
        }
        .carousel__slide--visible > .carousel__item {
          opacity: 1;
          transform: scale(0.8) translate(0px);
          z-index: 1;
          .card {
            background-color: rgb(150, 146, 146);
            width: 520px;
            .img {
              width: 10px;
            }
            .images {
              width: 0px;
            }
            .model {
              width: 200px;
            }
          }
        }
        .carousel__slide--next > .carousel__item {
          transform: scale(0.6) translate(-420px);
          z-index: 0;
          .card {
            background-color: rgb(150, 146, 146);
          }
        }
        .carousel__slide--prev > .carousel__item {
          transform: scale(0.6) translate(420px);
          z-index: 0;
          .card {
            background-color: rgb(150, 146, 146);
          }
        }
        .carousel__slide--active > .carousel__item {
          z-index: 2;
          transform: scale(1) translate(0px);
          .card {
            width: 820px;
            background: #f7f7f7;
            .img {
              width: 261px;
              height: 261px;
              background: #ffffff;
              border: 0.5px solid #f2f2f2;
              box-sizing: border-box;
              border-radius: 10px;
            }
            .images {
              .col {
                margin-bottom: 12px;
                display: flex;
                .img1 {
                  width: 144px;
                  height: 120px;
                  background: #ffffff;
                  margin-left: 12px;
                  border: 0.5px solid #f2f2f2;
                  box-sizing: border-box;
                  border-radius: 10px;
                }
              }
            }
            .model {
              width: 33%;
              .logo {
                width: 74px;
                height: 74px;
                border-radius: 10px;
                background-color: #fff;
              }
            }
          }
        }
      }
    }
  }
}
</style>
<style lang="scss">
.carousel__prev,
.carousel__next {
  background: #ffffff;
  box-shadow: 0px 2.66667px 10.6667px rgba(0, 0, 0, 0.05);
  color: #000;
  width: 56px;
  height: 56px;
  margin-top: -20px;
}
.carousel__prev {
  margin-left: -50px;
}
.carousel__next {
  margin-right: -50px;
}
.carousel__pagination-button--active {
  background-color: #1084fa !important;
}
.carousel__pagination-button {
  background-color: #f2f2f2;
  width: 10px;
  height: 10px;
}
</style>
