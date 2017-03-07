
Vue.component( 'terms-acceptance-form', {


  data: function() {

    return {

      isPrivacyPolicyAccepted: false

    }

  },


  template:

  `
    <div id='terms-acceptance-form'>
      <div class='row align-center'>
        <div class='checkbox-container small-12 text-center columns'>

          <label>
            <input type='checkbox' v-model='isPrivacyPolicyAccepted'>
            He leído y estoy de acuerdo con el
            <a href='#'>aviso de privacidad</a>.
          </label>

        </div>
      </div>
    </div>
  `

})
