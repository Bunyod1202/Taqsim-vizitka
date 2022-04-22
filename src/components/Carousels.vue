<template>
  <div class="container">
    <div class="row">
      <div class="box-title">
        <div class="title"><a href="">ТОВАРЫ</a></div>
        <div class="text">Эти товары пользуются спросом</div>
        <div class="name">
          Мы собрали для вас топ самых продаваемых товаров на Taqsim
        </div>
      </div>
    </div>
    <Carousel :items-to-show="7" :wrap-around="true">
      <Slide v-for="item in card" :key="item">
        <div class="carousel__item">
          <div class="card">
            <div class="card-header">
              <div class="img">
                <img :src="item.header.img" alt="" />
              </div>
              <div class="title">{{ item.header.title }}</div>
            </div>
            <div class="card-body">
              <img :src="item.body.img" alt="" />
            </div>
            <div class="card-footer">
              <div class="text">{{ item.footer.text }}</div>
              <div class="title">
                {{ item.footer.title }}
              </div>
              <div class="step">
                <q-rating
                  v-model="model"
                  max="5"
                  size="1em"
                  color="yellow"
                  icon="star_border"
                  icon-selected="star"
                />
                <span>{{ model }}/5</span>
              </div>
              <q-btn class="btn" label="Подробнее" />
            </div>
          </div>
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { Carousel, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "WrapAround",
  components: {
    Carousel,
    Slide,
  },
  setup() {
    const model = ref("4");

    const card = [
      {
        header: {
          img: "/images/brend/logos/image 3 (1).png",
          title: "Radius",
        },
        body: {
          img: "/images/brend/Product Image.png",
        },
        footer: {
          title: "Ноутбуки",
          text: '16.1" Ноутбук Honor MagicBook Pro HLYL-WFQ9 (53011FJC)',
        },
      },
      {
        header: {
          img: "/images/brend/logos/image 3 (2).png",
          title: "Texnomart",
        },
        body: {
          img: "/images/brend/Product Image (1).png",
        },
        footer: {
          title: "Ноутбуки",
          text: '16.1" Ноутбук Honor MagicBook Pro HLYL-WFQ9 (53011FJC)',
        },
      },
      {
        header: {
          img: "/images/brend/logos/image 3 (3).png",
          title: "Mediapark",
        },
        body: {
          img: "/images/brend/Product Image (2).png",
        },
        footer: {
          title: "Ноутбуки",
          text: '16.1" Ноутбук Honor MagicBook Pro HLYL-WFQ9 (53011FJC)',
        },
      },
      {
        header: {
          img: "/images/brend/logos/image 3 (4).png",
          title: "Elmakon",
        },
        body: {
          img: "/images/brend/image 54.png",
        },
        footer: {
          title: "Ноутбуки",
          text: '16.1" Ноутбук Honor MagicBook Pro HLYL-WFQ9 (53011FJC)',
        },
      },
      {
        header: {
          img: "/images/brend/logos/image 3 (5).png",
          title: "Xiaomi",
        },
        body: {
          img: "/images/brend/Product Image (3).png",
        },
        footer: {
          title: "Ноутбуки",
          text: '16.1" Ноутбук Honor MagicBook Pro HLYL-WFQ9 (53011FJC)',
          step: "4",
        },
      },
      {
        header: {
          img: "/images/brend/logos/image 3 (6).png",
          title: "Samsung",
        },
        body: {
          img: "/images/brend/Product Image (4).png",
        },
        footer: {
          title: "Ноутбуки",
          text: '16.1" Ноутбук Honor MagicBook Pro HLYL-WFQ9 (53011FJC)',
          step: "4",
        },
      },
      {
        header: {
          img: "/images/brend/logos/image 3 (1).png",
          title: "Radius",
        },
        body: {
          img: "/images/brend/Product Image.png",
        },
        footer: {
          title: "Ноутбуки",
          text: '16.1" Ноутбук Honor MagicBook Pro HLYL-WFQ9 (53011FJC)',
        },
      },
      {
        header: {
          img: "/images/brend/logos/image 3 (2).png",
          title: "Texnomart",
        },
        body: {
          img: "/images/brend/Product Image (1).png",
        },
        footer: {
          title: "Ноутбуки",
          text: '16.1" Ноутбук Honor MagicBook Pro HLYL-WFQ9 (53011FJC)',
        },
      },
      {
        header: {
          img: "/images/brend/logos/image 3 (3).png",
          title: "Mediapark",
        },
        body: {
          img: "/images/brend/Product Image (2).png",
        },
        footer: {
          title: "Ноутбуки",
          text: '16.1" Ноутбук Honor MagicBook Pro HLYL-WFQ9 (53011FJC)',
        },
      },
      {
        header: {
          img: "/images/brend/logos/image 3 (4).png",
          title: "Elmakon",
        },
        body: {
          img: "/images/brend/image 54.png",
        },
        footer: {
          title: "Ноутбуки",
          text: '16.1" Ноутбук Honor MagicBook Pro HLYL-WFQ9 (53011FJC)',
        },
      },
      {
        header: {
          img: "/images/brend/logos/image 3 (5).png",
          title: "Xiaomi",
        },
        body: {
          img: "/images/brend/Product Image (3).png",
        },
        footer: {
          title: "Ноутбуки",
          text: '16.1" Ноутбук Honor MagicBook Pro HLYL-WFQ9 (53011FJC)',
          step: "4",
        },
      },
      {
        header: {
          img: "/images/brend/logos/image 3 (6).png",
          title: "Samsung",
        },
        body: {
          img: "/images/brend/Product Image (4).png",
        },
        footer: {
          title: "Ноутбуки",
          text: '16.1" Ноутбук Honor MagicBook Pro HLYL-WFQ9 (53011FJC)',
          step: "4",
        },
      },
    ];
    return {
      model,
      card,
    };
  },
});
</script>
<style lang="scss" scoped>
.container {
  background-color: #f7f7f7;
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
    .name {
      font-weight: 500;
      font-size: 16px;
      line-height: 26px;
      color: #a8aab0;
      margin-bottom: 40px;
    }
  }
}
.carousel__item {
  margin-bottom: 70px;
  min-height: 512px;
  width: 285px;
  background-color: white;
  border: 0.4px solid #e0e0e0;
  font-size: 20px;
  border-radius: 8px;
  .card {
    text-align: left;
    padding: 20px;
    .card-header {
      display: flex;
      align-items: center;
      .img {
        margin-right: 20px;
        img {
          border: 0.5px solid #f2f2f2;
          box-sizing: border-box;
          border-radius: 9px;
          width: 43px;
          height: 43px;
        }
      }
    }
    .card-footer {
      .text {
        color: #a8aab0;
      }
      .title {
        font-weight: 500;
        font-size: 18px;
        line-height: 25px;
      }
      .step {
        span {
          margin-left: 20px;
          font-size: 15px;
        }
      }
      .btn {
        margin-top: 20px;
        width: 100%;
        background: #f2f2f2;
        border-radius: 10px;
        box-shadow: 0 0 0 0;
      }
    }
  }
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>
