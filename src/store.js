import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activities: [
      {
        name: 'Swimming',
        price: 2259,
        location: 'Gwagwalada',
        spaces: 5,
        image: 'https://api.time.com/wp-content/uploads/2016/08/gettyimages-5878532621.jpg?w=300&quality=85',
        stars: 5,
        totalReviews: 230,
        details: 'Learn to Swim Like a pro',
      },
      {
        name: 'Dancing',
        price: 2284,
        location: 'Wisconsin',
        spaces: 5,
        image: 'https://ogden_images.s3.amazonaws.com/www.timesrepublican.com/images/2020/04/08232943/77B50D31-FEEE-41C4-8E5E-75870BEDB87C-1-886x840.jpeg',
        stars: 3.4,
        totalReviews: 20,
        details: 'High school musical and more',
      },
      {
        name: 'Music',
        price: 1490,
        location: 'Marcedonia',
        spaces: 5,
        image: 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_860462652_396419.jpg',
        stars: 1,
        totalReviews: 1,
        details: 'Piano and Guitars made simple',
      },
      {
        name: 'Painting',
        price: 2307,
        location: 'Istanbul',
        spaces: 5,
        image: 'https://classbento.com.au/images/class/abstract-art-painting-workshop-sydney-portrait-big.jpg',
        stars: 4.4,
        totalReviews: 340,
        details: 'Grafiti Arts and more',
      },
      {
        name: 'Golf',
        price: 2599,
        location: 'Italy',
        spaces: 5,
        image: 'https://www.fcgov.com/golf/img/golf-tee.jpg',
        stars: 3,
        totalReviews: 30,
        details: 'Learn to play golf easily',
      },
      {
        name: 'Skating',
        price: 14000,
        location: 'Rome',
        spaces: 5,
        image: 'https://tricocentre.ca/sites/default/files/styles/content_fit/public/learning_to_skate.jpg',
        stars: 2,
        totalReviews: 248,
        details: 'Dont miss out learning to skate with other people around',
      },
    ],

    classes: [
      {
        name: 'Mathematics',
        price: 1199,
        location: 'Persia',
        spaces: 5,
        image: 'https://frontiersinblog.files.wordpress.com/2018/05/education-children-student-mathematics-academic-achievement.jpg',
        stars: 0,
        totalReviews: 0,
        details: 'Basic Algebra, Quadratic equations and linear algebra',
      },
      {
        name: 'Computing',
        price: 929,
        location: 'Morocco',
        spaces: 5,
        image: 'https://www.queenmaryinfants.org.uk/_images/69480_s.png',
        stars: 1.5,
        totalReviews: 11,
        details: 'Installations, repairs and maintenance',
      },
      {
        name: 'Basic Networking',
        price: 3949,
        location: 'Azerbaijan',
        spaces: 5,
        image: 'https://miro.medium.com/max/700/1*b1IsY6YX7Wb-ngq6otMPKw.jpeg',
        stars: 1,
        totalReviews: 2,
        details: 'RJ45, cisco routers and other networking tools',
      },
      {
        name: 'Physics',
        price: 1943,
        location: 'Norway',
        spaces: 5,
        image: 'https://legacyuniversitygm.org/elearning/wp-content/uploads/2020/05/50745250-physics-science-theory-law-and-mathematical-formula-equation-doodle-handwriting-and-model-icon-in-wh.jpg',
        stars: 5,
        totalReviews: 310,
        details: 'Principle of floatation',
      },
      {
        name: 'Printing',
        price: 1699,
        location: 'Greece',
        spaces: 5,
        image: 'https://cdn.rswebsols.com/wp-content/uploads/2016/12/Digital-Printing.jpg',
        stars: 2.9,
        totalReviews: 42,
        details: 'Core printing and more',
      },
      {
        name: 'Applied Statistics',
        price: 2999,
        location: 'California',
        spaces: 5,
        image: 'https://www.measuringu.com/images/stats-started.jpg',
        stars: 0.5,
        totalReviews: 1,
        details: 'Major topics in statistics',
      },
    ],

    cartProducts: [],
    currentProduct: {},
    showModal: false,
    showPopupCart: false,
  },

  getters: {
    getActivities: state => state.activities,
    getClasses: state => state.classes,
    getAllProducts: state => state.activities.concat(state.classes),
    getProductsInCart: state => state.cartProducts,
    getCurrentProduct: state => state.currentProduct,
    getShowModal: state => state.showModal,
    getPopupCart: state => state.showPopupCart,
  },

  mutations: {
    ADD_PRODUCT: (state, product) => {
      state.cartProducts.push(product);
    },
    REMOVE_PRODUCT: (state, index) => {
      state.cartProducts.splice(index, 1);
    },
    CURRENT_PRODUCT: (state, product) => {
      state.currentProduct = product;
    },
    SHOW_MODAL: (state) => {
      state.showModal = !state.showModal;
    },
    SHOW_POPUP_CART: (state) => {
      state.showPopupCart = !state.showPopupCart;
    },
  },

  actions: {
    addProduct: (context, product) => {
      context.commit('ADD_PRODUCT', product);
    },
    removeProduct: (context, index) => {
      context.commit('REMOVE_PRODUCT', index);
    },
    currentProduct: (context, product) => {
      context.commit('CURRENT_PRODUCT', product);
    },
    showOrHiddenModal: (context) => {
      context.commit('SHOW_MODAL');
    },
    showOrHiddenPopupCart: (context) => {
      context.commit('SHOW_POPUP_CART');
    },
  },
});
