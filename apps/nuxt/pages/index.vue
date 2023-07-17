<template>
  <div>
    <CMS_PAGE :content="pageData?.content"></CMS_PAGE>
  </div>
</template>

<script lang="ts" setup>
import CMS_PAGE from '~/modules/cms/page/pages/index.vue';
import {sdk} from "~/sdk.config";

const { data: { cmsPage: pageData }} = await sdk.magento.cmsPage({
  identifier: 'home'
})

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
