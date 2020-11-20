<template>
  <listOfProducts :products="getActivities"/>
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
      'getActivities',
    ]),
  },
};
</script>

<style>
</style>

