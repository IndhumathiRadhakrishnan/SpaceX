

function ImageHolder({image, className = 'w-full h-[20rem]  md:h-[24rem]'}: {image?: any, className?: string}) {

  if (image) {

    return (
        <img className={className} src={image} alt=""  />
    )
  } else  {

    return (
         <img className={className}  alt=""src={require('../Assets/image1.jpg')} />
    )
  }
}
export default ImageHolder
