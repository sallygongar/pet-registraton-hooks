import React from "react";

const Photo = () => {
  return(
    <div className="photo">
      <div className="photo__avatar">
        <image src="" alt="fulanit"/>
      </div>
      <div className="photo__file">
        <input type="file" name="avatar" className="photo__file-button"/>
      </div>
    </div>
  )
}

export default Photo