import { notFound } from 'next/navigation';
import { NextResponse } from 'next/server';
import React from 'react'

const Review = async({params}) => {
    const {id} = await params;

    if(parseInt(id)>10){
        return notFound()
    }
  return (
    <div>
        Review {id}
      
    </div>
  )
}

export default Review
