import { useEffect } from 'react'
import Hero from '../components/Hero'
import CategoryList from '../components/CategoryList'
const Home = () => {
  useEffect(() => {}, [])

  return (
    <div className='flex relative flex-col justify-center items-center min-h-[calc(100vh-116px)]'>
      <Hero />
      <CategoryList></CategoryList>
    </div>
  )
}

export default Home
