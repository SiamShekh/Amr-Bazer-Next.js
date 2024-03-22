'use client'
 
import Image from 'next/image'
 
const imageLoader = ({ src, quality }) => {
  return `${src}?q=${quality || 75}`
}
 
export default function Image_() {
  return (
    <Image
      loader={imageLoader}
      src="https://i.ibb.co/42ZQwkc/hero-image.png"
      alt="Picture of the author"
      width={500}
      height={500}
    />
  )
}