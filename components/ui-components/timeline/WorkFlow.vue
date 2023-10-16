
import { VCardItem } from 'vuetify/lib/components/index.mjs';
<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
const history = [{
  year: '沟通需求',
  event: 'VERSAL成立于上海',
  detile: '与客户进行沟通，了解项目的具体需求和目标。这包括收集功能要求、设计要求、时间要求等等'
}, {
  year: '提供报价',
  event: '成为上海制造行业有影响力的招聘公司',
  detile: '根据客户的需求，评估项目的复杂性、工作量和所需资源，并提供详细的报价单。报价单通常包括项目费用、交付时间和付款方式等信息'
}, {
  year: '下单付款',
  event: '汽车零配件签约客户破百',
  detile: '一旦客户接受报价，双方将签署合同或协议，并进行付款。付款可以通过在线支付、银行转账等方式进行。'
}, {
  year: '程序开发',
  event: '举行“大数据时代的HR招聘策略应对”论坛',
  detile: '根据项目需求和规格说明书，开发团队开始进行程序开发。这包括编写代码、设计数据库、创建用户界面等工作。'
}, {
  year: '完善测试',
  event: '荣获上海人才服务行业协会百强',
  detile: '在程序开发过程中，进行系统测试和单元测试，以确保软件的质量和稳定性。这包括功能测试、性能测试、安全测试等'
}, {
  year: '初稿演示',
  event: '蝉联年度人力资源“百强企业”称号',
  detile: '完成初步开发后，与客户进行演示，展示软件的功能和界面。客户可以提供反馈意见和建议，以便进行进一步的改进和调整'
}, {
  year: '确认收货',
  event: '推出合伙人制度',
  detile: '客户确认软件已经上线，并进行验收测试。如果软件符合预期并满足需求，则进行验收确认。'
}, {
  year: '售后客服',
  event: 'VERSAL成立大连,苏州分公司',
  detile: '一旦项目上线并交付，提供售后支持和客户服务。这包括解答客户的问题、处理软件故障、提供培训等'
}]
</script>

<template>
  <v-card color="grey-darken-4" class="wallpaper">
    <v-timeline side="end">
      <v-timeline-item v-for="item in history" :key="item.year" size="small">
        <template v-slot:opposite>
          <div>{{ item.detile }}</div>
        </template>
        <v-card class="elevation-2 " color="transparent" max-width="250">
          <v-card-title class="headline">{{ item.year }}</v-card-title>

        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-card>
</template>

<style scoped lang="scss">
.wallpaper {
  background-size: cover;
  background-image: url('https://images.unsplash.com/photo-1546349851-64285be8e9fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3456&q=80');
}
</style>
