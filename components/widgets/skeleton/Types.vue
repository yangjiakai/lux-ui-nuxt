<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import CopyLabel from "@/components/common/CopyLabel.vue";

const desserts = [
  {
    type: "actions",
    composition: "button@2 ",
  },
  {
    type: "article",
    composition: "heading, paragraph ",
  },
  {
    type: "avatar",
    composition: "avatar ",
  },
  {
    type: "button",
    composition: "button ",
  },
  {
    type: "card",
    composition: "image, heading ",
  },
  {
    type: "card-avatar",
    composition: "image, list-item-avatar ",
  },
  {
    type: "chip",
    composition: "chip ",
  },
  {
    type: "date-picker",
    composition:
      "list-item, heading, divider, date-picker-options, date-picker-days, actions ",
  },
  {
    type: "date-picker-options",
    composition: "text, avatar@2 ",
  },
  {
    type: "date-picker-days",
    composition: "avatar@28 ",
  },
  {
    type: "divider",
    composition: "divider ",
  },
  {
    type: "heading",
    composition: "heading ",
  },
  {
    type: "image",
    composition: "image ",
  },

  {
    type: "list-item",
    composition: "text ",
  },
  {
    type: "list-item-avatar",
    composition: "avatar, text ",
  },
  {
    type: "list-item-two-line",
    composition: "sentences ",
  },
  {
    type: "list-item-avatar-two-line",
    composition: "avatar, sentences ",
  },
  {
    type: "list-item-three-line",
    composition: "paragraph ",
  },
  {
    type: "list-item-avatar-three-line",
    composition: "avatar, paragraph ",
  },
  {
    type: "ossein",
    composition: "ossein ",
  },
  {
    type: "paragraph",
    composition: "text@3 ",
  },
  {
    type: "sentences",
    composition: "text@2 ",
  },
  {
    type: "subtitle",
    composition: "text ",
  },
  {
    type: "table",
    composition: "table-heading, table-thead, table-tbody, table-tfoot ",
  },
  {
    type: "table-heading",
    composition: "heading, text ",
  },
  {
    type: "table-thead",
    composition: "heading@6 ",
  },
  {
    type: "table-tbody",
    composition: "table-row-divider@6 ",
  },
  {
    type: "table-row-divider",
    composition: "table-row, divider ",
  },
  {
    type: "table-row",
    composition: "table-cell@6 ",
  },
  {
    type: "table-tfoot",
    composition: "text@2, avatar@2 ",
  },
  {
    type: "text",
    composition: "text ",
  },
];
</script>

<template>
  <v-table>
    <thead class="bg-primary">
      <tr class="card-title">
        <th class="font-weight-bold text-white">Type</th>
        <th class="font-weight-bold text-white">Composition</th>
        <th class="font-weight-bold text-white">Skeleton</th>
      </tr>
    </thead>
    <tbody>
      <tr class="text-body-1" v-for="item in desserts" :key="item.name">
        <td class="font-weight-bold">{{ item.type }}</td>
        <td><copy-label :text="item.composition" /></td>
        <td>
          <v-card class="my-2" width="300">
            <v-skeleton-loader :type="item.type"></v-skeleton-loader>
          </v-card>
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

<style scoped lang="scss">
tr:nth-child(even) {
  background-color: #fafafa;
}
</style>
