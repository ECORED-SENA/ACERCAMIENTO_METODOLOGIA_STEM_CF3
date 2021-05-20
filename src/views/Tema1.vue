<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        .h3 1
      .h3 Planificación de estrategias de diseño: STEM

    figure.mb-4
      img(src='@/assets/curso/banner-tema1.jpg', alt='Planificación de estrategias de diseño: STEM')
    p.mb-5 De acuerdo con Trujillo Losada (2019) toda organización educativa tiene básicamente las mismas razones para justificar su existencia: una propuesta antropológica, un modelo pedagógico, una estructura de su plan de estudios y su horizonte institucional, que define su existencia, crecimiento y posicionamiento en el sector educativo, generalidades, que establecen con claridad un propósito; sin embargo, las instituciones educativas tienen que ir más allá de estas razones básicas y formales, si quieren diferenciarse y responder a las nuevas necesidades sociales de los nuevo ciudadano en este nuevo siglo.   

    .row.justify-content-md-center.mb-5.tarjeta.tarjeta--azul
      .col-lg-10
        SlyderB.p-4(:datos="datosSlyder")

    .row.mb-5
      .col-lg-6.texto-resaltado
        h6 Quizás la palabra que surgió del ejercicio anterior fue planificar,  
          span.etiqueta ¿Qué significa planificar?
          | es pensar antes de hacer.
      .col-lg-6    
        p La planificación comienza por establecer objetivos, es la primera función administrativa porque sirve de base a las otras funciones y determina por anticipado cuáles son los objetivos que deben cumplirse y que se debe hacer por alcanzar, en el caso de la gobernanza escolar está basada en el desarrollo de su efectiva planificación escolar, para el desarrollo de este proceso es de vital importancia el diseño de estrategias que respondan de manera efectiva a las necesidades de sus contexto y su entorno educativo.

    p.mb-5 Ahora, ¿qué elementos se deben considerar para la planificación? A continuación, identifica como la información que se presentará se puede implementar en su contexto. 
          

    // 1.1
    #t_1_1.titulo-segundo.h4.mb-5 1.1 ¿Cómo surge la educación STEM?

    .row.mb-4
      .col-lg-5
        p Existe en la sociedad una necesidad de generar más vocaciones en las áreas de las ciencias, la ingeniería y tecnología como un objetivo político estratégico de las naciones, pero esta necesidad tiene como prioridad social centrar esta misión en la escuela, aunque a primera vista es difícil para nosotros los docentes e instructores defender que para la sociedad esto sea una prioridad, más que tener filósofos, abogadas o artísticas, entre otros, es importante comprender que lo que debemos perseguir con la educación STEM es la formación en competencias científicas para estas profesiones por ejemplo: el abogado que debe dictar sentencia en un caso de contaminación ambiental, sino también para su vida cotidiana como ciudadano del siglo XXI.
      .col-lg-1  
      .col-lg-6    
        figure.mb-4
          img(src='@/assets/curso/como-surge-stem.jpg', alt='Planificación de estrategias de diseño: STEM')

    p.mb-5 Continuemos, explorando algunas estrategias en el marco de la educación STEM, no se queda atrás avanza.       


    // 1.2
    #t_1_2.titulo-segundo.h4.mb-5 1.2 Estrategias de diseño según la educación STEM

    p.mb-5 La educación STEM es un tema nuevo en el contexto educativo, surge como una respuesta a las necesidades sociales, políticas, culturales, entre otras que buscan impulsar las creatividad, la innovación en la búsqueda de económicas sostenibles; para lograr que las escuela logre transformar su forma de enseñanza aprendizaje a esta envergadura; es necesario pensar cooperativamente en la planificación acertada de un proyecto STEM innovador, para esto es necesario contar con estrategias efectivas que vinculen a toda la comunidad educativa, observemos. 

    h6 Situación actual: STEM
    p.mb-4 Esta estrategia está orientada a establecer la situación actual de las asignaturas STEM en la Institución Educativa.  Es importante partir este proceso desde la siguiente pregunta: ¿En qué situación o nivel de desarrollo se encuentran las asignaturas STEM en mi institución educativa?
    p.mb-5 Observemos algunas conclusiones que se podrán dar en algunos casos. 

    TabsB.color-acento-botones.mb-5
      .py-4.py-md-5(titulo="Ciencias Naturales" :icono="require('@/assets/curso/ciencias-naturales.svg')")
        .row
          .col-md-6.mb-4.mb-md-0.p-5
            .h4 Ciencias Naturales
            span.text-bold Descripción hipotética
            p Esta asignatura se encuentra plenamente desarrollada en la institución educativa, cuenta con Estándares Curriculares de Ministerio de Educación Nacional, tienen suficientes docentes que están bien preparados, cuentan con material propio o de terceros, tiene laboratorios y actividades de clases suficientes.      
          .col-md-6
            figure
              img(src='@/assets/curso/tema1-cienciasnaturales.jpg', alt='Ciencias Naturales')

      .py-4.py-md-5(titulo="Matemáticas" :icono="require('@/assets/curso/matematicas.svg')")
        .row
          .col-md-6.p-5
            .h4 Matemáticas
            span.text-bold Descripción hipotética
            p Esta asignatura  también cuenta con Estándares Curriculares de MEN, tienen suficientes docentes que  están bien preparados, cuentan con material propio o de terceros y actividades de clases suficientes.
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema1-matematicas.jpg', alt='Matemáticas')            
      
      .py-4.py-md-5(titulo="Tecnología" :icono="require('@/assets/curso/tecnologia.svg')")
        .row
          .col-md-6.mb-4.mb-md-0.p-5
            .h4 Tecnología
            span.text-bold Descripción hipotética
            p En esta asignatura se presentan diversos escenarios:
          .col-md-6
            figure
              img(src='@/assets/curso/tema1-tecnologia.jpg', alt='Tecnología')
              figcaption Leyenda de la imagen

      .py-4.py-md-5(titulo="Ingeniería" :icono="require('@/assets/curso/ingenieria.svg')")
        .row
          .col-md-6.p-5
            .h4 Ingeniería
            span.text-bold Descripción hipotética
            p Es un tema muy nuevo, que solo hasta ahora se está desarrollando y es posible que existan profesores incluyendo temas de diseño en ingeniería de una forma empírica, pero no como un aspecto esencial en su actividad académica.
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema1-ingenieria.jpg', alt='Ingeniería')

    .row.justify-content-md-center.mb-5
      .col-lg-10.p-5.tarjeta.color-secundario
        h6 Integración de asignaturas
        p.mb-4 Esta estrategia está orientada a establecer la situación actual de las asignaturas STEM en la Institución Educativa.  Es importante partir este proceso desde la siguiente pregunta: ¿En qué situación o nivel de desarrollo se encuentran las asignaturas STEM en mi institución educativa?
        p.mb-4 Se observa en el institución existe oportunidades de integración a partir de experiencias encontradas en la institución se hallan proyectos escolares basados en investigación que incluyen conocimientos de varias asignaturas. Además, se observa que las ciencias y matemáticas están consolidadas; pero la asignatura de tecnología está en un estado muy inicial y se desarrollan de manera separada.

    
    h6.mb-4 El propósito de la Educación STEM   
    .row.justify-content-md-center.mb-5
       .col-lg-10.p-3
        .row
          .col-lg-2.p-4
            figure
              img(src='@/assets/curso/proposito-stem.svg', alt='El propósito de la Educación STEM ')
          .col-lg-10.p-4
            p.mb-2 Según Espinosa (2018), cuando una institución define implementar la educación STEM debe considerar hasta dónde quiere llegar con ella y qué nivel de integración se puede lograr. 
            p Un ejemplo de una caracterización de la institución con respecto a la educación STEM puede ser. Cabe mencionar el significado  de las letras S y E corresponden al acrónimo STEM. 

    .row.justify-content-md-center.mb-5
      .col-lg-12
        .tabla-a2.mb-4 
          table
            thead
              tr
                th Situación inicial (Escenarios curriculares)
                th Asignaturas actuales de STEM
                th.esp Situación deseada (prospectiva)
            tbody.text-left
              tr
                td.p-4 Solo se dictan ciencias y matemáticas de manera separada.
                td.p-4 S, M
                td.p-4 Incluir la asignatura de Tecnología de forma separada.                                             
              tr            
                td.p-4 Se dictan las asignaturas STEM de forma separada, excepto ingeniería.
                td.p-4 S, M, T
                td.p-4 Incluir todas las asignaturas STEM de tecnología de forma separada.
              tr            
                td.p-4(rowspan='5') Se dictan las asignaturas STEM de forma separada, excepto ingeniería.
                td.p-4 S, T, E, M
                td.p-4 Tecnología e Ingeniería se dictarán de forma integrada.  
              tr            
                td.p-4 S, T, E, M
                td.p-4 Ciencias, Tecnología e Ingeniería se dictarán de forma integrada.  
              tr            
                td.p-4 S, T, E, M
                td.p-4 Tecnología e Ingeniería y Matemáticas se dictarán de forma integrada.  
              tr            
                td.p-4 S, T, E, M
                td.p-4 Ciencias, Ingeniería y matemáticas se dictarán de forma integrada.
              tr            
                td.p-4 S, T, E, M
                td.p-4 Ciencias, Tecnología e Ingeniería y Matemáticas todas las asignaturas STEM se dictan de forma integrada.                                    


    h6.mb-4 PEI y currículo   
    p.mb-5 Está estrategia se fundamente en hacer las modificaciones necesarias al PEI y al currículo de la institución educativa en el marco de la implementación de la educación STEM. Los agentes participantes de este proceso pueden partir de esta pregunta: ¿Qué cambios debe sufrir el Proyecto Educativo Institucional para lograr los nuevos objetivos curriculares propuestos?

    .row.justify-content-md-center.mb-5
      .col-lg-12
        .tabla-a2.mb-4 
          table
            thead
              tr
                th Componente
                th Variables de análisis
                th Actualización
            tbody.text-left
              tr
                td.p-4 Horizonte Institucional
                td.p-4  
                  .row.align-items-center
                    .col-lg-4 
                      figure
                        img(src='@/assets/curso/pei1.svg', alt='Horizonte Institucional')
                    .col-lg-8
                      p Visión y la Misión 
                td.p-4 Es posible que la visión y la misión de la institución educativa sufra algún cambio o que los proyectos institucionales tomen otra connotación o pierdan vigencia.                                             
              tr            
                td.p-4 Plan de Estudios
                td.p-4  
                  .row.align-items-center
                    .col-lg-4 
                      figure
                        img(src='@/assets/curso/pei2.svg', alt='Plan de Estudios')
                    .col-lg-8
                      p Las Asignaturas y su intensidad horaria
                td.p-4 Es necesario tener en cuenta las asignaturas que se dictaran, la intensidad horaria y como se transformara el plan de estudios, es importante recordar que las transformaciones que se realicen: deben garantizar el cumplimiento de los requerimientos mínimos exigidos por los entes estatales, dado que los estudiantes deben recibir los temas exigidos y cumplir con las evaluaciones exigidas. 
              tr            
                td.p-4 Integración curricular
                td.p-4  
                  .row.align-items-center
                    .col-lg-4 
                      figure
                        img(src='@/assets/curso/pei3.svg', alt='Integración curricular')
                    .col-lg-8
                      ul.lista-ul--color
                        li 
                          i.fas.fa-check
                          p Nuevo plan de estudios. 
                        li 
                          i.fas.fa-check
                          p Necesidades de personal.
                        li 
                          i.fas.fa-check
                          p Estándares curriculares.
                        li 
                          i.fas.fa-check
                          p Planes de estudios.
                        li 
                          i.fas.fa-check
                          p Temas que se deben dictar.
                td.p-4 Los docentes necesitan cambiar su forma de dictar la asignatura, pues no solo van a profundizar más en los conceptos, sino que deberán hacerlo de forma integrada con sus colegas.  Por lo tanto, se sugiere tener en cuenta:
                  ul.lista-ul--color.p-1.mt-2
                    li 
                      i.fas.fa-circle
                      p Listado completo de las asignaturas que requiere el nuevo plan de estudios.
                    li 
                      i.fas.fa-circle
                      p Necesidades de personal que se requiere para desarrollar estas asignaturas.
                    li 
                      i.fas.fa-circle
                      p Revisión de los estándares curriculares y los planes de estudios actuales para determinar los temas se deben dictar. 
              tr            
                td.p-4 Planificación de temas
                td.p-4  
                  .row.align-items-center
                    .col-lg-4 
                      figure
                        img(src='@/assets/curso/pei4.svg', alt='Planificación de temas')
                    .col-lg-8
                      ul.lista-ul--color
                        li 
                          i.fas.fa-check
                          p Temas del Plan de Estudios. 
                        li 
                          i.fas.fa-check
                          p Diseño de unidades didácticas y actividades académicas.
                td.p-4 Al incluir educación STEM es necesario considerar los temas del plan de estudios, dado que se requiere más tiempo para enseñarlos. 
  


    h6.mb-4 Capacitación docente  
    p.mb-5 A nivel mundial hay una importante demanda de nuevos docentes, que deben estar en la capacidad de enfrentar nuevas situaciones y ser partícipes de las soluciones que requieren los problemas del mundo, preparados para la formación de los futuros ciudadanos.  La capacitación y el entrenamiento en servicio será la inversión más importante que debe hacer la Institución Educativa.

    .row.cap-docente.mb-5
      .col-lg-6.justify-content-md-center.mb-5.p-5.tarjeta.color-acento-contenido.necesidad
        figure
          img.p-2.mb-4(src='@/assets/curso/necesidad.svg', alt='Necesidad')
        h5 Necesidad
        p.mb-4 La capacitación y el entrenamiento de los docentes en servicio será la inversión más importante que debe hacer la institución educativa.
        p.mb-4 El trabajo en equipo de todos los estamentos escolares y la conformación de un equipo líder que brinda un apoyo en todo momento, sobre todo en aspectos de entrenamiento de la planta docente.
        p La inclusión en tecnología y la ingeniería en la enseñanza de las ciencias o la forma para hacer la integración de las asignaturas, probablemente los profesores que estén en servicio no estén preparados.  
      .col-lg-6.justify-content-md-center.mb-5.p-5.tarjeta.color-secundario.acciones
        figure
          img.p-2.mb-4(src='@/assets/curso/acciones.svg', alt='Acciones')
        h5 Acciones
        p.mb-4 Se debe capacitar en bases académicas sean sólidas, bien fundamentadas y lograr que los docentes se identifiquen con su nuevo rol en la institución.
        p.mb-4 Se debe consolidar un equipo líder que brinde un apoyo, sobre todo en los momentos de situaciones durante el desarrollo y maduración del proyecto.
        p Se debe establecer proyectos piloto que permitan mostrar a la comunidad docente las bondades de la educación STEM.


    h6.mb-4 Unidades didácticas   
    p.mb-4 A partir de las modificaciones al PEI y el plan de estudios, un trabajo importante será lograr unidades didácticas iniciales que contengan entre sus objetivos de aprendizaje los temas seleccionados durante la etapa de análisis de currículo y del plan de estudios.  También se deberán tener en cuenta las asignaturas integradas, y cómo estas contribuyen a un aprendizaje más profundo. Todo ello conlleva a una programación de las unidades didácticas.
    figure
      img.p-2.mb-5(src='@/assets/curso/unidades-didacticas.png', alt='Unidades didácticas')


    h6.mb-4 Desarrollar la instrucción en STEM 
    p.mb-5 Para lograr hacer cambios notorios y medibles en la forma de enseñar en la institución educativa se propone una combinación de actividades que cubran los temas más importantes del plan de estudios. Existen herramientas didácticas que contribuyen a una integración de temas. Ellas son:

    .row.p-4.mb-4.align-items-center.tarjeta.color-acento-contenido
      .col-lg-5
        figure
          img.p-4(src='@/assets/curso/abl.svg', alt='Aprendizaje Basado en Lecciones (ABL)')
      .col-lg-7
        h6.mb-4 Aprendizaje Basado en Lecciones (ABL)  
        p.mb-4 Estas son actividades cortas que pueden durar entre una y tres horas, que integran varias asignaturas y que contribuyen a fijar los conocimientos y conceptos, con actividades relevantes para los estudiantes y con experiencias de tipo manos a la obra.  Este aprendizaje será más profundo y aportará los conceptos y conocimientos para nuevos temas del año en curso y para cursos superiores.

    .row.p-4.mb-5.align-items-center.tarjeta.color-secundario
      .col-lg-5
        figure
          img.p-4(src='@/assets/curso/abp.svg', alt='Aprendizaje Basado en Proyectos (ABP)')
      .col-lg-7
        h6.mb-4 Aprendizaje Basado en Proyectos (ABP)
        p.mb-4 Son de más larga duración entre cuarenta y sesenta horas, la evaluación de los estudiantes, resulta de los resultados de desempeño de los estudiantes en los ABP.  Evaluamos cómo se desempeña interdisciplinariamente el estudiante en las áreas.




    // 1.3
    #t_1_3.titulo-segundo.h4.mb-5 1.3 Ejemplos de diseño de estrategias de aprendizaje con STEM     

    p.mb-5 A continuación, presentaremos la experiencia significativa desde el enfoque de la educación STEM. Esta se desarrollará a partir de unos pasos que inician desde el reconocimiento de los conocimientos previos de los alumnos y por una secuencia de acciones integradas para resolver una pregunta. Esta experiencia está basada en el Aprendizaje Basado en Lecciones.  Observa el siguiente recurso de aprendizaje con el paso a paso. Adelante. 
    figure
      img(src='@/assets/curso/video.jpg', alt='Ejemplos de diseño de estrategias de aprendizaje con STEM')
  
        
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        texto:
          'Siguiendo esta línea, observa esta imagen ¿qué observas? Haz una lista de ideas mentales, júntalas y menciona la primera palabra que se le viene a la mente.',
        imagen: require('@/assets/curso/tema1-slider1.jpg'),
      },
      {
        texto:
          'Siguiendo esta línea, observa esta imagen ¿qué observas? Haz una lista de ideas mentales, júntalas y menciona la primera palabra que se le viene a la mente.',
        imagen: require('@/assets/curso/tema1-slider2.jpg'),
      },
      {
        texto:
          'Siguiendo esta línea, observa esta imagen ¿qué observas? Haz una lista de ideas mentales, júntalas y menciona la primera palabra que se le viene a la mente.',
        imagen: require('@/assets/curso/tema1-slider3.jpg'),
      },
      {
        texto:
          'Siguiendo esta línea, observa esta imagen ¿qué observas? Haz una lista de ideas mentales, júntalas y menciona la primera palabra que se le viene a la mente.',
        imagen: require('@/assets/curso/tema1-slider4.jpg'),
      },
    ],
  }),
}
</script>

<style lang="sass" scoped></style>
