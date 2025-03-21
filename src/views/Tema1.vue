<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 1
      h1 Manejo del cultivo
    .row.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-up")
      .col-lg-12
        .bloque-texto-g.bloque-texto-g--inverso.bg-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img_1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 El cultivo de plátano requiere la implementación de diversas prácticas culturales para prevenir problemas fitosanitarios. Aplicarlas a tiempo mejora las condiciones de desarrollo del cultivo y facilita el control de plagas y enfermedades. Esto impacta directamente en el rendimiento, la calidad y el peso del racimo, favoreciendo una producción más saludable y sostenible.

    separador

    #t_1_1.titulo-segundo
      .h2(data-aos="fade-right") 1.1 Control de malezas
    .mb-3
    .row.justify-content-center.align-items-center.mb-0
      .col-lg-4.mb-3
        p.mb-3 El manejo adecuado de las malezas es esencial para garantizar el crecimiento saludable del plátano y prevenir la propagación de enfermedades. Estas plantas además de competir por nutrientes, agua y luz, también, pueden actuar como vectores de plagas y patógenos que afectan el cultivo.
      .col-lg-6.mb-0
        figure
          img.mb-5(src="@/assets/curso/temas/tema1/img_2.png", alt="El manejo adecuado de las malezas es esencial para garantizar el crecimiento saludable del plátano y prevenir la propagación de enfermedades. Estas plantas además de competir por nutrientes, agua y luz, también, pueden actuar como vectores de plagas y patógenos que afectan el cultivo." class="img-fluid")
      TabsB.color-acento-contenido.mb-5
        .py-4.py-md-5(
          titulo="Malezas hospedantes de enfermedades" 
          :icono="require('@/assets/curso/temas/tema1/img_3.svg')"
          )
            .row.justify-content-center.align-items-center
              .col-10.col-sm-10.col-md-10.col-lg-6.col-xl-6.col-xxl-6.order-2.order-lg-1.mb-3.mb-lg-0
                p Algunas malezas representan un riesgo significativo, ya que albergan virus, bacterias e insectos perjudiciales. Entre las más problemáticas se encuentran la Siempre viva, transmisora de virus, así como la Emilia, el Cadillo y el Lulo de perro, que pueden hospedar bacterias como el Moko.
              .col-10.col-sm-10.col-md-10.col-lg-6.col-xl-6.col-xxl-6.order-1.order-lg-2.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/tema1/img_4.png', alt='Algunas malezas representan un riesgo significativo, ya que albergan virus, bacterias e insectos perjudiciales. Entre las más problemáticas se encuentran la Siempre viva, transmisora de virus, así como la Emilia, el Cadillo y el Lulo de perro, que pueden hospedar bacterias como el Moko.' class="img-fluid")
        .py-4.py-md-5(
          titulo="Importancia del control temprano" 
          :icono="require('@/assets/curso/temas/tema1/img_5.svg')"
          )
            .row.justify-content-center.align-items-center
              .col-10.col-sm-10.col-md-10.col-lg-6.col-xl-6.col-xxl-6.order-1.order-md-2.mb-0.mb-md-3
                  p Las plantas jóvenes de plátano son especialmente vulnerables, ya que las malezas pueden proliferar con facilidad en los espacios libres a su alrededor. Durante el primer año del cultivo, es fundamental mantener la zona despejada para evitar la competencia por recursos esenciales y promover un desarrollo vigoroso.
              .col-10.col-sm-10.col-md-10.col-lg-6.col-xl-6.col-xxl-6.order-2.order-md-1.mb-0.mb-md-3
                figure
                    img(src='@/assets/curso/temas/tema1/img_6.png', alt='Imagen de un suelo con césped' class="img-fluid")
      h3(data-aos='zoom-in-right').mb-4
        span.label-title.label-title--1 Métodos de control de arvenses
      p.mb-5 Existen diferentes métodos de control que pueden aplicarse según las condiciones del cultivo y los recursos disponibles.
      .row.justify-content-center.mb-5
        .col-lg-9.position-relative
          .avatar
            figure
              img.img250(src="@/assets/curso/temas/tema1/img_7.svg", alt="avatar" class="img-fluid")
          .crd.crd--avatarHorizontal.crd--first.py-4
            .row.align-items-center
              .col-auto.position-relative
                figure
                  img.img100(src="@/assets/curso/temas/tema1/img_8.svg", alt="Control químico" class="img-fluid")
              .col
                h5 Control químico
                p.p-2 Se utiliza de manera selectiva en plantaciones comerciales. En monocultivos, se aplican herbicidas emergentes en la base de la planta durante los primeros cinco meses del cultivo, periodo crítico en el que la competencia con las malezas es más intensa.
          .crd.crd--avatarHorizontal.py-4
            .row.align-items-center
              .col-auto.position-relative
                figure
                  img.img100(src="@/assets/curso/temas/tema1/img_9.svg", alt="Control mecánico" class="img-fluid")
              .col
                h5 Control mecánico	
                p.p-2 Consiste en el uso de guadañas para eliminar las malezas, contribuyendo además a la conservación de la cobertura del suelo.
          .crd.crd--avatarHorizontal.crd--middle.py-4
            .row.align-items-center
              .col-auto.position-relative
                figure
                  img.img100(src="@/assets/curso/temas/tema1/img_10.svg", alt="Control manual" class="img-fluid")
              .col
                h5 Control manual	
                p.p-2 Se realiza mediante el plateo con machete o manualmente. Este último es el método más recomendado para evitar daños a la planta.
          .crd.crd--avatarHorizontal.py-4
            .row.align-items-center
              .col-auto.position-relative
                figure
                  img.img100(src="@/assets/curso/temas/tema1/img_11.svg", alt="Control biológico" class="img-fluid")
              .col
                h5 Control biológico	
                p.p-2 Emplea organismos como insectos, hongos y bacterias para regular poblaciones de plagas y enfermedades, reduciendo la necesidad de agroquímicos.
          .crd.crd--avatarHorizontal.crd--last.py-4
            .row.align-items-center
              .col-auto.position-relative
                figure
                  img.img100(src="@/assets/curso/temas/tema1/img_12.svg", alt="Control manual" class="img-fluid")
              .col
                h5 Control manual	
                p.p-2 Se realiza mediante el plateo con machete o manualmente. Este último es el método más recomendado para evitar daños a la planta.
      h3(data-aos='zoom-in-right').mb-4
        span.label-title.label-title--1 Plateo
      p.mb-5 El plateo es una técnica esencial en el cultivo de plátano que consiste en mantener libre de malezas la base de la planta. Su correcta aplicación facilita la fertilización y el manejo de plagas y enfermedades, favoreciendo así un desarrollo óptimo del cultivo y aumentando su productividad. Se recomienda realizar esta labor de forma manual para evitar daños a la planta y mejorar la eficacia del control de arvenses.
      .row.justify-content-center.align-items-center.mb-5
        .col-10.col-sm-10.col-md-10.col-lg-10.col-xl-10.col-xxl-10.mb-2
          .titulo-sexto.bg-11.mb-2
            h5 
              em Figura 3: 
            span.text-dark Plateo
          figure
            img.img100(src="@/assets/curso/temas/tema1/img_13.png", alt="Control manual" class="img-fluid")
          figcaption 
            em Nota.  
            | SENA (2024).
      h3(data-aos='zoom-in-right').mb-4
        span.label-title.label-title--1 Desmanche o regulación de la población
      p.mb-3 El desmanche es una técnica fundamental en el cultivo de plátano, cuyo propósito es eliminar los colinos que emergen alrededor de la planta madre. Estos brotes generan competencia por luz, agua y nutrientes, afectando el desarrollo del cultivo. La aplicación adecuada de esta práctica permite establecer una descendencia equilibrada, compuesta por madre, hijo y nieto, optimizando la producción y garantizando una densidad adecuada de plantas por hectárea.
      p.mb-5 A continuación, se describen algunos métodos de eliminación de colinos:
      
      .row.justify-content-center.align-items-center.mb-3
        .col-10.col-sm-10.col-md-8.col-lg-3.col-xl-3.col-xxl-3.mb-5
          .crd_hover_txt
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema1/img_14.png", alt="Arranque de colino" class="img-fluid")
            .crd_hover_txt--body
              h5.mb-3.text-center Arranque de colino
              p.mb-0.text-small Consiste en separar el brote de la planta madre utilizando herramientas como barretón o palín.
        .col-10.col-sm-10.col-md-8.col-lg-4.col-xl-4.col-xxl-4.mb-5
          .crd_hover_txt
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema1/img_15.png", alt="Muerte de la yema apical" class="img-fluid")
            .crd_hover_txt--body
              h5.mb-3.text-center Muerte de la yema apical
              p.mb-0.text-small Se realiza un corte basal al colino y, posteriormente, se elimina su punto de crecimiento mediante una incisión en forma de cruz. Para este procedimiento se emplean machetes o rulas.
        .col-10.col-sm-10.col-md-8.col-lg-3.col-xl-3.col-xxl-3.mb-5
          .crd_hover_txt
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema1/img_16.png", alt="Extracción del punto de crecimiento" class="img-fluid")
            .crd_hover_txt--body
              h5.mb-3.text-center Extracción del punto de crecimiento        
              p.mb-0.text-small Mediante un sacabocados, se retira la yema sin afectar el sistema radicular de la planta madre ni de los colinos restantes.
        .col-10.col-sm-10.col-md-10.col-lg-10.col-xl-10.col-xxl-10.mb-0
          h3(data-aos='zoom-in-right').mb-3
            span.label-title.label-title--1 Desguasque
        .row.justify-content-center.align-items-center.mb-3
          .col-10.col-sm-10.col-md-10.col-lg-2.col-xl-2.col-xxl-2.mb-3.mb-lg-0
            img(src="@/assets/curso/temas/tema1/img_17.png", alt="Desguasque")
          .col-12.col-sm-12.col-md-12.col-lg-8.col-xl-8.col-xxl-8.mb-3.mb-lg-0
            p.mb-3 El desguasque se encuentra dentro de las prácticas culturales recomendadas para favorecer la sanidad y vigor de las plantas. Esta labor consiste en eliminar la guasca seca que hay en el pseudotallo, se puede realizar cada vez que lo requiera el cultivo, procurando no hacer daño a la planta; el no realizar esta labor en la platanera puede generar plagas como el Picudo, el Rayado, la Palomilla y algunas enfermedades como el virus en el pseudotallo.
        .col-10.col-sm-10.col-md-10.col-lg-10.col-xl-10.col-xxl-10.mb-0
          h3(data-aos='zoom-in-right').mb-3
            span.label-title.label-title--1 Deshoje
        .row.justify-content-center.align-items-center.mb-4
          .col-12.col-sm-12.col-md-12.col-lg-7.col-xl-7.col-xxl-7.mb-3.mb-lg-0
            p.mb-3 Implica la eliminación de hojas secas, dobladas o ubicadas en la parte inferior de la planta, con el propósito de mejorar la circulación del aire y la penetración de la luz solar, reduciendo así el riesgo de plagas y enfermedades. Se recomienda retirar también hojas con manchas o con tejidos verdes afectados, siempre asegurando que al menos el 50 % del área foliar permanezca intacta para no comprometer la fotosíntesis. Esta práctica es clave en el manejo de la Sigatoca negra.
            p.mb-0 El corte de las hojas debe realizarse a una altura de 20 a 30 cm del pecíolo y puede efectuarse en cualquier momento del día, según lo requiera el cultivo.
          .col-md-10.col-lg-3.mb-3.mb-lg-0.height-100
            img(src="@/assets/curso/temas/tema1/img_18.png", alt="Deshoje" class="img-fluid")
      h3(data-aos='zoom-in-right').mb-4
        span.label-title.label-title--1 Amarre
      p.mb-3 El amarre es una práctica fundamental para garantizar la estabilidad de las plantas durante su etapa de reproducción. Su propósito es prevenir la caída de los pseudotallos debido a factores como la acción del viento, deficiencias en el sistema radicular, embalconamiento o el peso del racimo.
      p.mb-5 Para obtener mejores resultados, esta labor debe realizarse con una frecuencia semanal, utilizando cabuya biodegradable, lo que contribuye a la sostenibilidad del cultivo y reduce el impacto ambiental.
      .row.justify-content-center.align-items-center.mb-4.mb-lg-5.factores-slider
        .d-none.d-xl-block.col-xl-5
          figure
            img(src='@/assets/curso/temas/tema1/img_19.png', alt="Amarre")(data-aos="fade-up")
        .col-xl-7.bg-platanos-image.p-3.rounded-3
          SlyderF().p-3.rounded-3
            .tarjeta.p-3.rounded-3.d-flex
              .row.align-items-center
                .col-3.d-none.d-md-block
                  figure
                    img.width-110(src='@/assets/curso/temas/tema1/img_20.png', alt='01')(data-aos="fade-up")
                .col-md-9
                  h3.factores-slider__number.color-acento-contenido 01
                  p.mb-0 Que las semillas sean jóvenes, vigorosas y su procedencia y características fenotípicas sean óptimas.
            .tarjeta.p-3.rounded-3.d-flex
              .row.align-items-center
                .col-3.d-none.d-md-block
                  figure
                    img.width-110(src='@/assets/curso/temas/tema1/img_21.png', alt='02')(data-aos="fade-up")
                .col-md-9
                  h3.factores-slider__number.color-acento-contenido 02
                  p.mb-0 Determinar la dirección de inclinación para orientar correctamente las líneas o cuerdas.
            .tarjeta.p-3.rounded-3.d-flex  
              .row.align-items-center
                .col-3.d-none.d-md-block
                  figure
                    img.width-110(src='@/assets/curso/temas/tema1/img_22.png', alt='Ilustración decorativa')(data-aos="fade-up")
                .col-md-9
                  h3.factores-slider__number.color-acento-contenido 03
                  p.mb-0 Calcular la longitud de cuerda necesaria para el amarre.

            .tarjeta.p-3.rounded-3.d-flex  
              .row.align-items-center
                .col-3.d-none.d-md-block
                  figure
                    img.width-110(src='@/assets/curso/temas/tema1/img_23.png', alt='Ilustración decorativa')(data-aos="fade-up")
                .col-md-9
                  h3.factores-slider__number.color-acento-contenido 04
                  p.mb-0 Asegurar la escalera en una posición firme para facilitar la labor.

            .tarjeta.p-3.rounded-3.d-flex  
              .row.align-items-center
                .col-3.d-none.d-md-block
                  figure
                    img.width-110(src='@/assets/curso/temas/tema1/img_24.png', alt='Ilustración decorativa')(data-aos="fade-up")
                .col-md-9
                  h3.factores-slider__number.color-acento-contenido 05
                  p.mb-0 Amarrar en sentido contrario a la inclinación con un nudo holgado, firme y fácil de soltar.
            .tarjeta.p-3.rounded-3.d-flex  
              .row.align-items-center
                .col-3.d-none.d-md-block
                  figure
                    img.width-110(src='@/assets/curso/temas/tema1/img_25.png', alt='Ilustración decorativa')(data-aos="fade-up")
                .col-md-9
                  h3.factores-slider__number.color-acento-contenido 06
                  p.mb-0 Seleccionar las plantas de anclaje en este orden: paridas, bien desarrolladas sin parir y pseudotallos recién cosechados (menos de una semana).
            .tarjeta.p-3.rounded-3.d-flex  
              .row.align-items-center
                .col-3.d-none.d-md-block
                  figure
                    img.width-110(src='@/assets/curso/temas/tema1/img_26.png', alt='Ilustración decorativa')(data-aos="fade-up")
                .col-md-9
                  h3.factores-slider__number.color-acento-contenido 07
                  p.mb-0 Las cuerdas deben formar una "V" opuesta a la inclinación, con un ángulo de 45° a 60°.	
      h3(data-aos='zoom-in-right').mb-3
        span.label-title.label-title--1 Embolse y encinte
      .bg_img_3
        .row.align-items-center.mb-4.mb-lg-5
          .d-none.d-lg-block.col-lg-3.height-100
            img(src="@/assets/curso/temas/tema1/img_27.png", alt="Embolse y encinte")(data-aos="fade-up")
          .col-12.col-sm-12.col-md-12.col-lg-8.col-xl-8.col-xxl-8.mb-4.mb-xl-0
            p.mb-3 El embolse y el encinte son prácticas esenciales para garantizar la calidad del fruto en el cultivo de plátano. El embolse favorece el crecimiento de los racimos al reducir el tiempo entre su aparición y la cosecha, además de mantener una temperatura adecuada que optimiza su desarrollo. También protege los frutos contra plagas y daños durante su crecimiento y recolección, mejorando su presentación y calidad.
            p.mb-3 Por su parte, el encinte complementa el embolse y permite identificar la edad de los racimos, facilitando el control de la cosecha y el registro de la producción disponible.
            TabsA.mb-5.banana-tabs-a.color-secundario
              .tarjeta.bg-terciario-claro.p-4.h-100.banana-tabs-a__tarjeta(titulo="Tratamiento de bolsas")
                .row.justify-content-center.align-items-center.mb-0
                  .col-7.col-sm-7.col-md-7.col-lg-7.col-xl-7.col-xxl-7.mb-4.mb-xl-0
                    p Las bolsas utilizadas deben estar impregnadas con agroquímicos permitidos para garantizar su efectividad.
                  .col-3.col-sm-3.col-md-3.col-lg-3.col-xl-3.col-xxl-3.mb-4.mb-xl-0
                    figure
                      img(src='@/assets/curso/temas/tema1/img_28.png', alt='Procedimiento de embolse')(data-aos="fade-up")
              .tarjeta.bg-terciario-claro.p-4.h-100.banana-tabs-a__tarjeta(titulo="Tanques de lavado")
                .row.justify-content-center.align-items-center.mb-0
                  .col-7.col-sm-7.col-md-7.col-lg-7.col-xl-7.col-xxl-7.mb-4.mb-xl-0
                    p Se debe realizar con la indumentaria y vestuario de trabajo adecuado, y la protección necesaria.
                  .col-3.col-sm-3.col-md-3.col-lg-3.col-xl-3.col-xxl-3.mb-4.mb-xl-0
                    figure
                      img(src='@/assets/curso/temas/tema1/img_29.png', alt='Tanques de lavado')
              .tarjeta.bg-terciario-claro.p-4.h-100.banana-tabs-a__tarjeta(titulo="Zona de secado")
                .row.justify-content-center.align-items-center.mb-0
                  .col-7.col-sm-7.col-md-7.col-lg-7.col-xl-7.col-xxl-7.mb-4.mb-xl-0
                    p Se recomienda el uso de bolsas lechosas tratadas con clorpirifós al 1%. En condiciones de alta radiación solar, este tipo de bolsa ofrece protección adicional contra plagas.
                  .col-3.col-sm-3.col-md-3.col-lg-3.col-xl-3.col-xxl-3.mb-4.mb-xl-0
                    figure
                      img(src='@/assets/curso/temas/tema1/img_30.png', alt='Manejo de residuos')
              .tarjeta.bg-terciario-claro.p-4.h-100.banana-tabs-a__tarjeta(titulo="Almacenamiento")
                .row.justify-content-center.align-items-center.mb-0
                  .col-7.col-sm-7.col-md-7.col-lg-7.col-xl-7.col-xxl-7.mb-4.mb-xl-0
                    p Es fundamental recoger y gestionar correctamente las bolsas utilizadas para evitar impactos ambientales negativos.
                  .col-3.col-sm-3.col-md-3.col-lg-3.col-xl-3.col-xxl-3.mb-4.mb-xl-0
                    figure
                      img(src='@/assets/curso/temas/tema1/img_31.png', alt='Almacenamiento')
        h3(data-aos='zoom-in-right').mb-3
          span.label-title.label-title--1 Desflore, desdede y desbacote
        p.mb-5 Estas prácticas agrícolas en el cultivo de plátano, contribuyen a optimizar el desarrollo del racimo, favoreciendo su crecimiento y calidad. Su aplicación adecuada permite una mejor distribución de nutrientes y reduce la incidencia de plagas y enfermedades.
        .row.justify-content-center.align-items-stretch.mb-0
          .col-10.col-sm-10.col-md-5.col-lg-5.col-xl-3.col-xxl-3.mb-4.mb-xl-0
            .square-card.bg-terciario-claro
              .square-card__img
                  figure
                    img(src='@/assets/curso/temas/tema1/img_32.png', alt='Desflore'  class="img-fluid")
              .square-card__text
                h3.text-center Desflore
                p.text-small Consiste en la eliminación de las flores de los racimos para mejorar la calidad del fruto y reducir el riesgo de enfermedades que pueden afectar su desarrollo.
          .col-10.col-sm-10.col-md-5.col-lg-5.col-xl-3.col-xxl-3.mb-4.mb-xl-0
            .square-card.bg-terciario-claro
              .square-card__img
                  figure
                    img(src='@/assets/curso/temas/tema1/img_33.png', alt='Desdede' class="img-fluid")
              .square-card__text
                h3.text-center Desdede
                p.text-small Se eliminan dos o más dedos de la última mano del racimo para garantizar una mejor distribución de nutrientes, lo que favorece el crecimiento y el peso del resto del fruto.
          .col-10.col-sm-10.col-md-6.col-lg-6.col-xl-4.col-xxl-4.mb-0
            .square-card.bg-terciario-claro
              .square-card__img
                  figure
                    img(src='@/assets/curso/temas/tema1/img_34.png', alt='Desbacote' class="img-fluid")
              .square-card__text
                h3.text-center Desbacote
                p.text-small.p-2 Se retira la bacota con el objetivo de potenciar el crecimiento de los dedos y aumentar el peso de los racimos, además de disminuir la incidencia de plagas y enfermedades.

      separador

      #t_1_2.titulo-segundo
        .h2(data-aos="fade-right") 1.2 Plagas y enfermedades
      .mb-3
      .row.justify-content-center.align-items-center
        .col-12.col-sm-12.col-md-12.col-lg-12.col-xl-8.col-xxl-8.mb-3
          p.mb-3 El cultivo de plátano, fundamental para la economía de muchas regiones, enfrenta múltiples desafíos fitosanitarios que pueden comprometer su productividad y calidad. Entre estos, las enfermedades y plagas representan una amenaza constante, cuyo impacto se ve agravado por factores ambientales como el clima y las prácticas agrícolas. En particular, los periodos de alta pluviosidad, como los registrados durante las olas invernales, favorecen la proliferación de estos problemas, incrementando las pérdidas en el sector.
          p.mb-0 A continuación, se presentan las principales enfermedades y plagas que afectan los cultivos de plátano, sus síntomas característicos y las estrategias de manejo integrado recomendadas para su control. Comprender estos aspectos, permite tomar de decisiones efectivas que garanticen cosechas sanas y rentables.
        .d-none.d-lg-block.col-lg-8.col-xl-4
            figure
              img.mb-5(src="@/assets/curso/temas/tema1/img_35.png", alt="Plagas y enfermedades")(data-aos="fade-up")
      .row.justify-content-center.align-items-center.mb-3
        .col-10.col-sm-10.col-md-10.col-lg-10.col-xl-10.col-xxl-10.mb-4
          .titulo-sexto.bg-11.mb-4
            h5 
              em Tabla 1: 
            span.text-dark Enfermedades del Plátano
          .tabla-a.mb-5
            table
              caption 
                em Nota.  
                | SENA (2024).
              thead
                tr
                  th Enfermedad
                  th Agente Causa
                  th Síntomas Principales
                  th Manejo Integrado
              tbody
                tr
                  td Moko o Madurebiche
                  td <em>Ralstonia solanacearum</em>
                  td Marchitamiento, amarillamiento, necrosis vascular, pudrición interna en cormos y racimos.
                  td Erradicación de plantas enfermas, desinfección de herramientas, control biológico (hongos antagonistas), control químico (si es necesario).
                tr
                  td Pudrición Acuosa del Pseudotallo
                  td <em>Dickeya chrysanthemi</em>
                  td Manchas acuosas y translúcidas en pseudotallo, olor fétido, debilitamiento de la planta, caída de hojas.
                  td Desinfección de herramientas, control de vectores (insectos), control químico (si es necesario), manejo de la humedad del suelo.
                tr
                  td Mal de Panamá
                  td <em>Fusarium oxysporum</em> f. sp. <em>cubense</em>
                  td Amarillamiento y marchitamiento, necrosis vascular, pudrición de raíces y cormos.
                  td Resistencia varietal, manejo del suelo (drenaje, pH), rotación de cultivos, eliminación de plantas enfermas.
                tr
                  td Sigatoka Negra
                  td <em>Mycosphaerella fijiensis</em> var. <em>difformis</em>
                  td Estrías y manchas necróticas en hojas, desde el envés hasta el haz, defoliación, reducción de rendimiento.
                  td Fungicidas, manejo de la humedad, deshoje de hojas afectadas, variedades resistentes.
          .titulo-sexto.bg-11.mb-4
            h5 
              em Tabla 2: 
            span.text-dark Principales plagas del plátano
          .tabla-a.mb-5 
            table
              caption 
                em Nota.  
                | SENA (2024).
              thead
                tr
                  th.bg-th Plaga
                  th.bg-th Agente causal
                  th.bg-th Síntomas Principales
                  th.bg-th Manejo Integrado
              tbody
                tr
                  td Picudo Negro
                  td <em>Cosmopolites sordidus</em>
                  td Túneles en cormos y pseudotallos, debilitamiento de la planta
                  td Trampeo, control biológico (hongos entomopatógenos, depredadores naturales), control químico (si es necesario), selección de material sano.
                tr
                  td Picudo Rayado y Picudo Amarillo
                  td <em>Metamasius hemipterus</em>, <em>M. hebetatus</em>
                  td Daños en pseudotallos y cormos, debilitamiento y caída de hojas, reducción de rendimiento.
                  td Trampeo, control químico (si es necesario), manejo de la nutrición (potasio, boro), eliminación de residuos de cosecha.
                tr
                  td Nematodos
                  td Varios géneros
                  td Daños en raíces, reducción del vigor, amarillamiento, reducción de rendimiento.
                  td Análisis de suelo, rotación de cultivos, uso de material vegetativo sano, control químico (nematicidas, si es necesario).
          .cajon.bg-1.g_18.color-acento-contenido.mb-3
            .row.mb-3
              .col-lg-12.p-4.ps-5 
                p El manejo integrado de plagas y enfermedades combina estrategias que minimizan su impacto en los cultivos, priorizando métodos sostenibles y amigables con el medio ambiente. Incluye el uso de variedades resistentes, control biológico, monitoreo constante y prácticas agrícolas como la rotación de cultivos y el manejo eficiente del suelo y la humedad, reduciendo así la dependencia de productos químicos y fomentando la sanidad vegetal.
      h3(data-aos='zoom-in-right').mb-4
        span.label-title.label-title--1 Manejo fitosanitario
      p.mb-5 La implementación de estrategias de control biológico y mecánico contribuye a la prevención de plagas y reduce la necesidad de plaguicidas químicos, minimizando así el impacto ambiental y los riesgos para la salud humana. A continuación, se presentan las principales prácticas recomendadas:
      .row.justify-content-center.align-items-center
        .col-12.col-sm-12.col-md-12.col-lg-9.col-xl-9.col-xxl-9.order-2.order-lg-1.mb-3.mb-lg-0
          LineaTiempoD.color-terciario
            .row(numero="1" titulo="Control de plagas y malezas").justify-content-center.align-items-center
              .col-12.col-sm-12.col-md-12.col-lg-10.col-xl-10.col-xxl-10.order-2.order-lg-1.mb-3.mb-lg-0
                p.text-small La correcta ejecución de prácticas como el control de malezas, deshoje, destronque y fertilización es esencial en el manejo integrado de plagas. El uso adecuado de trampas y la recolección manual de plagas caídas ayuda a disminuir la aplicación de plaguicidas y a mantener un equilibrio natural en el cultivo.
              .col-2.col-sm-2.col-md-2.col-lg-2.col-xl-2.col-xxl-2.order-2.order-lg-1.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/tema1/img_36.png', alt='Control de plagas y malezas' class="img-fluid")
            .row(numero="2" titulo="Protección del producto").justify-content-center.align-items-center
              .col-12.col-sm-12.col-md-12.col-lg-10.col-xl-10.col-xxl-10.order-2.order-lg-1.mb-3.mb-lg-0
                p.text-small Es recomendable utilizar mallas protectoras para evitar el ataque de pájaros y murciélagos, ya que estos pueden ser vectores de microorganismos que afectan la calidad del fruto y representan un riesgo para el consumidor final.
              .col-2.col-sm-2.col-md-2.col-lg-2.col-xl-2.col-xxl-2.order-2.order-lg-1.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/tema1/img_37.png', alt='Protección del producto' class="img-fluid")
            .row(numero="3" titulo="Uso responsable de plaguicidas").justify-content-center.align-items-center
              .col-12.col-sm-12.col-md-12.col-lg-10.col-xl-10.col-xxl-10.order-2.order-lg-1.mb-3.mb-lg-0
                p.text-small La aplicación de plaguicidas debe realizarse en las cantidades estrictamente necesarias, asegurando un manejo adecuado para evitar contaminación ambiental y toxicidad. Además, necesario considerar las condiciones climáticas, como la velocidad del viento y la temperatura, para evitar riesgos tanto para el cultivo como para los trabajadores.
              .col-2.col-sm-2.col-md-2.col-lg-2.col-xl-2.col-xxl-2.order-2.order-lg-1.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/tema1/img_38.png', alt='Uso responsable de plaguicidas' class="img-fluid")
            .row(numero="4" titulo="Calibración de equipos").justify-content-center.align-items-center
              .col-12.col-sm-12.col-md-12.col-lg-10.col-xl-10.col-xxl-10.order-2.order-lg-1.mb-3.mb-lg-0
                p.text-small Los equipos de aplicación deben estar correctamente calibrados para garantizar una dosificación precisa y evitar el uso excesivo de productos químicos. Asimismo, se debe evitar la reutilización de envases de plaguicidas para almacenar alimentos u otros insumos.
              .col-2.col-sm-2.col-md-2.col-lg-2.col-xl-2.col-xxl-2.order-2.order-lg-1.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/tema1/img_39.png', alt='Calibración de equipos' class="img-fluid")
            .row(numero="5" titulo="Capacitación del personal").justify-content-center.align-items-center
              .col-12.col-sm-12.col-md-12.col-lg-10.col-xl-10.col-xxl-10.order-2.order-lg-1.mb-0.mb-lg-3
                p.text-small Brindar formación continua a los trabajadores sobre el manejo de plagas, enfermedades y la correcta aplicación de plaguicidas y abonos orgánicos contribuye a reducir los riesgos de contaminación e intoxicación, mejorando la eficiencia de las prácticas agrícolas.	 
              .col-2.col-sm-2.col-md-2.col-lg-2.col-xl-2.col-xxl-2.order-2.order-lg-1.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/tema1/img_40.png', alt='Capacitación del personal' class="img-fluid")
            .row(numero="6" titulo="Supervisión y cumplimiento normativo").justify-content-center.align-items-center
              .col-12.col-sm-12.col-md-12.col-lg-10.col-xl-10.col-xxl-10.order-2.order-lg-1.mb-3.mb-lg-0
                p.text-small Es necesario revisar periódicamente que los productos utilizados para el control de plagas y enfermedades cumplan con las normativas nacionales e internacionales, garantizando así su eficacia y seguridad.	 
              .col-2.col-sm-2.col-md-2.col-lg-2.col-xl-2.col-xxl-2.order-2.order-lg-1.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/tema1/img_41.png', alt='Supervisión y cumplimiento normativo' class="img-fluid")
            .row(numero="7" titulo="Sistema de rotación de plaguicidas").justify-content-center.align-items-center
              .col-12.col-sm-12.col-md-12.col-lg-10.col-xl-10.col-xxl-10.order-2.order-lg-1.mb-3.mb-lg-0
                p.text-small Implementar un sistema de rotación de plaguicidas en la finca permite evitar la resistencia de las plagas y asegurar la efectividad de los tratamientos aplicados. Además, se debe verificar que los productos estén en buen estado y se utilicen conforme a las regulaciones vigentes.	 
              .col-2.col-sm-2.col-md-2.col-lg-2.col-xl-2.col-xxl-2.order-2.order-lg-1.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/tema1/img_42.png', alt='Sistema de rotación de plaguicidas' class="img-fluid")
        .col-6.col-sm-6.col-md-6.col-lg-3.col-xl-3.col-xxl-3.order-2.order-lg-1.mb-3.mb-lg-0.height-100
          figure
            img(src="@/assets/curso/temas/tema1/img_43.png", alt="Manejo fitosanitario")(data-aos="fade-up")
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
