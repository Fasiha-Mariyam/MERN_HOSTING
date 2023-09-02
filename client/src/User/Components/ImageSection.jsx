import React from 'react'

function ImageSection({images}) {
    console.log(images)
  return (
    // images
    <div><img width={600} height={400} src={images} alt="" /></div>
  )
}

export default ImageSection