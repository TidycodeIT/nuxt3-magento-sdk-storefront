<template>
    <div>
        <TheTopNav />
        <slot />
        <TheFooter />
    </div>
</template>
<script setup lang="ts">
import TheTopNav from "~/components/blocks/layout/TheTopNav.vue";
import TheFooter from "~/components/blocks/layout/TheFooter.vue";
</script>
