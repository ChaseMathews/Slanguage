import React, { Component, useState, useEffect } from "react";
import API from "../../utils/API"
import "./style.css"

function PresImage() {

  const [image, setImage] = useState()
  const [index, setIndex] = useState(0);

  useEffect(() => {
    loadImages()
  }, [])
  function loadImages() {
    API.getPresData()
      .then(res => {
        setImage(res.data)
        console.log(res.data)
      })

      .catch(err => console.log(err));
  };

  // const handleImageChange = () => {

  // }

  return (
    <>
    {console.log(image)}
    {image &&   
    <div>
        <img id="numberImage" src={image[0].content[index].imageUrl}></img>
    </div> 
    }
    </>
  )
}

export default PresImage