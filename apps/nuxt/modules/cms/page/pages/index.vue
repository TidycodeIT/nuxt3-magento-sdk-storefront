<template>
  <div>
    <DemoBanner v-if="homeDemo" />
    <PageBuilder v-if="enablePageBuilder"></PageBuilder>
    <div v-else v-html="props?.content" />
  </div>
</template>

<script lang="ts" setup>
import DemoBanner from "~/modules/cms/page/components/DemoBanner.vue";
import PageBuilder from "~/modules/cms/page/components/PageBuilder.vue";

const config = useRuntimeConfig()
const props = defineProps<{ content: String }>()
const enablePageBuilder = config.public.pageBuilder;
const homeDemo = config.public.demoContent;
</script>
