<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import { useDate } from "vuetify";
// Format options
// fullDateWithWeekday
// normalDateWithWeekday
// keyboardDate
// monthAndDate
// monthAndYear
// month
// monthShort
// dayOfMonth
// shortDate
// year

const date = useDate();
const myDate = date.format(new Date(), "keyboardDate");
</script>

<template>
  <div class="">{{ myDate }}</div>
</template>

<style scoped lang="scss"></style>
