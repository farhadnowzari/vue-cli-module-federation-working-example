<template>
  <v-container>
    <products></products>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Products from '@/components/Products.vue';

@Component({
  components: {
    Products
  }
})
export default class HomeView extends Vue {

}
</script>