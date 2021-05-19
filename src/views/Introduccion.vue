<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        .h3
          i.fas.fa-info
      .h3 Introducción
    
    figure.mb-5
      img(src="@/assets/curso/banner-intro.jpg", alt="intro confección de falda")
    
    p.mb-5 Apreciado aprendiz, retomar la educación como objeto de aprendizaje es un reto importante que tienen los agentes educativos y sociales, debido a que ella es un mecanismo fundamental para transformar las formas de enseñar y aprender, y que conllevan a la formación de los ciudadanos. En este sentido se reconoce que cualquier entorno de aprendizaje no será suficiente para encontrar formas absolutas para enseñar y aprender, pero este componente de formación construye un escenario para reflexionar el proceso de enseñanza y aprendizaje desde la educación STEM. Sea bienvenido a esta experiencia de aprendizaje. Le sugerimos revisar el siguiente recurso educativo para identificar el contexto de formación. Adelante. 

    p.mb-5 Luego de reconocer el contexto y las condiciones de aprendizaje que debes aplicar día a día. Es momento de hacer preguntas como ¿qué pasará en este momento de aprendizaje? ¿cómo aplicaré mis conocimientos, habilidades y actitudes en mi contexto?, para hallar respuestas es comento de comenzar. 


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
