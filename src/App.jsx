import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")
  return (
    <div className='w-full h-10 mt-16 duration-1000'>
      <style>{`body { background-color: ${color}; }`}</style>
      <div className='flex items-center justify-center h-10 inset-x-0 top-5 px-4'>
        <div className='text-center'>
          <h1 className='text-4xl font-bold text-white mb-4'>
            Background Color Changer
          </h1>
          <p className='text-lg text-white mb-8'>
            Click a button below to change the background color.
          </p>
          <p className='text-lg text-white mb-8'>
            Current Color: <span className='font-bold'>{color}</span>
          </p>
        </div>
      </div>
        <div className='flex flex-wrap gap-4 justify-center shadow-2xl bg-white px-3 py-4 rounded-lg mt-96'>
          
          <button className='bg-red-500 hover:bg-red-400 text-white px-4 py-2 rounded-lg' onClick={() => setColor("red")}>Red</button>
          <button className='bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded-lg' onClick={() => setColor("blue")}>Blue</button>
          <button className='bg-green-500 hover:bg-green-400 text-white px-4 py-2 rounded-lg' onClick={() => setColor("green")}>Green</button>
          <button className='bg-yellow-500 hover:bg-yellow-400 text-white px-4 py-2 rounded-lg' onClick={() => setColor("yellow")}>Yellow</button>
          <button className='bg-purple-500 hover:bg-purple-400 text-white px-4 py-2 rounded-lg' onClick={() => setColor("purple")}>Purple</button>
          <button className='bg-pink-500 hover:bg-pink-400 text-white px-4 py-2 rounded-lg' onClick={() => setColor("pink")}>Pink</button>
          <button className='bg-orange-500 hover:bg-orange-400 text-white px-4 py-2 rounded-lg' onClick={() => setColor("orange")}>Orange</button>
          <button className='bg-teal-500 hover:bg-teal-400 text-white px-4 py-2 rounded-lg' onClick={() => setColor("teal")}>Teal</button>
          <button className='bg-gray-500 hover:bg-gray-400 text-white px-4 py-2 rounded-lg' onClick={() => setColor("gray")}>Gray</button>
          <button className='bg-black hover:bg-black-400 text-white px-4 py-2 rounded-lg' onClick={() => setColor("black")}>Black</button>
        </div>
    </div>
  )
}

export default App
