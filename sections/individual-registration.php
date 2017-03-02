<div class='row align-center'>
  <div class='small-12 columns'>
    <span class='section-title'>Responsable de grupo</span>
  </div>
</div>


<div class='section-content'>
  <div class='registration-form individual-registration'>
    <div class='first row'>
      <div class='select-field-container small-12 medium-6 columns'>
        <label>
          <span>Título</span>
          <select v-model='degree' :class='degree ? "" : "default-value"'>
            <option value=''>Obligatorio</option>
            <option value='Dr.'>Doctor</option>
            <option value='Mtro.'>Maestro</option>
            <option value='Lic.'>Licenciado</option>
            <option value='Ing.'>Ingeniero</option>
            <option value='Prof.'>Profesor</option>
          </select>
        </label>
      </div>
      <div class='select-field-container small-12 medium-6 columns'>
        <label>
          <span>Tipo de participante</span>
          <select v-model='role' :class='role ? "" : "default-value"'>
            <option value=''>Obligatorio</option>
            <option value='student'>Alumno</option>
            <option value='manager'>Directivo</option>
            <option value='speaker'>Ponente</option>
            <option value='academic'>Académico</option>
          </select>
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
          <span>Nombre tal como será impreso</span>
          <input type='text' v-model.trim='nameAsItWillBePrinted' placeholder='Completado automáticamente' value='' disabled='disabled'>
        </label>
      </div>
    </div>
    <div class='fourth row'>
      <div class='text-field-container small-12 medium-6 columns'>
        <label>
          <span>Institución</span>
          <select v-model='institution' @change='validateInstitution' :class='institution ? "" : "default-value"'>
            <option value=''>Obligatorio</option>
            <option v-for='currentInstitution in institutionsList'>{{ currentInstitution.name }}</option>
          </select>
        </label>
      </div>
      <div class='text-field-container small-12 medium-6 columns'>
        <label>
          <span>Facultad</span>
          <input type='text' v-model.trim='faculty' :disabled='flags.disableFaculty' placeholder='Opcional'>
        </label>
      </div>
    </div>
    <div class='fifth row'>
      <div class='text-field-container small-12 medium-3 columns'>
        <label>
          <span>Lada</span>
          <input type='number' v-model.trim.number='telephone.areaCode' placeholder='Obligatorio'>
        </label>
      </div>
      <div class='text-field-container small-12 medium-6 columns'>
        <label>
          <span>Teléfono</span>
          <input type='number' v-model.trim.number='telephone.number' placeholder='Obligatorio'>
        </label>
      </div>
      <div class='text-field-container small-12 medium-3 columns'>
        <label>
          <span>Extensión</span>
          <input type='number' v-model.trim.number='telephone.extension' placeholder='Opcional'>
        </label>
      </div>
    </div>
    <div class='sixth align-center row'>
      <div class='text-field-container small-12 medium-6 columns'>
        <label>
          <span>Correo electrónico</span>
          <input type='text' v-model.trim='email' placeholder='Obligatorio'>
        </label>
      </div>
    </div>
  </div>
</div>
