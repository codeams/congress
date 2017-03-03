
Vue.component( 'prices-selection', {

  data: function() {
    return {

    }
  },

  template:

  `
    <div id='prices-selection'>
      <span class='section-title'>Selección de tipo de registro</span>

      <div class='section-content'>
        <div class='registration-types small-up-1 medium-up-2 large-up-3 row'>
          <div class='column'>
            <div class='registration-type'>
              <span class='type-price'>$ 0</span>
              <span class='type-name'>Alumno de UADY</span>
            </div>
          </div>
          <div class='column'>
            <div class='registration-type'>
              <span class='type-price'>$ 350</span>
              <span class='type-name'>Alumno ajeno a UADY</span>
            </div>
          </div>
          <div class='column'>
            <div class='registration-type'>
              <span class='type-price'>$ 7900</span>
              <span class='type-name'>Ponente del congreso</span>
            </div>
          </div>
          <div class='column'>
            <div class='registration-type'>
              <span class='type-price'>$ 0 p/p</span>
              <span class='type-name'>Grupo de alumnos de UADY</span>
            </div>
          </div>
          <div class='column'>
            <div class='registration-type'>
              <span class='type-price'>$ 260 p/p</span>
              <span class='type-name'>Grupo de alumnos ajenos a UADY</span>
            </div>
          </div>
          <div class='column'>
            <div class='registration-type'>
              <span class='type-price'>$ 4650</span>
              <span class='type-name'>Académico de universidad</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `

})
