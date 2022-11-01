import React from 'react';
import Photo from './Photo';
import PetsForm from './PetsForm';


import '../../assets/styles/main.css';

export default function PetsTemplate(){
  return(
    <div className='content-main'>
      <h1 className='title'>Registro para mascotas</h1>
      <div className='pets'>
        <div>
          <Photo/>
        </div>
        <div>
          <PetsForm/>
        </div>
      </div>
    </div>
  )
}