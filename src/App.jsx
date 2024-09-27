import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [Color, setColor] = useState("black")

  return (
    <>
      <div className='h-screen w-full' style={{ backgroundColor: Color }}></div>
        <div className="cnt w-full flex justify-center items-end gap-2 p-3 bg-slate-600 text-black rounded-xl" style={{ backgroundColor: Color }}>
          <div className="red bg-red-600 p-2 rounded-xl outline-none " onClick={() => setColor("red")} >red</div>
          <div className="green bg-green-500 p-2 rounded-xl outline-none" onClick={() => setColor("green")} >green</div>
          <div className="blue bg-blue-600 p-2 rounded-xl outline-none" onClick={() => setColor("blue")} >blue</div>
          <div className="yellow bg-yellow-400 p-2 rounded-xl outline-none" onClick={() => setColor("yellow")} >yellow</div>
          <div className="purple bg-purple-600 p-2 rounded-xl outline-none" onClick={() => setColor("purple")} >purple</div>
          <div className="grey bg-gray-500 p-2 rounded-xl outline-none" onClick={() => setColor("grey")} >grey</div>
          <div className="pink bg-pink-500 p-2 rounded-xl outline-none" onClick={() => setColor("pink")} >pink</div>
          <div className="orange bg-orange-500 p-2 rounded-xl outline-none" onClick={() => setColor("orange")} >orange</div>
          <div className="white bg-white p-2 rounded-xl outline-none" onClick={() => setColor("white")} >white</div>
          <div className="black bg-black p-2 rounded-xl text-white outline-none" onClick={() => setColor("black")} >black</div>
          <div className="emerald bg-emerald-500 p-2 rounded-xl outline-none" onClick={() => setColor("aqua")} >emerald</div>
          <div className="amber bg-amber-900 p-2 rounded-xl outline-none" onClick={() => setColor("brown")} >amber</div>
        </div>
      </>
      )
}

      export default App
