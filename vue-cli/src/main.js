import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
    methods: {
        addQuote(newQuote) {
            this.$emit('quoteAdded', newQuote);
        },
        clearInput() {
            this.$emit('clearInput', true);
        },
        calcIndicator(length) {
            this.$emit('calcIndicator', length);
        }
    }
});

new Vue({
        el: '#app',
        render: h => h(App)
});
