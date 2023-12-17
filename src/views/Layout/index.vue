<script setup>
import { onMounted } from 'vue'
import Fixed from './components/Fixed.vue'
import Nav from './components/Nav.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

import { useCategoryStore } from '@/stores/category'
const categoryStore = useCategoryStore()
onMounted(() => {
    categoryStore.getCategory()
})
</script>

<template>
    <Fixed />
    <Nav />
    <Header />
    <RouterView />
    <Footer />
</template>