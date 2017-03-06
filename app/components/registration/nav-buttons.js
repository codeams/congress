
Vue.component( 'nav-buttons', {

  data: function() {

    return {

    }

  },


  props: [
    'showPrevButton',
    'showNextButton'
  ],


  methods: {
    next: function() {
      Bus.$emit( "next" )
    },
    prev: function() {
      Bus.$emit( "prev" );
    }
  },


  template:

  `
    <div id='nav-buttons'>

      <div v-if='showNextButton && showPrevButton' class='align-center row'>

        <div class='button-container small-12 medium-6 text-right columns'>

          <input type='button' @click='prev' class='button secondary large' value='Cancelar'>

        </div><div class='button-container small-12 medium-6 text-left columns'>

          <input type='button' class='button primary large' value='Continuar'>

        </div>

      </div>


      <div v-else-if='!showNextButton && showPrevButton' class='action-buttons align-center row'>

        <div class='button-container small-12 medium-6 text-center columns'>

          <input type='button' @click='prev' class='button secondary large' value='Cancelar'>

        </div>

      </div>


      <div v-else-if='showNextButton && !showPrevButton' class='action-buttons align-center row'>

        <div class='button-container small-12 medium-6 text-center columns'>

          <input type='button' @click='next' class='button primary large' value='Continuar'>

        </div>

      </div>

    </div>
  `

})
