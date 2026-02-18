"use client"

import { useState } from "react"

export default function Home(){
  const [text,setText] = useState("hi")
  const [input,setInput] = useState("")

return (
  <div className="bg-neutral-700">
    <div className="text-center text-white font-extrabold text-2xl">
      {text}
    </div>
    <div className="flex items-center justify-center mt-5">
      <input 
      className="font-bold text-red-400 border-2 border-red-600"
      placeholder="Enter Text"
      value={input}
      onChange={(e)=>setInput(e.target.value)}
      />
    <button 
    onClick={()=>(setText(input))}
    className="border-3 border-red-500 p-5 rounded-xl bg-amber-300 font-bold uppercase">ClickMe</button>
    </div>
    
  </div>
)
}