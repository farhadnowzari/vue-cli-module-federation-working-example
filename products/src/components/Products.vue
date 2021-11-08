<template>
    <v-container fluid>
        <v-row>
            <v-col :key="index" v-for="(prod, index) in products" cols=12 xs="6" md="4">
                <product :product="prod"></product>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import ProductModel from '@/models/ProductModel';
import ProductsList from '@/assets/products.json';
import Product from '@/components/Product.vue';

@Component({
    components: {
        Product
    }
})
export default class Products extends Vue {
    products: ProductModel[] = [];
    mounted(): void {
        const products = ProductsList as ProductModel[];
        this.products = products.filter(x => !!x);
    }
}
</script>