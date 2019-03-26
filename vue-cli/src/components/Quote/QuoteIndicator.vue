<template>
    <div class="quote-indicator">
        <h2>Quotes Added</h2>
        <div class="quote-line">
            <div class="quote-filled">1/10</div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .quote-indicator {
        width: 100%;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .quote-line {
        background: #efefef;
        border-radius: 2px;
        border: 1px solid lightgrey;
        padding: 3px;
        margin-bottom: 20px;
    }
    .quote-filled {
        width: 10%;
        text-align: center;
        background: dodgerblue;
        color: #fff;
    }
</style>