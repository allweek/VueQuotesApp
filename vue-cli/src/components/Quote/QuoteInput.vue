<template>
    <div class="quote-input">
        <h4>Quote</h4>
        <textarea placeholder="your text" @input="quoteText = $event.target.value" id="quote-text"></textarea>
        <button class="quote-btn" @click="addQuote">Add Quote</button>
    </div>
</template>

<script>
    import { eventBus } from './../../main';
    export default {
        data: function () {
            return {
                quoteText: ''
            }
        },
        methods: {
            addQuote() {
                if (this.quoteText.length) {
                    eventBus.addQuote(this.quoteText);
                }
            }
        },
        created() {
            eventBus.$on('clearInput', () => {
               document.getElementById('quote-text').value = '';
               this.quoteText = '';
            });
        }
    }
</script>

<style scoped>
    .quote-input {
        margin: 0 auto;
        width: 50%;
        text-align: center;
        margin-bottom: 20px;
    }
    h4 {
        text-align: left;
        margin-bottom: 5px;
    }
    textarea {
        width: 100%;
        border-radius: 2px;
        border: 1px solid dodgerblue;
        text-align: left;
        height: 50px;
        padding: 10px;
        font-size: 14px;
        margin-bottom: 10px;
        resize: none;
    }
    .quote-btn {
        display: inline-block;
        vertical-align: top;
        padding: 15px;
        text-align: center;
        color: #fff;
        font-size: 14px;
        background: dodgerblue;
        text-decoration: none;
    }
    .quote-btn:hover {
        text-decoration: none;
    }
</style>