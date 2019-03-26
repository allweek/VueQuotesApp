<template>
  <div class="container">
    <div class="row">
      <app-quote></app-quote>
    </div>
  </div>
</template>

<script>
  import Quote from './components/Quote/Quote.vue';

  export default {
    components: {
        appQuote: Quote
    }
  }
</script>

<style>
  .container {
    max-width: 1000px;
    padding: 0 20px;
    margin: 0 auto;
  }
</style>
