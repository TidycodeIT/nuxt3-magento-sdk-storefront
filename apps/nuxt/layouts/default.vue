<template>
    <div>
        <TheTopNav/>
        <slot/>
    </div>
</template>
<script setup lang="ts">
import TheTopNav from "~/components/blocks/layout/TheTopNav.vue";
</script>
