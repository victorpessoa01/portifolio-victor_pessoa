<script setup>
import { ref } from 'vue'
import { useDisplay } from 'vuetify';
import Sidebar from '../components/sidebar.vue';

const { smAndDown } = useDisplay();
const drawer = ref(false)

const victor = "Victor"
const pessoa = "Pessoa"

const navItens = [
    { 
        title: 'Home', to: '/', icon: 'mdi-home' 
    },
    { 
        title: 'Sobre Mim', to: '#about-me', icon: 'mdi-account' 
    },
    { 
        title: 'Habilidades', to: '#skills', icon: 'mdi-star' 
    },
    { 
        title: 'Projetos', to: '#project', icon: 'mdi-code-tags' 
    },
]

function toggleDrawer() {
    drawer.value = !drawer.value
}
</script>
<template>
    <v-container>
        <v-app-bar color="background">
            <v-row class="navbar justify-space-between">
                <div class="ma-0 pa-0">
                    <v-toolbar-title class="btn text-subtitle-1 pa-0">
                        <router-link to="/" style="text-decoration: none;" class="pa-0 ma-0 text-secondary font-weight-bold">
                            <span class="pa-0 ma-0 text-secondary"><</span>
                            <span class="pa-0 ma-0 text-primary">
                                {{ victor }}
                            </span> 
                            <span class="pa-0 ma-0 text-secondary ">/</span>
                            <span class="pa-0 ma-0 text-primary">                
                                {{ pessoa }}
                            </span>
                            <span class="pa-0 ma-0 text-secondary">>
                            </span>
                        </router-link>
                    </v-toolbar-title>
                </div>
                <div v-if="!smAndDown" class="ma-0 pa-0">
                    <v-row class="d-flex align-center ma-0 pa-0">
                        <div class="ma-0 pa-0">
                            <router-link 
                                v-for="i in navItens" 
                                :key="i.title" 
                                :to="i.to" 
                                class="navbar-link mx-1"
                                :class="{ active: $route.path == i.to }"
                            >
                                {{ i.title }}
                            </router-link>
                        </div>
                    </v-row>
                </div>  
                <div v-else class="text-end ma-0 pa-0 mr-n3">
                    <v-btn icon @click="toggleDrawer()">
                        <v-icon class="text-secondary">
                            {{ drawer ? 'mdi-menu-open' : 'mdi-menu' }}</v-icon>      
                    </v-btn>
                </div>          
            </v-row>
        </v-app-bar>
        <Sidebar v-model="drawer" v-if="drawer" />
    </v-container>
</template>
<style lang="scss" scoped>
@use './assets/scss/container' as *;
</style>