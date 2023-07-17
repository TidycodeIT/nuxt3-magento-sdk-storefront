<template>
  <div>
    <CMS_PAGE :content="pageData?.content"></CMS_PAGE>
  </div>
</template>

<script lang="ts" setup>
import CMS_PAGE from '~/modules/cms/page/pages/index.vue';
import {sdk} from "~/sdk.config";
import useCms from "~/modules/cms/composables/useCms";

 const cms = useCms()

const {pageData} = await cms.getCms()

  useHead({
    title: pageData?.meta_title || pageData?.title,
    meta: [{
      name: 'description',
      content: pageData?.description
    },{
      name: 'keywords',
      content: pageData?.meta_keywords || ''
    }]
  })
</script>
