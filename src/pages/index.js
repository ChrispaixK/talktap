import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Link href="/choose">
        <button className="px-8 py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Start
        </button>
      </Link>
    </div>
  )
}
