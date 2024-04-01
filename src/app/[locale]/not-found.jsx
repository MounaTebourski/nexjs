import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div>
        <h2>Page non trouve</h2>
        <p>Desolee la page que vous cherchez n'existe pas !</p>
        <Link href="/" >Retourner a la page Home</Link>
    </div>
  )
}

export default NotFound