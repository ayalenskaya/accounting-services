<template>
  <div class="container">
    <header class="container__header">
      <div class="container__header__top">
        <div class="container__header__top__logo">
          <img src="@/assets/icons/logo.svg" alt="Logo">
        </div>
        <div class="drop-down" v-if="windowWidth <= 1024 && windowWidth >= 480" @click="toggleMobileMenu">
          <span class="menu-text">Меню</span>
          <img src="@/assets/icons/chevron-down.svg" alt="chevron-down" class="chevron-img" />
        </div>
        <div class="menu mobile-menu container__header__top__menu" v-if="windowWidth <= 1024 && showMobileMenu">
          <ul class="menu mobile-menu container__header__top--ul">
            <li @click="scrollToAdvantages"> Преимущества </li>
            <li @click="scrollToServices"> Услуги </li>
            <li @click="scrollToNews"> Новости </li>
            <li @click="scrollToReviews"> Отзывы </li>
          </ul>
        </div>
        <div class="container__header__top__menu desktop" v-if="windowWidth > 1024">
          <ul>
            <li @click="scrollToAdvantages"> Преимущества </li>
            <li @click="scrollToServices">Услуги </li>
            <li @click="scrollToNews">Новости </li>
            <li @click="scrollToReviews">Отзывы </li>
          </ul>
        </div>
      </div>
      <div class="container__header__contact">
        <div class="container__header__contact__phone-number">
          8 (812) 603-71-79
        </div>
        <button class="container__header__contact__call-back-btn">
          Обратный звонок
        </button>
        <div class="drop-down" v-if="windowWidth <= 481" @click="toggleMobileMenu">
          <img src="@/assets/icons/burger.svg" alt="burger-menu" class="burger-menu-img" />
        </div>
      </div>
    </header>
    <div class="container__content">
      <div class="container__banner">
        <h1 class="container__banner__title">
          Бухгалтерские услуги <br>
          в {{ windowWidth <= 480 ? 'СПБ' : 'Санкт-Петербурге' }}
        </h1>
        <p class="container__banner__description">
          Наши специалисты дадут исчерпывающую <br> информацию по интересующим вас услугам
        </p>
        <button class="container__banner__learn-more-btn" @click="openModal">
          Получить бесплатную консультацию
        </button>
      </div>
      <div v-if="showModal" class="modal">
        <div class="modal__content">
          <button @click="closeModal" class="modal__close-btn">×</button>
          <h2 class="modal__title">Оставьте заявку и мы перезвоним</h2>
          <form-submit :isQuestionVisible="false" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import FormSubmit from '@/components/UI/FormSubmit.vue'
import { ref, onMounted, onBeforeUnmount, watchEffect } from 'vue';

const windowWidth = ref(window.innerWidth);
const showMobileMenu = ref(false);

const updateWidth = () => {
  windowWidth.value = window.innerWidth;
};

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value;
};

onMounted(() => {
  window.addEventListener('resize', updateWidth);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateWidth);
});

watchEffect(() => {
  console.log(windowWidth.value);
});

const showModal = ref(false);

const closeModal = () => {
  showModal.value = false;
};

const openModal = () => {
  showModal.value = true;
};

const scrollToAdvantages = () => {
  const servicesComponent = document.getElementById('advantages')

  if (servicesComponent) {
    servicesComponent.scrollIntoView({ behavior: 'smooth' })
  }
}

const scrollToServices = () => {
  const servicesComponent = document.getElementById('services')

  if (servicesComponent) {
    servicesComponent.scrollIntoView({ behavior: 'smooth' })
  }
}

const scrollToNews = () => {
  const newsComponent = document.getElementById('news')

  if (newsComponent) {
    newsComponent.scrollIntoView({ behavior: 'smooth' })
  }
}

