
Vue.component( 'registration-form', {

  data: function() {
    return {}
  },


  props: [ 'params' ],


  template:

  `
    <div id='registration'>

      <person-registration-form :title='params.toPrint'></person-registration-form>

      <group-registration-form></group-registration-form>

      <deposit-registration-form></deposit-registration-form>

      <terms-acceptance-form></terms-acceptance-form>

      <nav-buttons showPrevButton='true' showNextButton='true'></nav-buttons>

    </div>
  `


})
