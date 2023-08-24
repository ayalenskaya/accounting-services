<template>
    <div class="container">
        <div id="advantages" class="advantages">
            <h2 class="advantages__title">Наши преимущества</h2>
            <div class="advantages__cards">
                <div class="card" v-for="(advantage, index) in advantages" :key="index">
                    <img :src="advantage.img" alt="img">
                    <h3 class="card__title">{{ advantage.title }}</h3>
                    <p class="card__description">{{ advantage.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
const advantages = [
    {
        img: require('@/assets/icons/calendar.svg'),
        title: "Сроки",
        description: "соблюдаем сроки сдачи отчетности и уплаты налогов",
    },
    {
        img: require('@/assets/icons/medal.svg'),
        title: "Гарантии",
        description: "в случае ошибок возместим все штрафы и пени",
    },
    {
        img: require('@/assets/icons/shield.svg'),
        title: "Конфиденциальность",
        description: "сохраним все ваши данные",
    },
    {
        img: require('@/assets/icons/transport.svg'),
        title: "Удобно добираться",
        description: "находимся в центре города, у метро пл. Александра Невского",
    },
];
</script>
  
<style scoped lang="scss">
@import '@/styles/global';

.container {
    background-color: #EDF3F9;
    border-radius: 0 0 100% 100%;

    .advantages {
        display: flex;
        flex-direction: column;
        padding: 23px 32px 32px;

        &__title {
            margin: 0 0 48px 0;
            font-size: 36px;
            font-weight: 700;
            line-height: 48px; 
        }

        &__cards {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 24px;
            
        }

        .card {
            flex: 1 0 0;
            align-self: stretch;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 32px;
            border-radius: 32px;
            background: #4851FD;
            color: white;

            &__title {
                font-size: 20px;
                font-weight: 600;
                line-height: 32px;
                margin: 24px 0 8px;
            }

            &__description {
                font-size: 16px;
                font-weight: 600;
                line-height: 24px;
            }
        }

        @media (max-width: 1366px) {
            &__cards .card {
                padding: 24px;

                &__title {
                    margin: 20px 0 6px;
                    font-size: 18px;
                    line-height: 28px;
                }

                &__description {
                    font-size: 14px;
                    line-height: 20px;
                }
            }

            &__title {
                font-size: 32px;
                line-height: 42px;
                margin: 0 0 36px 0;
            }
        }


        @media (max-width: 768px) {
            &__cards {
                flex-wrap: wrap;

                .card {

                    flex: 1 0 40%;

                    padding: 20px;

                    &__title {
                        margin: 16px 0 6px;
                        font-size: 16px;
                        line-height: 24px;
                    }

                    &__description {
                        font-size: 14px;
                        line-height: 20px;
                    }
                }

                &__title {
                    font-size: 28px;
                    line-height: 36px;
                    margin: 0 0 24px 0;
                }
            }
        }

        @media (max-width: 320px) {
            .container {
                border-radius: 0 0 5% 5%;

                .advantages {
                    padding: 24px 16px!important;
                }

                &__cards .card {
                    padding: 16px;

                    &__title {
                        margin: 12px 0 4px;
                        font-size: 14px;
                        line-height: 20px;
                    }

                    &__description {
                        font-size: 12px;
                        line-height: 16px;
                    }
                }

                &__title {
                    color: #0A2641;
                    font-size: 24px;
                    font-weight: 700;
                    line-height: 32px;
                    margin: 0 0 20px 0;
                    white-space: nowrap;
                }
            }

        }
    }
}
</style>