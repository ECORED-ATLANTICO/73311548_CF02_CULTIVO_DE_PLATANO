export default {
  global: {
    Name:
      'Buenas prácticas agrícolas y competitividad productiva del cultivo del plátano',
    Description:
      'A nivel internacional el comercio del plátano es muy amplio puesto que existen muchos países que compran este producto en grandes cantidades, por lo tanto, para todos los productores de plátano del país es una gran oportunidad de negocio acceder a los mercados internacionales en donde se obtienen buenos márgenes de utilidad que le permitirán la expansión, crecimiento y desarrollo a nivel empresarial.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Manejo del cultivo.',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Control de malezas.',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Plagas y enfermedades.',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Cosecha y poscosecha.',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Cosecha.',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Poscosecha.',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Bienestar laboral y seguridad de los trabajadores.',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Plan de saneamiento.',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Plan de limpieza y desinfección.',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Seguridad y bienestar social.',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'La salud de los trabajadores.',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Identificación, trazabilidad y procedimiento de retiro .',
            hash: 't_4_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Prácticas culturales en el cultivo del plátano.',
      referencia: 'Ecosistema recursos SENA.',
      tipo: 'Video en YouTube. ',
      link: 'https://www.youtube.com/watch?v=GAYtPgfl5vs',
    },
  ],
  glosario: [
    {
      termino: 'Agentes desinfectantes:',
      significado:
        'son los compuestos químicos que se utilizan para eliminar patógenos; por ejemplo, el cloro.',
    },
    {
      termino: 'Agentes limpiadores:',
      significado:
        'son los compuestos como jabones y detergentes que se utilizan para arrasar la suciedad.',
    },
    {
      termino: 'Contaminación',
      significado:
        'la contaminación se puede dar por agentes físicos, químicos y biológicos que son introducidos a un medio de manera natural o en algunos casos son ocasionados por el hombre.',
    },
    {
      termino: 'Contaminante',
      significado:
        'puede ser cualquier sustancia o agente que se añade a un producto y le causa pérdidas de inocuidad.',
    },
    {
      termino: 'Desinfección',
      significado:
        'eliminación de todos los patógenos por medio de agentes químicos y métodos físicos.',
    },
    {
      termino: 'Higiene de los alimentos',
      significado:
        'mecanismos que garantizan la inocuidad en toda la cadena productiva.',
    },
    {
      termino: 'Inocuidad de los alimentos',
      significado:
        'es la garantía de que un alimento se encuentra libre de agentes contaminantes que pueden causar daño a la salud de los consumidores.',
    },
    {
      termino: 'Instalaciones',
      significado:
        'son las locaciones o infraestructuras en la cuales se manipulan materias primas o productos terminados.',
    },
    {
      termino: 'Limpieza',
      significado:
        'eliminación de suciedad, tierra, grasas, desechos de alimentos, entre otros.',
    },
  ],
  referencias: [
    {
      referencia:
        'Alarcón Restrepo, J. J., & Jiménez Neira, Y. (2012). Manejo fitosanitario del cultivo del plátano (Musa spp.): Medidas para la temporada invernal. Instituto Colombiano Agropecuario (ICA). ',
      link:
        'https://www.fao.org/fileadmin/templates/banana/documents/Docs_Resources_2015/TR4/cartilla-platano-ICA-final-BAJA.pdf',
    },
    {
      referencia:
        'Buenas Prácticas Agrícolas para frutas, hierbas aromáticas culinarias y hortalizas frescas (NTC 5400). (2005, 27 de julio). Instituto Colombiano de Normas Técnicas y Certificación (ICONTEC), 2005, 02 de agosto.',
      link: '',
    },
    {
      referencia:
        'Decreto 475. (1998, 10 de marzo). Diario Oficial, 43259, 1998, 16 de marzo.',
      link: '',
    },
    {
      referencia:
        'FAO. (2008). Buenas Prácticas Agrícolas en la Producción de Tomate bajo condiciones protegidas. ',
      link: 'https://www.fao.org/4/a1374s/a1374s00.htm',
    },
    {
      referencia:
        'Gobernación del Tolima, Universidad de Ibagué, Universidad del Tolima, & Sena Regional Tolima. (2017). Buenas prácticas poscosecha de plátano (Musa paradisiaca L.). ISBN digital: 978-958-754-248-6.',
      link: '',
    },
    {
      referencia:
        'Moreno, J., Candanoza, J. y Olarte, F. (2009). Buenas Prácticas Agrícolas en el de cultivo de plátano exportación en la región de Urabá. Medellín, Colombia: Comunicaciones Augura.',
      link: '',
    },
    {
      referencia: ' ',
      link: '',
    },
    {
      referencia: '',
      link: '',
    },
    {
      referencia: '',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Andrea Bobadilla Gutiérrez',
          cargo: 'Guionista línea de producción.',
          centro: 'Centro Agroindustrial - Regional Quindío',
        },
        {
          nombre: 'Diana Lizeth Lozada Diaz',
          cargo: 'Evaluador Instruccional',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martinez Torres',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Alexander Donado Molinares',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Maria Fernanda Morales Angulo',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Jairo Luis Valencia Ebratt',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adie Villafañe',
          cargo: 'Validador y vinculador de recursos digitaless',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/foto-gratis/pareja-adulta-jardin-verano-tema-coromavirus-personas-mascara-medica-senior-guapo-camisa-blanca_10884320.htm" target="_blank">Freepik.es. (2024).</a>, <a href="https://www.freepik.es/fotos-premium/dos-granjeros-mascara-proteccion-tableta-campo-tecnologia-agricola-modernaagricultura-inteligente_40554979.htm" target="_blank">Freepik.es. (2024).</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
