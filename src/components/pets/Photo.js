import React from "react";
import Mascota from '../../assets/images/mascota.jpg';

const Photo = () => {
  const photo = false
  return(
    <div className="photo">
      <div className="photo__avatar">
        {
          photo ? <img src="" alt="fulanit"/> : 
          <div>
            <img className="photo__avatar-mascota" src={Mascota} alt="mascota"/>
          </div>
        }
      </div>
      <div className="photo__file">
        <input type="file" name="avatar" className="photo__file-button"/>
      </div>
    </div>
  )
}

export default Photo