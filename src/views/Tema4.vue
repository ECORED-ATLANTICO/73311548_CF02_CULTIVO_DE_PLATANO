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
        .bloque-texto-g.bloque-texto-g--inverso.bg-21.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img_1.svg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La implementación de un sistema de producción basado en los lineamientos de las Buenas Prácticas Agrícolas (BPA) debe garantizar la sostenibilidad desde una perspectiva social. Por ello, el desarrollo agrícola no debe comprometer las condiciones de bienestar social, salud y seguridad de las personas vinculadas a la actividad productiva ni de las comunidades cercanas o en contacto con la cadena agroalimentaria.
    h6.mb-5 Para alcanzar este objetivo, se deben considerar los siguientes aspectos:
    TabsC.color-acento-contenido.mb-0
      .py-4.py-md-5(titulo="Cobertura de seguridad social")
        .row.justify-content-center.align-items-center
          .col-md-5.mb-4.mb-md-0
            p.mb-0 Desarrollar programas que garanticen la cobertura de seguridad social integral para todos los trabajadores del sistema productivo. Este aspecto es fundamental dentro de las BPA, ya que permite a los consumidores confiar en que los productos que adquieren han sido producidos respetando la dignidad y derechos de quienes los cultivan.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/img_2.svg', alt='Imagen de unas manos sosteniendo un retoño')
      .py-4.py-md-5(titulo="Condiciones laborales y cumplimiento normativo")
        .row.justify-content-center.align-items-center
          .col-md-5.mb-4.mb-md-0
            p.mb-0 Establecer mecanismos para supervisar y garantizar el pago adecuado de los salarios en el sector agrícola, asegurando el cumplimiento de la normativa gubernamental, las negociaciones sindicales y los pactos colectivos.
          .col-md-6
            figure
                img(src='@/assets/curso/temas/tema4/img_3.svg', alt='Imagen de un suelo con césped')
      .py-4.py-md-5(titulo="Prevención de riesgos laborales")
        .row.justify-content-center.align-items-center
          .col-md-5.mb-4.mb-md-0
            p.mb-3 Implementar estrategias para identificar y mitigar los riesgos inherentes a la actividad agrícola, incluyendo programas de prevención de riesgos laborales y protocolos para el manejo de emergencias.
            p.mb-0 Diseñar un sistema de divulgación y capacitación sobre los riesgos asociados a las prácticas agrícolas, enfatizando las medidas de prevención para proteger a todos los actores de la cadena productiva.
          .col-md-6
            figure
                img(src='@/assets/curso/temas/tema4/img_4.svg', alt='Imagen de un suelo con césped')
    
    separador

    #t_4_1.titulo-segundo
      .h2(data-aos="fade-right") 4.1	La salud de los trabajadores
    .mb-3
    p.mb-3 La salud de los operarios en la unidad productiva es un aspecto crítico, ya que su contacto directo con los alimentos puede generar riesgos de contaminación por agentes patógenos como bacterias, virus y hongos.
    p.mb-5 Para prevenir esta situación, se recomienda que los trabajadores con enfermedades gastrointestinales, diarreas, infecciones por hongos, gripe o heridas expuestas no tengan contacto directo con los alimentos ni participen en los procesos de cosecha o poscosecha.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.justify-content-center.align-items-center
        .tarjeta_bg-05.p-4.mb-0
          p.mb-4 Los síntomas más comunes que pueden afectar a un manipulador de alimentos incluyen:
          p.mb-3.check-green Vómitos.
          p.mb-3.check-green Diarreas.
          p.mb-3.check-green Dolores abdominales.
          p.mb-3.check-green Heridas expuestas o abiertas.
          p.mb-3.check-green Hepatitis o ictericia.
      .col-lg-5.justify-content-center.align-items-center
        img(src="@/assets/curso/temas/tema4/img_5.svg", alt="Imagen de montacargas" class="img-fluid")
      .col-lg-3.justify-content-center.align-items-center
        p.mb-4 Es responsabilidad de cada trabajador informar sobre su estado de salud para evitar la contaminación del producto y proteger a sus compañeros.
        p.mb-0 Además, es de gran importancia que todos los empleados que tienen contacto directo con los alimentos reciban capacitación sobre manipulación adecuada y concienciación acerca del riesgo de transmisión de enfermedades de origen humano a los alimentos, que pueden ser ocasionadas por una higiene deficiente.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.mb-4
        h5.mb-4 Microorganismos patógenos transmitidos a los alimentos por operarios infectados:
        .titulo-sexto.bg-11.mb-4
          h5 Tabla 8:
          span.text-dark Gérmenes.
        .tabla-a1.mb-5
          table
            thead
              tr
                th(colspan="4") Gérmenes
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
        div.metodo.mb-4.mb-md-3
          span.texto Prácticas higiénicas
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-9
            p.mb-3 Un manipulador de alimentos es cualquier persona que tiene contacto directo con el cultivo, los procesos de alistamiento de materia prima y la calidad final del producto. Si se siguen adecuadamente los procedimientos de higiene, se garantiza la inocuidad del alimento.
            p.mb-0 Todos los manipuladores de alimentos deben mantener una higiene personal rigurosa y aplicar las buenas prácticas higiénicas en cada una de sus labores para evitar el deterioro y contaminación de los productos.
          .col-lg-3
            img(src="@/assets/curso/temas/tema4/img_6.svg", alt="Prácticas higiénicas" class="img-fluid")
        div.metodo.mb-4.mb-md-3
          span.texto Higiene personal
        p.mb-3 Los manipuladores de alimentos desempeñan un papel fundamental que permite garantizar la inocuidad del producto, ya que están en contacto con el cultivo, los procesos de alistamiento de materia prima y la calidad final de los alimentos. Para garantizar la seguridad alimentaria, es necesario que cumplan con estrictas normas de higiene personal y prácticas adecuadas en todas sus labores.
        p.mb-3 Algunas de las medidas más importantes incluyen:
        .titulo-sexto.bg-11.mb-2
          h5 Figura 8:
          span.text-dark Higiene personal
        .titulo-sexto.bg-11.mb-2
          h5 Figura 9:
          span.text-dark Recomendaciones del lavado.
        object(:data="figura9" type="image/svg+xml" class="img-fluid").mb-0
        div.metodo.mb-4.mb-md-3
          span.texto Prácticas higiénico-sanitarias
        p.mb-3 El cumplimiento de normas de higiene dentro de la producción de plátano es de gran importancia para garantizar la inocuidad del producto y la seguridad de los trabajadores. La implementación de buenas prácticas higiénico-sanitarias contribuye a la prevención de contaminaciones que pueden afectar la calidad del cultivo y la salud de los consumidores.
        p.mb-3 Dentro de las más importantes a considerar, están las siguientes:
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-6.justify-content-center.align-items-center
            .tarjeta_bg-05.p-4.mb-0
              h5.mb-4 Prácticas higiénicas sanitarias:
              p.mb-2.check-green Todos los empleados del predio donde se encuentra la platanera deben usar las instalaciones sanitarias para realizar sus necesidades fisiológicas y así evitar la contaminación del cultivo, aguas y demás trabajadores.
              p.mb-2.check-green Aplicar prácticas higiénicas en todo el proceso de producción.
              p.mb-2.check-green Capacitar al operario en el proceso de empaque del plátano, tanto en fresco como procesado.
              p.mb-2.check-green Capacitar al operario en las tareas específicas asignadas y los puntos críticos que pueden afectar la inocuidad del plátano.
              p.mb-2.check-green Lavarse las manos utilizando los métodos adecuados para garantizar la inocuidad de las frutas.
          .col-lg-6.justify-content-center.align-items-center
            .tarjeta_bg-06.p-4.mb-0
              h5.mb-3 Aspectos higiénicos para considerar en la poscosecha:
              p.mb-3.check-blue Implementar prácticas higiénicas en el manejo del plátano para el consumo en fresco.
              p.mb-3.check-blue Utilizar de manera adecuada las sustancias tóxicas usadas en la producción, para que no afecten la inocuidad del producto.
              p.mb-3.check-blue Hacer uso racional del agua y monitorear sus características fisicoquímicas para determinar la posible contaminación de la fuente.
              p.mb-3.check-blue Conocer los aspectos biológicos del plátano para darle una adecuada manipulación.
              p.mb-3.check-blue Capacitar al personal sobre las operaciones de adecuación y limpieza de la fruta.
        div.metodo.mb-4.mb-md-3
          span.texto Aspectos higiénicos en la poscosecha
        p.mb-3 La etapa de poscosecha es determinante en la calidad del plátano destinado al consumo. Durante este proceso, la aplicación de medidas higiénicas rigurosas reduce el riesgo de contaminación y preserva la seguridad del producto.
        p.mb-3 Las acciones requeridas incluyen:
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-7.justify-content-center.align-items-center
            .tarjeta_bg-05.p-4.mb-0
              p.mb-2.check-green Tipos de químicos recomendados y prohibidos para el manejo del plátano.
              p.mb-2.check-green Dosis recomendadas.
              p.mb-2.check-green Calibración.
              p.mb-2.check-green Uso de boquillas.
              p.mb-2.check-green Grado de toxicidad.
              p.mb-2.check-green Residualidad.
              p.mb-2.check-green Capacitación de conductores u operarios encargados de productos químicos.
              p.mb-2.check-green Capacitación sobre el manejo integral de plagas (MIP).
          .col-lg-5.justify-content-center.align-items-center
            img(src="@/assets/curso/temas/tema4/img_7.svg", alt="Aspectos higiénicos en la poscosecha" class="img-fluid")
    div.metodo.mb-4.mb-md-3
      span.texto Manejo de sustancias agroquímicas
    p.mb-3 El uso de agroquímicos en la producción de plátano debe realizarse bajo estrictos controles que minimicen su impacto en la salud humana y el medio ambiente. Para ello, se requiere  la aplicación protocolos adecuados y capacitar al personal en su manejo seguro.
    p.mb-3 Dentro de los aspectos fundamentales se destacan:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.justify-content-center.align-items-center
        img(src="@/assets/curso/temas/tema4/img_8.svg", alt="Manejo de sustancias agroquímicas" class="img-fluid")
      .col-lg-8.justify-content-center.align-items-center
        p.mb-2.check-green.border-bottom Identificación de los tipos de productos químicos permitidos y prohibidos en el cultivo del plátano.
        p.mb-2.check-green.border-bottom Aplicación de dosis recomendadas según las necesidades del cultivo y los estándares de seguridad.
        p.mb-2.check-green.border-bottom Calibración de equipos para una aplicación eficiente y precisa.
        p.mb-2.check-green.border-bottom Selección y uso adecuado de boquillas en los sistemas de aspersión.
        p.mb-2.check-green.border-bottom Evaluación del grado de toxicidad de cada sustancia empleada.
        p.mb-2.check-green.border-bottom Análisis de la residualidad de los agroquímicos para evitar la acumulación de sustancias nocivas en el producto final.
        p.mb-2.check-green.border-bottom Capacitación específica para conductores y operarios responsables del manejo y transporte de productos químicos.
        p.mb-2.check-green.border-bottom Formación en estrategias de Manejo Integrado de Plagas (MIP), promoviendo alternativas sostenibles y reduciendo la dependencia de agroquímicos.
    div.metodo.mb-4.mb-md-3
      span.texto Aspectos técnico
    p.mb-3 Para optimizar la producción de plátano y garantizar su calidad, es necesario que los agricultores y operarios reciban capacitación en aspectos clave del cultivo y manejo poscosecha. A continuación, se presentan los puntos más importantes a considerar:
    .row.justify-content-center.align-items-center.mb-0
      .col-lg-10.mb-0
        p.mb-3 Es fundamental que los programas de capacitación incluyan mecanismos de retroalimentación con los empleados para evaluar su efectividad y, de ser necesario, implementar medidas correctivas que fortalezcan una cultura de higiene entre los operarios.
        div.metodo.mb-4.mb-md-3
          span.texto Manejo de registro
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-3.justify-content-center.align-items-center
            img(src="@/assets/curso/temas/tema4/img_13.svg", alt="Manejo de registro" class="img-fluid")
          .col-lg-4.justify-content-center.align-items-center
            p.mb-2 Los registros dentro de las Buenas Prácticas Agrícolas en el cultivo de plátano son muy importantes, porque permiten plasmar los resultados de casi todos los procesos para después controlar de manera sistemática cómo se realizan todas las labores de la unidad productiva.
            h5.mb-0 Los registros deben tener los siguientes datos:
          .col-lg-5.justify-content-center.align-items-center
            .tarjeta_bg-05.p-4.mb-0
              p.mb-2.check-green Nombre de la empresa.
              p.mb-2.check-green Nombre del registro.
              p.mb-2.check-green Número del registro.
              p.mb-2.check-green Fecha.
              p.mb-2.check-green Datos específicos: es donde pone el nombre del proceso y su descripción.
              p.mb-2.check-green Nombre del encargado de realizar la verificación.
              p.mb-2.check-green Firmas correspondientes.

    separador

    #t_4_2.titulo-segundo
      .h2(data-aos="fade-right") 4.2	Identificación, trazabilidad y procedimiento de retiro 
    .mb-3
    p.mb-3 Garantizar la correcta identificación y trazabilidad de los productos permite dar cumplimiento a los estándares internacionales de calidad, facilitar su seguimiento en la cadena de suministro y responder de manera eficiente ante posibles incidentes de seguridad alimentaria
    div.metodo.mb-4.mb-md-3
      span.texto Identificación
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6.justify-content-center.align-items-center
        p.mb-3 La identificación de los productos es un requisito indispensable en los mercados internacionales, ya que permite conocer información clave sobre su origen y procesamiento. A través de las etiquetas, se especifican detalles como la fecha de elaboración y empaque, el número de lote y otros datos relevantes.
        p.mb-3 Las etiquetas de frutas y hortalizas deben cumplir con estándares de calidad y contener la siguiente información:
      .col-lg-6.justify-content-center.align-items-center
        .tarjeta_bg-06.p-4.mb-0
          h6 País de origen.
          p.mb-2.check-blue Naturaleza del producto: nombre de la especie empacada y, en algunos mercados, la variedad específica.
          p.mb-2.check-blue Especificaciones comerciales: tamaño, clasificación y uso de conservantes. Identificación del productor: nombre, dirección y código de la marca registrada.
          p.mb-2.check-blue Visibilidad: toda la información debe estar impresa en un mismo lado del empaque, asegurando su fácil lectura.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.mb-4
        object(:data="ejemplo_etiquetas" type="image/svg+xml" class="img-fluid").mb-0
        div.metodo.mb-4.mb-md-3
          span.texto Trazabilidad o rastreabilidad
        p.mb-3 La trazabilidad es un aspecto muy importante dentro de la unidad productiva, ya que permite realizar un seguimiento detallado del producto a lo largo de toda la cadena de producción. Implementar un sistema documental adecuado facilita el registro de información relevante sobre cada lote, permitiendo analizar y solucionar de manera efectiva cualquier problema de seguridad alimentaria.
        h5.mb-3 Algunos parámetros fundamentales para la identificación y trazabilidad del producto incluyen:
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-4.justify-content-center.align-items-center
            img(src="@/assets/curso/temas/tema4/img_14.svg", alt="Trazabilidad o rastreabilidad" class="img-fluid")
          .col-lg-8.justify-content-center.align-items-center
            .fondo-slyder
              .tarjeta.fondo_1_2.p-4.slyder_1.bg-01
                SlyderA(tipo="a")
                  .tarjeta.bg-01.p-2
                    .row.justify-content-center.align-items-center.p-3
                      .col-md-3.col-xl-3.mb-0
                        figure
                          img(src='@/assets/curso/temas/tema4/img_15.svg', alt='Registro de insumos y proveedores').mx-auto
                      .col-md-7.col-xl-7.mb-0
                        h3.mb-2 Registro de insumos y proveedores
                        p Es necesario documentar los insumos utilizados durante el proceso productivo, así como los proveedores de cada uno, asegurando un control riguroso sobre su calidad y origen.      
                  .tarjeta.bg-01.p-2
                    .row.ordenar_tarjeta.justify-content-center.align-items-center.p-3
                      .col-md-3.col-xl-3.mb-0
                        figure
                          img(src='@/assets/curso/temas/tema4/img_16.svg', alt='Información del área de cultivo').mx-auto
                      .col-md-7.col-xl-7.mb-0
                        h3.mb-2 Información del área de cultivo	
                        p Se debe contar con un registro detallado de las condiciones del terreno donde se estableció el cultivo, incluyendo sus características y manejo agronómico.
                  .tarjeta.bg-01.p-2
                    .row.ordenar_tarjeta.justify-content-center.align-items-center.p-3
                      .col-md-3.col-xl-3.mb-0
                        figure
                          img(src='@/assets/curso/temas/tema4/img_17.svg', alt='Fuentes de agua').mx-auto
                      .col-md-7.col-xl-7.mb-0
                        h3.mb-2 Fuentes de agua
                        p Se deben identificar y documentar las fuentes de suministro de agua utilizadas en el proceso (ríos, arroyos, depósitos, entre otros), para evaluar la calidad del recurso y su impacto en el cultivo.
                  .tarjeta.bg-01.p-2
                    .row.ordenar_tarjeta.justify-content-center.align-items-center.p-3
                      .col-md-3.col-xl-3.mb-0

                      .col-md-7.col-xl-7.mb-4 
                        h3.mb-2 Acción correctiva ante problemas en lotes
                        p En caso de incidentes con un lote específico, el sistema de trazabilidad permite identificar su destino y retirar del mercado aquellos productos que compartan el mismo código, evitando riesgos para el consumidor.	
                  .tarjeta.bg-01.p-2
                    .row.ordenar_tarjeta.justify-content-center.align-items-center.p-3
                      .col-md-3.col-xl-3.mb-0
                        figure
                          img(src='@/assets/curso/temas/tema4/img_18.svg', alt='Sistemas de identificación del producto').mx-auto  
                      .col-md-7.col-xl-7.mb-0
                        h3.mb-2 Sistemas de identificación del producto	
                        p Se requiere disponer de documentos que registren el origen del producto y el mecanismo utilizado para su marcación o identificación, facilitando su rastreo a lo largo de la cadena de suministro.	
                  .tarjeta.bg-01.p-2
                    .row.ordenar_tarjeta.justify-content-center.align-items-center.p-3
                      .col-md-3.col-xl-3.mb-0
                        figure
                          img(src='@/assets/curso/temas/tema4/img_19.svg', alt='Acción correctiva ante problemas en lotes').mx-auto  
                      .col-md-7.col-xl-7.mb-0 
                        h3.mb-2 Condiciones de procesamiento
                        p Se deben especificar las condiciones en las que fue procesado cada lote, así como las características de las materias primas empleadas. Esta información resulta necesaria para evaluar posibles fallas en caso de reclamaciones y determinar si el problema se originó durante la producción o por un mal manejo posterior.
                  .tarjeta.bg-01.p-2
                    .row.ordenar_tarjeta.justify-content-center.align-items-center.p-3
                      .col-md-3.col-xl-3.mb-0
                        figure
                          img(src='@/assets/curso/temas/tema4/img_20.svg', alt='Acción correctiva ante problemas en lotes').mx-auto  
                      .col-md-7.col-xl-7.mb-0
                        h3.mb-2 Plan de retiro de productos
                        p La central de poscosecha debe contar con un plan eficiente para retirar productos en mal estado. Además, es importante que los productores mantengan comunicación directa con distribuidores y comercializadores de plátano, con el fin de monitorear las condiciones en las que llega el producto al mercado y corregir cualquier deficiencia de manera rápida y efectiva.	           
</template>

<script>
export default {
  name: 'Tema4',
  data() {
    return {
      figura9: require('@/assets/curso/figuras/figura9.svg'),
      ejemplo_etiquetas: require('@/assets/curso/ejemplo_etiquetas.svg'),
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
}
</script>

<style lang="sass"></style>
