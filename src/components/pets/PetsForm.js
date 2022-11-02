import React from "react";

import '../../assets/styles/forms.css';

const PetsForm = ({pet, errors, onChangeInput, handleTransacction}) =>{
  return(
    <div className="form-container">
      <form className="form-pets">
        <div className="form-input">
          <label className="form-input__label">Nombre</label>
          <input type='text' name='name' value={pet.name} onChange={onChangeInput}/>
          <span className="message-errors">{errors.name}</span>
       </div>
       <div className="form-input">
          <label className="form-input__label">Edad (Meses)</label>
          <input type='text' name='age' value={pet.age} onChange={onChangeInput}/>
          <span className="message-errors">{errors.age}</span>
       </div>
       <div className="form-input">
          <label className="form-input__label">Fecha de nacimiento</label>
          <input type="date" name="dateBirth" value={pet.dateBirth} onChange={onChangeInput}/>
          <span className="message-errors">{errors.dateBirth}</span>
       </div>
       <div className="form-input">
          <label className="form-input__label">Sexo</label>
          <select type="text" name="sex" value={pet.sex} onChange={onChangeInput}>
            <option value="">select</option>
            <option value="HEMBRA">Hembra</option>
            <option value="MACHO">Macho</option>
          </select>
          <span className="message-errors">{errors.sex}</span>
       </div>
       <div className="form-input">
          <label className="form-input__label">Raza</label>
          <input type='text' name='race' value={pet.race} onChange={onChangeInput}/>
          <span className="message-errors">{errors.race}</span>
       </div>
       <div className="form-input">
          <label className="form-input__label">Peso (Kg)</label>
          <input type='text' name='weight' value={pet.weight} onChange={onChangeInput}/>
          <span className="message-errors">{errors.weight}</span>
       </div>
       <div className="form-input">
          <label className="form-input__label">Esterilizado o castrado</label>
          <select type="text" name="sterilized" value={pet.sterilized} onChange={onChangeInput}>
            <option value="">select</option>
            <option value={false}>SI</option>
            <option value={true}>NO</option>
          </select>
          <span className="message-errors">{errors.sterilized}</span>
       </div>
       <div className="form-input">
          <label className="form-input__label">Nombre del dueño</label>
          <input type='text' name='owner' value={pet.owner} onChange={onChangeInput}/>
          <span className="message-errors">{errors.owner}</span>
       </div>
       <div className="form-button" >
          <button className="form-button__register" name="register" type="button" onClick={handleTransacction}>Registrar</button>
       </div>
       <div className="alert"></div>
      </form>
    </div>
  )
}

export default PetsForm;