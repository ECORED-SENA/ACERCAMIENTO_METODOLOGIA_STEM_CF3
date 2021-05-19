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

    PasosA.color-acento-contenido.mb-5(tipo="n" :datos="datosPasosA")

    p.mb-5 Luego de reconocer el contexto y las condiciones de aprendizaje que debes aplicar día a día. Es momento de hacer preguntas como ¿qué pasará en este momento de aprendizaje? ¿cómo aplicaré mis conocimientos, habilidades y actitudes en mi contexto?, para hallar respuestas es comento de comenzar. 


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
    datosPasosA: [
      {
        titulo: '¿Qué sucederá en este momento de aprendizaje?',
        texto:
          '<p class="mb-3">El presente componente de formación se ha diseñado en el marco de las temáticas:</p> <ul class="lista-ul--color"><li><i class="fas fa-chevron-right"></i> Planificación de estrategias de diseño: STEM.</li> <li><i class="fas fa-chevron-right"></i> Evaluación de Actividades STEM.</li></ul>',
      },
      {
        titulo: '¿Qué se espera de usted?',
        texto:
          '<p class="mb-3">Se espera que en el contexto de la educación STEM pueda:</p> <p><i class="fas fa-chevron-right" style="color: #ACDDD4"></i> Evaluar experiencias de aula creadas según la metodología STEM.</p><p><i class="fas fa-chevron-right"  style="color: #ACDDD4"></i> Desarrollar y aplicar una metodología para la evaluación de un diseño de experiencia de aula acorde con los planteamientos de la metodología STEM.</p>',
      },
      {
        titulo: 'Para reflexionar deténgase en estas preguntas',
        texto:
          '<ul class="lista-ul--color mb-3"><li><i class="fas fa-circle"></i><b>¿Cómo puedo planificar la implementación de la educación STEM?</b></li> <li><i class="fas fa-circle"></i> <b>¿Qué casos de éxito existen para implementar la Educación STEM?</b></li> <li><i class="fas fa-circle"></i> <b>¿Cómo iniciar el cambio para implementar la Educación STEM en mi institución educativa?</b></li></ul> <p>Estas preguntas y otras le ayudarán a encontrar respuestas en la interacción que surgirá en el entorno virtual. Adelante participa de los espacios de comunicación y reconoce el pensamiento de los otros compañeros que están en el curso.</p>',
      },
      {
        titulo: '¿Cómo está estructurado el componente de formación?',
        texto:
          '<p class="mb-3">El componente de formación que contiene una producción intelectual realizada por un experto en Educación STEM, y lo ayudará a una aproximación a la educación STEM.</p> <p>En cada componente podrás encontrar diferentes recursos de aprendizaje y una actividades de aprendizaje, no olvide buscar la guía de actividades de aprendizaje.</p>',
      },
      {
        titulo: '¿Quiénes están en el curso?',
        texto:
          '<p class="mb-3">Los cursos virtuales son entornos de aprendizaje  donde convergen contenidos, recursos y personas que de una forma intencionada forman una comunidad de aprendizaje y práctica.</p> <img src=".../assets/curso/imagen-intro.png" alt="Imagen Intro"> <p>Es decir no estás solo, tiene un conjunto de personas de diferentes lugares que se unen a sus reflexiones e inquietudes, por eso no olvide participar de los foros y otras herramientas del curso para comunicarse.</p>',
      },
      {
        texto:
          'Finalmente, recuerda estos aspectos para iniciar y culminar con éxito el curso.',
      },
    ],
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
