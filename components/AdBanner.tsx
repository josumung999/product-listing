import Image from 'next/image'
import React from 'react'

const AdBanner = () => {
  return (
    <div className="flex items-center justify-center mx-auto my-8">
      <Image src="/adbanner.jpg" alt="Advertisement"  width="950" height="270" />
    </div>
  )
}

export default AdBanner