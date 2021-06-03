<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Evaluación de Actividades STEM

    figure.mb-4
      img(src='@/assets/curso/banner-tema2.jpg', alt='Evaluación de Actividades STEM')
    p.mb-5 La forma tradicional de enseñanza aprendizaje establece fronteras claramente determinadas entre el currículo, la enseñanza y la evaluación, este sistema determina que el estudiante sabe con claridad cuando está en un periodo de tiempo normal de clases y cuando está en momento de exámenes y normalmente se le llama período de exámenes.  En la educación STEM la evaluación está tan inmersa en la enseñanza aprendizaje, que el estudiante estará en un estado constante de aprendizaje-evaluación.    

    .row.justify-content-md-center.mb-5
      .col-lg-10.tarjeta.color-secundario
        .row
          .col-lg-6.p-5
            span.text-bold Desde que inicia un proceso de enseñanza en educación STEM, se nota que el proceso de aprendizaje es diferente, veamos una metodología para la evaluación de un diseño STEM.
          .col-lg-6.p-4
            .row.mb-3
              .col-lg-2.col-3
                figure
                  img(src='@/assets/curso/tema2-ico1.svg', alt='Icono 1')
              .col-lg-9.col-9
                p La evaluación se realiza durante toda la instrucción.
            .row.mb-3
              .col-lg-2.col-3
                figure
                  img(src='@/assets/curso/tema2-ico2.svg', alt='Icono 2')
              .col-lg-9.col-9
                p Los estudiantes convierten el objeto de estudio en algo de su interés.
            .row.mb-3
              .col-lg-2.col-3
                figure
                  img(src='@/assets/curso/tema2-ico3.svg', alt='Icono 3')
              .col-lg-9.col-9
                p La evaluación pierde la percepción de ser algo de preocupación para los estudiantes ya que todo aprendizaje está sumergido en la curiosidad y el conocimiento.


    p.mb-4 Un buen sistema de evaluación de la educación STEM debe considerar dos marcos de referencia.      

    .row.justify-content-md-center.mb-5
      .col-lg-10
        .tabla-a2.mb-5 
          table
            caption Tabla 5. Evaluación STEM. Elaboración propia (2021).
            thead
              tr
                th Ambiente de aprendizaje tipo holístico
                th Planeación de Unidades y actividades STEM 
            tbody.text-left
              tr
                td.p-4 
                  p.text-bold Centrado en el Conocimiento: 
                  | Está basado en lo que queremos que los estudiantes aprendan y estén en capacidad de hacer
                td.p-4(rowspan='3') 
                  p.mb-4  Durante el proceso de diseño e instrucción de actividades STEM debemos siempre plantearnos las siguientes preguntas:
                  ul.lista-ul--color.p-4
                    li 
                      i.fas.fa-circle
                      p.text-bold ¿Los estudiantes aprendieron los conceptos?
                    li 
                      i.fas.fa-circle
                      p.text-bold ¿Como docente, cómo lo puedo saber?
                    li 
                      i.fas.fa-circle
                      p.text-bold ¿Qué tan profundo es su conocimiento?
                    li 
                      i.fas.fa-circle
                      p.text-bold ¿Cómo pueden aplicar efectivamente los estudiantes este conocimiento?                                                      
              tr            
                td.p-4
                  p.text-bold Centrado en el estudiante:  
                  | conecta sus fortalezas, los intereses y las preconcepciones con las actividades y tareas y les permitirá identificarse como personas dentro de una evolución de aprendizaje  
              tr            
                td.p-4
                  p.text-bold  Centrado en la evaluación: 
                  | el sistema de evaluación está diseñado para que ofrezca muchas oportunidades para monitorear el avance y hacer evidente el progreso durante la instrucción.

    // 2.1
    #t_2_1.titulo-segundo.h2.mb-5 2.1 Herramientas más comunes de la educación STEM

    p.mb-5 Cada una de estas deberá seleccionarse de tal manera que sea lo más efectivo para cumplir con las formas de evaluación que mencionaremos a continuación:

    .row.tema2-herramientas
      .col-md-4.col-lg-4.mb-5
        .tarjeta-avatar
          img(src='@/assets/curso/herramientas1.svg' alt='Lista de Chequeo')
          .tarjeta.color-acento-contenido.p-4.text-center
            .h4.text-center Lista de Chequeo
            p Es un formato de control, se crea para registrar las actividades planeadas y controlar el cumplimiento de una serie de requisitos o recolectar datos ordenadamente y de forma sistemática.
      .col-md-4.col-lg-4.mb-5
        .tarjeta-avatar
          img(src='@/assets/curso/herramientas2.svg' alt='La Rúbrica')
          .tarjeta.color-secundario.p-4.text-center
            .h4.text-center La Rúbrica
            p Es un conjunto de criterios y normas regidos por el docente, generalmente relacionado con la evaluación de objetivos de aprendizaje, esta evaluación indica el nivel de desempeño o una tarea se trata de una herramienta de calificación utilizada para realizar evaluaciones objetivas.
      .col-md-4.col-lg-4.mb-5
        .tarjeta-avatar
          img(src='@/assets/curso/herramientas3.svg' alt='Pruebas Rápidas de clase')
          .tarjeta.color-acento-contenido.p-4.text-center
            .h4.text-center Pruebas Rápidas de clase
            p Se usan como una evaluación breve, para medir el crecimiento en conocimientos, habilidades o destrezas.

    .row.tema2-herramientas 
      .col-md-4.col-lg-4.mb-5
        .tarjeta-avatar
          img(src='@/assets/curso/herramientas4.svg' alt='Mapas')
          .tarjeta.color-secundario.p-4.text-center
            .h4.text-center Mapas
            p Es un esquema que representa de manera gráfica la ubicación espacial para un tema en concreto.  Esta evaluación permite evaluar la capacidad para resumir y contemplar fácilmente todas las partes y ramificaciones de un tema y sus relaciones. de los estudiantes.
      .col-md-4.col-lg-4.mb-5
        .tarjeta-avatar
          img(src='@/assets/curso/herramientas5.svg' alt='Autoevaluaciones')
          .tarjeta.color-acento-contenido.p-4.text-center
            .h4.text-center Autoevaluaciones
            p Proceso mediante el cual una persona se evalúa a sí misma, es decir, identifica y pondera su desempeño en el cumplimiento de una determinada tarea o actividad, o en el modo de manejar una situación.
      .col-md-4.col-lg-4.mb-5
        .tarjeta-avatar.tema2-tarj1
          img(src='@/assets/curso/herramientas6.svg' alt='Coevaluación')
          .tarjeta.color-secundario.p-4.text-center
            .h4.text-center Coevaluación
            p Proceso de valoración realizado entre pares basado en criterios predefinidos, en el cual se evalúan el desempeño y la calidad de los trabajos, así como el nivel de logro en relación a los objetivos de aprendizaje, de igual manera se da y recibe retroalimentación.

    .row.tema2-herramientas 
      .col-md-4.col-lg-4.mb-5
        .tarjeta-avatar
          img(src='@/assets/curso/herramientas7.svg' alt='Organizador gráfico')
          .tarjeta.color-acento-contenido.p-4.text-center
            .h4.text-center Organizador gráfico
            p Es una herramienta pedagógica que utiliza símbolos visuales para expresar conocimiento, conceptos que son presentados y evaluados a través de las relaciones entre ellos.
      .col-md-4.col-lg-4.mb-5
        .tarjeta-avatar
          img(src='@/assets/curso/herramientas8.svg' alt='Mapas mental')
          .tarjeta.color-secundario.p-4.text-center
            .h4.text-center Mapas mental
            p Es una sinopsis gráfica sobre un tema en concreto. Es una evaluación usada para evaluar la capacidad de síntesis de los estudiantes sobre un tema y sus relaciones.
      .col-md-4.col-lg-4.mb-5
        .tarjeta-avatar
          img(src='@/assets/curso/herramientas9.svg' alt='Portafolios')
          .tarjeta.color-acento-contenido.p-4.text-center
            .h4.text-center Portafolios
            p Es una forma de evaluación que permite monitorear el proceso de aprendizaje por el profesor y por el mismo estudiante, permite ir introduciendo cambios durante dicho proceso.

    .row.tema2-herramientas 
      .col-md-4.col-lg-4.mb-5
        .tarjeta-avatar
          img(src='@/assets/curso/herramientas10.svg' alt='Conferencias')
          .tarjeta.color-secundario.p-4.text-center
            .h4.text-center Conferencias
            p Es una exposición en público sobre un tema y nos indica la forma en que el ponente ha interpretado el conocimiento conceptual y práctico.
      .col-md-4.col-lg-4.mb-5
        .tarjeta-avatar
          img(src='@/assets/curso/herramientas11.svg' alt='Informes')
          .tarjeta.color-acento-contenido.p-4.text-center
            .h4.text-center Informes
            p El informe es un documento escrito en prosa informativa con el propósito de comunicar sobre algún tema o información del nivel más alto en una organización.
      .col-md-4.col-lg-4.mb-5
        .tarjeta-avatar.tema2-tarj2
          img(src='@/assets/curso/herramientas12.svg' alt='Modelos físicos')
          .tarjeta.color-secundario.p-4.text-center
            .h4.text-center Modelos físicos
            p Es la evaluación de un montaje con objetos reales que reproducen el comportamiento de algunos aspectos de un sistema físico o mecánico más complejo a diferente escala.



</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
