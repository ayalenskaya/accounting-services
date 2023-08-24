<template>
  <div class="container">
    <div id="news" class="swiper-container">
      <swiper :space-between="24" :slides-per-view="1" :modules="modules" :loop="true" :pagination="true" :breakpoints="{
        1920: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 2,
          pagination: {
            enabled: true
          }
        },
        480: {
          slidesPerView: 1
        }
      }" class="mySwiper" ref="mySwiper">
        <swiper-slide v-for="(slide, index) in slides" :key="index">
          <div class="card">
            <img :src="slide.image" alt="Slide Image" class="slide-image" />
            <div class="slide-content">
              <h2 class="slide-title">{{ slide.description }}</h2>
              <p class="slide-date">{{ slide.date }}</p>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules';

const modules = ref([Pagination, Navigation]);

const slides = ref([
  {
    image: require("@/assets/images/slide1.png"),
    description: "Критерии упрощенной системы налогообложения в 2023 году",
    date: "29 мая 2023",
  },
  {
    image: require("@/assets/images/slide2.png"),
    description: "Экономический прогноз на следующий год",
    date: "30 мая 2023",
  },
  {
    image: require("@/assets/images/slide3.png"),
    description: "Как правильно заполнять налоговую декларацию?",
    date: "31 мая 2023",
  },
]);
</script>

<style scoped lang="scss">
@import '@/styles/global';

.swiper-container {
  .card {
    width: 100%;
    height: 100%;
  }

  .card img {
    width: 100%;
    height: 297px;
    border-radius: 8px 8px 0 0;
  }

  @media (max-width: 1366px) {

    &__slide {
      &-content {
        &-title {
          font-size: 20px;
        }

        &-date {
          font-size: 12px;
        }
      }
    }

  }

  @media (max-width: 768px) {

    &__slide {
      &-content {
        &-title {
          font-size: 18px;
        }

        &-date {
          font-size: 11px;
        }
      }
    }

  }


  @media (max-width: 320px) {

    &__slide {
      &-content {
        &-title {
          font-size: 16px;
        }

        &-date {
          font-size: 10px;
        }
      }
    }

    &__button {
      display: none;
    }
  }

  .swiper-slide {
    margin-right: 25px;

    img {
      border-radius: 32px 32px 0px 0px;
    }
  }

}

.swiper {
  width: 100%;
  height: 100%;
}
</style>
