<script setup>
import { useDisplay } from 'vuetify';
import timeline from '~/layout/timeline';

const timeLine = computed(() => timeline)
const { smAndUp } = useDisplay();
</script>
<template>
    <v-container id="about-me" class="container">
        <div data-aos="fade-left" data-aos-delay="1000" class="ma-0 pa-0">
            <br />
            <h3 class="text-primary ma-0 pa-0 mb-12 mb-md-6">Sobre Mim</h3>
            <v-col cols="12" class="ma-0 pa-0">
                <v-row justify="space-between" class="d-flex mx-2 align-center">
                    <v-col cols="12" sm="8" class="d-flex text-center">
                        <p class="ma-0 pa-0 text-justify">
                            Sou um desenvolvedor front-end e atualmente cursando Engenharia de Software na <span class="font-weight-bold">
                                <a href="https://jala.university/" target="_blank" class="text-secondary text-decoration-none ">Jala University</a></span>. Meu foco está em unir aprendizado técnico e propósito. Em meus estudos com projetos simples, busco sempre me proporcionar experiências que impactem positivamente na minha evolução.

                                <br />
                                Estou em busca de oportunidades para expandir minhas habilidades e experiências, além de contribuir com soluções criativas e eficientes para novos desafios na área da tecnologia.
                        </p>
                    </v-col>
                    <br />
                    <v-col cols="12" sm="4" class="ma-0 pa-0 perfil d-flex flex-column justify-center align-center"
                        :class="!smAndUp ? 'mt-8' : ''">
                            <v-avatar
                            class="border-lg"
                            color="secondary"
                            rounded="1"
                            size="180"
                        >
                            <v-img src="https://github.com/victorpessoa01.png" cover></v-img>
                        </v-avatar>
                    </v-col>
                </v-row>
            </v-col>
            <br />
            <v-col cols="12" class="ma-0 pa-0 mt-15">
                <v-timeline v-if="smAndUp" :direction="smAndUp ? 'horizontal' : 'vertical'" >
                    <v-timeline-item v-for="i in timeLine" 
                    :key="i.mes" 
                    dot-color="secondary"
                    class="ma-0 pa-0 text-start algign-center">
                    <template v-slot:opposite>
                        <h4 class="text-primary">
                            {{ i.mes }}/{{ i.ano }}
                        </h4>
                    </template>
                    <div>
                        <p>
                            {{ i.description }}
                        </p>
                    </div>
                    </v-timeline-item>
                </v-timeline>

                <v-timeline v-else side="end">
                    <v-timeline-item 
                        v-for="i in timeline" 
                        :key="i.mes" dot-color="secondary"
                        class="ma-0 pa-0 text-start algign-center">
                        <h3 class="text-primary">
                            {{ i.mes }}/{{ i.ano }}
                        </h3>
                    <div>
                        <p>
                            {{ i.description }}
                        </p>
                    </div>
                    </v-timeline-item>
                </v-timeline>
            </v-col>
        </div>
    </v-container>
</template>
<style lang="scss" scoped>
@use './assets/scss/container' as *;
</style>