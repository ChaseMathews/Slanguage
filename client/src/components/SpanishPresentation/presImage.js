import React, { useState, useEffect } from "react";
import API from "../../utils/API"
import "./style.css"

function PresImage() {

  const [image, setImage] = useState()
  let [index, setIndex] = useState(0);

  useEffect(() => {
    loadImages()
  }, [])

  function loadImages() {
    API.getPresData()
      .then(res => {
        setImage(res.data[0].content)
        console.log(res.data[0].content)
      })

      .catch(err => console.log(err));
  };

  const handleImageChange = () => {
    setIndex(prev => prev + 1)
  }
  const handleImageChangeBack = () => {
    setIndex(prev => prev - 1)
  }

  return (
    <>
      {image &&
        <div>
          <button onClick={handleImageChangeBack}>Back</button>
          <button onClick={handleImageChange}>Click</button>
          <img id="numberImage" src={image[index].imageUrl}></img>
        </div>
      }
    </>
  )
}

export default PresImage;