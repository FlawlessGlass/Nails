import ImageUploader from "./components/ImageUploader"
import NailDesignSelector from "./components/NailDesignSelector"
import ResultPreview from "./components/ResultPreview"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Nail Design App</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="bg-white shadow rounded-lg p-6">
              <div className="grid gap-6">
                <ImageUploader />
                <NailDesignSelector />
                <ResultPreview />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

