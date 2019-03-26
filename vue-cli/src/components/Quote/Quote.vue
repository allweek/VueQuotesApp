<template>
    <div>
        <app-indicator></app-indicator>
        <app-quote-input></app-quote-input>
        <ul class="quotes" v-for="quote in quotes">
            <app-quote :qoute-text="quote"></app-quote>
        </ul>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import QuoteIndicator from './QuoteIndicator.vue';
    import QuoteInput from './QuoteInput.vue';
    import QuoteItem from './QuoteItem.vue';
    import Footer from '../Shared/Footer.vue';

    export default {
        data: function () {
          return {
            quoteText: '',
            quotes: []
          };
        },
        methods: {
          addQuote: function(quote) {
            this.quotes.push(quote)
          }
        },
        components: {
            'app-indicator': QuoteIndicator,
            'app-quote': QuoteItem,
            'app-quote-input': QuoteInput,
            'app-footer': Footer
        }
    }
</script>

<style>
    .quotes {
        margin-bottom: 50px;
    }
</style>
