
Vue.component( 'terms-acceptance-form', {


  data: function() {

    return {

      dataCorrectness: false,
      termsOfUse: false,
      privacyPolicy: false

    }

  },


  template:

  `
    <div id='terms-acceptance-form'>

      <div class='row align-center'>

        <div class='checkbox-container small-12 text-center columns'>

          <label>

            <input type = 'checkbox' v-model = ' dataCorrectness '>
            Garantizo la veracidad de los datos proporcionados.

          </label>

        </div>


        <div class='checkbox-container small-12 text-center columns'>

          <label>

            <input type = 'checkbox' v-model = ' termsOfUse '>
            Estoy de acuerdo con los <a href='#'>términos de uso</a>.

          </label>

        </div>


        <div class='checkbox-container small-12 text-center columns'>

          <label>

            <input type = 'checkbox' v-model = ' privacyPolicy '>
            He leído el <a href='#'>aviso de privacidad</a>.

          </label>

        </div>

      </div>

    </div>
  `

})
