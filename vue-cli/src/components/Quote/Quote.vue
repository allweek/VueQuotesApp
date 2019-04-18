<template>
    <div>
        <app-indicator></app-indicator>
        <app-quote-input></app-quote-input>
        <app-quotes :quotes="this.quotes"></app-quotes>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import { eventBus } from './../../main';

    import QuoteIndicator from './QuoteIndicator.vue';
    import QuoteInput from './QuoteInput.vue';
    import QuoteItem from './QuoteItem.vue';
    import Footer from '../Shared/Footer.vue';

    export default {
        data: function () {
          return {
            quotes: [],
            quoteText: ''
          };
        },
        methods: {
          addQuote: function(quote) {
            this.quotes.push(quote)
          }
        },
        created() {
            eventBus.$on('quoteAdded', (quote) => {
                if (this.quotes.length < 10) {
                    this.quoteText = quote;
                    this.addQuote(this.quoteText);
                    eventBus.clearInput();
                } else {
                    alert('Max quotes limit. Please, delete some quotes')
                }
            });
        },
        watch: {
            quotes: {
                handler: function (val, oldVal) {
                    var newLength = val.length;
                    eventBus.calcIndicator(newLength);
                },
                deep: true
            }
        },
        components: {
            'app-indicator': QuoteIndicator,
            'app-quotes': QuoteItem,
            'app-quote-input': QuoteInput,
            'app-footer': Footer
        }
    }
</script>
