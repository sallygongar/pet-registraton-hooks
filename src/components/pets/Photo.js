import React from "react";

const Photo = () => {
  const photo = false
  return(
    <div className="photo">
      <div className="photo__avatar">
        {
          photo ? <image src="" alt="fulanit"/> : <span className="photo__avatar-label">Foto de mascota</span>
        }
      </div>
      <div className="photo__file">
        <input type="file" name="avatar" className="photo__file-button"/>
      </div>
    </div>
  )
}

export default Photo