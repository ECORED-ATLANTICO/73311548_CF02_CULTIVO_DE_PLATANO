<template lang="pug">
.curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Bienestar laboral y seguridad de los trabajadores
      p.mb-0 Esta actividad de aprendizaje está enfocada en explicar la salud y seguridad de los trabajadores, el plan de saneamiento, los programas de higiene personal, el control de plagas, la trazabilidad y la rastreabilidad.

      separador

      #t_3_1.titulo-segundo
        .h2(data-aos="fade-right") 3.1	Plan de saneamiento
      .mb-3 
      .row.justify-content-center.align-items-center.mb-5
        .col-8.col-sm-8.col-md-8.col-lg-3.col-xl-3.col-xxl-3.mb-0.mb-md-3
          img(src="@/assets/curso/temas/tema3/img_1.png", alt="Plan de saneamiento" class="img-fluid")
        .col-12.col-sm-12.col-md-12.col-lg-9.col-xl-9.col-xxl-9.mb-0.mb-md-3
          p.mb-2 Si en la unidad productiva se establecen normas de higiene y se realiza el control pertinente para su cumplimiento, se puede generar una cultura de sanidad que facilite una producción inocua y de calidad, que podrá ser comercializada en mercados nacionales e internacionales.
          p.mb-3 Es esencial para hacer cumplir todos los parámetros higiénicos se debe contar con un buen diseño sanitario acompañado de una adecuada dotación de los elementos de protección personal y de los demás implementos para la realización de las labores en el campo y la poscosecha, adicional a esto en el plan de saneamiento debe estar inmersa una capacitación básica que permita realizar todas las funciones de Buenas Prácticas Agrícolas en plátano.
          .tarjeta_bg-06.p-4.mb-2
            .row.justify-content-center.align-items-center.mb-3
              .col-2.col-sm-2.col-md-2.col-lg-1.col-xl-1.col-xxl-1.mb-3.mb-md-0
                img(src="@/assets/curso/temas/tema3/img_2.svg", alt="Libreta de notas" class="img-fluid")
              .col-lg-11
                p.mb-0 En el plan de saneamiento se determinan los puntos de control críticos y se establecen las condiciones que los generan, para que el grupo encargado del plan determine cuáles ponen en peligro la inocuidad del alimento (plátano) y se les pueda realizar el control requerido.
          p.mb-2 Los peligros que se generan durante el proceso de cosecha y poscosecha se pueden clasificar en biológicos, físicos o químicos.
      .row.justify-content-center.align-items-center.mb-0
        .col-lg-10
          .tarjeta_bg-06.p-3.mb-5
            .row.mb-3.justify-content-center.align-items-center
              .col-lg-9.order-2.order-lg-1
                h4.mb-2 Peligros biológicos
                p.mb-0 Son los asociados a la presencia de organismos vivos en el alimento; los microorganismos son organismos pequeños que sólo pueden ser observados a través del microscopio, muchos de estos constan de una única célula y pueden encontrarse en cualquier parte del medio ambiente, entre estos hay diferentes categorías como: bacterias, levaduras, hongos, parásitos y virus.
              .col-md-4.col-lg-3.order-1.order-lg-2.mb-3.mb-lg-0
                img(src="@/assets/curso/temas/tema3/img_4.svg", alt="Imagen de unos platanos" class="img-fluid")
          .row.justify-content-center.mb-3
            .col-lg-6.mb-3
              .tarjeta_bg-04.mb-2.height-100
                .row.ordenar_tarjeta_lg.p-5.justify-content-center.align-items-center
                  .col-md-12.col-lg-12.col-xl-9.order-2.order-xl-1
                    h4.mb-2 Peligros químicos
                    p.mb-0 Están relacionados con los compuestos químicos nocivos provenientes de los insumos para la elaboración de productos, restos de detergentes y desinfectantes utilizados para la limpieza, plaguicidas y metales pesados.
                  .col-md-3.col-lg-4.col-xl-3.order-1.order-xl-2.mb-3.mb-xl-0
                    img(src="@/assets/curso/temas/tema3/img_5.svg", alt="Imagen de unos platanos" class="img-fluid")
            .col-lg-6.mb-3
              .tarjeta_bg-05.mb-2.height-100
                .row.ordenar_tarjeta_lg.p-5.justify-content-center.align-items-center
                  .col-md-12.col-lg-12.col-xl-9.order-2.order-xl-1
                    h4.mb-2 Peligros físicos
                    p.mb-0 Estos están asociados a los daños físicos que se le pueden ocasionar al producto por una mala manipulación en la cosecha y la poscosecha.
                  .col-md-3.col-lg-4.col-xl-3.order-1.order-xl-2.mb-3.mb-xl-0
                    img(src="@/assets/curso/temas/tema3/img_6.svg", alt="Imagen de unos platanos" class="img-fluid")
          p.mb-5 Para evaluar y gestionar los peligros en la unidad productiva, se deben considerar los siguientes aspectos:
          .mt-5.mb-5.custom-slider
            SlyderF(columnas="col-md-6 col-lg-6 col-xl-4")
              .tarjeta.tarjeta--color-acento-A10.p-4.rounded-5.custom-slider__tarjeta.custom-slider__tarjeta--5
                h3.text-center.mt-5 Identificación de peligros
                p.mb-0.text-center Evaluar la posibilidad de que surjan riesgos con efectos perjudiciales para la salud.
              .tarjeta.tarjeta--color-acento-A10.p-4.rounded-5.custom-slider__tarjeta.custom-slider__tarjeta--6
                h3.text-center.mt-5 Evaluación cualitativa y cuantitativa
                p.mb-0.text-center la presencia y nivel de peligros en el proceso productivo.
              .tarjeta.tarjeta--color-acento-A10.p-4.rounded-5.custom-slider__tarjeta.custom-slider__tarjeta--7
                h3.text-center.mt-5 Resistencia y proliferación de microorganismos
                p.mb-0.text-center el comportamiento de agentes biológicos que puedan comprometer la inocuidad del plátano.
              .tarjeta.tarjeta--color-acento-A10.p-4.rounded-5.custom-slider__tarjeta.custom-slider__tarjeta--8
                h3.text-center.mt-5 Persistencia de toxinas y sustancias nocivas
                p.mb-0.text-center Evaluar la acumulación de compuestos químicos o físicos que representen un riesgo para el consumidor.
              .tarjeta.tarjeta--color-acento-A10.p-4.rounded-5.custom-slider__tarjeta.custom-slider__tarjeta--9
                h3.text-center.mt-5 Gestión de múltiples peligros
                p.mb-0.text-center En caso de que se presenten varios riesgos simultáneamente, implementar medidas que minimicen su impacto y garanticen la calidad del producto.
          h3(data-aos='zoom-in-right').mb-5
            span.label-title.label-title--1 Prácticas en los procesos de limpieza y desinfección
          .tarjeta_bg-05.p-4.mb-3
            .row.mb-0.justify-content-center.align-items-center
              .col-lg-11.order-2.order-lg-1
                p.mb-0 El saneamiento en el cultivo requiere que todos los empleados conozcan y apliquen el plan de limpieza y desinfección en las áreas donde se manipulan los alimentos. Este proceso es fundamental para garantizar la inocuidad del plátano y prevenir la contaminación en cualquier etapa de su manejo.
              .col-md-3.col-lg-1.order-1.order-lg-2.mb-3.mb-lg-0
                img(src="@/assets/curso/temas/tema3/img_12.svg", alt="Imagen de unos platanos" class="img-fluid")
          p.mb-0 Es necesario que las instalaciones, equipos y superficies utilizadas en la adecuación y almacenamiento del plátano sean sometidas a protocolos de limpieza regulares. Esto incluye la eliminación de residuos orgánicos, la desinfección con productos adecuados y la implementación de medidas para evitar la proliferación de microorganismos que puedan comprometer la calidad del producto.

      separador

      #t_3_2.titulo-segundo
        .h2(data-aos="fade-right") 3.2	 Plan de limpieza y desinfección
      .mb-3 
      h3(data-aos='zoom-in-right').mb-3
        span.label-title.label-title--1 Herramientas y utensilios
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-3.mb-3.mb-md-0
          img(src="@/assets/curso/temas/tema3/img_13.png", alt="Imagen de unos platanos" class="img-fluid")
        .col-lg-9
          p.mb-2 Es indispensable el buen uso y cuidado de las herramientas con las que se realizan todas las prácticas culturales y de poscosecha del cultivo, porque se puede generar contaminación cruzada del equipo al fruto, es indispensable después de cada labor realizar limpieza y desinfección.
          h6.mb-2 Para sacar la suciedad más difícil en equipos y herramientas tenga en cuenta lo siguiente:
      .titulo-sexto.bg-11.mb-4
        h5 Tabla 7: 
        span.text-dark
          em Guía para limpieza y desinfección de herramientas
      .tabla-a.mb-5 
        table
          thead
            tr
              th Factor de control
              th Frecuencia
              th Procedimiento
              th Instrumentos
          tbody
            tr
              td 
                b Indumentaria de trabajo
                |  (guantes de algodón, botas, overol)
              td Al finalizar actividades y operaciones poscosecha
              td
                p.mb-3
                  b Limpieza:
                  |   pasar una toalla o cepillo humedecido con jabón y enjuagar con abundante agua.
                p.mb-3
                  b Desinfección:
                  |   realizar desinfección de botas con cal antes de ingresar al lote o zona de acopio.
              td Toalla, cepillo, jabón, pediluvio, cal.
            tr
              td 
                b Herramientas de corte
                |  (Machete, demanadora)
              td
                p Al menos tres (3) veces al dia: 
                ul.p-0
                  li - Al iniciar la recolección
                  li - Al medio día
                  li - Tras finalizar la jornada
              td
                p.mb-3
                  b Limpieza:
                  |   eliminar suciedad con agua y jabón.
                p.mb-3
                  b Desinfección:
                  |   usar hipoclorito de sodio (4 ml por litro de agua) y dejar actuar por 5-10 minutos.  
                p
                  b Secado:
                  |   asegurar que estén completamente secas para evitar hongos y oxidación.
              td Jabón, hipoclorito de sodio, balde, aspersores.
            tr
              td 
                b Recipientes de recolección
                |  (bolsas o canastillas)
              td Antes de la recolección
              td
                p.mb-3
                  b Limpieza:
                  |    lavar con agua y jabón.  
                p.mb-3
                  b Desinfección:
                  |   aplicar solución de hipoclorito de sodio y dejar secar al aire.
              td Jabón, hipoclorito, balde, esponja.
            tr
              td 
                b Empaque final
                |  (Canastillas)
              td Antes de la comercialización
              td
                p.mb-3
                  b Limpieza:
                  |   lavado con jabón y enjuague abundante.
                p.mb-3
                  b Desinfección:
                  |   aplicar solución desinfectante y secar antes de su uso.
              td Jabón, desinfectante, paños absorbentes.
      h3(data-aos='zoom-in-right').mb-3
        span.label-title.label-title--1 Tinas o tanques
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-9
          p.mb-4 Los tanques o tinas desempeñan un papel fundamental en la producción de plátano, ya que permiten la limpieza del fruto tras la cosecha, eliminando impurezas como tierra y residuos. Además, se utilizan en el proceso de desdede y desmanche del producto.
          .tarjeta_bg-06.p-4
            h6.mb-0 Para garantizar su adecuado uso y mantenimiento, es necesario considerar lo siguiente:
            ol(style="list-style-type: lower-alpha").p-3.mb-0
              li.mb-0 Después de cada uso, los tanques deben vaciarse completamente.
              li.mb-0 Se debe añadir detergente y restregar las superficies para eliminar la suciedad acumulada.
              li.mb-0 Añadir una solución desinfectante, como cloro diluido, para eliminar microorganismos potencialmente dañinos.
              li.mb-0 Una vez desinfectados, los tanques deben enjuagarse adecuadamente y llenarse con agua limpia para reiniciar el proceso.
        .col-lg-3.height-100
          img(src="@/assets/curso/temas/tema3/img_14.png", alt="Imagen de unos platanos")
      .row.justify-content-center.align-items-center.mb-3
        .col-10.col-sm-10.col-md-10.col-lg-10.col-xl-10.col-xxl-10.mb-3
          h3(data-aos='zoom-in-right').mb-3
            span.label-title.label-title--1 Pisos 
          .row.justify-content-center.align-items-center.mb-3
            .col-8.col-sm-8.col-md-8.col-lg-3.col-xl-3.col-xxl-3.mb-3.mb-lg-0
              img(src="@/assets/curso/temas/tema3/img_15.png", alt="Imagen de unos platanos" class="img-fluid")
            .col-12.col-sm-12.col-md-12.col-lg-9.col-xl-9.col-xxl-9.mb-3.mb-lg-0
              p.mb-2 Los pisos del área de adecuación y de los espacios donde se encuentran los tanques deben mantenerse en óptimas condiciones de higiene. Para ello, se recomienda:
              ul.p-0
                li.mb-0
                  i.fa-solid.fa-circle-check(style="color: #98E465; font-size: 15px")
                  |  Lavarlos a fondo con cepillo y jabón, asegurando la eliminación de residuos y suciedad adherida.
                .border-bottom.mb-3
                li
                  i.fa-solid.fa-circle-check(style="color: #98E465; font-size: 15px")
                  |  Aplicar una solución desinfectante de agua y cloro, dejándola actuar durante aproximadamente 10 minutos para garantizar su efectividad.
                .border-bottom.mb-3
                li
                  i.fa-solid.fa-circle-check(style="color: #98E465; font-size: 15px")
                  |  Enjuagar bien las superficies y dejarlas secar completamente antes de retomar las actividades.
                .border-bottom
          h3(data-aos='zoom-in-right').mb-3
            span.label-title.label-title--1 Mesones para adecuación de materia prima
          p.mb-3 Los mesones donde se manipula el plátano deben contar con superficies lisas, no porosas y de fácil limpieza y desinfección, evitando la acumulación de suciedad y microorganismos patógenos.
          p.mb-3 Después de cada uso, es fundamental:
          .pasos-proceso.mb-3
            .paso
              img(src="@/assets/curso/temas/tema3/img_16.1.png" alt="Lavado")
            img.paso-flecha(src="@/assets/curso/temas/tema3/img_16.2.png" alt="Flecha")
            .paso
              img(src="@/assets/curso/temas/tema3/img_16.3.png" alt="Desinfección")
          h3(data-aos='zoom-in-right').mb-3
            span.label-title.label-title--1 Control de plagas en las instalaciones
          .row.justify-content-center.align-items-center.mb-3
            .col-md-8.col-lg-3.mb-3.mb-lg-0
              img(src="@/assets/curso/temas/tema3/img_17.png", alt="Control de plagas en las instalaciones" class="img-fluid")
            .col-md-12.col-lg-9.mb-3.mb-lg-0
              p.mb-2 Las plagas representan un riesgo significativo para la inocuidad del producto, ya que son vectores de enfermedades que pueden contaminar los alimentos y poner en peligro la salud del consumidor. Por esta razón, se requiere implementar un plan riguroso de control de plagas y roedores en todas las instalaciones donde se manipulan los alimentos.
              h6.mb-2 Los principales patógenos y enfermedades que pueden transmitir las plagas incluyen:
          .titulo-sexto.bg-11.mb-4
            h5 Figura 7.
            span.text-dark 
              em Plagas
          img(src="@/assets/curso/temas/tema3/img_18.png", alt="Control de plagas en las instalaciones" class="img-fluid")
          figcaption.mb-5 
            em Nota.  
            | SENA (2024).
          .tarjeta_bg-07.mb-5
            .row.justify-content-center.align-items-center.d-flex
              .col-lg-12.col-xl-9.order-2.order-xl-1
                p.text-white Las plagas y los roedores comparten los mismos requerimientos básicos que los seres humanos, ya que necesitan agua, alimento y un refugio para sobrevivir. Por esta razón, se debe eliminar cualquier factor que favorezca su reproducción y permanencia en el entorno.
                p.text-white.mb-0 Para prevenir su presencia, se deben mantener los establecimientos y sus alrededores libres de residuos de alimentos y acumulaciones de agua que puedan atraerlas. A continuación, se presentan algunas recomendaciones importantes para evitar la contaminación de los alimentos:
              .col-md-4.col-lg-4.col-xl-3.order-1.order-xl-2
                img(src="@/assets/curso/temas/tema3/cucaracha.png", alt="Plagas" style="display: flex; transform: translateY(-70px); width: 100% !important;")
          SlyderA(tipo="b").custom-slider-a-b.rounded-4
            .row.align-items-center.custom-slider-a-b__item
              .col-lg-6
                h5 Manejo de residuos y desechos
                p Evitar la acumulación de residuos sólidos de cualquier tipo y mantener las canecas de basura siempre tapadas para prevenir la proliferación de plagas. Las cañerías y desagües deben permanecer cerrados y protegidos con sus respectivas rejillas.
              .d-none.d-lg-block.col-lg-6
                figure
                  img(src='@/assets/curso/temas/tema3/img_19.png', alt='gajo de plátanos')
            .row.align-items-center.custom-slider-a-b__item
              .col-lg-6
                h5 Limpieza y desinfección
                p Garantizar la limpieza y desinfección de todas las áreas, desde la recepción de materias primas hasta el almacenamiento. Almacenar los insumos en anaqueles limpios, con una altura mínima de 15 cm del piso, para facilitar su mantenimiento.
              .d-none.d-lg-block.col-lg-6
                figure
                  img(src='@/assets/curso/temas/tema3/img_20.png', alt='female-botanist-examining-plant-sample-quality-control-inspection-greenhouse')

            .row.align-items-center.custom-slider-a-b__item
              .col-lg-6
                h5 Control de plagas
                p Implementar un plan de control de plagas que incluya fumigaciones periódicas con la asesoría de expertos, así como un registro detallado de los productos utilizados para su erradicación. Proteger las ventanas con mosquiteros para evitar la entrada de insectos.

              .d-none.d-lg-block.col-lg-6
                figure
                  img(src='@/assets/curso/temas/tema3/img_21.png', alt='young-selectionist')

            .row.align-items-center.custom-slider-a-b__item
              .col-lg-6
                h5 Manejo de materias primas
                p Inspeccionar minuciosamente la calidad de los productos al momento de su recepción, asegurando que estén libres de plagas y roedores. Cubrir adecuadamente los alimentos para prevenir su contaminación.

              .d-none.d-lg-block.col-lg-6
                figure
                  img(src='@/assets/curso/temas/tema3/img_22.png', alt='Imagen decorativa')
</template>

<script>
export default {
  name: 'Tema3',
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
