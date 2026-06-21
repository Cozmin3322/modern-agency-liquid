'use client'

import Image from "next/image"
import { useEffect, useState } from "react"

export function AboutSlider({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (images.length < 2) return
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length)
    }, 5000)
    return () => clearInterval(id)
  }, [images.length])

  return (
    <div className="relative h-72 md:h-96 overflow-hidden">
      <div
        key={index}
        className="absolute inset-0 animate-slide-in-right"
      >
        <Image
          src={images[index]}
          alt="Lucrare IsoThermLux"
          fill
          priority={index === 0}
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
    </div>
  )
}
