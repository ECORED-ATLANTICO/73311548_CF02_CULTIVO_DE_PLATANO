<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Cosecha y poscosecha
    .row.justify-content-center.align-items-center.mb-3
      .col-10.col-sm-10.col-md-10.col-lg-5.col-xl-3.col-xxl-3.mb-3.mb-lg-0
        img(src="@/assets/curso/temas/tema2/img_1.png", alt="Cosecha y poscosecha")(data-aos="fade-up")
      .col-12.col-sm-12.col-md-12.col-lg-7.col-xl-9.col-xxl-9.mb-3.mb-lg-0
        p.mb-3 El cultivo de plátano es un proceso integral que abarca desde la siembra hasta la comercialización de los frutos. Tras una adecuada preparación del terreno y el establecimiento de las plantas, las prácticas culturales, como el riego, la fertilización y el manejo fitosanitario, garantizan un desarrollo óptimo del cultivo.
        p.mb-3 Cuando los frutos alcanzan su punto de madurez, inicia la etapa de cosecha, en la cual los racimos son recolectados con cuidado para evitar daños mecánicos. Posteriormente, el proceso de poscosecha se encarga de preservar la calidad del producto mediante actividades como limpieza, clasificación y embalaje, asegurando su adecuada presentación y conservación para la distribución.
        .tarjeta_bg-05.p-4.mb-3
          p.mb-2 Estas dos etapas finales son determinantes para mantener la integridad del fruto y optimizar su valor en el mercado, cerrando así el ciclo productivo del plátano con estándares de calidad que favorecen su competitividad comercial.
          p.mb-0 Le invitamos a consultar el siguiente recurso, que describe a través de un diagrama, el proceso de operaciones para la poscosecha de plátano:
    .row.justify-content-center.align-items-center.mb-0
      .col-10.col-sm-10.col-md-10.col-lg-10.col-xl-10.col-xxl-10.mb-0
        .div.tarjeta.color-acento-A10.p-3
          .row.justify-content-around.align-items-center
            .col-auto
              img.img65(src="@/assets/curso/temas/tema2/img_2.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Descargar diagrama de operaciones para poscosecha de plátano.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/ProtocoloPoscosecha_Pltano.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    separador

    #t_2_1.titulo-segundo
      .h2(data-aos="fade-right") 2.1 Cosecha
    .mb-3
    .row.justify-content-center.align-items-center.mb-5.ordenar_tarjeta_lg
      .col-md-12.col-lg-8.col-xl-9.order-2.order-lg-1
        p.mb-2 La cosecha del plátano es un proceso que exige precisión y cuidado para garantizar la calidad del producto final. La madurez óptima se alcanza entre las 9 y 13 semanas posteriores a la floración, aunque en sistemas de riego tecnificado puede lograrse a los nueve meses de la siembra. Su determinación se basa en diversos métodos, como el uso de cintas o tablas de colores que indican el grado de madurez según el color y el contenido de azúcar del fruto. Este último puede medirse con un refractómetro, complementando el análisis con el registro de los días transcurridos desde la floración y la observación del llenado del fruto. Durante esta evaluación, se descartan racimos con daños por plagas, enfermedades o golpes, asegurando la calidad y uniformidad del producto.
        .tarjeta_bg-06.p-3.mb-3
          .row.justify-content-center.align-items-center.mb-0
            .col-3.col-sm-2.col-md-2.col-lg-2.col-xl-1.col-xxl-1.p-2.mb-2.mb-lg-0
              img(src="@/assets/curso/temas/tema2/img_3.svg", alt="Cosecha" class="img-fluid")
            .col-10.col-sm-10.col-md-10.col-lg-10.col-xl-11.col-xxl-11.p-2.mb-0.mb-lg-0
              p.mb-0 Una vez seleccionado el racimo, el corte debe realizarse con precisión para evitar daños. Se practica un corte parcial en forma de cruz, aproximadamente a dos tercios de la altura del pseudotallo, lo que minimiza cualquier impacto negativo en la integridad del racimo. En esta fase, es esencial un manejo delicado para evitar golpes que puedan afectar la calidad del fruto.
        p.mb-3 El transporte hasta el área de procesamiento es determinante para preservar la calidad del racimo. Para minimizar golpes y rozaduras, se emplean distintos métodos según la distancia y las condiciones del terreno, como:
      .col-11.col-sm-8.col-md-8.col-lg-4.col-xl-3.col-xxl-3.order-1.order-lg-2
        img(src="@/assets/curso/temas/tema2/img_4.png", alt="Cosecha")(data-aos="fade-right")

    .row.justify-content-center.align-items-center.mb-0
      .col-10.col-sm-10.col-md-10.col-lg-10.col-xl-10.col-xxl-10
        .row.justify-content-center.align-items-stretch.mb-4.mb-lg-5.g-0
          .col-10.col-sm-10.col-md-10.col-lg-4.col-xl-4.col-xxl-4.mb-4.mb-lg-0
            .tarjeta-con-image-header.bg-color-terciario-claro.h-100.left-corner(data-aos='zoom-out-up')
              .tarjeta-con-image-header__header
                figure
                  img.img-fluid(src="@/assets/curso/temas/tema2/img_5.png", alt="Transporte sobre el hombro")
              .tarjeta-con-image-header__contenido
                h4.text-center El transporte sobre el hombro.
          .col-10.col-sm-10.col-md-10.col-lg-4.col-xl-4.col-xxl-4.mb-4.mb-lg-0
            .tarjeta-con-image-header.bg-21.h-100(data-aos='zoom-out-up')
              .tarjeta-con-image-header__header
                figure
                  img.img-fluid(src="@/assets/curso/temas/tema2/img_6.png", alt="Uso de carretillas")
              .tarjeta-con-image-header__contenido
                h4.text-center El uso de carretillas.
          .col-10.col-sm-10.col-md-10.col-lg-4.col-xl-4.col-xxl-4.mb-4.mb-lg-0
            .tarjeta-con-image-header.bg-color-terciario-claro.h-100.right-corner(data-aos='zoom-out-up')
              .tarjeta-con-image-header__header
                figure
                  img.img-fluid(src="@/assets/curso/temas/tema2/img_7.png", alt="Sistema de cable aéreo")
              .tarjeta-con-image-header__contenido
                h4.text-center Sistemas de cable aéreo.
        p.mb-2 La elección del sistema debe priorizar siempre la integridad del producto, asegurando que llegue en óptimas condiciones a la siguiente etapa del proceso.
        p.mb-4 A continuación, se presenta una guía para la selección del fruto en su momento óptimo. 
        .titulo-sexto.bg-11.mb-4
          h5 
            em Tabla 3:
          span.text-dark Indicadores de recolección.
        .tabla-a.mb-3
          table
            caption.mb-4 
              em Nota.  
              | Este estudio, con base en Flores, (2013), Torres et al, (2013), Londoño, (2011), Martinez, (1998), Sena, (2004), NTC (1190).
            thead
              tr
                th Factores
                th Indicador
                th Descripción
                th Instrumento de control
            tbody
              tr
                td(rowspan="5") Físicos y fisiológicos
                td Días desde la floración
                td Coseche después de 9 y 10 semanas en época de verano, y 12 semanas en épocas de lluvias.
                td Percepción visual
              tr
                td Llenado de frutos
                td Inspeccione que el plátano no presente aristas pronunciadas y 3/4 de llenado.
                td Percepción visual
              tr
                td Tamaño de los frutos
                td Coseche los plátanos cuando presenten al menos 25cm de longitud o según su variedad.
                td Calibre
              tr
                td Grado de madurez
                td Fruto bien desarrollado desde GM1 para comercialización en verde y a partir de GM3 para comercialización de plátano maduro.
                td Tabla por color
              tr
                td Color del fruto
                td Color verde oscuro o pintón según mercado de comercialización.
                td Paleta de color
              tr
                td De composición
                td Contenido de azúcar
                td El contenido de azúcar está entre 6 - 11 Brix.
                td Refractómetro
        .titulo-sexto.bg-11.mb-3
          h5 
            em Tabla 4:
          span.text-dark Tabla de color según grado de madurez.
        .tabla-a.bg-thead 
          table
            caption 
              em Nota.  
              | Este estudio, con base en Mejía, (2013), Sena, (2004); NTC (1190). 
            thead
              tr
                th.bg-th Grado de madurez (GM)
                th.bg-th GM 1
                th.bg-th GM 2
                th.bg-th GM 3
                th.bg-th GM 4
                th.bg-th GM 5
            tbody
              tr
                td Detalle
                td Fruto bien desarrollado de color verde oscuro.
                td.bg-td El color verde pierde intensidad.
                td Aparecen unas leves tonalidades amarillas.
                td.bg-td El color amarillo se acentúa y el pedúnculo sigue verde.
                td El fruto es totalmente amarillo.
              tr
                td Imagen
                td.p-0: img(src="@/assets/curso/temas/tema2/img_8.png", alt="GM1")
                td.p-0: img(src="@/assets/curso/temas/tema2/img_9.png", alt="GM2")
                td.p-0: img(src="@/assets/curso/temas/tema2/img_10.png", alt="GM3") 
                td.p-0: img(src="@/assets/curso/temas/tema2/img_11.png", alt="GM4") 
                td.p-0: img(src="@/assets/curso/temas/tema2/img_12.png", alt="GM5")
              tr
                td Color de referencia
                td: img(src="@/assets/curso/temas/tema2/img_13.png", alt="GM1")
                td: img(src="@/assets/curso/temas/tema2/img_14.png", alt="GM2")
                td: img(src="@/assets/curso/temas/tema2/img_15.png", alt="GM3")
                td: img(src="@/assets/curso/temas/tema2/img_16.png", alt="GM4")
                td: img(src="@/assets/curso/temas/tema2/img_17.png", alt="GM5")

    separador

    #t_2_2.titulo-segundo
      .h2(data-aos="fade-right") 2.2	Poscosecha
    .mb-3
    p.mb-5 La poscosecha tiene como objetivo preservar la calidad e integridad de los plátanos para su comercialización o consumo. Este proceso abarca diversas actividades esenciales:
    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-sm-10.col-md-10.col-lg-3.col-xl-3.col-xxl-3.mb-4.mb-lg-0
        .tarjeta--boton.color-acento-A10.p-4(data-aos="fade-right")
          .row.justify-content-center.align-items-center
            .col-7
              figure
                img(src='@/assets/curso/temas/tema2/img_18.svg', alt='Lavado' class="img-fluid")
          h3.text-center.mb-4 Lavado
          p.text-small.text-center Eliminación de residuos e impurezas.
      .col-10.col-sm-10.col-md-10.col-lg-3.col-xl-3.col-xxl-3.mb-4.mb-lg-0
        .tarjeta--boton.color-acento-A10.p-4(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-7
              figure
                img(src='@/assets/curso/temas/tema2/img_19.svg', alt='Clasificación' class="img-fluid")
          h3.text-center.mb-2 Clasificación
          p.text-small.text-center Selección de los frutos según estándares de mercado.
      .col-10.col-sm-10.col-md-10.col-lg-3.col-xl-3.col-xxl-3.mb-4.mb-lg-0
        .tarjeta--boton.color-acento-A10.p-4(data-aos="fade-down")
          .row.justify-content-center.align-items-center
            .col-7
              figure
                img(src='@/assets/curso/temas/tema2/img_20.svg', alt='Desmanado' class="img-fluid")
          h3.text-center.mb-2 Desmanado
          p.text-small.text-center Separación de los plátanos en unidades individuales.
      .col-10.col-sm-10.col-md-10.col-lg-3.col-xl-3.col-xxl-3.mb-4.mb-lg-0
        .tarjeta--boton.color-acento-A10.p-4(data-aos="fade-left")
          .row.justify-content-center.align-items-center
            .col-7
              figure
                img(src='@/assets/curso/temas/tema2/img_21.svg', alt='Empaque' class="img-fluid")
          h3.text-center.mb-2 Empaque
          p.text-small.text-center  Protección de los frutos para evitar daños durante el transporte.

    .row.justify-content-center.align-items-center.mb-4.mb-4
      .col-10.col-sm-10.col-md-10.col-lg-10.col-xl-10.col-xxl-10.mb-2
        .cajon.bg-4.g_18.mb-5
          .row.justify-content-center.align-items-center
            .col-lg-12.p-4.ps-5 
              p Durante esta etapa, los plátanos experimentan cambios en su composición físico-química: aumenta la acidez titulable y los grados Brix (indicadores de dulzura), mientras que el pH disminuye. Un manejo adecuado en la poscosecha garantiza la conservación de la frescura, presentación y valor comercial del producto, cumpliendo con las expectativas del consumidor y reduciendo pérdidas a lo largo de la cadena de distribución.
      h3(data-aos='zoom-in-right').mb-3
        span.label-title.label-title--1 Proceso de poscosecha
      p.mb-5 La coordinación eficiente entre la cosecha y la poscosecha es fundamental para optimizar los resultados y ofrecer un producto de alta calidad. Este proceso incluye las siguientes etapas:
      .row.justify-content-center.md-3
        .col-10.col-sm-10.col-md-5.col-lg-3.col-xl-2.col-xxl-2.mb-4.mb-xl-0
          .tarjeta-numerada.color-acento-contenido.height-100
            .tarjeta-numerada__numero
              .h3 1
            p.text-center 
              b Recepción de materia prima: 
              | inspección y preparación del producto.
        .col-10.col-sm-10.col-md-5.col-lg-4.col-xl-2.col-xxl-2.mb-4.mb-xl-0
          .tarjeta-numerada.color-primario.height-100
            .tarjeta-numerada__numero
              .h3 2
            p.text-center 
              b Adecuación del fruto: 
              | retiro de la bolsa protectora y separación de los racimos.
        .col-10.col-sm-10.col-md-4.col-lg-3.col-xl-2.col-xxl-2.mb-4.mb-xl-0
          .tarjeta-numerada.color-secundario.height-100
            .tarjeta-numerada__numero
              .h3 3
            p.text-center 
              b Selección y clasificación: 
              | evaluación de calidad según parámetros comerciales.
        .col-10.col-sm-10.col-md-4.col-lg-3.col-xl-2.col-xxl-2.mb-4.mb-xl-0
          .tarjeta-numerada.color-terciario.height-100
            .tarjeta-numerada__numero
              .h3 4
            p.text-center
              b Lavado: 
            p eliminación de impurezas y posibles residuos de plaguicidas.
        .col-10.col-sm-10.col-md-4.col-lg-3.col-xl-2.col-xxl-2.mb-4.mb-xl-0
          .tarjeta-numerada.color-acento-botones.height-100
            .tarjeta-numerada__numero
              .h3 5
            p.text-center
              b Empaque:
            p organización y protección del producto para su distribución.
      p.md-5 Se invita a consultar el documento “Protocolo de buenas prácticas para poscosecha del plátano” pp. 7-9
      .div.tarjeta.color-acento-A10.p-3
        .row.justify-content-around.align-items-center
          .col-auto
            img.img65(src="@/assets/curso/temas/tema2/img_2.png")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-3 Protocolo de buenas prácticas para poscosecha del plátano pp. 7-9. 
                p Para profundizar en el procedimiento que se debe llevar a cabo para la operación de lavado de plátano, y para los procesos de selección y clasificación del plátano. 
              .col-sm-auto
                a.boton.color-acento-botones(:href="obtenerLink('/downloads/ProtocoloPoscosecha_Pltano.pdf')" target="_blank")
                  span Descargar
                  i.fas.fa-file-download
    .titulo-sexto.bg-11.mb-4
      h5 
        em Tabla 5:
      span.text-dark Guía de operación para lavado de plátano
    .tabla-a.mb-5 
      table
        thead
          tr
            th(style="width: 118px;") Factor de control
            th(style="width: 150px;") Frecuencia
            th(style="width: 350px;") Procedimiento
            th(style="width: 400px;") Imagen
            th(style="width: 200px;") Instrumentos
        tbody
          tr
            td(rowspan="3") Frutos
            td(rowspan="3") Después del desmane y desde
            td(rowspan="3")
              p.p-2 Realizar lavado superficial de los frutos para remover suciedad (residuos de tierra, agroquímicos y otros) y patógenos.
              p.p-2 Se debe usar una mezcla de agua con alumbre en una proporción de 100 g por cada 10 litros de agua o utilizar jabones industriales para ayudar a remover el látex y destruir microorganismos, como hongos, que atacan el pedúnculo y la corona de los dedos. Los frutos se dejan 5 a 10 minutos en el tanque. Esta solución también sirve como cicatrizante en las zonas de la corona donde se han hecho cortes.
              p.p-2 Finalmente, realizar secado o escurrido de los frutos para evitar el crecimiento de hongos.
            td.p-0
              figure
                img(src="@/assets/curso/temas/tema2/img_22.png", alt="Desde" class="img-fluid")
            td(rowspan="3").p-2
              ul
                li.mb-4 • Toalla
                li.mb-4 • Cepillo
                li.mb-4 • Jabón
                li.mb-4 • Alumbre como cicatrizante (100 g/100Lt)
                li.mb-4 • Balde
                li.mb-4 • Aspersores
          tr
            td.p-0
              figure
                img(src="@/assets/curso/temas/tema2/img_23.png", alt="Lavado y desinfección" class="img-fluid")
            tr
              td.p-0
                figure
                  img(src="@/assets/curso/temas/tema2/img_24.png", alt="Secado o escurrido" class="img-fluid")
    h3(data-aos='zoom-in-right').mb-5
      span.label-title.label-title--2 Guía para selección y clasificación del plátano
    .row.justify-content-center.align-items-center
      .col-md-8.col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/temas/tema2/img_25.png", alt="Guía para selección y clasificación del plátano")(data-aos='zoom-in-right')
      .col-md-12.col-lg-9.mb-3.mb-lg-0
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
          .row(titulo="Daño por plagas").justify-content-center.align-items-center
            .col-md-12.col-lg-10.mb-3.mb-lg-0
              p.mb-0 Después del secado, seleccione para la comercialización los frutos que se encuentren libres de: 
              ul.p-0
                li.mb-0 • Frutos dañados por pájaros o insectos
                li.mb-0 • Ablandamientos
                li.mb-0 • Manchas, mordeduras, cicatrices o mordiscos ovalados en la cáscara, trips
            .col-md-12.col-lg-7.col-xl-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/temas/tema2/img_26.png", alt="Secado o escurrido" class="img-fluid")
            .col-md-12.col-lg-5.col-xl-4.mb-3.mb-lg-0
              .tarjeta_bg-06.p-4.mb-3
                ul
                  li.mb-0 • Percepción visual
                  li.mb-0 • Recipiente colector
                  li.mb-0 • Canastilla para producto dañado
                  li.mb-0 • Canastilla para comercialización
              a(href="https://oggisioggino.wordpress.com/" target="_blank") oggisioggino.wordpress.com
          .row(titulo="Enfermedades por hongos").justify-content-center.align-items-center
            .col-md-12.col-lg-10.mb-3.mb-lg-0
              p.mb-0 También, seleccione para comercialización los frutos que se encuentren libres de:
              ul.p-0
                li.mb-0 • Mal del cigarro
                li.mb-0 • Pudrición seca
                li.mb-0 • Ablandamiento y ennegrecimiento de los tejidos de la corona
                li.mb-0 • Formación de colonias de color blanco, gris o rosado
                li.mb-0 • Malformaciones
                li.mb-0 • Antracnosis o lesiones de color café oscuro o negro
                li.mb-0 Para disminuir las enfermedades en la corona se deben realizar los cortes con las herramientas desinfectadas y, después de lavado, secar bien los frutos.
            .row.justify-content-center.align-items-center
              .col-md-12.col-lg-7.col-xl-5.mb-3.mb-lg-0
                figure
                  img(src="@/assets/curso/temas/tema2/img_27.png", alt="Enfermedades por hongos" class="img-fluid")
              .col-md-12.col-lg-5.col-xl-4.mb-3.mb-lg-0
                .tarjeta_bg-06.p-4.mb-2
                  ul
                    li.mb-0 • Percepción visual
                    li.mb-0 • Recipiente colector
                    li.mb-0 • Canastilla para producto dañado
                    li.mb-0 • Canastilla para comercialización
                a(href="https://oggisioggino.wordpress.com/" target="_blank") oggisioggino.wordpress.com
          .row(titulo="Daño mecánico").justify-content-center.align-items-center
            .col-md-12.col-lg-10.mb-3.mb-lg-0
              p.mb-0 Seleccione para terceras o realice unas adecuada disposición final en los frutos que presenten daños, como:
              ul.p-0
                li.mb-0 • Frutos partidos, con golpes, cicatrices frescas, rajados, cuello roto y magulladuras
                li.mb-0 • Frutos con manchas de sol
                li.mb-0 • Frutos con manchas de latex
                li.mb-0 Clasificar los frutos, según lo demande el mercado de comercialización, teniendo en cuenta las características de calidad que se indican en la NTC 1190:
            .col-md-12.col-lg-7.col-xl-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/temas/tema2/img_28.png", alt="Daño mecánico" class="img-fluid")
            .col-md-12.col-lg-5.col-xl-4.mb-3.mb-lg-0
              .tarjeta_bg-06.p-4.mb-2
                ul
                  li.mb-0 • Percepción visual
                  li.mb-0 • Canastilla para producto dañado
                  li.mb-0 • Canastilla para comercialización
              a(href="https://oggisioggino.wordpress.com/" target="_blank") oggisioggino.wordpress.com
          .row(titulo="Categorías de calidad").justify-content-center.align-items-center
            .col-md-12.col-lg-10.mb-3.mb-lg-0
              p.mb-3 Los plátanos deben estar enteros y duros, exteriormente secos, Limpios, sin manchas ni grietas, no deben presentar indicios de pudrición ni magulladuras o heridas no cicatrizadas, ni tener el cuello roto.
              p.mb-3 Adicionalmente, tenga en cuenta los requisitos de calidad por categoría Extra, Primera y segunda.
            .col-md-12.col-lg-5.mb-3.mb-lg-0
              p.mb-0
                b Extra:
                |   bien formados, 3/4 de lleno, con color uniforme y pedúnculo bien cortado.
              p.mb-0 
                b Primera: 
                |   a diferencia del Extra, pueden presentar daños superficiales sin manchas en las aristas.
              p.mb-0 
                b Segunda: 
                |   puede presentar daños superficiales y 1/3 de manchas en las aristas.
            .col-md-12.col-lg-5.col-xl-4.mb-3.mb-lg-0
              .tarjeta_bg-06.p-4.mb-2
                ul
                  li.mb-0 • Calibrador
                  li.mb-0 • Canastilla para producto dañado
                  li.mb-0 • Empaque para comercialización
          .row(titulo="Color").justify-content-center.align-items-center
            .col-md-12.col-lg-6.mb-3.mb-lg-0
              p.mb-3 Seleccionar y clasificar los frutos de acuerdo con el estado de maduración y el mercado de comercialización:
              p.mb-0 
                b Plátano verde: 
                |   frutos bien desarrollados de color verde en grado de maduración uno (GM 1)
              p.mb-0
                b Plátano pintón: 
                |   frutos bien desarrollados "pintones" con pérdida en la intensidad del verde y grado de maduración dos (GM 2)
            .col-md-12.col-lg-4.mb-3.mb-lg-0
              .tarjeta_bg-06.p-4.mb-2
                ul
                  li.mb-0 • Paleta de color
                  li.mb-0 • Canastilla por color
                  li.mb-0 • Empaque para comercialización
    .row.justify-content-center.align-items-center.mb-4
      .col-10.col-sm-10.col-md-10.col-lg-10.col-xl-10.col-xxl-10.mb-5
        h3(data-aos='zoom-in-right').mb-4
          span.label-title.label-title--1 Preparación para la poscosecha 
        p.mb-0 A continuación, algunas condiciones de la poscosecha:
      .row.justify-content-center
        
        .col-10.col-sm-10.col-md-10.col-lg-5.col-xl-4.col-xxl-4.mb-5.mt-5
          .tarjeta.tarjeta--color-terciario-claro.rounded-5.custom-slider__tarjeta.custom-slider__tarjeta--1.height-100
            p.text-center.mt-0.p-5 Realice a la planta procesadora limpieza y desinfección de tanques, mesas, bandejas y alrededores. Esta operación debe realizarse una vez por semana; además dentro de la limpieza también se deben eliminar aguas usadas en el proceso y los residuos de la cosecha como vástagos, coronas y flores.
        
        .col-10.col-sm-10.col-md-10.col-lg-4.col-xl-2.col-xxl-2.mb-5.mt-5
          .tarjeta.tarjeta--color-terciario-claro.p-3.rounded-5.custom-slider__tarjeta.custom-slider__tarjeta--2.height-100
            p.text-center.mt-4.p-1 Se debe alistar con antelación los insumos utilizados en el proceso como: alumbre (piedralumbre), chuchillos para el desdede (gurbias), báscula y empaque.
        
        .col-10.col-sm-10.col-md-10.col-lg-4.col-xl-2.col-xxl-2.mb-5.mt-5
          .tarjeta.tarjeta--color-terciario-claro.p-4.rounded-5.custom-slider__tarjeta.custom-slider__tarjeta--3.height-100
            p.text-center.mt-4.p-1 La solución de agua más alumbre se debe preparar un día antes del embarque en una relación de un 1 kg por 100 L de agua.
        
        .col-10.col-sm-10.col-md-10.col-lg-3.col-xl-2.col-xxl-2.mb-5.mt-5
          .tarjeta.tarjeta--color-terciario-claro.p-5.rounded-5.custom-slider__tarjeta.custom-slider__tarjeta--4.height-100
            p.text-center.p-2 Afilar las herramientas como las gurbias que son utilizadas en desdede.
      .col-10.col-sm-10.col-md-10.col-lg-10.col-xl-10.col-xxl-10.mb-4
        h3(data-aos='zoom-in-right').mb-3
        span.label-title.label-title--2 Herramientas e insumos
      .col-10.col-sm-10.col-md-10.col-lg-4.col-xl-4.col-xxl-4.mb-lg-5.mb-4.mb-lg-0
        img(src="@/assets/curso/temas/tema2/img_33.png", alt="Imagen de montacargas")(data-aos='zoom-in-right')
      .col-10.col-sm-10.col-md-10.col-lg-3.col-xl-3.col-xxl-3.mb-lg-5.mb-4.mb-lg-0
        .tarjeta_bg-06.p-3.mb-0.overflow-auto(data-aos='zoom-in-right')
          ul
            li
              i.fa-solid.fa-circle-check(style="color: #7D9FFB; font-size: 15px").mb-3
              |   Agua limpia.
            li
              i.fa-solid.fa-circle-check(style="color: #7D9FFB; font-size: 15px").mb-3
              |   Alumbre.
            li
              i.fa-solid.fa-circle-check(style="color: #7D9FFB; font-size: 15px").mb-3
              |   Estibas.
            li
              i.fa-solid.fa-circle-check(style="color: #7D9FFB; font-size: 15px").mb-3
              |   Talonario de registro.
            li
              i.fa-solid.fa-circle-check(style="color: #7D9FFB; font-size: 15px").mb-3
              |   Tanques.
            li
              i.fa-solid.fa-circle-check(style="color: #7D9FFB; font-size: 15px").mb-3
              |   Baldes.
            li
              i.fa-solid.fa-circle-check(style="color: #7D9FFB; font-size: 15px").mb-3
              |   Mesa de escurrido.
            li
              i.fa-solid.fa-circle-check(style="color: #7D9FFB; font-size: 15px").mb-0
              |   Mesa de empaque.
      .col-8.col-sm-8.col-md-8.col-lg-3.col-xl-3.col-xxl-3.mb-3.mb-lg-0
        img(src="@/assets/curso/temas/tema2/img_34.png", alt="Imagen de balde o cubeta")(data-aos='zoom-in-right')
      .col-10.col-sm-10.col-md-10.col-lg-10.col-xl-10.col-xxl-10.mb-4
        .tarjeta_bg-05.p-4
          .row.justify-content-center.align-items-center
            .col-12.col-sm-12.col-md-12.col-lg-11.col-xl-11.col-xxl-11.mb-3.mb-lg-0
              h6 Recomendaciones
              ul.p-0 
                li.mb-1 
                  b 1. 
                  |   Preparar con un día de anticipación el agua con el alumbre para que haya una buena dilución.
                li.mb-1
                  b 2. 
                  |   Limpiar la empacadora antes y después de cada proceso.
                li.mb-1
                  b 3. 
                  |   Establecer la capacidad volumétrica de los tanques para así garantizar la dosificación adecuada de alumbre y agua.
            .col-3.col-sm-3.col-md-3.col-lg-1.col-xl-1.col-xxl-1.mb-3.mb-lg-0
              img(src="@/assets/curso/temas/tema2/img_35.svg", alt="Recomendaciones" class="img-fluid")
      .col-12.col-sm-12.col-md-12.col-lg-10.col-xl-10.col-xxl-10.mb-5
        h3(data-aos='zoom-in-right').mb-3
          span.label-title.label-title--1 Desdede y desleche
        p.mb-2 Una vez realizado el desdede con la gurbia o el cuchillo, los dedos (plátanos) se sumergen en una solución de agua y alumbre al 1%, es decir 10 gr de alumbre por cada litro de agua, los dedos deben permanecer sumergidos por 10 minutos.
      .col-10.col-sm-10.col-md-10.col-lg-10.col-xl-10.col-xxl-10.mb-4 
        .row.justify-content-center.align-items-center.mb-3
          .col-8.col-sm-8.col-md-8.col-lg-8.col-xl-3.col-xxl-3.mb-3.mb-lg-3
            img(src="@/assets/curso/temas/tema2/img_36.png", alt="Imagen de unos platanos" class="img-fluid")
          .col-12.col-sm-12.col-md-12.col-lg-12.col-xl-9.col-xxl-9.mb-3.mb-lg-3
            .tarjeta_bg-06.p-4.mb-2
              .row.mb-3.justify-content-center.align-items-center
                .col-4.col-sm-4.col-md-4.col-lg-3.col-xl-2.col-xxl-2.mb-3.mb-lg-0
                  img.width-110(src="@/assets/curso/temas/tema2/img_37.svg", alt="Imagen de unos platanos" class="img-fluid")
                .col-13.col-sm-13.col-md-13.col-lg-9.col-xl-10.col-xxl-10
                  ol.p-0
                    li.mb-0 
                      strong 1. 
                      | Las gurbias deben estar bien afiliadas para que haya un buen corte y así evitar el rasgado en el cuello de la fruta.
                    li.mb-0 
                      strong 2. 
                      | Hacer el desleche utilizando los tanques.
                    li.mb-0 
                      strong 3. 
                      | Realizar el desleche por 10 minutos para no tener problemas posteriores como el manchado de la fruta.
                    li.mb-0 
                      strong 4. 
                      |  Corregir cortes defectuosos de dedos y coronas.
                    li.mb-0 
                      strong 5. 
                      | El personal debe estar capacitado en el manejo de la gurbia.
      .col-lg-10.mb-4
        .titulo-sexto.bg-11.mb-4
          h5 
            em Figura 5: 
          span.text-dark Procedimiento
        ImagenInfografica.time-line-info
          template(v-slot:imagen)
            figure
              img.mb-4(src='@/assets/curso/temas/tema2/img_38.png', alt='Imagen de ayuda')
          .tarjeta.p-4(x="27.5%" y="44.5%" numero="")
            p.mb-5 Llevar los racimos cosechados al tanque con la solución de alumbre. 
            .time-line-info__number
              span 01
          .tarjeta.p-4(x="53%" y="44.5%" numero="")
            p.mb-5 Separar los dedos de cada mano de los racimos.
            .time-line-info__number
              span 02
          .tarjeta.p-4(x="78.5%" y="44.5%" numero="")
            p.mb-5 Si después del corte los dedos no quedaron separados o presentan cortes defectuosos, corregir en otro repaso.
            .time-line-info__number
              span 03
          .tarjeta.p-4(x="70%" y="84%" numero="")
            p.mb-5 Luego del desdede la fruta debe permanecer en el tanque 10 minutos para garantizar el adecuado desleche.
            .time-line-info__number
              span 04
          .tarjeta.p-4(x="40.3%" y="82%" numero="")
            p.mb-5 La zona de empacado debe contar con dos tanques con el fin de asegurar la calidad de desleche y clasificación de la fruta.
            .time-line-info__number
              span 05
        figcaption.mb-3 
          em Nota.  
          | SENA (2024).
        h3(data-aos='zoom-in-right').mb-3
          span.label-title.label-title--1 Presentación de los dedos
        p.mb-5 El dedo (plátano) de exportación no debe presentar defectos, sólo se admiten 5 defectos por caja, estos deben tener un calibre mínimo de 22 y máximo 28 (1/16 pulgadas).
        h3(data-aos='zoom-in-right').mb-3
          span.label-title.label-title--1 Defectos del plátano más comunes
        .titulo-sexto.bg-11.mb-3
          h5 
            em Figura 6:
          span.text-dark Defectos del plátano más comunes:
        figure
          img.mb-4(src='@/assets/curso/temas/tema2/img_39.png', alt='Imagen de ayuda')
        figcaption 
          em Nota.  
          | SENA (2024).
    h3(data-aos='zoom-in-right').mb-3
      span.label-title.label-title--1 Empacado:
    .row.justify-content-center.align-items-center.mb-3
      .col-8.col-sm-8.col-md-8.col-lg-8.col-xl-3.col-xxl-3.mb-3.mb-lg-3
        figure
          img(src="@/assets/curso/temas/tema2/img_40.png", alt="Imagen de unos platanos" class="img-fluid")
      .col-12.col-sm-12.col-md-12.col-lg-12.col-xl-9.col-xxl-9.mb-3.mb-lg-3
        p El empacado se hace posterior al lavado y al escurrido, se realiza en cajas y requiere de mucho cuidado, las cajas de exportación deben empacarse en dos hileras, de tal manera que las coronas queden contra las paredes de la caja y las puntas tocando las hileras de las otras. Los dedos se deben etiquetar según las exigencias de la empresa exportadora, algunas exigen etiquetar sólo las dos últimas líneas, luego se cubre con un plástico para luego ponerle la tapa. 
        p Las cajas más usadas por algunas exportadoras en Colombia son de cartón y tienen una dimensión de 50 centímetros de ancho por 24 centímetros de alto. Se debe tener cuidado y buen criterio para no empacar plátanos pintones, defectuosos o que no reúnan las condiciones de calibre.
        p Cada caja debe llevar un número correspondiente a la fecha y el código del exportador. 
      .row.justify-content-center.mb-3
        .col-lg-4.mb-3
          .tarjeta_bg-04.mb-3.p-4
            p.mb-0 Es momento de escuchar el pódcast en el que Don Campos, Azusena y Don Plátano, explicarán los tipos de empaques y embalajes utilizados en el proceso de poscosecha del plátano. En este episodio se abordará la importancia de hacer uso adecuado de los empaques, que finalmente son los que permiten que el producto se conserve en óptimas condiciones de calidad para su disposición final
        .col-lg-8.mb-3
          .row.ordenar_tarjeta_lg.p-5.justify-content-center.align-items-center
            .col-lg-12.mb-3
              TarjetaAudio.color-primario.mb-3(
                texto="Tipos de empaques y embalajes  "
                :audio="require('@/assets/curso/audios/podcast1.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
            .col-lg-12.mb-3
              .div.tarjeta.color-acento-A10.p-3
                .row.justify-content-around.align-items-center
                  .col-auto
                    img.img65(src="@/assets/curso/temas/tema2/img_2.png")
                  .col
                    .row.justify-content-between.align-items-center
                      .col.mb-3.mb-sm-0
                        h4.mb-3 Protocolo de buenas prácticas para poscosecha del plátano pp. 7-9. 
                        p Para profundizar en el procedimiento que se debe llevar a cabo para la operación de lavado de plátano, y para los procesos de selección y clasificación del plátano. 
                      .col-sm-auto
                        a.boton.color-acento-botones(:href="obtenerLink('/downloads/ProtocoloPoscosecha_Pltano.pdf')" target="_blank")
                          span Descargar
                          i.fas.fa-file-download
    h3(data-aos='zoom-in-right').mb-3
      span.label-title.label-title--1 Transporte:
    p.mb-3 El traslado desde la finca a la bodega o centro de acopio se hace en vehículos convencionales; mientras el traslado del centro de acopio al puerto se hace en camiones con refrigeración a una temperatura de 8 °C a 9 °C.
    .tarjeta_bg-04.mb-3.p-4
      .row.justify-content-center.mb-3
        .col-lg-4.mb-3
          figure
            img(src="@/assets/curso/temas/tema2/img_40.png", alt="Imagen de unos platanos" class="img-fluid")
        .col-lg-8.mb-3
          .row.justify-content-center.mb-3
            .col-lg-8.mb-3
              p.mb-3 Los invitamos a escuchar el siguiente episodio presentado por Don Campos, Azusena y Don Plátano, quienes se unen en esta oportunidad para explicar las generalidades e importancia del transporte y almacenamiento del plátano, y los aspectos más relevantes en cada uno de estos procesos que permiten garantizar la calidad y conservación del producto final. ¡No se lo pierdan!
            .col-lg-8
              TarjetaAudio.color-primario.mb-3(
                texto="Tipos de empaques y embalajes  "
                :audio="require('@/assets/curso/audios/podcast1.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
              
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
