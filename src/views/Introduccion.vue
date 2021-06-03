<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    figure.mb-5
      img(src="@/assets/curso/banner-intro.jpg", alt="intro confección de falda")
    
    p.mb-5 Apreciado aprendiz, retomar la educación como objeto de aprendizaje es un reto importante que tienen los agentes educativos y sociales, debido a que ella es un mecanismo fundamental para transformar las formas de enseñar y aprender, y que conllevan a la formación de los ciudadanos. En este sentido se reconoce que cualquier entorno de aprendizaje no será suficiente para encontrar formas absolutas para enseñar y aprender, pero este componente de formación construye un escenario para reflexionar el proceso de enseñanza y aprendizaje desde la educación STEM. Sea bienvenido a esta experiencia de aprendizaje. Le sugerimos revisar el siguiente recurso educativo para identificar el contexto de formación. Adelante. 

    PasosA.color-acento-contenido.mb-5(tipo="n")
      .row
        .col-md-12
          .h3 ¿Qué sucederá en este momento de aprendizaje?
          p El presente componente de formación se ha diseñado en el marco de las temáticas:
          ul.lista.lista-ul--color.p-1.mt-2
            li 
              i.fas.fa-chevron-right
              p.mb-0 Planificación de estrategias de diseño: STEM.
            li 
              i.fas.fa-chevron-right
              p.mb-0 Evaluación de Actividades STEM.
 
      .row
        .col-md-12
          .h3 ¿Qué se espera de usted?
          p Se espera que en el contexto de la educación STEM pueda:
          p.list-blue
            i.fas.fa-chevron-right.mx-1
            | Evaluar experiencias de aula creadas según la metodología STEM.
          p.list-blue
            i.fas.fa-chevron-right.mx-1
            | Desarrollar y aplicar una metodología para la evaluación de un diseño de experiencia de aula acorde con los planteamientos de la metodología STEM.

      .row
        .col-md-12
          .h3 Para reflexionar deténgase en estas preguntas
          ul.lista.lista-ul--color.p-1.mt-2.lista2
            li 
              i.fas.fa-circle
              strong.mb-0 ¿Cómo puedo planificar la implementación de la educación STEM?
            li 
              i.fas.fa-circle
              strong.mb-0 ¿Qué casos de éxito existen para implementar la Educación STEM?
            li 
              i.fas.fa-circle
              strong.mb-0 ¿Cómo iniciar el cambio para implementar la Educación STEM en mi institución educativa?
          p Estas preguntas y otras le ayudarán a encontrar respuestas en la interacción que surgirá en el entorno virtual. Adelante participa de los espacios de comunicación y reconoce el pensamiento de los otros compañeros que están en el curso.

      .row
        .col-md-12
          .h3 ¿Cómo está estructurado el componente de formación?
          p El componente de formación que contiene una producción intelectual realizada por un experto en Educación STEM, y lo ayudará a una aproximación a la educación STEM.
          p En cada componente podrás encontrar diferentes recursos de aprendizaje y una actividades de aprendizaje, no olvide buscar la guía de actividades de aprendizaje.
   
      .row
        .col-md-12
          .h3 ¿Quiénes están en el curso?
          p Los cursos virtuales son entornos de aprendizaje  donde convergen contenidos, recursos y personas que de una forma intencionada forman una comunidad de aprendizaje y práctica. 
        .col-md-9
          figure
            img.p-4(src='@/assets/curso/imagen-intro.png', alt='¿Quiénes están en el curso?')
        .col-md-12    
          p Es decir no estás solo, tiene un conjunto de personas de diferentes lugares que se unen a sus reflexiones e inquietudes, por eso no olvide participar de los foros y otras herramientas del curso para comunicarse. 
  
      .row.paso-especial
        .col-md-12
          p Finalmente, recuerda estos aspectos para iniciar y culminar con éxito el curso.
        .row.justify-content-md-center.align-items-center
          .col-lg-2.col-6
            figure.p-3
              img(src='@/assets/curso/imagen1.png', alt='¿Quiénes están en el curso?')
          .col-lg-10.col-6
            p Organiza un horario de estudio individual y colaborativo.  
        .row.justify-content-md-center.align-items-center  
          .col-lg-2.col-6
            figure.p-3
              img(src='@/assets/curso/imagen2.png', alt='¿Quiénes están en el curso?')
          .col-lg-10.col-6
            p Revisa las notificaciones del curso constantemente.
        .row.justify-content-md-center.align-items-center  
          .col-lg-2.col-6
            figure.p-3
              img(src='@/assets/curso/imagen3.png', alt='¿Quiénes están en el curso?')
          .col-lg-10.col-6
            p Participa de los foros y actividades sugeridas por el instructor. 
        .row.justify-content-md-center.align-items-center  
          .col-lg-2.col-6
            figure.p-3
              img(src='@/assets/curso/imagen4.png', alt='¿Quiénes están en el curso?')
          .col-lg-10.col-6
            p Entrega las evidencias esperadas durante este componente de formación. Si tienes alguna inquietud no dudes en escribirnos.               
     


    p.mb-5.texto-resaltado Luego de reconocer el contexto y las condiciones de aprendizaje que debes aplicar día a día. Es momento de hacer preguntas como 
      span.etiqueta.text-bold ¿qué pasará en este momento de aprendizaje? ¿cómo aplicaré mis conocimientos, habilidades y actitudes en mi contexto?
      | , para hallar respuestas es comento de comenzar. 


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
