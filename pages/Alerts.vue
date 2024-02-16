<template>
    <div>

    </div>
</template>

<script setup>
    import { useSessionsStore } from "@/stores/sessions.js"

    // This object is being passed but it's value is undefined, that's what I need to solve. 
    // Probably has to do with the same error I'm getting on the sessions.js file.
    const storeSession = useSessionsStore();

    // Function () Get latest changed Sessions 
</script>

<style lang="scss" scoped>

</style>