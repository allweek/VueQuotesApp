<template>
    <div class="quote-indicator">
        <h2>Quotes Added</h2>
        <div class="quote-line">
            <div class="quote-filled" :style="{width: quotesLength*maxLength + '%'}" v-if="quotesLength">{{ quotesLength }} / 10 </div>
        </div>
    </div>
</template>

<script>
    import { eventBus } from './../../main';
    export default {
        props: ['quotesLength', 'maxLength'],
        methods: {
            addQuote() {
                eventBus.addQuote(this.quoteText);
            }
        }
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
        height: 18px;
        margin-bottom: 20px;
    }
    .quote-filled {
        text-align: center;
        background: dodgerblue;
        color: #fff;
        -webkit-transition: width 0.5s;
        -moz-transition: width 0.5s;
        -ms-transition: width 0.5s;
        -o-transition: width 0.5s;
        transition: width 0.5s;
    }
</style>