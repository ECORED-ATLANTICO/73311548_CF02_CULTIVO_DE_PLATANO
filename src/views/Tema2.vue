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
        img(src="@/assets/curso/temas/tema2/img_1.png", alt="Cosecha y poscosecha" class="img-fluid")
      .col-12.col-sm-12.col-md-12.col-lg-7.col-xl-9.col-xxl-9.mb-3.mb-lg-0
        p.mb-2 El desguasque se encuentra dentro de las prácticas culturales recomendadas para favorecer la sanidad y vigor de las plantas. Esta labor consiste en eliminar la guasca seca que hay en el pseudotallo, se puede realizar cada vez que lo requiera el cultivo, procurando no hacer daño a la planta; el no realizar esta labor en la platanera puede generar plagas como el Picudo, el Rayado, la Palomilla y algunas enfermedades como el virus en el pseudotallo.
        p.mb-4 Cuando los frutos alcanzan su punto de madurez, inicia la etapa de cosecha, en la cual los racimos son recolectados con cuidado para evitar daños mecánicos. Posteriormente, el proceso de poscosecha se encarga de preservar la calidad del producto mediante actividades como limpieza, clasificación y embalaje, asegurando su adecuada presentación y conservación para la distribución.
        .tarjeta_bg-05.p-4.mb-2
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
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-sm-12.col-md-12.col-lg-8.col-xl-9.col-xxl-9
        p.mb-2 La cosecha del plátano es un proceso que exige precisión y cuidado para garantizar la calidad del producto final. La madurez óptima se alcanza entre las 9 y 13 semanas posteriores a la floración, aunque en sistemas de riego tecnificado puede lograrse a los nueve meses de la siembra. Su determinación se basa en diversos métodos, como el uso de cintas o tablas de colores que indican el grado de madurez según el color y el contenido de azúcar del fruto. Este último puede medirse con un refractómetro, complementando el análisis con el registro de los días transcurridos desde la floración y la observación del llenado del fruto. Durante esta evaluación, se descartan racimos con daños por plagas, enfermedades o golpes, asegurando la calidad y uniformidad del producto.
        .tarjeta_bg-06.p-3.mb-2
          .row.mb-3.justify-content-center.align-items-center
            .col-3.col-sm-2.col-md-2.col-lg-2.col-xl-1.col-xxl-1.p-2.mb-2.mb-lg-0
              img(src="@/assets/curso/temas/tema2/img_3.svg", alt="Cosecha" class="img-fluid")
            .col-10.col-sm-10.col-md-10.col-lg-10.col-xl-11.col-xxl-11.p-2.mb-0.mb-lg-0
              p.mb-0 Una vez seleccionado el racimo, el corte debe realizarse con precisión para evitar daños. Se practica un corte parcial en forma de cruz, aproximadamente a dos tercios de la altura del pseudotallo, lo que minimiza cualquier impacto negativo en la integridad del racimo. En esta fase, es esencial un manejo delicado para evitar golpes que puedan afectar la calidad del fruto.
        p.mb-2 El transporte hasta el área de procesamiento es determinante para preservar la calidad del racimo. Para minimizar golpes y rozaduras, se emplean distintos métodos según la distancia y las condiciones del terreno, como:
      .col-11.col-sm-11.col-md-11.col-lg-4.col-xl-3.col-xxl-3
        img(src="@/assets/curso/temas/tema2/img_4.png", alt="Cosecha" class="img-fluid")
    .row.justify-content-center.align-items-center.mb-0
      .col-10.col-sm-10.col-md-10.col-lg-10.col-xl-10.col-xxl-10
        .container
          .row.g-0.mb-5
            .col-4.col-sm-4.col-md-4.col-lg-4.col-xl-4.col-xxl-4
              .card.card-custom.bg-left
                img.img-fluid(src="@/assets/curso/temas/tema2/img_5.png", alt="Transporte sobre el hombro")
                .card-body
                  p El transporte sobre el hombro.
            .col-4.col-sm-4.col-md-4.col-lg-4.col-xl-4.col-xxl-4
              .card.card-custom.bg-center
                img.img-fluid(src="@/assets/curso/temas/tema2/img_6.png", alt="Uso de carretillas")
                .card-body
                  p El uso de carretillas.
            .col-4.col-sm-4.col-md-4.col-lg-4.col-xl-4.col-xxl-4
              .card.card-custom.bg-right
                img.img-fluid(src="@/assets/curso/temas/tema2/img_7.png", alt="Sistema de cable aéreo")
                .card-body
                  p Sistemas de cable aéreo.
        p.mb-2 La elección del sistema debe priorizar siempre la integridad del producto, asegurando que llegue en óptimas condiciones a la siguiente etapa del proceso.
        p.mb-4 A continuación, se presenta una guía para la selección del fruto en su momento óptimo. 
        .titulo-sexto.bg-11.mb-4
          h5 Tabla 3:
          span.text-dark Indicadores de recolección.
        .tabla-a.mb-3
          table
            caption.mb-4 Nota. Este estudio, con base en Flores, 2013, Torres et al, 2013, Londoño, 2011, Martinez, 1998, Sena, 2004, NTC 1190.
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
        .titulo-sexto.bg-11.mb-4
          h5 Tabla 4:
          span.text-dark Tabla de color según grado de madurez.
        .tabla-a1.mb-1 
          table
            caption Nota.   Este estudio, con base en Mejía, 2013, Sena, 2004; NTC 1190. 
            thead
              tr
                th Grado de madurez (GM)
                th GM 1
                th GM 2
                th GM 3
                th GM 4
                th GM 5
            tbody
              tr
                td Detalle
                td Fruto bien desarrollado de color verde oscuro.
                td.bg-table-GM El color verde pierde intensidad.
                td Aparecen unas leves tonalidades amarillas.
                td.bg-table-GM El color amarillo se acentúa y el pedúnculo sigue verde.
                td El fruto es totalmente amarillo.
              tr
                td Imagen
                td: img(src="@/assets/curso/temas/tema2/img_8.png", alt="GM1")
                td: img(src="@/assets/curso/temas/tema2/img_9.png", alt="GM2")
                td: img(src="@/assets/curso/temas/tema2/img_10.png", alt="GM3") 
                td: img(src="@/assets/curso/temas/tema2/img_11.png", alt="GM4") 
                td: img(src="@/assets/curso/temas/tema2/img_12.png", alt="GM5")
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
      .col-6.col-sm-6.col-md-5.col-lg-3.col-xl-3.col-xxl-3.mb-3.mb-lg-0
        .tarjeta--boton.color-acento-A10.p-4
          .row.justify-content-center.align-items-center
            .col-7
              figure
                img(src='@/assets/curso/temas/tema2/img_18.svg', alt='Lavado' class="img-fluid")
          h3.text-center.mb-4 Lavado
          p.text-small Eliminación de residuos e impurezas.
      .col-6.col-sm-6.col-md-5.col-lg-3.col-xl-3.col-xxl-3.mb-4.mb-lg-0
        .tarjeta--boton.color-acento-A10.p-4
          .row.justify-content-center.align-items-center
            .col-7
              figure
                img(src='@/assets/curso/temas/tema2/img_19.svg', alt='Clasificación' class="img-fluid")
          h3.text-center.mb-2 Clasificación
          p.text-small Selección de los frutos según estándares de mercado.
      .col-6.col-sm-6.col-md-5.col-lg-3.col-xl-3.col-xxl-3.mb-4.mb-sm-0
        .tarjeta--boton.color-acento-A10.p-4
          .row.justify-content-center.align-items-center
            .col-7
              figure
                img(src='@/assets/curso/temas/tema2/img_20.svg', alt='Desmanado' class="img-fluid")
          h3.text-center.mb-2 Desmanado
          p.text-small Separación de los plátanos en unidades individuales.
      .col-6.col-sm-6.col-md-5.col-lg-3.col-xl-3.col-xxl-3
        .tarjeta--boton.color-acento-A10.p-4
          .row.justify-content-center.align-items-center
            .col-7
              figure
                img(src='@/assets/curso/temas/tema2/img_21.svg', alt='Empaque' class="img-fluid")
          h3.text-center.mb-2 Empaque
          p.text-small  Protección de los frutos para evitar daños durante el transporte.
    .row.justify-content-center.align-items-center.mb-4
      .col-10.col-sm-10.col-md-10.col-lg-10.col-xl-10.col-xxl-10.mb-2
        .cajon.bg-4.g_18.mb-5
          .row.justify-content-center.align-items-center
            .col-lg-12.p-4.ps-5 
              p Durante esta etapa, los plátanos experimentan cambios en su composición físico-química: aumenta la acidez titulable y los grados Brix (indicadores de dulzura), mientras que el pH disminuye. Un manejo adecuado en la poscosecha garantiza la conservación de la frescura, presentación y valor comercial del producto, cumpliendo con las expectativas del consumidor y reduciendo pérdidas a lo largo de la cadena de distribución.
        div.metodo.mb-3.mb-md-5
          span.texto Proceso de poscosecha
        p.mb-5 La coordinación eficiente entre la cosecha y la poscosecha es fundamental para optimizar los resultados y ofrecer un producto de alta calidad. Este proceso incluye las siguientes etapas:
      .row.justify-content-center.align-items-center
        .col-10.col-sm-10.col-md-4.col-lg-3.col-xl-2.col-xxl-2.mb-4.mb-xl-0
          .tarjeta-numerada.color-acento-contenido
            .tarjeta-numerada__numero
              .h2 1
            p 
              b Recepción de materia prima: 
              | inspección y preparación del producto.
        .col-10.col-sm-10.col-md-4.col-lg-4.col-xl-2.col-xxl-2.mb-4.mb-xl-0
          .tarjeta-numerada.color-primario
            .tarjeta-numerada__numero
              .h2 2
            p 
              b Adecuación del fruto: 
              | retiro de la bolsa protectora y separación de los racimos.
        .col-10.col-sm-10.col-md-4.col-lg-3.col-xl-2.col-xxl-2.mb-4.mb-xl-0
          .tarjeta-numerada.color-secundario
            .tarjeta-numerada__numero
              .h2 3
            p 
              b Selección y clasificación: 
              | evaluación de calidad según parámetros comerciales.
        .col-10.col-sm-10.col-md-4.col-lg-3.col-xl-2.col-xxl-2.mb-4.mb-xl-0
          .tarjeta-numerada.color-terciario
            .tarjeta-numerada__numero
              .h2 4
            p
              b Lavado: 
            p eliminación de impurezas y posibles residuos de plaguicidas.
        .col-10.col-sm-10.col-md-4.col-lg-3.col-xl-2.col-xxl-2.mb-4.mb-xl-0
          .tarjeta-numerada.color-acento-botones
            .tarjeta-numerada__numero
              .h2 5
            p 
              b Empaque:
            p organización y protección del producto para su distribución.
    .titulo-sexto.bg-11.mb-4
      h5 Tabla 5:
      span.text-dark Guía de operación para lavado de plátano
    .tabla-a2.mb-5 
      table
        thead
          tr
            th(style="width: 7%") Factor de control
            th(style="width: 15%") Frecuencia
            th(style="width: 22%") Procedimiento
            th(style="width: 40%") Imagen
            th(style="width: 15%") Instrumentos
        tbody
          tr
            td(rowspan="3") Frutos
            td(rowspan="3") Después del desmane y desde
            td(rowspan="3")
              p.p-2 Realizar lavado superficial de los frutos para remover suciedad (residuos de tierra, agroquímicos y otros) y patógenos.
              p.p-2 Se debe usar una mezcla de agua con alumbre en una proporción de 100 g por cada 10 litros de agua o utilizar jabones industriales para ayudar a remover el látex y destruir microorganismos, como hongos, que atacan el pedúnculo y la corona de los dedos. Los frutos se dejan 5 a 10 minutos en el tanque. Esta solución también sirve como cicatrizante en las zonas de la corona donde se han hecho cortes.
              p.p-2 Finalmente, realizar secado o escurrido de los frutos para evitar el crecimiento de hongos.
            td.imagen
              .img-container
                figure
                  figcaption Desde
                  img(src="@/assets/curso/temas/tema2/img_22.svg", alt="Desde" class="img-fluid")
                  p.etiqueta www.agricultura.gob.ec
            td(rowspan="3")
              ul
                li.mb-4 • Toalla
                li.mb-4 • Cepillo
                li.mb-4 • Jabón
                li.mb-4 • Alumbre como cicatrizante (100 g/100Lt)
                li.mb-4 • Balde
                li.mb-4 • Aspersores
          tr
            td.imagen
              .img-container
                figure
                  figcaption Lavado y desinfección
                  img(src="@/assets/curso/temas/tema2/img_23.png", alt="Lavado y desinfección" class="img-fluid")
                  p.etiqueta www.agricultura.gob.ec
            tr
              td.imagen
                .img-container
                  figure
                    figcaption Secado o escurrido 
                    img(src="@/assets/curso/temas/tema2/img_24.svg", alt="Secado o escurrido" class="img-fluid")
                    p.etiqueta www.agricultura.gob.ec
    .row.justify-content-center.align-items-center.mb-4
      .col-10.col-sm-10.col-md-10.col-lg-10.col-xl-10.col-xxl-10.mb-4
        div.metodo2.mb-4.mb-md-5
          span.texto Guía para selección y clasificación del plátano
      .row.justify-content-center.align-items-center
        .col-10.col-sm-10.col-md-10.col-lg-2.col-xl-2.col-xxl-2.mb-4.mb-3
          figure
            img(src="@/assets/curso/temas/tema2/img_25.svg", alt="Guía para selección y clasificación del plátano" class="img-fluid")
        .col-10.col-sm-10.col-md-10.col-lg-8.col-xl-8.col-xxl-8.mb-4.mb-3
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
            .row(titulo="Daño por plagas").justify-content-center.align-items-center
              .col-10.col-sm-10.col-md-10.col-lg-10.col-xl-10.col-xxl-10.mb-4.mb-md-0
                p.mb-0 Después del secado, seleccione para la comercialización los frutos que se encuentren libres de: 
                p.mb-0 • Frutos dañados por pájaros o insectos
                p.mb-0 • Ablandamientos
                p.mb-4 • Manchas, mordeduras, cicatrices o mordiscos ovalados en la cáscara, trips
              .col-10.col-sm-10.col-md-10.col-lg-5.col-xl-5.col-xxl-5
                object(:data="img_26" type="image/svg+xml" class="img-fluid")
              .col-10.col-sm-10.col-md-10.col-lg-4.col-xl-4.col-xxl-4
                .tarjeta_bg-06.p-4.mb-2
                  p.mb-0 • Percepción visual
                  p.mb-0 • Recipiente colector
                  p.mb-0 • Canastilla para producto dañado
                  p.mb-0 • Canastilla para comercialización
                p https://oggisioggino.wordpress.com/
            .row(titulo="Enfermedades por hongos").justify-content-center.align-items-center
              .col-10.col-sm-10.col-md-10.col-lg-10.col-xl-10.col-xxl-10.mb-4.mb-md-0
                p.mb-0 También, seleccione para comercialización los frutos que se encuentren libres de:
                p.mb-0 • Mal del cigarro
                p.mb-0 • Pudrición seca
                p.mb-0 • Ablandamiento y ennegrecimiento de los tejidos de la corona
                p.mb-0 • Formación de colonias de color blanco, gris o rosado
                p.mb-0 • Malformaciones
                p.mb-0 • Antracnosis o lesiones de color café oscuro o negro
                p.mb-4 Para disminuir las enfermedades en la corona se deben realizar los cortes con las herramientas desinfectadas y, después de lavado, secar bien los frutos.
              .row.justify-content-center.align-items-center
                .col-10.col-sm-10.col-md-10.col-lg-5.col-xl-5.col-xxl-5
                  object(:data="img_27" type="image/svg+xml" class="img-fluid")
                .col-10.col-sm-10.col-md-10.col-lg-4.col-xl-4.col-xxl-4
                  .tarjeta_bg-06.p-4.mb-2
                    p.mb-0 • Percepción visual
                    p.mb-0 • Recipiente colector
                    p.mb-0 • Canastilla para producto dañado
                    p.mb-0 • Canastilla para comercialización
                  p https://oggisioggino.wordpress.com/
            .row(titulo="Daño mecánico").justify-content-center.align-items-center
              .col-10.col-sm-10.col-md-10.col-lg-10.col-xl-10.col-xxl-10.mb-4.mb-md-0
                p.mb-0 Seleccione para terceras o realice unas adecuada disposición final en los frutos que presenten daños, como:
                p.mb-0 • Frutos partidos, con golpes, cicatrices frescas, rajados, cuello roto y magulladuras
                p.mb-0 • Frutos con manchas de sol
                p.mb-0 • Frutos con manchas de latex
                p.mb-3 Clasificar los frutos, según lo demande el mercado de comercialización, teniendo en cuenta las características de calidad que se indican en la NTC 1190:
              .col-10.col-sm-10.col-md-10.col-lg-5.col-xl-5.col-xxl-5
                object(:data="img_28" type="image/svg+xml" class="img-fluid")
              .col-10.col-sm-10.col-md-10.col-lg-4.col-xl-4.col-xxl-4
                .tarjeta_bg-06.p-4.mb-2
                  p.mb-0 • Percepción visual
                  p.mb-0 • Canastilla para producto dañado
                  p.mb-0 • Canastilla para comercialización
                p https://oggisioggino.wordpress.com/
            .row(titulo="Categorías de calidad").justify-content-center.align-items-center
              .col-10.col-sm-10.col-md-10.col-lg-10.col-xl-10.col-xxl-10.mb-4.mb-md-0
                p.mb-0 Los plátanos deben estar enteros y duros, exteriormente secos, Limpios, sin manchas ni grietas, no deben presentar indicios de pudrición ni magulladuras o heridas no cicatrizadas, ni tener el cuello roto.
                p.mb-0 Adicionalmente, tenga en cuenta los requisitos de calidad por categoría Extra, Primera y segunda.
              .col-10.col-sm-10.col-md-10.col-lg-5.col-xl-5.col-xxl-5
                p.mb-0 Extra: Bien formados, 3/4 de lleno, con color uniforme y pedúnculo bien cortado.
                p.mb-0 Primera: A diferencia del Extra, pueden presentar daños superficiales sin manchas en las aristas.
                p.mb-0 Segunda: Puede presentar daños superficiales y 1/3 de manchas en las aristas.
              .col-10.col-sm-10.col-md-10.col-lg-4.col-xl-4.col-xxl-4
                .tarjeta_bg-06.p-4.mb-2
                  p.mb-0 • Calibrador
                  p.mb-0 • Canastilla para producto dañado
                  p.mb-0 • Empaque para comercialización
            .row(titulo="Color").justify-content-center.align-items-center
              .col-10.col-sm-10.col-md-10.col-lg-5.col-xl-5.col-xxl-5
                p Seleccionar y clasificar los frutos de acuerdo con el estado de maduración y el mercado de comercialización:
              .col-10.col-sm-10.col-md-10.col-lg-4.col-xl-4.col-xxl-4
                .tarjeta_bg-06.p-4.mb-2
                  p.mb-0 • Paleta de color
                  p.mb-0 • Canastilla por color
                  p.mb-0 • Empaque para comercialización
      .col-10.col-sm-10.col-md-10.col-lg-10.col-xl-10.col-xxl-10.mb-4
        div.metodo.mb-5.mb-md-5
          span.texto Preparación para la poscosecha 
        p.mb-5 A continuación, algunas condiciones de la poscosecha:
      .col-10.col-sm-10.col-md-10.col-lg-10.col-xl-10.col-xxl-10.mb-5
        mixin proceso-card(icono, texto)
          .proceso-card
            .proceso-icono
              img(src=icono, alt="Icono")
            p.proceso-texto= texto
        .container
          .row.justify-content-center.align-items-center
            .col-6.col-sm-6.col-md-6.col-lg-4.col-xl-4.col-xxl-4.mb-md-5
              +proceso-card("@/assets/curso/temas/tema2/img_29.svg", "Realice a la planta procesadora limpieza y desinfección de tanques, mesas, bandejas y alrededores. Esta operación debe realizarse una vez por semana; además dentro de la limpieza también se deben eliminar aguas usadas en el proceso y los residuos de la cosecha como vástagos, coronas y flores.")
              .mb-md-5
            .col-5.col-sm-4.col-md-5.col-lg-3.col-xl-3.col-xxl-3.mb-md-5
              +proceso-card("@/assets/curso/temas/tema2/img_30.svg", "Se debe alistar con antelación los insumos utilizados en el proceso como: alumbre (piedralumbre), chuchillos para el desdede (gurbias), báscula y empaque.")
              .mb-md-5
            .col-5.col-sm-5.col-md-5.col-lg-3.col-xl-3.col-xxl-3.mb-md-5
              +proceso-card("@/assets/curso/temas/tema2/img_31.svg", "La solución de agua más alumbre se debe preparar un día antes del embarque en una relación de un 1 kg por 100 L de agua.")
              .mb-md-5
            .col-4.col-sm-4.col-md-4.col-lg-2.col-xl-2.col-xxl-2.mb-md-5
              +proceso-card("@/assets/curso/temas/tema2/img_32.svg", "Afilar las herramientas como las gurbias que son utilizadas en desdede.")
              .mb-md-5
      .col-10.col-sm-10.col-md-10.col-lg-10.col-xl-10.col-xxl-10.mb-4
        div.metodo2.mb-4
          span.texto Herramientas e insumos
      .col-10.col-sm-10.col-md-10.col-lg-4.col-xl-4.col-xxl-4.mb-lg-5
        img(src="@/assets/curso/temas/tema2/img_33.svg", alt="Imagen de montacargas" class="img-fluid")
      .col-10.col-sm-10.col-md-10.col-lg-3.col-xl-3.col-xxl-3.mb-lg-5
        .tarjeta_bg-06.p-4.mb-0.overflow-auto
          p.mb-2.check-blue Agua limpia.
          p.mb-2.check-blue Alumbre.
          p.mb-2.check-blue Estibas.
          p.mb-2.check-blue Talonario de registro.
          p.mb-2.check-blue Tanques.
          p.mb-2.check-blue Baldes.
          p.mb-2.check-blue Mesa de escurrido.
          p.mb-2.check-blue Mesa de empaque.
      .col-10.col-sm-10.col-md-10.col-lg-3.col-xl-3.col-xxl-3.mb-lg-5
        img(src="@/assets/curso/temas/tema2/img_34.svg", alt="Imagen de balde o cubeta" class="img-fluid")
      .col-lg-10.mb-4
        div.metodo.mb-4.mb-md-5
          span.texto Desdede y desleche
        p.mb-2 Una vez realizado el desdede con la gurbia o el cuchillo, los dedos (plátanos) se sumergen en una solución de agua y alumbre al 1%, es decir 10 gr de alumbre por cada litro de agua, los dedos deben permanecer sumergidos por 10 minutos.
      .col-lg-10.mb-4 
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-3
            img(src="@/assets/curso/temas/tema2/img_36.svg", alt="Imagen de unos platanos" class="img-fluid")
          .col-lg-9
            .tarjeta_bg-06.p-4.mb-2
              .row.mb-3.justify-content-center.align-items-center
                .col-3.col-sm-2.col-md-2.col-lg-2.col-xl-1.col-xxl-1
                  img(src="@/assets/curso/temas/tema2/img_37.svg", alt="Imagen de unos platanos" class="img-fluid")
                .col-10.col-sm-10.col-md-10.col-lg-10.col-xl-11.col-xxl-11
                  p.mb-0 1. Las gurbias deben estar bien afiliadas para que haya un buen corte y así evitar el rasgado en el cuello de la fruta.
                  p.mb-0 2. Hacer el desleche utilizando los tanques.
                  p.mb-0 3. Realizar el desleche por 10 minutos para no tener problemas posteriores como el manchado de la fruta.
                  p.mb-0 4. Corregir cortes defectuosos de dedos y coronas.
                  p.mb-0 5. El personal debe estar capacitado en el manejo de la gurbia.
      .col-lg-10.mb-4
        .titulo-sexto.bg-11.mb-4
          h5 Figura 5: 
          span.text-dark Procedimiento
        .infografia.position-relative
          img.img-fluid(src="@/assets/curso/figuras/figura5.svg" alt="Infografía de proceso del banano")
          figcaption.mb-5 Nota.  SENA
          div(
            v-for="(item, index) in positions" 
            :key="index"
            class="infografia__item position-absolute"
            :style="{ top: item.top + '%', left: item.left + '%' }"
          )
            .infografia__item__dot.d-flex.align-items-center.justify-content-center(@click="openModal(index)")
              span {{ index + 1 }}
              b-modal#modal-process(
                v-model="showModal" 
                hide-footer 
                hide-header 
                centered 
                modal-class="custom-modal"
                no-backdrop
                @click-outside="showModal = false"
              )
                .modal-body
                  p {{ descripciones[selectedProcess] }}
                span.process-number  {{ (selectedProcess + 1).toString().padStart(2, '0') }}
        div.metodo.mb-5
          span.texto Presentación de los dedos
        p.mb-5 El dedo (plátano) de exportación no debe presentar defectos, sólo se admiten 5 defectos por caja, estos deben tener un calibre mínimo de 22 y máximo 28 (1/16 pulgadas).
        div.metodo.mb-4.mb-md-4
          span.texto Defectos del plátano más comunes
        .titulo-sexto.bg-11.mb-3
          h5 Figura 6:
          span.text-dark Defectos del plátano más comunes:
        object(:data="figura6" type="image/svg+xml" class="img-fluid").mb-2
        figcaption Nota.  SENA
    div.metodo.mb-5
      span.texto Empacado:
    
    .titulo-sexto.bg-11.mb-4
      h5 Tabla 6:
      span.text-dark Guía de operación para lavado de plátano
    .tabla-a3.mb-5 
      table
        caption Nota.    Este estudio, Con base en Moreno, Candanoaza, & Olarte, 2009; Sena, 2004.
        thead
          tr
            th(style="width: 15%") Operación postcosecha
            th(style="width: 30%; color: white;") Detalle
            th(style="width: 40%; color: white;") Imagen
            th(style="width: 20%; color: white;") Instrumento
        tbody
          tr
            td Empaque intra-finca
            td 
              p Para el traslado intra-finca de los racimos se recomienda transportar en el hombro, guaduas, carretillas, cable aéreo u otro medio, evitando maltrato entre ellos o que sufran daños o golpes.
            td.imagen 
              .img-container
                figure
                  figcaption Traslado en carretilla
                  img(src="@/assets/curso/temas/tema2/img_45.svg", alt="Traslado en carretilla")
            td 
              p.mb-4 • Hombro
              p.mb-4 • Guadua
              p.mb-4 • Carretilla
              p.mb-4 • Cable aéreo
          tr
            td(rowspan="3")  Empaque para comercialización
            td(rowspan="3") 
              p.mb-4 Empacar los frutos de acuerdo con las especificaciones del mercado:
              p.mb-3 • Para el mercado nacional, el empaque más utilizado es la canastilla plástica, con capicidad de 18 a 22 kg, resistente al trasporte, reutilizable, lavable y permite el estibamiento del producto. También se utilizan las bolsas con perforaciones.
              p.mb-3 • Para el mercado de exportación, se utilizan cajas de cartón rígidas y perforadas, con envolturas de polietileno con envolturas de polietileno con huecos de ventilación de 0.05 milésimas de pulgada y el uso de bolsas de polietileno microperforada que permite un envasado en atmósferas modificadas (EAM) y aumenta el tiempo de vida del producto.
              p.mb-3 En ambos casos, para evitar los daños por roce, los dedos grandes se colocan en la parte inferior los rectos en la parte de arriba (aproximadamente 55 a 60 dedos por caja) y llenas de una capicidad de 80% del empaque para evitar daños por compresión.        
            td.imagen
              .img-container
                figure
                  figcaption Canastillas
                  img(src="@/assets/curso/temas/tema2/img_46.svg", alt="Canastillas")
                  p.etiqueta www.agricultura.gob.ec
            td(rowspan="3")  
              p.mb-4 • Empaque de acuerdo con la comercialización.
              p.mb-4 • Es importante que el contenido de cada empaque sea homogéneo y contenga únicamente plátanos de la misma variedad, grado de madurez, calidad, color y calibre.
          tr
            td.imagen
              .img-container
                figure
                    figcaption Cajas de cartón y envase en atmósfera modificada (EAM)
                    img(src="@/assets/curso/temas/tema2/img_47.svg", alt="Cajas de cartón y envase en atmósfera modificada (EAM)")
          tr
            td.imagen
              figure
                    figcaption Bolsa 
                    img(src="@/assets/curso/temas/tema2/img_48.svg", alt="Bolsa")
                    p.etiqueta www.agricultura.gob.ec
    div.metodo.mb-4.mb-md-5
      span.texto Transporte:
    p.mb-2 El traslado desde la finca a la bodega o centro de acopio se hace en vehículos convencionales; mientras el traslado del centro de acopio al puerto se hace en camiones con refrigeración a una temperatura de 8 °C a 9 °C.
