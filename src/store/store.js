import { createStore } from 'vuex';
import axios from "axios";

export default createStore({
    state: {
        products:[],
        oneproduct: '',
        favorites: JSON.parse(localStorage.getItem('favorites')) || []
    },
    mutations: {
        SET_PRODUCT(state, product) {
            state.oneproduct = product;
        },
        SET_PRODUCTS(state, products) {
            state.products = products;
        },
        ADD_TO_FAVORITES(state, product) {
            if (!state.favorites.find((p) => p.id === product.id)) {
                state.favorites.push(product);
                localStorage.setItem('favorites', JSON.stringify(state.favorites));
            }
        },
        REMOVE_FROM_FAVORITES(state, productId) {
            state.favorites = state.favorites.filter((p) => p.id !== productId);
            localStorage.setItem('favorites', JSON.stringify(state.favorites));
        }
    },
    actions: {
        fetchProductById({ commit }, productId) {
            return axios
                .get(`https://fakestoreapi.com/products/${productId}`)
                .then((res) => {
                    commit('SET_PRODUCT', res.data);
                })
                .catch((error) => {
                    console.error('Error fetching product by ID:', error);
                });
        },
        fetchProducts({ commit }) {
            axios
                .get('https://fakestoreapi.com/products')
                .then((res) => {
                    commit('SET_PRODUCTS', res.data);
                })
                .catch((error) => {
                    console.error('Error fetching products:', error);
                });
        },
        addToFavorites({ commit }, product) {
            commit('ADD_TO_FAVORITES', product);
        },
        removeFromFavorites({ commit }, productId) {
            commit('REMOVE_FROM_FAVORITES', productId);
        }
    },
});