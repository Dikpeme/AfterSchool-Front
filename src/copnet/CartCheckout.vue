<template>
  <div class="checkout-box">
    <ul class="checkout-list">
      <transition-group name="fade">
      <li v-for="(product, index) in getProductsInCart" :key="index" class="checkout-product">
        <img :src="product.image" alt="" class="product-image">
        <h3 class="product-name">{{ product.name }}</h3>
        <span class="product-price">$ {{ product.price }},00 </span>
        <button class="product-remove" @click="remove(index)">X</button>
      </li>
      </transition-group>
    </ul>
    <div v-if="!hasProduct()" class="checkout-message">
      <h3>No products...</h3>
      <router-link to="./">Back to list of products</router-link>
    </div>
    <h3 class="total" v-if="hasProduct()">
      Total: R$ {{ totalPrice() }}, 00
    </h3>

    <div v-if="hasProduct()">
      <h3>Checkout Now</h3>
      <input v-model="name" placeholder="Your Name">
      <p>{{ name }}</p>
      <input v-model="phone" placeholder="Your Phone Number">
      <p>{{ phone }}</p>

      <btn @click="doSumthin" id="namas" class="btn btn-large btn-info">
         Checkout
        
      </btn>
       <div class="boxer" id="nam">
<h2>Checkout Success</h2>
  </div>

    </div>

  </div>

</template>

<script>
function burkutu()
{
  document.getElementById("nam").style.display='table';
}
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'getProductsInCart',
    ]),
  },

  methods: {
    ...mapActions([
      'removeProduct',
    ]),
    hasProduct() {
      return this.getProductsInCart.length > 0;
    },
    totalPrice() {
      return this.getProductsInCart.reduce((current, next) =>
        current + next.price, 0);
    },
    remove(index) {
      this.removeProduct(index);
    },
  },
};
</script>

<style scoped>
.boxer{
  display:none;
  position:fixed;
  background:red;
}
  .checkout-box {
    width: 100%;
    max-width: 900px;
    display: flex;
    flex-direction: column;
    margin: 50px auto;
    box-sizing: border-box;
    padding: 1em;
  }

  .checkout-list {
    padding: 0;
  }

  .checkout-product {
    display: grid;
    grid-template-columns: 1fr 3fr 2fr .5fr;
    background-color: #fff;
    box-shadow: 0px 0px 10px rgba(73, 74, 78, 0.1);
    border-radius: 5px;
    list-style: none;
    box-sizing: border-box;
    padding: .8em;
    margin: 1em 0;
  }

  .checkout-product * {
    place-self: center;
  }
  .product-image {
    grid-column: 1/2;
    width: 50%;
  }

  .product-name {
    box-sizing: border-box;
  }

  .product-price {
    font-size: 1.2em;
    font-weight: bold;
  }

  .product-remove {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 0;
    background-color: #E0E0E0;
    color: #fff;
    cursor: pointer;
  }

  .total {
    font-size: 2em;
    font-weight: bold;
    align-self: flex-end;
  }

  .checkout-message {
    font-size: 1.5em;
  }

  .fade-enter-active, .fade-leave-active {
    transition: all .5s;
  }

  .fade-enter, .fade-leave-to {
    transform: translateX(-40px);
    opacity: 0;
  }

  .btn {
    border: 0;
    cursor: pointer;
    box-sizing: border-box;
    border-radius: 3px;
    color: #fff;
    display: flex;
    justify-content: space-around;
    position: relative;
  }

  .btn-small {
    padding: .5em 2em;
  }

  .btn-medium {
    padding: .7em 4.5em;
  }

  .btn-large {
    padding: .7em 5em;
  }

  .btn-info {
    background-color: #2D9CDB;
  }

  .btn-sucess {
    background-color: #27AE60;
  }

  .btn-danger {
    background-color: #e74c3c;
  }

  .btn img {
    max-width: 20px;
    margin-left: .5em;
  }

</style>
