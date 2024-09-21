"use client"

import { useState } from "react"

export default function Footer() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(prev => prev + 1)
  }

  return (
    <footer className="bg-white/50 z-10 backdrop-blur">
      <div className="mx-auto max-w-4xl text-center py-6 text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} Our Company.</p>
        <p>
          You have clicked the following button {count} times. <button onClick={handleClick}>Click Me</button>
        </p>
      </div>
    </footer>
  )
}
