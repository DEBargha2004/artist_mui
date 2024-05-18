import ArtworkIndex from '@/Components/Artwork/ArtworkIndex'
import React from 'react'

const page = ({ params }: { params: { slug: string } }) => {
  return (
    <ArtworkIndex />
  )
}

export default page