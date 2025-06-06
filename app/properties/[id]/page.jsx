"use client"

import { useParams, useRouter } from 'next/navigation'
import React from 'react'

const PropertyPage = () => {
  const router = useRouter();
  const params = useParams();
  return (
    <div>
      <h1>Property page {params.id}</h1>
      <button onClick={() => router.replace('/')}>Go Home</button>
    </div>
  )
}

export default PropertyPage