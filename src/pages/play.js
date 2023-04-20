import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

export default function Play() {
  const router = useRouter()
  const [category, setCategory] = useState('fyo')
  const [letter, setLetter] = useState('')
  const [player, setPlayer] = useState(1)
  const [time, setTime] = useState(5)

  useEffect(()=>{
    const categoryUrl = router.query.category;
    if(categoryUrl){
        setCategory(categoryUrl)
    }
  },[router.query.category])

  console.log("continue here");
  return(
    <h2 className="text-3xl text-center">{category}</h2>
  )

}
