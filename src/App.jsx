import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useLoaderData } from 'react-router-dom'
import CoffeeCard from './Components/CoffeeCard'

function App() {
 
  const coffees = useLoaderData()


  return (
    <div className='w-11/12 mx-auto '>

      <h1 className='text-6xl text-purple-600'>Espresso Emporium</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
      {
        coffees.map(coffee => <CoffeeCard coffee={coffee}></CoffeeCard>)
      }
      </div>
     
    </div>
  )
}

export default App
