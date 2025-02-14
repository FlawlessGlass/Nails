"use client"
import { useState } from "react"
import Image from "next/image"

const nailDesigns = [
  { id: 1, name: "Classic Red", image: "/designs/classic-red.jpg" },
  { id: 2, name: "French Tips", image: "/designs/french-tips.jpg" },
  { id: 3, name: "Glitter Gold", image: "/designs/glitter-gold.jpg" },
]

export default function NailDesignSelector() {
  const [selectedDesign, setSelectedDesign] = useState<number | null>(null)

  return (
    <div className="my-4">
      <h2 className="text-2xl font-semibold mb-2">Select Nail Design</h2>
      <div className="grid grid-cols-3 gap-4">
        {nailDesigns.map((design) => (
          <div
            key={design.id}
            className={`border p-2 rounded cursor-pointer ${selectedDesign === design.id ? "border-blue-500" : "border-gray-200"}`}
            onClick={() => setSelectedDesign(design.id)}
          >
            <Image
              src={design.image || "/placeholder.svg"}
              alt={design.name}
              width={100}
              height={100}
              className="object-cover"
            />
            <p className="mt-2 text-center">{design.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

