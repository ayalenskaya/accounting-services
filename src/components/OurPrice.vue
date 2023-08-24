<template>
    <div class="container">
        <h1 id="services" class="price__title">Прайс-лист на бухгалтерские услуги</h1>

        <table class="price">
            <thead>
                <tr>
                    <th class="price__header">В стоимость ежемесячного бухгалтерского обслуживания входит</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in items" :key="index" class="price__row">
                    <td class="price__cell">
                        <span class="price__icon icon-check-circle-broken"></span>
                        <span class="price__text">{{ item.textLeft }}</span>
                    </td>
                    <td class="price__cell">
                        <span class="price__icon icon-check-circle-broken"></span>
                        <span class="price__text">{{ item.textRight }}</span>
                    </td>
                </tr>
            </tbody>
        </table>

        <table class="service">
            <thead>

            </thead>
            <tbody>
                <tr>
                    <th class="service__cell-header">Услуга</th>
                    <th class="service__cell-header">ОСН</th>
                    <th class="service__cell-header">УСН 15%</th>
                    <th class="service__cell-header">УСН 6%</th>
                </tr>
                <tr class="service__row" v-for="(service, index) in services" :key="index">
                    <td class="service__cell service__cell-name">{{ service.name }}</td>
                    <td class="service__cell">{{ service.osn }} <span>руб.</span></td>
                    <td class="service__cell">{{ service.usn15 }} <span>руб.</span>
                    </td>
                    <td class="service__cell">{{ service.usn30 }} <span>руб.</span>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="service-block">
            <div v-for="(service, index) in services" :key="index" class="service-block__item">
                <div @click="service.expanded = !service.expanded" class="service-block__title">
                    <h2 class="service-block__title-text">{{ service.name }}</h2>
                    <span :class="{ 'arrow-up': service.expanded, 'arrow-down': !service.expanded }">
                        <img src="@/assets/icons/arrow.svg" alt="arrow" />
                    </span>
                </div>
                <div v-if="service.expanded" class="service-block__content">
                    <p class="service-block__description">
                        <span>OSN:</span>
                        <span class="service-block__description-price">{{ service.osn }}<template
                                v-if="service.osn !== 'Договорная'"><span class="rub">руб.</span></template></span>
                    </p>
                    <p class="service-block__description">
                        <span>USN 15%: </span>
                        <span class="service-block__description-price">{{ service.usn15 }}<template
                                v-if="service.usn15 !== 'Договорная'"><span class="rub">руб.</span></template></span>
                    </p>
                    <p class="service-block__description">
                        <span>USN 6%:</span>
                        <span class="service-block__description-price">{{ service.usn30 }}<template
                                v-if="service.usn30 !== 'Договорная'"><span class="rub">руб.</span></template></span>
                    </p>
                </div>
            </div>
        </div>

        <div class="card-wrapper">
            <swiper :space-between="24" :slides-per-view="1" :modules="modules" :loop="true" :pagination="true"
                :breakpoints="{
                    1366: {
                        slidesPerView: 3,
                        pagination: {
                            enabled: false
                        }
                    }
                }" class="mySwiper">
                <swiper-slide v-for="card in cards" :key="card.id">
                    <div class="card">
                        <div class="card__title">{{ card.title }}</div>
                        <div class="card__description">
                            <div class="card__content">
                                <div class="card__group-cards">
                                    <img :src="require('@/assets/icons/pin.svg')" :alt="card.iconAlt" class="card__icon" />
                                    <p> {{ card.description1 }} </p>
                                </div>
                                <div class="card__group-cards">
                                    <img :src="require('@/assets/icons/pin.svg')" :alt="card.iconAlt" class="card__icon" />
                                    <p> {{ card.description2 }} </p>
                                </div>
                                <div class="card__group-cards">
                                    <img :src="require('@/assets/icons/pin.svg')" :alt="card.iconAlt" class="card__icon" />
                                    <p> {{ card.description3 }} </p>
                                </div>
                                <div class="card__group-cards">
                                    <img :src="require('@/assets/icons/pin.svg')" :alt="card.iconAlt" class="card__icon" />
                                    <p> {{ card.description4 }} </p>
                                </div>
                                <div class="card__group-cards">
                                    <img :src="require('@/assets/icons/pin.svg')" :alt="card.iconAlt" class="card__icon" />
                                    <p> {{ card.description5 }} </p>
                                </div>
                                <div class="card__group-cards">
                                    <img :src="require('@/assets/icons/pin.svg')" :alt="card.iconAlt" class="card__icon" />
                                    <p> {{ card.description6 }} </p>
                                </div>
                                <div class="card__bottom"> {{ card.bottom }}</div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide v-for="additional in additionals" :key="additional.id">
                    <div class="card">
                        <div class="card__title">{{ additional.title }}</div>
                        <div class="card__description">
                            <div class="card__content">
                                <p> {{ additional.description }} </p>
                                <div class="card__group-additionals">
                                    <img :src="require('@/assets/icons/chevron-up-double.svg')" alt="icon"
                                        class="card__icon" />

                                    <p> {{ additional.percent1 }} </p>
                                </div>
                                <p> {{ additional.description1 }} </p>
                                <div class="card__group-additionals">
                                    <img :src="require('@/assets/icons/chevron-up-double.svg')" alt="icon"
                                        class="card__icon" />

                                    <p> {{ additional.percent2 }} </p>
                                </div>
                                <p> {{ additional.description2 }} </p>
                                <div class="card__group-additionals">
                                    <img :src="require('@/assets/icons/chevron-up-double.svg')" alt="icon"
                                        class="card__icon" />
                                    <p> {{ additional.percent3 }} </p>
                                </div>
                                <p> {{ additional.description3 }} </p>
                                <div class="card__group-additionals">
                                    <img :src="require('@/assets/icons/chevron-up-double.svg')" alt="icon"
                                        class="card__icon" />

                                    <p> {{ additional.percent3 }} </p>
                                </div>
                                <p> {{ additional.description4 }} </p>
                                <div class="card__group-additionals">
                                    <img :src="require('@/assets/icons/chevron-up-double.svg')" alt="icon"
                                        class="card__icon" />

                                    <p> {{ additional.percent4 }} </p>
                                </div>
                                <p> {{ additional.description5 }} </p>
                                <div class="card__group-additionals">
                                    <img :src="require('@/assets/icons/chevron-up-double.svg')" alt="icon"
                                        class="card__icon" />

                                    <p> {{ additional.percent4 }} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script setup>

