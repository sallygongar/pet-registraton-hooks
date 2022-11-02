import React from "react";
import Mascota from '../../assets/images/mascota.jpg';

const Photo = ({onChangeFile, file }) => {

  return(
    <div className="photo">
      <div className="photo__avatar">
        {
          file.url ? <img className="photo__avatar-mascota" src={file.url} alt="fulanit"/> : 
          <div>
            <img className="photo__avatar-mascota" src={Mascota} alt="mascota"/>
          </div>
        }
      </div>
      <div className="photo__file">
        <input hidden accept="image/*" type="file" name="avatar" className="photo__file-button" onChange={onChangeFile}/>
      </div>
    </div>
  )
}

export default Photo