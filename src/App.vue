<template>
  <page-header />
  <our-advantages />
  <our-price />
  <our-news />
  <ask-question />
  <yandex-map />
  <page-footer />
</template>

<script>
import OurAdvantages from '@/components/OurAdvantages.vue';
import PageHeader from '@/components/PageHeader.vue'
import OurPrice from '@/components/OurPrice.vue'
import OurNews from '@/components/OurNews.vue'
import AskQuestion from '@/components/AskQuestion.vue'
import YandexMap from '@/components/YandexMap.vue'
import PageFooter from '@/components/PageFooter.vue'
export default {
  name: 'App',
  created() {
    document.title = 'Бухгалтерские услуги';
  },
  components: {
    PageHeader,
    OurAdvantages,
    OurPrice,
    OurNews,
    AskQuestion,
    YandexMap,
    PageFooter
  }
}
</script>

<style lang="scss"> #app {
   font-family: 'Inter', sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
 }

 html,
 body {
   min-height: 100%;
   margin: 0;
 }
</style>
