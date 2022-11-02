import React from 'react';
import Photo from './Photo';
import PetsForm from './PetsForm';

import '../../assets/styles/main.css';

export default function PetsTemplate(){

  const [pet,setPet] = React.useState({
    name: "",
    age: "",
    dateBirth:  "2022-01-01",
    sex: "",
    race: "",
    weight: "",
    sterilized: "",
    owner: "",
    file: {
      src: null,
      name: "",
      url: ""
    }
  });
  const [errors,setErrors] = React.useState({});

  const handleOnchangeInput = (e) => {
    const { name, value } = e.target;
    setPet({...pet, [name]: value });
  }

  const handleOnChangeFile = (e) => {
    try{
      const data = e.target.files;
      const reader = new FileReader();
      reader.readAsDataURL(data[0]);
      reader.onload = () => {
        setPet({
          ...pet,
          file: {
            src: data[0],
            name: data[0].name,
            url: URL.createObjectURL(data[0])
          }
        })
      }
    }catch(e){
      console.log("Failed to get File")
    }
  }

  const handleValidation = () => {
    let isError = false;
    let errors = {};
    if(!pet.name){
      isError = true;
      errors['name'] = "*Por ingrese nombre"
    }
    if(!pet.age){
      isError = true;
      errors['age'] = "*Por ingrese la edad"
    }
    if(!pet.dateBirth){
      isError = true;
      errors['dateBirth'] = "*Por ingrese la fecha de nacimiento"
    }
    if(!pet.sex){
      isError = true;
      errors['sex'] = "*Por ingrese el sexo"
    }
    if(!pet.race){
      isError = true;
      errors['race'] = "*Por ingrese la raza"
    }
    if(!pet.weight){
      isError = true;
      errors['weight'] = "*Por ingrese el peso"
    }
    if(!pet.sterilized){
      isError = true;
      errors['sterilized'] = "*Su mascota esta castrado"
    }
    if(!pet.owner){
      isError = true;
      errors['owner'] = "*Ingrese nombre del dueño"
    }
    
    if(isError){
      setErrors(errors)
    }else{
      setErrors({});
      handleSave();
    }
  }

  const handleSave = () => {
    let alert = document.querySelector('.alert');
    alert.innerHTML = "Enviando a la base de datos...";
    alert.classList.add('alert__inprocess');
    
    setTimeout(()=>{
      alert.classList.remove('alert__inprocess');
      alert.innerHTML = "La informacion de la mascota ha sido guardada";
      alert.classList.add('alert__success');
    },4000)

    setTimeout(() => {
      handleClean();
    },8000)
  }

  const handleClean = () => {  
     setPet({...pet,
      name: "",
      age: "",
      dateBirth:  "2000-01-01",
      sex: "",
      race: "",
      weight: "",
      sterilized: "",
      owner: "",
      file: {
        src: null,
        name: "",
        url: ""
      }
    })
  }

  return(
    <div className='content-main'>
      <h1 className='title'>Registro para mascotas</h1>
      <div className='pets'>
        <div>
          <Photo onChangeFile={handleOnChangeFile} file={pet.file}/>
        </div>
        <div>
          <PetsForm 
            pet={pet} 
            onChangeInput={handleOnchangeInput} 
            errors={errors} 
            handleTransacction={handleValidation} 
            />
        </div>
      </div>
    </div>
  )
}