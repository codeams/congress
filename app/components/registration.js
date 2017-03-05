
Vue.component( 'registration', {

  data: function() {
    return {

    }
  },


  props: [ 'params' ],


  created: function() {
    console.log( this.params );
  },


  template:

  `
    <div id='registration'>

      <individual-registration-form :title='params.toPrint'></individual-registration-form>

      <group-registration-form></group-registration-form>

      <deposit-details-registration-form></deposit-details-registration-form>

      <terms-acceptance-form></terms-acceptance-form>

      <form-buttons></form-buttons>

    </div>
  `


})
