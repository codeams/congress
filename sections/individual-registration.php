<div class='row align-center'>
  <div class='small-12 columns'>
    <span class='section-title'>Responsable de grupo</span>
  </div>
</div>


<div class='section-content'>
  <div class='registration-form individual-registration'>
    <div class='first row'>
      <div class='text-field-container small-12 medium-6 columns'>
        <label>
          <span>Título</span>
          <input type='text' v-model.trim='degree' placeholder='Opcional' value='' />
        </label>
      </div>
      <div class='text-field-container small-12 medium-6 columns'>
        <label>
          <span>Tipo de participante</span>
          <input type='text' v-model.trim='role' placeholder='Obligatorio' value='' />
        </label>
      </div>
    </div>
    <div class='second row'>
      <div class='text-field-container small-12 medium-6 columns'>
        <label>
          <span>Nombre(s)</span>
          <input type='text' :value='firstName' @input='firstName = capitalizeValue( $event.target.value )' placeholder='Obligatorio' />
        </label>
      </div>
      <div class='text-field-container small-12 medium-6 columns'>
        <label>
          <span>Apellidos</span>
          <input type='text' :value='lastName' @input='lastName = capitalizeValue( $event.target.value )' placeholder='Obligatorio' />
        </label>
      </div>
    </div>
    <div class='third row'>
      <div class='text-field-container small-12 columns'>
        <label>
          <span>Nombre tal como será impreso:</span>
          <input type='text' v-model.trim='nameAsItWillBePrinted' placeholder='Completado automáticamente' value='' disabled='disabled' />
        </label>
      </div>
    </div>
    <div class='fourth row'>
      <div class='text-field-container small-12 medium-6 columns'>
        <label>
          <span>Institución</span>
          <input type='text' v-model.trim='institution' v-on:keyup='validateInstitution()' placeholder='Obligatorio' value='' />
        </label>
      </div>
      <div class='text-field-container small-12 medium-6 columns'>
        <label>
          <span>Facultad</span>
          <input type='text' v-model.trim='faculty' placeholder='Opcional' value='' :disabled='flags.disableFaculty' />
        </label>
      </div>
    </div>
    <div class='fifth row'>
      <div class='text-field-container small-12 medium-3 columns'>
        <label>
          <span>Lada</span>
          <input type='text' v-model.trim='telephone.areaCode' placeholder='Obligatorio' value='' />
        </label>
      </div>
      <div class='text-field-container small-12 medium-6 columns'>
        <label>
          <span>Teléfono</span>
          <input type='text' v-model.trim='telephone.number' placeholder='Obligatorio' value='' />
        </label>
      </div>
      <div class='text-field-container small-12 medium-3 columns'>
        <label>
          <span>Extensión</span>
          <input type='text' v-model.trim='telephone.extension' placeholder='Opcional' value='' />
        </label>
      </div>
    </div>
    <div class='sixth align-center row'>
      <div class='text-field-container small-12 medium-6 columns'>
        <label>
          <span>Correo electrónico</span>
          <input type='text' v-model.trim='email' placeholder='Obligatorio' value='' />
        </label>
      </div>
    </div>
  </div>
</div>
