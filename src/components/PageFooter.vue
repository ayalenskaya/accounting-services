<template>
    <div class="container">
        <footer class="footer">
            <div class="footer__group">
                <div class="footer__column">
                    <img src="@/assets/icons/logo-dark.svg" alt="Лого" class="footer__logo" />
                </div>
                <div class="footer__column">
                    <div class="footer__links-column">
                        <a href="#" class="footer__link">Наши преимущества</a>
                        <a href="#" class="footer__link">Наши услуги</a>
                        <a href="#" class="footer__link">Прайс-лист на бухгалтерские услуги</a>
                    </div>
                </div>
                <div class="footer__column">
                    <div class="footer__links-column">
                        <a href="#" class="footer__link">Новости</a>
                        <a href="#" class="footer__link">Отзывы клиентов</a>
                        <a href="#" class="footer__link">Политика конфиденциальности</a>
                    </div>
                </div>
                <div class="footer__column">
                    <div class="footer__phone">
                        <span class="footer__phone-number">8 (812) 603-71-79</span>
                        <span class="footer__phone-call">Обратный звонок</span>
                    </div>
                    <div class="footer__socials">

                        <a href="#" class="footer__social-icon">
                            <img src="@/assets/icons/telegram.svg" alt="Telegram" />
                        </a>
                        <a href="#" class="footer__social-icon">
                            <img src="@/assets/icons/instagram.svg" alt="Instagram" />
                        </a>
                        <a href="#" class="footer__social-icon">
                            <img src="@/assets/icons/twitter.svg" alt="Twitter" />
                        </a>
                        <a href="#" class="footer__social-icon">
                            <img src="@/assets/icons/facebook.svg" alt="Facebook" />
                        </a>

                        <a href="#" class="footer__social-icon">
                            <img src="@/assets/icons/vkontakte.svg" alt="Vkontakte" />
                        </a>
                    </div>
                </div>
            </div>
            <div class="footer__row">
                <ul class="footer__lists-row">
                    <li class="footer__li">ООО "ПАСКАЛЬ"</li>
                    <li class="footer__li">ИНН 7816427865</li>
                    <li class="footer__li">КПП 781101001</li>
                    <li class="footer__li">ОГРН 1079847083755</li>
                    <li class="footer__li">ОКПО 83759627</li>
                    <li class="footer__li">Расчетный счет 40702810455100001938</li>
                    <li class="footer__li">Генеральный директор Кремницына Елена Николаевна</li>
                </ul>
            </div>
            <div class="footer__row">
                <ul class="footer__lists-row">
                    <li class="footer__li">Банк: СЕВЕРО-ЗАПАДНЫЙ БАНК ПАО СБЕРБАНК</li>
                    <li class="footer__li">БИК 044030653</li>
                    <li class="footer__li">Корр. счет 30101810500000000653</li>
                    <li class="footer__li">Юридический адрес: 192012, Санкт-Петербург г, ул Ново-Александровская, д. 14,
                        литер
                        А, 54-Н, КОМ. 3</li>
                </ul>
            </div>
        </footer>


    </div>
</template>
  
<style scoped lang="scss">
@import '@/styles/global';

.footer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;

    &__row {
        display: flex;
        overflow-x: hidden;
    }

    &__logo {
        max-width: 100%;
        height: auto;
    }

    &__group {
        display: flex;
        justify-content: space-between;
    }

    &__links-column {
        display: flex;
        flex-direction: column;
    }

    &__lists-row {
        display: flex;
        padding: 0;
        margin: 0 0 8px 0;
    }

    &__link {
        color: #0A2641;
        font-size: 16px;
        font-weight: 600;
        line-height: 28px;
        text-decoration: none;
        margin-bottom: 32px;

        &:hover {
            text-decoration: underline;
        }
    }

    &__li {
        list-style: none;
        white-space: nowrap;
        color: #5F83A7;
        font-size: 11px;
        font-weight: 600;
        line-height: 18px;
    }

    &__li:not(:last-child) {
        margin-right: 46x;
    }

    &__phone {
        display: flex;
        flex-direction: column;

        &-number {

            color: #0A2641;
            font-size: 24px;
            font-weight: 600;
            line-height: 28px;
        }

        &-call {
            color: #4851FD;
            font-family: Inter;
            font-size: 14px;
            font-style: normal;
            font-weight: 600;
            line-height: 28px;
            cursor: pointer;
        }
    }

    &__socials {
        display: flex;
        gap: 24px;
        margin-top: 57px;

        &-icon {
            display: inline-block;
            margin-right: 10px;

            img {
                width: 20px;
            }
        }
    }
}

@media (max-width: 767px) {
    .footer {
        &__group {
            flex-direction: column;
        }

        &__column {
            margin-bottom: 20px;
        }

        &__phone {
            display: flex;
            flex-direction: column;
        }
    }
}

@media (min-width: 768px) and (max-width: 1365px) {
    .footer {
        &__group {
            flex-wrap: wrap;
            justify-content: space-around;
        }

        &__column {
            flex: 0 0 48%;
            margin-bottom: 20px;
        }
    }
}

@media (min-width: 1366px) {
    .footer {
        &__group {
            flex-wrap: nowrap;
            justify-content: space-between;
        }

        &__column {
            flex: 0 0 auto;
        }
    }
}

@media (min-width: 1366px) {
    .footer {
        &__group {
            flex-wrap: nowrap;
            justify-content: space-between;
        }

        &__column {
            flex: 0 0 auto;
        }
    }
}

@media (max-width: 1365px) {
    .footer {
        &__group {
            flex-wrap: wrap;
            justify-content: space-around;
        }

        &__column {
            flex: 0 0 48%;
            margin-bottom: 20px;
        }
    }
}

@media (max-width: 767px) {
    .footer {
        &__group {
            flex-direction: column;
        }

        &__column {
            margin-bottom: 20px;
        }

        &__phone {
            display: flex;
            flex-direction: column;
        }
    }
}
</style>