import { ref } from "vue";
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const modules = ref([Pagination, Navigation]);
const items = [
    {
        textLeft: "Обработка первичных документов (товарные накладные, счета-фактуры, акты выполненных работ, акты оказанных услуг, требования накладные, кассовые, банковские документы, авансовые отчеты, путевые листы)",
        textRight: "Формирование налоговых проводок, журналов учета полученных и выданных счетов – фактур, книг покупок и продаж, регистров налогового учета"
    },
    {
        textLeft: "Составление локальных нормативных актов",
        textRight: "Составление, подача в налоговые органы, органы статистики бухгалтерской и налоговой отчетности"
    },
    {
        textLeft: "Проверка соответствия предоставленных документов нормам действующего законодательства",
        textRight: "Проведение сверок с контрагентами"
    },
    {
        textLeft: "Предоставление в письменной форме информации об отсутствующих документах подлежащих замене в связи с некорректным оформлением",
        textRight: "Консультирование по вопросам бухгалтерского и налогового учета"
    },
    {
        textLeft: "Составление реестров и формировании архивных файлов с первичными документами",
        textRight: "Инвентаризации"
    },
    {
        textLeft: "Формирование бухгалтерских проводок, оборотно - сальдовых ведомостей, регистров бухгалтерского учета",
        textRight: "Проведение сверок с налоговыми органами"
    },
];
let services = ref([
    {
        name: "Ведение учета до 10 операций в месяц, включая подготовку и сдачу квартальной отчетности",
        osn: "7 000",
        usn15: "5 000 ",
        usn30: "5 000 ",
        expanded: false
    },
    {
        name: "Ведение учета от 11 до 20 операций в месяц, включая подготовку и сдачу квартальной отчетности",
        osn: "9 000 ",
        usn15: "6 000 ",
        usn30: "6 000 ",
        expanded: false
    },
    {
        name: "Ведение учета от 21 до 50 операций в месяц, включая подготовку и сдачу квартальной отчетности",
        osn: "11 000 ",
        usn15: "9 000 ",
        usn30: "9 000 ",
        expanded: false
    },
    {
        name: "Ведение учета от 51 до 100 операций в месяц, включая подготовку и сдачу квартальной отчетности",
        osn: "18 000 ",
        usn15: "15 000 ",
        usn30: "15 000 ",
        expanded: false
    },

    {
        name: "Ведение учета от 101 до 200 операций в месяц, включая подготовку и сдачу квартальной отчетности",
        osn: "23 000 ",
        usn15: "20 000 ",
        usn30: "20 000 ",
        expanded: false
    },
    {
        name: "Ведение учета от 101 до 200 операций в месяц, включая подготовку и сдачу квартальной отчетности",
        osn: "27 000 ",
        usn15: "25 000 ",
        usn30: "25 000 ",
        expanded: false
    },
    {
        name: "Ведение учета от 201 до 300 операций в месяц, включая подготовку и сдачу квартальной отчетности",
        osn: "35 000 ",
        usn15: "30 000 ",
        usn30: "30 000 ",
        expanded: false
    },
    {
        name: "Ведение учета свыше 400 операций в месяц",
        osn: "Договорная",
        usn15: "Договорная",
        usn30: "Договорная",
        expanded: false
    },

]);
const cards = [
    {
        id: 1,
        title: "Сопровождение камеральных и выездных налоговых проверок",
        description: "Консультирование по вопросам, которые возникают при прохождении налоговых проверок",
        description1: "Подготовка документов к проверке (инвентаризация, сбор, ксерокопирование, заверение)",
        description2: "Участие в проверке ИФНС (сопровождение проверки)",
        description3: "Разработка договоров в рамках подготовки к проверке",
        description4: "Представительство интересов клиента в государственных органах",
        description5: "Составление письменного возражения на акт проведенной проверки",
        description6: "Составление пояснительных записок, ответ, информационных писем на акты проведенных проверок",
        bottom: "+ 25% к итоговой стоимости бухгалтерского обслуживания в квартал за проверяемый налоговый период"
    },
    {
        id: 2,
        title: "Услуги по правовому обслуживанию",
        description: "Проверка соответствия внутренних документов требованиям законодательствам",
        description1: "Организация и ведение претензионной работы риалам, подготавливаемой бухгалтерией",
        description2: "Представления интересов в суде, а также в других органах при рассмотрении правовых вопросов, подготовка процессуальной позиции и иную информацию для надлежащего качества ведения дела и направления ее в суд",
        description3: "Подготовка и оформление различного рода договоров, организация контроля исполнения договоров",
        description4: "Помощь в организации и осуществлении контроля над соблюдением установленного действующего законодательства РФ порядка осуществления коммерческой деятельности",
        description5: "Помощь в организации и ведении претензионной работы по материалам, подготавливаемым бухгалтерией, оказание методической помощи в этой работе, если она ведется другими подразделениями Заказчика",
        description6: "Консультация, заключение, справки по правовым вопросам, оказание помощи в своевременноми законном разрешении предложений,заявлений и жалоб",
        bottom: "+5% к итоговой стоимости бухгалтерского обслуживания в квартал"
    },

];
const additionals = [
    {
        id: 1,
        title: "Дополнительно к расчетной цене устанавливаются надбавки",
        description: "Внешнеэкономическая деятельность",
        description1: "Различные ставки НДС при реализации",
        description2: "Составление первичной документации",
        description3: "Введение делопроизводства (учет и регистрация договоров, входящей и исходящей документации, архивирование дел)",
        description4: "Автоматизация учета, обновление и доработка программ",
        description5: "IT услуги (сетевое оборудование, оборудование рабочих мест, система хранения данных, сети, телефония, телекоммуникации, сетевые сервисы, база данных, автоматизация бизнес – процессов, администрирование, постоянная поддержка)",
        percent1: "от +5 % до +25%",
        percent2: "от +5 % до +10%",
        percent3: "от +5 % до +20%",
        percent4: "от +5 % до +25%",
        percent5: "от +5 % до +25%"

    }
]
</script> 
<style scoped lang="scss">
@import '@/styles/global';

