<template>
    <div>
        <app-indicator :quotesLength="quotes.length" :maxLength="maxLength"></app-indicator>
        <app-quote-input></app-quote-input>
        <ul class="quotes">
            <app-quote v-for="(quote, i) in quotes" :key="i"  @click.native="removeQuote(i)">{{ quote }}</app-quote>
        </ul>
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
            quoteText: '',
            maxLength: 10
          };
        },
        methods: {
          addQuote: function(quote) {
            this.quotes.push(quote)
          },
            removeQuote: function (i) {
                this.quotes.splice(i, 1);
            }
        },
        created() {
            eventBus.$on('quoteAdded', (quote) => {
                if (this.quotes.length < this.maxLength) {
                    this.quoteText = quote;
                    this.addQuote(this.quoteText);
                } else {
                    alert('Max quotes limit. Please, delete some quotes')
                }
            });
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
        list-style: none;
        margin-bottom: 50px;
        padding-left: 0;
        font-size: 0;
        min-height: 240px;
    }
</style>