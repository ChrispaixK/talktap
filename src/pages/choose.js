import Link from 'next/link'

export default function Choose() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-2xl font-bold mb-8">Choose a category:</h1>
      <Link href="/play?category=animals">
        <button className="px-8 py-4 bg-green-500 text-white rounded-lg hover:bg-green-600 mb-4">
          Animals
        </button>
      </Link>
      <Link href="/play?category=countries">
        <button className="px-8 py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Countries
        </button>
      </Link>
    </div>
  )
}
