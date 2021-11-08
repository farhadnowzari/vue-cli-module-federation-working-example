<template>
  <v-card class="d-flex">
      <img :src="product.image" height="200">
      <v-card-text class="d-flex flex-column">
        <h2 class="text-h6">{{ product.name }}</h2>
        <div>
          <v-btn :key="index" x-small v-for="(plat, index) in platforms" class='ma-1' elevation="0" color="secondary">{{ plat }}</v-btn>
        </div>
        <v-btn @click="addToCart" class="mt-auto ml-auto" fab small elevation="1" color="primary">
          <v-icon>mdi-cart</v-icon>
        </v-btn>
      </v-card-text>
  </v-card>
</template>

<script lang="ts">
import ProductModel from '@/models/ProductModel';
import { Vue, Component, Prop } from 'vue-property-decorator';
import EventBus from '@/helpers/EventBus';
@Component
export default class Product extends Vue {
  @Prop({
    type: Object,
    required: true,
    default: () => []
  })
  readonly product!: ProductModel;

  get platforms(): string[] {
    if(!this.product.platforms) return [];
    var platforms = this.product.platforms.split(',').map(x => x.trim());
    return platforms;
  }

  addToCart(): void {
    EventBus.$emit('cart-add', this.product);
  }
}
</script>