.container {
    text-align: center;

    .price {
        margin: 0 auto;
        border-collapse: collapse;
        text-align: left;
        display: inline-block;
        border-radius: 32px;
        background: #F2F7FC;
        padding: 40px;

        .price__title {
            color: #0A2641;
            font-size: 36px;
            font-weight: 700;
            line-height: 48px;
            margin-bottom: 32px;
            text-align: left;
        }

        .price__header {
            display: inline-block;
            color: #4851FD;
            font-size: 18px;
            font-weight: 600;
            line-height: 28px;
            margin-bottom: 40px;
        }

        .price__cell {
            vertical-align: middle;
            padding-bottom: 25px;

            .price__icon {
                display: inline-block;
                background-image: url('@/assets/icons/check-circle-broken.svg');
                background-size: 20px;
                background-repeat: no-repeat;
                background-position: center;
                width: 20px;
                height: 20px;
            }

            .price__text {
                color: #0A2641;
                font-size: 14px;
                font-weight: 600;
                line-height: 20px;
                margin-left: 10px;
            }
        }
    }

    .service-block {
        display: none;
    }


    .service {
        margin: 40px auto;
        border-collapse: collapse;
        text-align: left;
        display: inline-block;
        border-radius: 32px;
        padding: 40px;


        &__cell {
            padding: 12px 32px 12px 0;
            color: #4851FD;
            font-size: 14px;
            font-weight: 600;
            line-height: 24px;

            span {
                color: #0A2641;
                vertical-align: super;
                font-size: 10px;
                font-weight: 600;
                line-height: 24px;
            }
        }

        &__cell-header {
            color: #4851FD;
            font-size: 12px;
            font-weight: 600;
            line-height: 28px;
            text-transform: uppercase;
        }

        &__cell-name {
            color: #0A2641;
        }

        .service__row:last-child {

            .service__cell-name,
            .service__cell {
                color: #0A2641;

                span {
                    display: none;
                }
            }
        }

        .service__row {
            cursor: pointer;
        }

        .service__dropdown {
            display: none;
        }
    }

    .card-wrapper {
        display: flex;
        justify-content: center;
        gap: 24px;
    }

    .card {
        width: 100%;
        height: 100%;
        padding: 32px;
        border-radius: 32px;
        text-align: start;
        background-color: #F2F7FC;
        position: relative;

        &__title {
            color: #4851FD;
            font-size: 18px;
            font-weight: 600;
            line-height: 28px;
            margin-bottom: 24px;
        }

        &__group-cards {
            display: flex;
            align-items: flex-start;

            p {
                color: #000;
                font-size: 14px;
                font-weight: 600;
                line-height: 20px;
                margin-left: 10px;
                margin-bottom: 25px;
            }

            &__icon {
                align-self: flex-end;
            }
        }

        &__bottom {
            border-radius: 24px;
            background: #4851FD;
            padding: 24px;
            color: #ffffff;
        }

        &__group-additionals {
            display: flex;
            margin: 12px 0 40px 0;

            p {
                color: #000;
                font-size: 14px;
                font-weight: 600;
                line-height: 20px;
                margin-left: 10px;
            }
        }

        &__description {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-between;
            height: 100%;
        }
    }
}

