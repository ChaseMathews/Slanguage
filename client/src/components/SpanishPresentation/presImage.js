import React, { useState, useEffect } from "react";
import API from "../../utils/API"
import "./style.css"

function PresImage() {

  const [image, setImage] = useState("")
  // const [index, setIndex] = useState(0);

  useEffect(() => {
    async function loadImages(){
      API.getPresData()
        .then(res => {
          let imageUrl;
          for (const img in res.data[0].content) {
            imageUrl = res.data[0].content[img].imageUrl;
          }
          // console.log(imageUrl);
          setImage(imageUrl)
        })
        .catch (err => console.log(err));
    }
    loadImages()
  }, [])

  useEffect(() => {
    console.log('rendering images', image);
  }, [image]);


// const nextImageHandler = () => {
//   this.setImage()
// }



return (
  <>
    {console.log(image)}
    {image &&
      <div>
        {/* <img id="numberImage" src={image[0].content[index].imageUrl} alt="number-image"></img> */}
        <img id="numberImage" src={image} alt="number-image"></img>
      </div>
    }
  </>
)
}

export default PresImage;