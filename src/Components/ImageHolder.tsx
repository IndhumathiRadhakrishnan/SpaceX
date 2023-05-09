
interface ImageHolderPropType{
  image?: any
  className?: string
}

function ImageHolder(props: ImageHolderPropType) {
  const { image, className } = props

  if (image) {
    return (
      <img className={className} src={image} alt="defaultImage" loading="lazy"/>
    )
  } else {
    return (
      <img className={className} alt="defaultImage" loading="lazy" src={require('../Assets/image1.jpg')} />

    )
  }
}
export default ImageHolder

