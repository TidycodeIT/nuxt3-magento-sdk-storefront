<template>
  <div>
    <DemoBanner v-if="homeDemo" />
    <PageBuilder v-if="enablePageBuilder" :raw="content"></PageBuilder>
    <div v-else v-html="content" />
  </div>
</template>

<script lang="ts" setup>
import DemoBanner from "~/modules/cms/page/components/DemoBanner.vue";
import PageBuilder from "~/modules/cms/pagebuilder/components/PageBuilder.vue";

const config = useRuntimeConfig()
const props = defineProps<{ content: String }>()

// configs
const enablePageBuilder = config.public.pageBuilder === 'true';
const homeDemo = config.public.demoContent === 'true';

// data
const content = props?.content || '';
</script>
