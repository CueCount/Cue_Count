<template>
    <div>
        <!--
            If Trend ID requested
                Display Trend (Card Type, Trend Data)
        -->
        <canvas class="p-5 rounded-s bg-brandMidDark" ref="canvas" />
    </div>
</template>

<script setup>

    /* 
        Import Chart.JS 
        Import Trend Data
        Receive Trend Edits
    */
    
    import Chart from "chart.js/auto";
    const props = defineProps(["data"]);
    const canvas = ref(null);

    onMounted(function() {
        initChart(); });

    function initChart() {
        new Chart(canvas.value, {
            type: 'bar',
            data: {
                labels: props.data.map(row => row.year),
                datasets: [{
                    label: 'Acquisitions by year',
                    data: props.data.map(row => row.count) }] },
                options: {
                    responsive: true } } ); }

</script>