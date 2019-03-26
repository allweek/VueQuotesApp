<template>
    <div class="quote">

    </div>
</template>

<script>
//    import { eventBus } from '../main.js';

    export default {
        props: {
            text: Stringitg
        },
        methods: {

        },
        created() {
            eventBus.$on('ageWasEdited', (data) => {
                this.text = data;
            });
        }
    }
</script>

<style scoped>
    .quote {
        display: inline-block;
        vertical-align: top;
        width: 25%;
        border: 1px solid lightgrey;
        padding: 20px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        color: black;
        font-style: italic;
        font-weight: bold;
    }
</style>