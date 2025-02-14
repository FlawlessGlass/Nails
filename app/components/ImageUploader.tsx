"use client"
import { useState, useCallback } from "react"
import Image from "next/image"

export default function ImageUploader() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)

  const handleFileChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0]
      setSelectedFile(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }, [])

  const handleUpload = useCallback(async () => {
    if (!selectedFile) return

    const formData = new FormData()
    formData.append("image", selectedFile)

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      })
      const data = await response.json()
      console.log("Upload successful:", data)
      // Here you would typically update the app state or notify the user
    } catch (error) {
      console.error("Upload failed:", error)
      // Here you would typically show an error message to the user
    }
  }, [selectedFile])

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
      {preview && (
        <div className="mt-4">
          <Image
            src={preview || "/placeholder.svg"}
            alt="Preview"
            width={300}
            height={300}
            className="object-contain"
          />
        </div>
      )}
      <button
        onClick={handleUpload}
        disabled={!selectedFile}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
      >
        Upload Image
      </button>
    </div>
  )
}

