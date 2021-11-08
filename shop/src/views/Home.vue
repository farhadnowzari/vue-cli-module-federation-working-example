<template>
  <v-container fluid>
    <Products></Products>
    <v-divider></v-divider>
    <h2 class="text-h5">Cart</h2>
    <Product :key="index" :product="prod" v-for="(prod, index) in products"></Product>
  </v-container>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';
  import EventBus from 'federated_app/EventBus';
  @Component({
    components: {
      Products: () => import("federated_app/Products"),
      Product: () => import("federated_app/Product")
    }
  })
  export default class HomeView extends Vue {
    products: Array<unknown> = [];
    mounted(): void {
      EventBus.$on('cart-add', (value: any) => {
        this.products.push(value);
      });
    }
  }
</script>
