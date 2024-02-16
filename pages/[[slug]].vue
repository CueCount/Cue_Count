<template>
    <main class="flex flex-row pt-10 min-h-screen">
        
        <div class="basis-2/5 ">
            <Story>
                <StoryChat />
            </Story>
        </div>

        <div class="basis-3/5 ">
            <Story>
                <StoryTrends />
            </Story>
        </div>
        
    </main>
</template>

<script setup>
   
    /*
        If Session Requested
            Get Session ID
            Get All Data
            Pass all Chat and Trend IDs to Children to Display
        Else 
            Create New Session
    */

    import { useSessionsStore } from "@/stores/sessions.js"
    import {storeToRefs} from 'pinia';

    // This object is being passed but it's value is undefined, that's what I need to solve. 
    // Probably has to do with the same error I'm getting on the sessions.js file.
    const storeSession = useSessionsStore();
    const session = computed(()=> storeSession.sessions[id].data);
    console.log(session);

</script>

<style lang="scss">

</style>