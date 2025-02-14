"use client"
import { useState } from "react"

export default function ImageUploader() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0])
    }
  }

  return (
    <div className="my-4">
      <h2 className="text-2xl font-semibold mb-2">Upload Your Image</h2>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="block w-full text-sm text-gray-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-violet-50 file:text-violet-700
          hover:file:bg-violet-100
        "
      />
      {selectedFile && <p className="mt-2">Selected file: {selectedFile.name}</p>}
    </div>
  )
}

