"use client"
import { useParams } from 'next/navigation'
import React from 'react'

const ProductIdSlugPage = () => {
    const params = useParams();

    console.log(params);
    
  return (
    <div>
        ProductIdSlugPage
      
    </div>
  )
}

export default ProductIdSlugPage
