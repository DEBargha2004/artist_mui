import React from 'react'

const page = ({params}: { params: { username: string } }) => {
  return (
    <div>page - {JSON.stringify(params)}</div>
  )
}

export default page