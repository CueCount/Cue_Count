<template>  
    <div>
        <!--
            Visualization Container
                For Loop (Grid Type, IDs, Passed Vars)
                    Display Graph Area // Placed by JS-->

                    <StoryTrend :data="store.graphData[slug]"/>

                <!--For Loop (Grid Type, IDs, Passed Vars)
                        Display connected trends // Placed by JS
        -->
        
    </div>
</template>

<script setup>

    /*
        If Visualization ID requested
            Get Graph/Visual 
            Display Graph/Visual
                If connected trends requested
                    Get connected trends
                    Display connected trends
        Else If new Session Created
            Display default graph/visual
        Else
            Display 404 Message
        
        If edit to graph/visual requested
            Edit graph data 
        
        If 
    */

    import { useStore } from "@/stores";

    const store = useStore();
    const route = useRoute();
    const slug = route.params.slug || "home";
    await useAsyncData(() => store.getData(slug));

</script>