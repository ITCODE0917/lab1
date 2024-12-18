<template>
  <div class="container mt-5">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h4 class="fw-bold text-dark">Liste de <span class="produits-header">Produits</span></h4>
      <input type="text" class="form-control w-25 search-input" placeholder="rechercher un produit" />
      <button id="install-btn" style="display: none;">Télécharger l'application</button>
    </div>

    <!--Grid view-->
    <div class="row">
      <div v-for="product in productsList" :key="product.id" class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
        <div class="card product-card border-0 shadow-sm h-100 position-relative">
          <div class="position-relative">
            <img :src="`/lab1${product.image}`" class="card-img-top" :alt="product.name" />
            <!-- Badge -->
            <span v-if="product.sale" class="badge sale-badge">VENTE</span>
            <button class="btn btn-primary buy-btn">Ajouter au Panier</button>
          </div>
          <div class="card-body text-center">
            <h6 class="card-title fw-bold">{{ product.name }}</h6>
            <p class="price mb-1">
              <span class="fw-bold text-primary">${{ product.price }}</span>
              <span v-if="product.oldPrice" class="text-muted ms-1"><s>${{ product.oldPrice }}</s></span>
            </p>
            <div>
              <span v-for="star in 5" :key="star" class="star-rating" :class="{'filled': star <= product.rating}">★</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import productData from '../data/products.json';

export default {
  data() {
    return {
      products: productData
    };
  },
  computed: {
    productsList() {
      return this.products.sort((produit_a, produit_b) => produit_a.name.localeCompare(produit_b.name));

    }
  }
};
</script>
