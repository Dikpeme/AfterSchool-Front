<template>
  <listOfProducts :products="getClasses"/>
</template>

<script>
import { mapGetters } from 'vuex';
import listOfProducts from './ListOfProducts';

export default {
  components: {
    listOfProducts,
  },

  computed: {
    ...mapGetters([
      'getClasses',
    ]),
  },
};
</script>

<style>
</style>

