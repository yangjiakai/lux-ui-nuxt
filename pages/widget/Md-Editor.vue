<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import { MdEditor, MdPreview, MdCatalog } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import UiParentCard from "@/components/common/UiParentCard.vue";

const id = ref("editor");
const scrollElement = document.documentElement;
const markdown = `
## Code

Inline \`code\`

Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code


Block code "fences"

\`\`\`
Sample text here...
\`\`\`

Syntax highlighting

\`\`\` js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
\`\`\`

## Tables

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

Right aligned columns

| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |
`;

const text = ref(markdown);
</script>

<template>
  <UiParentCard title="MdEditor">
    <MdEditor v-model="text" />
  </UiParentCard>

  <UiParentCard title="MdEditor">
    <div class="d-flex">
      <MdPreview :editorId="id" :modelValue="text" />
      <v-card class="pa-3" variant="outlined" width="200" height="300">
        <MdCatalog :editorId="id" :scrollElement="scrollElement" />
      </v-card>

    </div>
  </UiParentCard>
</template>

<style scoped lang="scss"></style>
