"use client"
import { useState } from "react"

export default function Spoiler(props) {
  const [showSpoiler, setShowSpoiler] = useState(false)

  function handleClick() {
    setShowSpoiler(prev => !prev)
  }

  return (
    <div className="bg-gray-200 p-8 rounded-lg relative overflow-hidden not-prose">
      {!showSpoiler && (
        <button
          onClick={handleClick}
          className="bg-gray-500 hover:bg-gray-600 text-white rounded-lg px-4 py-2 z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          {props.data.clickableText}
        </button>
      )}
      {showSpoiler && (
        <button onClick={handleClick} className="absolute top-2 right-3 text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
            <path
              fillRule="evenodd"
              d="M3.28 2.22a.75.75 0 0 0-1.06 1.06l14.5 14.5a.75.75 0 1 0 1.06-1.06l-1.745-1.745a10.029 10.029 0 0 0 3.3-4.38 1.651 1.651 0 0 0 0-1.185A10.004 10.004 0 0 0 9.999 3a9.956 9.956 0 0 0-4.744 1.194L3.28 2.22ZM7.752 6.69l1.092 1.092a2.5 2.5 0 0 1 3.374 3.373l1.091 1.092a4 4 0 0 0-5.557-5.557Z"
              clipRule="evenodd"
            />
            <path d="m10.748 13.93 2.523 2.523a9.987 9.987 0 0 1-3.27.547c-4.258 0-7.894-2.66-9.337-6.41a1.651 1.651 0 0 1 0-1.186A10.007 10.007 0 0 1 2.839 6.02L6.07 9.252a4 4 0 0 0 4.678 4.678Z" />
          </svg>
        </button>
      )}
      <div className={"text-xl transition duration-300 " + (!showSpoiler ? "blur" : "")}>{props.data.actualSpoiler}</div>
    </div>
  )
}
