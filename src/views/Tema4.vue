<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 4
      h1 Seguridad y bienestar social
    .row.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-up")
      .col-lg-12.mb-5
        .bloque-texto-g.bloque-texto-g--inverso.bg-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img_1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La implementación de un sistema de producción basado en los lineamientos de las Buenas Prácticas Agrícolas (BPA) debe garantizar la sostenibilidad desde una perspectiva social. Por ello, el desarrollo agrícola no debe comprometer las condiciones de bienestar social, salud y seguridad de las personas vinculadas a la actividad productiva ni de las comunidades cercanas o en contacto con la cadena agroalimentaria.
    h6.mb-5 Para alcanzar este objetivo, se deben considerar los siguientes aspectos:
    TabsC.color-acento-contenido.mb-0
      .py-4.py-md-5(titulo="Cobertura de seguridad social")
        .row.justify-content-center.align-items-center
          .col-12.col-sm-12.col-md-12.col-lg-6.col-xl-6.col-xxl-6.order-2.order-lg-1
            p.mb-0 Desarrollar programas que garanticen la cobertura de seguridad social integral para todos los trabajadores del sistema productivo. Este aspecto es fundamental dentro de las BPA, ya que permite a los consumidores confiar en que los productos que adquieren han sido producidos respetando la dignidad y derechos de quienes los cultivan.
          .col-12.col-sm-12.col-md-12.col-lg-6.col-xl-6.col-xxl-6.order-1.order-lg-2.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/temas/tema4/img_2.png', alt='Imagen de unas manos sosteniendo un retoño')
      .py-4.py-md-5(titulo="Condiciones laborales y cumplimiento normativo")
        .row.justify-content-center.align-items-center
          .col-12.col-sm-12.col-md-12.col-lg-6.col-xl-6.col-xxl-6.order-2.order-lg-1
            p.mb-0 Establecer mecanismos para supervisar y garantizar el pago adecuado de los salarios en el sector agrícola, asegurando el cumplimiento de la normativa gubernamental, las negociaciones sindicales y los pactos colectivos.
          .col-12.col-sm-12.col-md-12.col-lg-6.col-xl-6.col-xxl-6.order-1.order-lg-2.mb-3.mb-lg-0
            figure
                img(src='@/assets/curso/temas/tema4/img_3.png', alt='Imagen de un suelo con césped')
      .py-4.py-md-5(titulo="Prevención de riesgos laborales")
        .row.justify-content-center.align-items-center
          .col-12.col-sm-12.col-md-12.col-lg-6.col-xl-6.col-xxl-6.order-2.order-lg-1
            p.mb-3 Implementar estrategias para identificar y mitigar los riesgos inherentes a la actividad agrícola, incluyendo programas de prevención de riesgos laborales y protocolos para el manejo de emergencias.
            p.mb-0 Diseñar un sistema de divulgación y capacitación sobre los riesgos asociados a las prácticas agrícolas, enfatizando las medidas de prevención para proteger a todos los actores de la cadena productiva.
          .col-12.col-sm-12.col-md-12.col-lg-6.col-xl-6.col-xxl-6.order-1.order-lg-2.mb-3.mb-lg-0
            figure
                img(src='@/assets/curso/temas/tema4/img_4.png', alt='Imagen de un suelo con césped')
    
    separador

    #t_4_1.titulo-segundo
      .h2(data-aos="fade-right") 4.1	La salud de los trabajadores
    .mb-3
    p.mb-3 La salud de los operarios en la unidad productiva es un aspecto crítico, ya que su contacto directo con los alimentos puede generar riesgos de contaminación por agentes patógenos como bacterias, virus y hongos.
    p.mb-5 Para prevenir esta situación, se recomienda que los trabajadores con enfermedades gastrointestinales, diarreas, infecciones por hongos, gripe o heridas expuestas no tengan contacto directo con los alimentos ni participen en los procesos de cosecha o poscosecha.
    .row.mb-4.justify-content-center.align-items-center
      .col-md-12.col-lg-5.col-xl-3.mb-3.mb-xl-0
        .tarjeta_bg-05.p-4.mb-0.height-100
          p.mb-4 Los síntomas más comunes que pueden afectar a un manipulador de alimentos incluyen:
          ul.p-0
            li
              i.fa-solid.fa-circle-check(style="color: #98E465; font-size: 15px").mb-0
              |  Vómitos.
            li
              i.fa-solid.fa-circle-check(style="color: #98E465; font-size: 15px").mb-0
              |  Diarreas.
            li
              i.fa-solid.fa-circle-check(style="color: #98E465; font-size: 15px").mb-0
              |  Dolores abdominales.
            li
              i.fa-solid.fa-circle-check(style="color: #98E465; font-size: 15px").mb-0
              |  Heridas expuestas o abiertas.
            li
              i.fa-solid.fa-circle-check(style="color: #98E465; font-size: 15px").mb-0
              |  Hepatitis o ictericia.
      .col-md-12.col-lg-4.col-xl-4.col-xxl-4.mb-3.mb-xl-0.height-100
        img(src="@/assets/curso/temas/tema4/img_5.png", alt="Imagen de montacargas" class="img-fluid").p-0
      .col-md-12.col-lg-10.col-xl-4.col-xxl-4.mb-3.mb-lg-0.height-100
        p.mb-3 Es responsabilidad de cada trabajador informar sobre su estado de salud para evitar la contaminación del producto y proteger a sus compañeros.
        p.mb-0 Además, es de gran importancia que todos los empleados que tienen contacto directo con los alimentos reciban capacitación sobre manipulación adecuada y concienciación acerca del riesgo de transmisión de enfermedades de origen humano a los alimentos, que pueden ser ocasionadas por una higiene deficiente.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.mb-0
        h5.mb-4 Microorganismos patógenos transmitidos a los alimentos por operarios infectados:
        .titulo-sexto.color-acento-contenido
          h5 Tabla 8.
          I(style="font-weight: normal;") Gérmenes.
        .tabla-a.bg-thead.mb-5
          table
            thead
              tr
                th.text-dark(colspan="4") Gérmenes
            tbody
              tr
                td
                  h5.mb-0 Bacterias
                td 
                  h5.mb-0 Síntomas
                td 
                  h5.mb-0 Virus
                td 
                  h5.mb-0 Síntomas
              tr
                td Salmonella
                td Fiebre, dolor, estupor y diarrea
                td Hepatitis A y E
                td Gastrointeritis, fiebre e ictericia
              tr
                td Shiguella s.p
                td Diarrea, fiebre y vómito
                td Norwalk
                td Diarrea, fiebre y vómito
              tr
                td Staphylococcus aureus
                td Diarrea y vómito
                td Rotavirus
                td Diarreas 
        h3(data-aos='zoom-in-right').mb-3
          span.label-title.label-title--1 Prácticas higiénicas
        .row.justify-content-center.align-items-center.mb-3
          .col-12.col-sm-12.col-md-12.col-lg-9.col-xl-9.col-xxl-9.mb-3.mb-lg-0
            p.mb-3 Un manipulador de alimentos es cualquier persona que tiene contacto directo con el cultivo, los procesos de alistamiento de materia prima y la calidad final del producto. Si se siguen adecuadamente los procedimientos de higiene, se garantiza la inocuidad del alimento.
            p.mb-0 Todos los manipuladores de alimentos deben mantener una higiene personal rigurosa y aplicar las buenas prácticas higiénicas en cada una de sus labores para evitar el deterioro y contaminación de los productos.
          .col-4.col-sm-4.col-md-4.col-lg-3.col-xl-3.col-xxl-3.mb-3.mb-lg-0
            img(src="@/assets/curso/temas/tema4/img_6.svg", alt="Prácticas higiénicas" class="img-fluid")
        h3(data-aos='zoom-in-right').mb-3
          span.label-title.label-title--1 Higiene personal
        p.mb-3 Los manipuladores de alimentos desempeñan un papel fundamental que permite garantizar la inocuidad del producto, ya que están en contacto con el cultivo, los procesos de alistamiento de materia prima y la calidad final de los alimentos. Para garantizar la seguridad alimentaria, es necesario que cumplan con estrictas normas de higiene personal y prácticas adecuadas en todas sus labores.
        p.mb-3 Algunas de las medidas más importantes incluyen:
        .titulo-sexto.color-acento-contenido
          h5 Figura 8.
          I(style="font-weight: normal;") Higiene personal
        ImagenInfografica.time-line-info
          template(v-slot:imagen)
            figure
              img.mb-4(src='@/assets/curso/temas/tema4/figura8.png', alt='Imagen de ayuda')
          .tarjeta.p-4(x="17%" y="21%" numero="")
            p.mb-5 El operario debe portar overol y delantal en perfectas condiciones higiénicas antes de iniciar cualquier tarea. Los uniformes deben ser de colores claros y, preferiblemente, contar con cierres de cremallera para evitar la acumulación de contaminantes.
            .time-line-info__number
              span 01
          .tarjeta.p-4(x="10%" y="38%" numero="")
            p.mb-5 Los operarios deben utilizar calzado cerrado, fabricado con materiales resistentes y de fácil limpieza, como botas plásticas.
            .time-line-info__number
              span 02
          .tarjeta.p-4(x="8%" y="56.5%" numero="")
            p.mb-5 En actividades específicas de cultivo o adecuación de plantas, se deben emplear guantes limpios, sin roturas y adecuados al tipo de labor.
            .time-line-info__number
              span 03
          .tarjeta.p-4(x="12%" y="73.6%" numero="")
            p.mb-5 Los manipuladores de alimentos deben lavarse las manos con agua y jabón antes de comenzar cualquier actividad y después de usar el baño, para evitar la contaminación cruzada.
            .time-line-info__number
              span 04
          .tarjeta.p-4(x="73.3%" y="29%" numero="")
            p.mb-5  Para evitar posibles focos de contaminación, es indispensable que los operarios no lleven uñas largas ni pintadas.
            .time-line-info__number
              span 05
          .tarjeta.p-4(x="71.9%" y="54.5%" numero="")
            p.mb-5 Durante la manipulación de alimentos, está prohibido el uso de anillos, cadenas, aretes u otros accesorios. Además, en el caso de las mujeres, no deben usar maquillaje que pueda desprender partículas y contaminar los producto
            .time-line-info__number
              span 06
          .tarjeta.p-4(x="70.3%" y="89%" numero="")
            p.mb-5 En las áreas de procesamiento no se permite comer, masticar chicle, fumar ni ingerir bebidas, ya que estas acciones pueden comprometer la higiene del entorno de trabajo.
            .time-line-info__number
              span 07
        .titulo-sexto.color-acento-contenido
          h5 Figura 9.
          I(style="font-weight: normal;") Recomendaciones del lavado.
        img.mb-5(src="@/assets/curso/temas/tema4/figura9.png", alt="Recomendaciones del lavado." class="img-fluid")
        h3(data-aos='zoom-in-right').mb-3
          span.label-title.label-title--1 Prácticas higiénico-sanitarias
        p.mb-3 El cumplimiento de normas de higiene dentro de la producción de plátano es de gran importancia para garantizar la inocuidad del producto y la seguridad de los trabajadores. La implementación de buenas prácticas higiénico-sanitarias contribuye a la prevención de contaminaciones que pueden afectar la calidad del cultivo y la salud de los consumidores.
        p.mb-3 Dentro de las más importantes a considerar, están las siguientes:
        .row.justify-content-center.mb-4
          .col-lg-6.justify-content-center.align-items-center.mb-3
            .tarjeta_bg-terciario-T20.p-4.mb-0.height-100
              h5.mb-4 Prácticas higiénicas sanitarias:
              ul.p-0
                li
                  i.fa-solid.fa-circle-check(style="color: #98E465; font-size: 15px").mb-0
                  |  Todos los empleados del predio donde se encuentra la platanera deben usar las instalaciones sanitarias para realizar sus necesidades fisiológicas y así evitar la contaminación del cultivo, aguas y demás trabajadores.
                li
                    i.fa-solid.fa-circle-check(style="color: #98E465; font-size: 15px").mb-0
                    |  Aplicar prácticas higiénicas en todo el proceso de producción.
                li
                    i.fa-solid.fa-circle-check(style="color: #98E465; font-size: 15px").mb-0
                    |  Capacitar al operario en el proceso de empaque del plátano, tanto en fresco como procesado.
                li
                    i.fa-solid.fa-circle-check(style="color: #98E465; font-size: 15px").mb-0
                    |  Capacitar al operario en las tareas específicas asignadas y los puntos críticos que pueden afectar la inocuidad del plátano.
                li
                    i.fa-solid.fa-circle-check(style="color: #98E465; font-size: 15px").mb-0
                    |  Lavarse las manos utilizando los métodos adecuados para garantizar la inocuidad de las frutas.
          .col-lg-6.justify-content-center.align-items-center.mb-3
            .tarjeta_bg-acento-A5.p-4.mb-0.height-100
              h5.mb-5 Aspectos higiénicos para considerar en la poscosecha:
              ul.p-0
                li
                  i.fa-solid.fa-circle-check(style="color: #7D9FFB; font-size: 15px").mb-0
                  |   Implementar prácticas higiénicas en el manejo del plátano para el consumo en fresco.
                li
                  i.fa-solid.fa-circle-check(style="color: #7D9FFB; font-size: 15px").mb-0
                  |   Utilizar de manera adecuada las sustancias tóxicas usadas en la producción, para que no afecten la inocuidad del producto.
                li
                  i.fa-solid.fa-circle-check(style="color: #7D9FFB; font-size: 15px").mb-0
                  |   Hacer uso racional del agua y monitorear sus características fisicoquímicas para determinar la posible contaminación de la fuente.
                li
                  i.fa-solid.fa-circle-check(style="color: #7D9FFB; font-size: 15px").mb-0
                  |   Conocer los aspectos biológicos del plátano para darle una adecuada manipulación.
                li
                  i.fa-solid.fa-circle-check(style="color: #7D9FFB; font-size: 15px").mb-0
                  |   Capacitar al personal sobre las operaciones de adecuación y limpieza de la fruta.
        h3(data-aos='zoom-in-right').mb-3
          span.label-title.label-title--1 Aspectos higiénicos en la poscosecha
        p.mb-3 La etapa de poscosecha es determinante en la calidad del plátano destinado al consumo. Durante este proceso, la aplicación de medidas higiénicas rigurosas reduce el riesgo de contaminación y preserva la seguridad del producto.
        p.mb-3 Las acciones requeridas incluyen:
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-7.justify-content-center.align-items-center.mb-3
            .tarjeta_bg-terciario-T10.p-4.mb-0
              ul
                li
                  i.fa-solid.fa-circle-check(style="color: #98E465; font-size: 15px").mb-0
                  |   Tipos de químicos recomendados y prohibidos para el manejo del plátano.
                li
                  i.fa-solid.fa-circle-check(style="color: #98E465; font-size: 15px").mb-0
                  |   Dosis recomendadas.
                li
                  i.fa-solid.fa-circle-check(style="color: #98E465; font-size: 15px").mb-0
                  |   Calibración.
                li
                  i.fa-solid.fa-circle-check(style="color: #98E465; font-size: 15px").mb-0
                  |   Uso de boquillas.
                li
                  i.fa-solid.fa-circle-check(style="color: #98E465; font-size: 15px").mb-0
                  |   Grado de toxicidad.
                li
                  i.fa-solid.fa-circle-check(style="color: #98E465; font-size: 15px").mb-0
                  |   Residualidad.
                li
                  i.fa-solid.fa-circle-check(style="color: #98E465; font-size: 15px").mb-0
                  |   Capacitación de conductores u operarios encargados de productos químicos.
                li
                  i.fa-solid.fa-circle-check(style="color: #98E465; font-size: 15px").mb-0
                  |   Capacitación sobre el manejo integral de plagas (MIP).
          .col-lg-5.justify-content-center.align-items-center
            img(src="@/assets/curso/temas/tema4/img_7.png", alt="" class="img-fluid")

    h3(data-aos='zoom-in-right').mb-3
      span.label-title.label-title--1 Manejo de sustancias agroquímicas
    p.mb-3 El uso de agroquímicos en la producción de plátano debe realizarse bajo estrictos controles que minimicen su impacto en la salud humana y el medio ambiente. Para ello, se requiere  la aplicación protocolos adecuados y capacitar al personal en su manejo seguro.
    p.mb-3 Dentro de los aspectos fundamentales se destacan:
   
    .row.justify-content-center.align-items-center.mb-4
      .col-8.col-sm-8.col-md-8.col-lg-3.col-xl-3.col-xxl-3.mb-3.mb-lg-3
        img(src="@/assets/curso/temas/tema4/img_8.png", alt="Manejo de sustancias agroquímicas" class="img-fluid")
      .col-12.col-sm-12.col-md-12.col-lg-9.col-xl-9.col-xxl-9.mb-0
        ul.p-0
          li
            i.fa-solid.fa-circle-check(style="color: #98E465; font-size: 15px").mb-0
            |  Identificación de los tipos de productos químicos permitidos y prohibidos en el cultivo del plátano.
          .border-bottom.mb-3
          li
            i.fa-solid.fa-circle-check(style="color: #98E465; font-size: 15px").mb-0
            |  Aplicación de dosis recomendadas según las necesidades del cultivo y los estándares de seguridad.
          .border-bottom.mb-3
          li
            i.fa-solid.fa-circle-check(style="color: #98E465; font-size: 15px").mb-0
            |  Calibración de equipos para una aplicación eficiente y precisa.
          .border-bottom.mb-3
          li
            i.fa-solid.fa-circle-check(style="color: #98E465; font-size: 15px").mb-0
            |  Selección y uso adecuado de boquillas en los sistemas de aspersión.
          .border-bottom.mb-3
          li
            i.fa-solid.fa-circle-check(style="color: #98E465; font-size: 15px").mb-0
            |  Evaluación del grado de toxicidad de cada sustancia empleada.
          .border-bottom.mb-3
          li
            i.fa-solid.fa-circle-check(style="color: #98E465; font-size: 15px").mb-0
            |  Análisis de la residualidad de los agroquímicos para evitar la acumulación de sustancias nocivas en el producto final.
          .border-bottom.mb-3
          li
            i.fa-solid.fa-circle-check(style="color: #98E465; font-size: 15px").mb-0
            |  Capacitación específica para conductores y operarios responsables del manejo y transporte de productos químicos.
          .border-bottom.mb-3
          li
            i.fa-solid.fa-circle-check(style="color: #98E465; font-size: 15px").mb-0
            |  Formación en estrategias de Manejo Integrado de Plagas (MIP), promoviendo alternativas sostenibles y reduciendo la dependencia de agroquímicos.
          .border-bottom
    h3(data-aos='zoom-in-right').mb-3
      span.label-title.label-title--1 Aspectos técnico
    p.mb-3 Para optimizar la producción de plátano y garantizar su calidad, es necesario que los agricultores y operarios reciban capacitación en aspectos clave del cultivo y manejo poscosecha. A continuación, se presentan los puntos más importantes a considerar:
    .row.justify-content-center.align-items-center.mb-0
      .col-lg-10.mb-0
        .mb-5.custom-slider
          SlyderF(columnas="col-md-6 col-lg-4 col-xl-4")
            .tarjeta.tarjeta--color-acento-A10.p-4.rounded-5.custom-slider__tarjeta.custom-slider__tarjeta--10
              h3.text-center.mt-5 Distancias de siembra	
              p.mb-0.text-center Capacitación en las distancias óptimas de siembra para el plátano y en los principios básicos del manejo poscosecha, con el fin de mejorar la productividad y calidad del cultivo.
            .tarjeta.tarjeta--color-acento-A10.p-4.rounded-5.custom-slider__tarjeta.custom-slider__tarjeta--11
              h3.text-center.mt-5 Agricultura orgánica	
              p.mb-0.text-center Formación sobre las ventajas de la agricultura orgánica y el conocimiento de los aspectos biológicos esenciales para un manejo adecuado de las plataneras.
            .tarjeta.tarjeta--color-acento-A10.p-4.rounded-5.custom-slider__tarjeta.custom-slider__tarjeta--12
              h3.text-center.mt-5 Recurso hídrico	
              p.mb-0.text-center Instrucción en el uso eficiente y sostenible del agua en el cultivo, promoviendo buenas prácticas para la conservación del recurso.
            .tarjeta.tarjeta--color-acento-A10.p-4.rounded-5.custom-slider__tarjeta.custom-slider__tarjeta--13
              h3.text-center.mt-5 Agroquímicos
              p.mb-0.text-center Capacitación en el manejo seguro y adecuado de agroquímicos como la gallinaza, destacando su función en la producción del plátano y su impacto en el suelo y el ambiente.
        p.mb-4 Es fundamental que los programas de capacitación incluyan mecanismos de retroalimentación con los empleados para evaluar su efectividad y, de ser necesario, implementar medidas correctivas que fortalezcan una cultura de higiene entre los operarios.
        
        h3(data-aos='zoom-in-right').mb-3
          span.label-title.label-title--1 Manejo de registro
        
        .row.justify-content-center.align-items-center.mb-0
          .col-8.col-sm-8.col-md-8.col-lg-3.col-xl-3.col-xxl-4.mb-3
            img(src="@/assets/curso/temas/tema4/img_13.png", alt="Manejo de registro" class="img-fluid")

          .col-12.col-sm-12.col-md-12.col-lg-4.col-xl-4.col-xxl-4.mb-3
            p.mb-2 Los registros dentro de las Buenas Prácticas Agrícolas en el cultivo de plátano son muy importantes, porque permiten plasmar los resultados de casi todos los procesos para después controlar de manera sistemática cómo se realizan todas las labores de la unidad productiva.
            h5.mb-0 Los registros deben tener los siguientes datos:

          .col-10.col-sm-10.col-md-10.col-lg-5.col-xl-5.col-xxl-4.mb-3
            .tarjeta_bg-terciario-T20.p-4.mb-0
              ul.p-0
                li
                  i.fa-solid.fa-circle-check(style="color: #98E465; font-size: 15px").mb-0
                  |  Nombre de la empresa.
                li
                  i.fa-solid.fa-circle-check(style="color: #98E465; font-size: 15px").mb-0
                  |  Nombre del registro.
                li
                  i.fa-solid.fa-circle-check(style="color: #98E465; font-size: 15px").mb-0
                  |  Número del registro.
                li
                  i.fa-solid.fa-circle-check(style="color: #98E465; font-size: 15px").mb-0
                  |  Fecha.
                li
                  i.fa-solid.fa-circle-check(style="color: #98E465; font-size: 15px").mb-0
                  |  Datos específicos: es donde pone el nombre del proceso y su descripción.
                li
                  i.fa-solid.fa-circle-check(style="color: #98E465; font-size: 15px").mb-0
                  |  Nombre del encargado de realizar la verificación.
                li
                  i.fa-solid.fa-circle-check(style="color: #98E465; font-size: 15px").mb-0
                  |  Firmas correspondientes.

    separador

    #t_4_2.titulo-segundo
      .h2(data-aos="fade-right") 4.2	Identificación, trazabilidad y procedimiento de retiro 
    .mb-3
    p.mb-3 Garantizar la correcta identificación y trazabilidad de los productos permite dar cumplimiento a los estándares internacionales de calidad, facilitar su seguimiento en la cadena de suministro y responder de manera eficiente ante posibles incidentes de seguridad alimentaria
    h3(data-aos='zoom-in-right').mb-3
      span.label-title.label-title--1 Identificación
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-6.justify-content-center.align-items-center.mb-3
        p.mb-3 La identificación de los productos es un requisito indispensable en los mercados internacionales, ya que permite conocer información clave sobre su origen y procesamiento. A través de las etiquetas, se especifican detalles como la fecha de elaboración y empaque, el número de lote y otros datos relevantes.
        p.mb-3 Las etiquetas de frutas y hortalizas deben cumplir con estándares de calidad y contener la siguiente información:
      .col-lg-6.justify-content-center.align-items-center.mb-5
        .tarjeta_bg-06.p-4.mb-0
          h6 País de origen.
          ul
            li
              i.fa-solid.fa-circle-check(style="color: #7D9FFB; font-size: 15px").mb-0
              |   Naturaleza del producto: nombre de la especie empacada y, en algunos mercados, la variedad específica.
            li
              i.fa-solid.fa-circle-check(style="color: #7D9FFB; font-size: 15px").mb-0
              |   Especificaciones comerciales: tamaño, clasificación y uso de conservantes. Identificación del productor: nombre, dirección y código de la marca registrada.
            li
              i.fa-solid.fa-circle-check(style="color: #7D9FFB; font-size: 15px").mb-0
              |   Visibilidad: toda la información debe estar impresa en un mismo lado del empaque, asegurando su fácil lectura.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.mb-4
        .tarjeta_bg-08.mb-5
          .row.justify-content-center.align-items-center.d-flex
            .col-md-12.col-lg-8.order-2.order-xl-1
              h6.text-white.p-3 Ejemplo de etiquetas:
              ul.text-white.mb-0
                li
                  i.fa-solid.fa-circle-check(style="font-size: 15px").mb-0
                  |  Nombre y dirección de la empresa y/o despachador, logotipo o identificación comercial.
                li
                  i.fa-solid.fa-circle-check(style="font-size: 15px").mb-0
                  |  País de origen y nombre de la ciudad, pueblo y vereda. 
                li
                  i.fa-solid.fa-circle-check(style="font-size: 15px").mb-0
                  |  Naturaleza del producto; si el contenido no es visible.
                li
                  i.fa-solid.fa-circle-check(style="font-size: 15px").mb-0
                  |  Peso neto, tamaño, cantidad y clase.
            .col-md-4.col-lg-4.order-1.order-xl-2
              img(src="@/assets/curso/temas/tema4/carpetas-azules.png", alt="Ejemplo de etiquetas:" style="display: flex; transform: translateY(-30px); width: 70% !important; margin: 0px auto;")
        
        h3(data-aos='zoom-in-right').mb-4
          span.label-title.label-title--1 Trazabilidad o rastreabilidad
        p.mb-3 La trazabilidad es un aspecto muy importante dentro de la unidad productiva, ya que permite realizar un seguimiento detallado del producto a lo largo de toda la cadena de producción. Implementar un sistema documental adecuado facilita el registro de información relevante sobre cada lote, permitiendo analizar y solucionar de manera efectiva cualquier problema de seguridad alimentaria.
        h5.mb-3 Algunos parámetros fundamentales para la identificación y trazabilidad del producto incluyen:
        
        .row.justify-content-center.align-items-center.mb-4.factores-slider
          .col-sm-8.col-md-8.col-lg-5.col-xl-5.mb-3
            img(src="@/assets/curso/temas/tema4/img_14.png", alt="Trazabilidad o rastreabilidad" class="img-fluid w-80")
          .col-sm-10.col-md-10.col-lg-7.col-xl-7.col-xxl-7.mb-3.bg-platanos-image.p-3
            SlyderF().p-3.rounded-3
              .tarjeta.p-3.rounded-3.d-flex
                .row.align-items-center
                  .col-3.d-none.d-md-block
                    figure
                      img.width-110(src='@/assets/curso/temas/tema4/img_15.svg', alt='01')(data-aos="fade-up")
                  .col-md-9
                    h4 Registro de insumos y proveedores
                    p.mb-0.text-small Es necesario documentar los insumos utilizados durante el proceso productivo, así como los proveedores de cada uno, asegurando un control riguroso sobre su calidad y origen.
              .tarjeta.p-3.rounded-3.d-flex
                .row.align-items-center
                  .col-3.d-none.d-md-block
                    figure
                      img.width-110(src='@/assets/curso/temas/tema4/img_16.svg', alt='02')(data-aos="fade-up")
                  .col-md-9
                    h4 Información del área de cultivo	
                    p.mb-0.text-small Se debe contar con un registro detallado de las condiciones del terreno donde se estableció el cultivo, incluyendo sus características y manejo agronómico.
              .tarjeta.p-3.rounded-3.d-flex  
                .row.align-items-center
                  .col-3.d-none.d-md-block
                    figure
                      img.width-110(src='@/assets/curso/temas/tema4/img_17.svg', alt='Ilustración decorativa')(data-aos="fade-up")
                  .col-md-9
                    h4 Fuentes de agua	
                    p.mb-0.text-small Se deben identificar y documentar las fuentes de suministro de agua utilizadas en el proceso (ríos, arroyos, depósitos, entre otros), para evaluar la calidad del recurso y su impacto en el cultivo.
              .tarjeta.p-3.rounded-3.d-flex  
                .row.align-items-center
                  .col-3.d-none.d-md-block
                    figure
                      img.width-110(src='@/assets/curso/temas/tema4/img_21.png', alt='Ilustración decorativa')(data-aos="fade-up")
                  .col-md-9
                    h4 Acción correctiva ante problemas en lotes	
                    p.mb-0.text-small En caso de incidentes con un lote específico, el sistema de trazabilidad permite identificar su destino y retirar del mercado aquellos productos que compartan el mismo código, evitando riesgos para el consumidor.	
              .tarjeta.p-3.rounded-3.d-flex  
                .row.align-items-center
                  .col-3.d-none.d-md-block
                    figure
                      img.width-110(src='@/assets/curso/temas/tema4/img_18.svg', alt='Ilustración decorativa')(data-aos="fade-up")
                  .col-md-9
                    h4 Sistemas de identificación del producto	
                    p.mb-0.text-small Se requiere disponer de documentos que registren el origen del producto y el mecanismo utilizado para su marcación o identificación, facilitando su rastreo a lo largo de la cadena de suministro.	
              .tarjeta.p-3.rounded-3.d-flex  
                .row.align-items-center
                  .col-3.d-none.d-md-block
                    figure
                      img.width-110(src='@/assets/curso/temas/tema4/img_19.svg', alt='Ilustración decorativa')(data-aos="fade-up")
                  .col-md-9
                    h4 Condiciones de procesamiento	
                    p.mb-0.text-small Se deben especificar las condiciones en las que fue procesado cada lote, así como las características de las materias primas empleadas. Esta información resulta necesaria para evaluar posibles fallas en caso de reclamaciones y determinar si el problema se originó durante la producción o por un mal manejo posterior.
              .tarjeta.p-3.rounded-3.d-flex  
                .row.align-items-center
                  .col-3.d-none.d-md-block
                    figure
                      img.width-110(src='@/assets/curso/temas/tema4/img_20.svg', alt='Ilustración decorativa')(data-aos="fade-up")
                  .col-md-9
                    h4 Plan de retiro de productos	
                    p.mb-0.text-small La central de poscosecha debe contar con un plan eficiente para retirar productos en mal estado. Además, es importante que los productores mantengan comunicación directa con distribuidores y comercializadores de plátano, con el fin de monitorear las condiciones en las que llega el producto al mercado y corregir cualquier deficiencia de manera rápida y efectiva.
</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
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
