<template>
    <div class="container">
        <div class="form-container">
            <h2 class="form-container__h2">Задайте вопрос нашим специалистам</h2>
            <FormSubmit />
        </div>
    </div>
</template>
  
<script setup>
import FormSubmit from '@/components/UI/FormSubmit.vue';

</script>
  
<style scoped lang="scss">
@import '@/styles/global';

.container {
    .form-container {
        display: flex;
        align-items: center;
        padding: 119px 96px;
        border-radius: 32px;
        height: 700px;
        background-image: url('@/assets/images/ask-question-background.png');
        background-repeat: no-repeat;
        background-size: cover;

        &__h2 {
            margin-bottom: 20px;
            color: #FFFFFF;
            font-size: 36px;
            font-weight: 700;
            line-height: 48px;
            align-self: flex-start;
        }

        @media (max-width: 1366px) {
            height: 600px;
            padding: 100px 80px;

            &__h2 {
                font-size: 36px;
                font-weight: 700;
                line-height: 48px;
            }
        }

        @media (max-width: 768px) {
            height: 944px;
            padding: 56px;
            align-items: flex-start;
            flex-direction: column;

            &__h2 {
                font-size: 36px;
                font-weight: 700;
                line-height: 48px;
            }
        }

        @media (max-width: 320px) {
            height: 580px;
            padding: 16px;

            &__h2 {
                font-size: 18px;
                font-weight: 700;
                line-height: 24px;
            }
        }
    }
}
</style>