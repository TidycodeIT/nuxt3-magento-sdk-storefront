<template>
  <div v-html="rawContent"></div>
  <client-only>
    <div v-if="data.children.length" v-for="(child, i) in data.children" :key="i">
      <ContentTypeFactory :data="child" :level="'root'" />
    </div>
  </client-only>
</template>

<script lang="ts" setup>
import { ref, onServerPrefetch, onMounted } from 'vue'
import usePageBuilder from "~/modules/cms/pagebuilder/composables/usePageBuilder";
import ContentTypeFactory from '~/modules/cms/pagebuilder/components/Factory.vue';
import parseStorageHtml from '~/modules/cms/pagebuilder/composables/parseStorageHtml';

const data = ref({children: []});
let rawContent = '';

const pageBuilder = usePageBuilder();
const dataParser = parseStorageHtml();
const props = defineProps<{ raw: String }>()

onServerPrefetch(async () => {
  // component is rendered as part of the initial request
  // pre-fetch data on server as it is faster than on the client
  rawContent = await pageBuilder.getPageBuilderData(props.raw, false);
})

onMounted(async () => {
  // if data is null on mount, it means the component
  // is dynamically rendered on the client. Perform a
  // client-side fetch instead.
  if (rawContent.length) {
    data.value = dataParser.parser(rawContent);
  } else {
    rawContent = await pageBuilder.getPageBuilderData(props.raw, false);
    data.value = dataParser.parser(rawContent); // @todo: move it to pagebuilderdata
  }

  console.log('PageBuilder', 'result', data, data.children);
})
/*
  const data = ref(null);
  const parsedData = computed(() => parseStorageHtml(content));

  data.value = parsedData.value;
*/
</script>