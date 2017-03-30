
Vue.component( 'registration-form', {

  data: function() {
    return {}
  },


  props: {
    params: {
      required: true
    }
  },


  template:

  `
    <div id='registration'>

      <person-registration-form></person-registration-form>

      <group-registration-form :params='params'></group-registration-form>

      <deposit-registration-form></deposit-registration-form>

      <terms-acceptance-form></terms-acceptance-form>

      <nav-buttons showPrevButton='true' showNextButton='true'></nav-buttons>

    </div>
  `


})
