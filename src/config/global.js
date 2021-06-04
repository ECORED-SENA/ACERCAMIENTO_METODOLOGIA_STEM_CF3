export default {
  global: {
    componenteFormativo:
      'Diseño, Planificación y Evaluación de experiencias STEM',
    descripcionCurso:
      'En este contenido profundiza en las diferentes herramientas de planificación, diseño e implementación de experiencias educativas STEM en el contexto escolar fortaleciendo la importancia del trabajo colaborativo entre pares y el uso de herramientas didácticas acorde con las necesidades del entorno.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Planificación de estrategias de diseño: STEM',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: '¿Cómo surge la educación STEM?',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Estrategias de diseño según la educación STEM',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Ejemplos de diseño de estrategias de aprendizaje con STEM',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Evaluación de Actividades STEM',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Herramientas más comunes de la educación STEM',
            hash: 't_2_1',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  creditos: {
    liderEquipo: {
      nombre: 'Maria Camila Garcia Santamaria',
      cargo: 'Líder del equipo',
    },
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'María Cristina Hurtado Zúñiga',
        cargo: 'Experta temática',
        centro: 'Centro de Diseño Tecnológico Industrial',
      },
      {
        nombre: 'Cristian Metaute Medina',
        cargo: 'Diseñador Instruccional',
        centro: 'Centro para la Industria de la Comunicación Gráfica',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Revisora metodológica y pedagógica',
        centro: 'Centro de Diseño y Metrología',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrección de estilo',
        centro: 'Centro para la Industria de la Comunicación Gráfica del Sena',
        regional: 'Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Juan Carlos Tapias Rueda',
        cargo: 'Diseño web',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: ' ',
        cargo: 'Producción audiovisual',
      },
      {
        nombre: 'Andrea Paola Botello De la Rosa',
        cargo: 'Desarrollo front-end',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Jhana Johanna Bustillo Ardila',
        cargo: 'Revisión de contenido',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de comercio y servicios',
        regional: 'Regional Tolima',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Espinosa, J. B. (2018). Educación STEM: introducción a una nueva forma de enseñar y aprender. Bogotá D.C.: STEM Educación Colombia.',
    },
    {
      referencia:
        'Portal Educativo de la Américas (2018) YouTube: Estándares, contenidos y saberes específicos para la educación STEM STEAM. Recuperado de: ',
      link: 'https://www.youtube.com/watch?v=rWDB0JgBIJI',
    },
    {
      referencia:
        'Red Magisterial (2015) YouTube: La Educación STEM. Recuperado de:',
      link: 'https://www.youtube.com/watch?v=JCHZ2pClBxk',
    },
    {
      referencia:
        'Trujillo-Losada, M. F.-Z.-P. (2019). Fortalecimiento de los proyectos educativos de las instituciones educativas oficiales del municipio de Santiago de Cali. Revista de Investigación, Desarrollo e Innovación 9(2).',
    },
  ],
  glosario: [
    {
      termino: 'MEN',
      significado: ' Ministerio de Educación Nacional',
    },
    {
      termino: 'StM',
      significado:
        ' Ciencia, tecnología y Matemáticas (con minúscula simboliza que a tecnología tiene poca fuerza en el currículo)',
    },
    {
      termino: 'ABL',
      significado: ' Aprendizaje Basado en Lecciones',
    },
    {
      termino: 'ABP',
      significado: ' Aprendizaje Basado en Proyectos',
    },
  ],
  complementario: [
    {
      texto: 'Educación STEM',
      tipo: 'Video',
      link: 'https://youtu.be/JCHZ2pClBxk',
    },
    {
      texto: 'Estándares Curriculares',
      tipo: 'Video',
      link: 'https://youtu.be/rWDB0JgBIJI',
    },
  ],
}
