import React from "react";

import '../../assets/styles/forms.css';

const PetsForm = () =>{
  return(
    <div className="form-container">
      <form className="form-pets">
        <div className="form-input">
          <label className="form-input__label">Nombre</label>
          <input type='text' name='name'/>
       </div>
       <div className="form-input">
          <label className="form-input__label">Edad</label>
          <input type='text' name='age'/>
       </div>
       <div className="form-input">
          <label className="form-input__label">Fecha de nacimiento</label>
          <input type='text' name='dateBirth'/>
       </div>
       <div className="form-input">
          <label className="form-input__label">Sexo</label>
          <select type="text" name="sex">
            <option value="">select</option>
            <option value="HEMBRA">Hembra</option>
            <option value="MACHO">Macho</option>
          </select>
       </div>
       <div className="form-input">
          <label className="form-input__label">Raza</label>
          <input type='text' name='raze'/>
       </div>
       <div className="form-input">
          <label className="form-input__label">Peso</label>
          <input type='text' name='size'/>
       </div>
       <div className="form-input">
          <label className="form-input__label">Nombre del dueño</label>
          <input type='text' name='size'/>
       </div>
      </form>
    </div>
  )
}

export default PetsForm;