@media (max-width: 1366px) {
    .container {
        text-align: left;

        .service {
            padding: 30px;
        }
    }
}

@media (max-width: 1024px) {
    .column {
        width: 50%;
    }
}

@media (max-width: 767px) {
    .service {
        display: none;
    }
}


@media (max-width: 768px) {
    .container {

        .price {
            padding: 30px;
            text-align: center;

            .price__header {
                font-size: 16px;
            }

            .price__row {
                display: flex;
                flex-direction: column;
                text-align: left;
            }

            .price__cell {
                .price__text {
                    font-size: 12px;
                }
            }
        }
    }

    .card {
        height: 100%;
    }
}

@media (max-width: 480px) {
    .container {
        .header {
            padding: 20px;

            .header_title {
                font-size: 20px;
            }

            .header_description {
                font-size: 16px;
            }
        }

        .service {
            display: none;
        }

        .service-block {
            display: block;

            .service-block__item {
                display: block;
                padding: 16px;
                color: #0A2641;
                font-size: 12px;
                font-weight: 600;
                line-height: 20px;
            }

            .service-block__title {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .arrow-up img {
                transform: rotate(0deg);
                transition: transform 0.3s ease-in-out;
            }

            .arrow-down img {
                transform: rotate(180deg);
                transition: transform 0.3s ease-in-out;
            }

            .service-block__description {
                display: flex;
                justify-content: space-between;
                color: #4851FD;
            }

            .rub {
                vertical-align: super;
                color: #0A2641;
                font-size: 10px;
                margin-left: 5px;
            }

            .service-block__description-price {
                font-size: 14px;
                font-weight: 600;
                line-height: 22px;
            }
        }
    }


}

@media (max-width: 320px) {
    .container {
        .price {
            padding: 20px;

            .price__title {
                color: #0A2641;
                font-size: 24px;
                font-weight: 700;
                line-height: 32px;
            }

            .price__header {
                color: #4851FD;
                font-size: 14px;
                font-weight: 600;
                line-height: 22px;
                text-align: left;
            }

            .price__cell {
                .price__icon {
                    width: 16px;
                    height: 16px;
                }

                .price__text {
                    font-size: 10px;
                }
            }
        }
    }
}

.swiper {
    width: 100%;
    height: 100%;
}

@media screen and (max-width: 768px) {
    .swiper-slide {
        width: 100% !important;
    }
}
</style>
