import React from 'react'

function ImageComponent({ src, width, alt }) {
  return (
    <div>
      <img src={src} alt={alt} style={{ width: width }} />
    </div>
  )
}

export default ImageComponent;
