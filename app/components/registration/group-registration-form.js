
Vue.component( 'group-registration-form', {


  data: function() {
    return {
      groupMembers: [
        { name: '' }
      ]
    }
  },


  watch: {

    groupMembers: function() {

      var lastGroupMemberIndex = this.groupMembers.length - 1;
      var lastGroupMemberInputId = 'groupMemberInput' + lastGroupMemberIndex;

      Vue.nextTick(function() {

        document
          .getElementById( lastGroupMemberInputId )
            .focus();

      });

    }

  },


  methods: {

    addGroupMember: function() {

      this.groupMembers.push( { name: '' } );

    },

    deleteGroupMember: function( target ) {

      var isTheLastGroupMemberInput = this.groupMembers.length < 2;
      if ( isTheLastGroupMemberInput ) return;

      var isInputEmpty = ! target.value;
      if ( isInputEmpty ) {

        var currentGroupMemberInputIndex = target.id.split( 'groupMemberInput' )[1];
        this.groupMembers.splice(  currentGroupMemberInputIndex, 1 );

      }

    }

  },


  template:

  `
    <div id='group-registration-form'>


      <div class='row align-center'>

        <div class='small-12 columns'>

          <span class='section-title'>Miembros del grupo</span>

        </div>

      </div>


      <div class='section-content'>

        <div class='registration-form'>

          <div class='align-center row'>

            <div class='text-field-container small-12 columns'>

              <label>


                <span>Nombre completo</span>


                <input

                  type='text'

                  v-for = ' ( groupMember, groupMemberIndex ) in groupMembers '

                  v-model = ' groupMember.name '

                  :id = ' "groupMemberInput" + groupMemberIndex '

                  @keyup.enter = ' addGroupMember '

                  @keyup.delete = ' deleteGroupMember( $event.target ) '

                  placeholder = 'Agregar nuevo miembro'

                >


              </label>

            </div>

          </div>

        </div>

      </div>


    </div>
  `,

})
