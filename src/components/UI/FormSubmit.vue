<template>
  <form @submit="submitQuestion" class="form-container__form">
    <div class="form-container__input-group">
      <label for="name" class="form-container__label">Имя</label>
      <input type="text" id="name" v-model="name" required class="form-container__input" placeholder="Иван" />
    </div>
    <div class="form-container__input-group">
      <label for="phone" class="form-container__label">Телефон</label>
      <input type="tel" id="phone" v-model="phone" @input="maskPhone" required class="form-container__input"
        placeholder="+7" />
    </div>
    <div class="form-container__input-group" v-if="isQuestionVisible">
      <label for="question" class="form-container__label">Вопрос</label>
      <textarea id="question" v-model="question" required class="form-container__textarea"
        placeholder="Ваш вопрос..."></textarea>
    </div>
    <div class="form-container__button-group">
      <div class="form-container__pp">Нажимая на кнопку, я даю согласие на обработку персональных данных в
        соответствии с Политикой конфиденциальности</div>
      <button type="submit" class="form-container__button">Отправить</button>
    </div>
    <p v-if="questionSent" class="form-container__success-message">Отправлено!</p>
  </form>
</template>
  
<script setup>
import { ref, defineProps } from 'vue';

defineProps({
  isQuestionVisible: {
    type: Boolean,
    default: true
  }
})
const name = ref('');
const phone = ref('');
const question = ref('');
const questionSent = ref(false);



const maskPhone = (event) => {
  let x = event.target.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
  event.target.value = '+7 (' + (!x[2] ? '' : x[2]) + ') ' + (!x[3] ? '' : x[3] + '-') + (!x[4] ? '' : x[4] + '-') + x[5];
};

const submitQuestion = (event) => {
  event.preventDefault();
  questionSent.value = true;

  setTimeout(() => {
    questionSent.value = false;
    name.value = '';
    phone.value = '';
    question.value = '';
  }, 5000);
};
</script>
  
<style scoped lang="scss">
@import '@/styles/global';

 
  .form-container__form {
    display: flex;
    flex-direction: column;
    width: 80%;
  }

  .form-container__input-group {
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
  }

  .form-container__label {
    margin: 0 10px 8px 0;
    color: #FFFFFF;
    font-size: 14px;
    font-weight: 600;
    line-height: 28px;
    text-transform: uppercase;
    text-align: left;
  }

  .form-container__input,
  .form-container__textarea {
    padding: 16px 24px;
    width: 569px;
    border: none;
    border-radius: 32px;
    background: rgba(255, 255, 255, 0.10);
    color: #FFF;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px;
    opacity: 0.5;
  }

  .form-container__input {
    height: 60px;
  }

  .form-container__textarea {
    height: 100px;
  }

  .form-container__input::placeholder,
  .form-container__textarea::placeholder {
    color: #fff;
  }

  .form-container__button-group {
    display: flex;
    justify-content: center;
    padding-top: 45px;
  }

  .form-container__pp {
    width: 50%;
    color: #FFF;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    opacity: 0.5;
  }

  .form-container__button {
    padding: 18px 32px;
    height: 60px;
    color: #FFFFFF;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 18px;
    border-radius: 32px 0px;
    background-color: #FF6A2A;

    &:hover {
      background-color: #f05412;
    }
  }

  .form-container__success-message {
    margin-top: 15px;
    color: #FF6A2A;
    font-weight: bold;
  } 

@media (max-width: 1366px) {

  .form-container__input,
  .form-container__textarea {
    padding: 12px 18px;
    width: 400px;
  }

  .form-container__input {
    height: 25px;
  }

  .form-container__textarea {
    height: 80px;
  }

  .form-container__pp {
    width: 60%;
  }
}

@media (max-width: 768px) {

  .form-container__form {
    align-items: normal;
  } 

  .form-container__button-group {
    flex-direction: column;
    align-items: center;
  }

  .form-container__input {
    height: 60px;
  }  

.form-container__form {
  align-items: normal;
}

.form-container__input,
.form-container__textarea {
  padding: 10px 15px;
  width: 100%;
}

.form-container__button-group {
  flex-direction: column;
  align-items: center;
} 

.form-container__button {
  padding: 12px 20px;
  height: 40px;
  font-size: 16px;
}

.form-container__pp {
  width: 100%;
  text-align: center;
  margin-bottom: 16px;
}
}

@media (max-width: 320px) {
  .form-container__form {
    align-items: stretch;
  }

  .form-container__input,
  .form-container__textarea {
    padding: 8px 12px;
    width: auto;
  }

  .form-container__input {
    height: 20px;
    width: 100%;
  }

  .form-container__textarea {
    height: 50px;
  }

  .form-container__button {
    padding: 14px 20px;
    height: 40px;
  }

  .form-container__pp {
    width: 100%;
    text-align: center;
  }

  .form-container__form {
    padding: 20px;
    width: 100%;
  }
} 
</style>