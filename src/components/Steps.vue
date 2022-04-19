<template>
  <div class="steps">
    <div class="text"><a href="">Как это работает?</a></div>
    <div class="title">4 простых шага чтобы начать</div>
    <div class="cards">
      <q-card class="my-card">
        <div class="images">
          <img class="img" src="/images/step/Shield.png" />
          <img class="img1" src="/images/step/Line Indicator.png" />
        </div>

        <q-card-section>
          <div class="text-h6">Идентификация личности</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Предоставьте нам свои паспортные данные и зарплатную карту, чтобы мы
          смогли помочь оформить вашу покупку
        </q-card-section>
      </q-card>
      <q-card class="my-card">
        <div class="images">
          <img class="img" src="/images/step/Card.png" />

          <img class="img2" src="/images/step/Line Indicator (1).png" />
        </div>
        <q-card-section>
          <div class="text-h6">Оценка платежеспособности</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Мы оценим не затруднит ли вас покупка товара, который вы выбрали
        </q-card-section>
      </q-card>
      <q-card class="my-card">
        <div class="images">
          <img class="img" src="/images/step/Hat.png" />
          <img class="img1" src="/images/step/Line Indicator.png" />
        </div>
        <q-card-section>
          <div class="text-h6">Оформление сделки</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Ознакомьтесь с условиями рассрочки и выберите удобный вам тариф
          приобретения товара
        </q-card-section>
      </q-card>
      <q-card class="my-card">
        <div class="images">
          <img class="img" src="/images/step/Hand.png" />
        </div>

        <q-card-section>
          <div class="text-h6">Получение товара</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Заберите товар и радуйтесь покупкам вместе с TAQSIM
        </q-card-section>
      </q-card>
    </div>
    <q-btn class="btn-primary btn" label="Начать покупки" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.steps {
  border-radius: 37px;
  width: 100%;
  height: 620px;
  text-align: center;
  .text {
    text-align: center;
    margin-top: 48px;
    a {
      text-decoration: none;
      color: #1084fa;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
    }
  }
  .title {
    margin-top: 12px;
    font-weight: 700;
    font-size: 44px;
    line-height: 53px;
    margin: 0 auto;
    width: 555px;
  }
  .cards {
    display: flex;
    align-items: center;
    justify-content: center;
    .my-card {
      height: 300px;
      margin-top: 30px;
      margin-right: 20px;
      box-shadow: 0 0 0 0;
      width: 300px;
      text-align: left;
      .images {
        align-items: center;
        display: flex;
        .img {
          width: 90px;
          height: 90px;
        }
        .img1 {
          width: 160px;
          height: 16px;
          margin-left: 40px;
          margin-top: 50px;
        }
        .img2 {
          width: 160px;
          height: 16px;
          margin-left: 40px;
          margin-top: 30px;
        }
      }
      .q-pt-none {
        width: 240px;
      }
      .text-h6 {
        width: 280px;
      }
    }
  }
  .btn {
    margin-top: 60px;
  }
}
</style>
