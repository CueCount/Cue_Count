<template>
    <div class="text-white">
        
        <!-- 
            Chat Container 
                Chat Text Area 
        -->

        <textarea v-model="inputText" rows="4" cols="50" placeholder="Enter your text here..." class="bg-brandDark"></textarea>
        <button @click="submit()">Submit</button>
    </div>
</template>

<script setup>

    /* 
        If Chat is Requested:
            Get Chat by ID
                Get Trend ID
                Get Connected Trend IDs
                Check for Anchor and Get Anchor if Exists
        
        Else 
            Create New Chat
    */

    const inputText = ref('');
    function submit() {
        const slug = ref(inputText.value);
        const newURL = window.location.protocol + "//" + window.location.host + "/" + slug.value;
        window.location.href = newURL;

        //If I create a new sesh here, then I would const ID = create new sesh... 
    }
        
</script>