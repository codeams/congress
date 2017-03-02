<div class='row align-center'>
  <div class='small-12 columns'>
    <span class='section-title'>Miembros del grupo</span>
  </div>
</div>

<div class='section-content'>
  <div class='registration-form groupal-registration'>
    <div class='align-center row'>
      <div class='text-field-container small-12 columns'>
        <label>
          <span>Nombre completo</span>
          <input type='text'
            :id='"groupMember" + index'
            v-for='(groupMember, index) in groupMembers'
            v-model='groupMember.name'
            @keyup.enter='addNewGroupMember'
            @keyup.delete='deleteroni($event.target)'
            placeholder='Agregar nuevo miembro'>
        </label>
      </div>
    </div>
  </div>
</div>
