
Vue.component( 'form-buttons', {

  data: function() {

    return {

    }

  },


  methods: {
    prev: function() {
      Bus.$emit( "prev" );
    }
  },


  template:

  `
    <div class='action-buttons align-center row'>

      <div class='button-container small-12 medium-6 text-right columns'>

        <input type='button' @click='prev' class='button secondary large' value='Cancelar'>

      </div><div class='button-container small-12 medium-6 text-left columns'>

        <input type='button' class='button primary large' value='Continuar'>

      </div>

    </div>
  `

})