const scrollToReviews = () => {
  const reviewsComponent = document.getElementById('reviews')

  if (reviewsComponent) {
    reviewsComponent.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/global';

.container {
  display: flex;
  flex-direction: column;
  background-color: #0A2641;
  height: 712px;

  .container__content {
    margin-top: auto; 
  }

  .drop-down { 
    color: #ffffff;
    margin: 10px;
  }

  .drop-down img {
    margin-left: 10px;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    padding: 10px;

    &__top {
      display: flex;
      align-items: center;

      &__logo {
        margin-right: 48px;
      }

      &__menu {
        ul {
          list-style: none;
          display: flex;
          margin: 0;
          padding: 0;

          li {
            margin: 0 10px;
            text-decoration: none;
            color: #ffffff;
            opacity: .5;
            cursor: pointer;

            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }

    &__contact {
      display: flex;
      align-items: center;

      &__phone-number {
        color: #ffffff;
        white-space: nowrap;
        margin-right: 24px;
        font-weight: 600;
        font-size: 18px;
        line-height: 28px;
      }

      &__call-back-btn {
        border-radius: 32px;
        background-color: rgba(255, 255, 255, 0.15);
        color: #ffffff;
        padding: 10px 24px;
        border: none;
        cursor: pointer;
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;

        &:hover {
          background-color: rgba(255, 255, 255, 0.30);
        }
      }
    }
  }

  &__banner {
    width: 100%;
    display: flex;
    flex-direction: column;
    color: #ffffff;

    &__title {
      font-size: 56px;
      line-height: 72px;
      font-weight: 700;
      margin: 124px 0 32px;
      white-space: pre-wrap;
    }

    &__description {
      font-size: 18px;
      font-weight: 600;
      line-height: 28px;
      opacity: 0.5;
      margin: 0 0 48px 0;

    }

    &__learn-more-btn {
      width: 397px;
      padding: 18px 32px;
      margin-bottom: 111px;
      border-radius: 32px 0px;
      background: linear-gradient(169deg, #4851FD 0%, #FF6A2A 100%), #4851FD;
      color: #ffffff;
      border: none;
      cursor: pointer;
      white-space: nowrap;
      font-size: 18px;
      font-weight: 600;
      line-height: 24px;

      &:hover {
        background: linear-gradient(169deg, #2630ee 0%, #e04300 100%), #4851FD;
      }
    }
  }

  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;

    &__content {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 807px;
      height: 768px;
      border-radius: 32px;
      background-image: url('@/assets/images/ask-question-background.png');
      background-size: cover;
      background-repeat: no-repeat;


      .modal__close-btn {
        background: none;
        border: none;
        font-size: 24px;
        color: #ffffff;
        cursor: pointer;
        position: absolute;
        top: 32px;
        right: 32px;
        opacity: 0.4;
      }
    }

    &__title {
      color: #FFF;
      font-size: 36px;
      font-weight: 700;
      line-height: 48px;
      margin-bottom: 74px;
    }
  }
}

@media (max-width: 1366px) {
  .container {
    &__header {
      &__top {
        &__logo {
          margin-right: 24px;
        }
      }

      &__contact {

        &__call-back-btn {
          padding: 8px 20px;
        }
      }
    }

    &__banner {
      &__description {
        margin-left: 24px;
      }

      &__learn-more-btn {
        width: 375px;
        padding: 14px 20px;
        margin-bottom: 80px;
      }
    }

    .modal {
      &__content {
        width: 647px;
        height: 688px;
      }

      &__title {
        margin-bottom: 50px;
      }
    }
  }
}

@media (max-width: 1024px) {
  .container {
    height: 900px;

    &__header {
      padding: 0;
      &__top {
        &__logo {
          margin-right: 0;

          img {
            width: 81px;
          }
        }
      }

      &__menu {
        &--ul {
          flex-direction: column;
         li {
          font-size: 12px;
         }
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .container {
    height: 900px;
    position: relative; 

    &__header {

      &__top {

        &__logo {
          margin-right: 32px;
        }
      }

      &__contact {

        &__phone-number {
          font-size: 14px;
          line-height: 22px;
        }

        &__call-back-btn {
          display: none;
        }
      }
    }


    &__contact {
      display: flex;
      align-items: center;

      &__phone-number {
        color: #ffffff;
        margin-right: 24px;
        font-weight: 600;
        font-size: 18px;
        line-height: 28px;
      }

      &__call-back-btn {
        border-radius: 32px;
        background-color: rgba(255, 255, 255, 0.15);
        color: #ffffff;
        padding: 10px 24px;
        border: none;
        cursor: pointer;
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;

        &:hover {
          background-color: rgba(255, 255, 255, 0.30);
        }
      }
    }


    &__cards {
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 16px;
    }

    .card {
      flex-basis: calc(50% - 8px);
    }

    &__banner {
      &__title {
        margin-left: 24px;
      }

      &__description {
        margin-left: 24px;
      }

      &__learn-more-btn {
        margin-bottom: 60px;
      }
    }

    .modal {
      text-align: center;

      &__title {
        margin-bottom: 30px;
      }
    }
  }


  .container__header__top--ul {
    flex-direction: column;
    padding: 10px; 
  }
}

@media (max-width: 480px) {
  
  br {
    display: none;
  }
  .container {
    padding: 24px;
    height: 568px;
    overflow-x: hidden;

    .container__header__top__menu ul li {
      font-size: 10px;
    }

    &__header {

      &__top {
        &__logo {
          margin-right: 0;
        }
      }

      &__contact {
        &__phone-number {
          font-size: 9px;
          line-height: 18px;
        }

        &__call-back-btn {
          display: none;
        }
      }
    }

    &__banner {
      &__title {
    
font-size: 32px; 
font-weight: 700;
line-height: 48px;
        margin: 60px 0 16px;
      }

      &__description {color: #FFF; 
font-size: 14px; 
font-weight: 600;
line-height: 22px;  
        margin: 0 0 20px 0;
      }

      &__learn-more-btn {
        width: 100%;
        padding: 10px;
        margin-bottom: 30px;
        font-size: 10px;
        font-weight: 400;
        line-height: 10px;
      }
    }

    .modal {
      &__content {
        width: 200px;
        height: 200px;
      }

      &__title {
        font-size: 18px;
        line-height: 26px;
        margin-bottom: 10px;
      }
    }

  }



}
</style>