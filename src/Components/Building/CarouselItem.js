import React from "react";

export default function CarouselItem({img}) {
  return(
    <>
      <div className="w-full">
        <img src={img}></img>
      </div>
    </>
  )
}