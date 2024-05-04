
import React from 'react'
import { getImage } from '~/server/queries'

 async function  EditImage({ params }: { params: { slug: string } }) {
  const imgid = Number(params.slug);

  const  img =  await getImage(imgid)
   

  return (
    <div>page<br></br>
 <img src={img.url} alt='fsf'></img>
    </div>
  )
}

export default EditImage