</template>

<script>
export default {
  name: 'Tema2',
  data() {
    return {
      Proceso_poscosecha: require('@/assets/curso/Proceso_poscosecha.svg'),
      figura6: require('@/assets/curso/figuras/figura6.svg'),
      img_26: require('@/assets/curso/temas/tema2/img_26.svg'),
      img_27: require('@/assets/curso/temas/tema2/img_27.svg'),
      img_28: require('@/assets/curso/temas/tema2/img_28.svg'),
      positions: [
        { top: 35, left: 25 },
        { top: 35, left: 50 },
        { top: 35, left: 76 },
        { top: 73, left: 67 },
        { top: 70, left: 38 },
      ],
      showModal: false,
      selectedProcess: 0,
      descripciones: [
        'Llevar los racimos cosechados al tanque con la solución de alumbre.',
        'Separar los dedos de cada mano de los racimos.',
        'Si después del corte los dedos no quedaron separados o presentan cortes defectuosos, corregir en otro repaso.',
        'Luego del desdede la fruta debe permanecer en el tanque 10 minutos para garantizar el adecuado desleche.',
        'La zona de empacado debe contar con dos tanques con el fin de asegurar la calidad de desleche y clasificación de la fruta.',
      ],
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
  methods: {
    openModal(index) {
      this.selectedProcess = index
      this.showModal = true
    },
    closeModal() {
      this.showModal = false
    },
  },
}
</script>

<style lang="sass"></style>
