import { Link } from "react-router-dom"
import { FaExclamationTriangle } from "react-icons/fa"

function NotFoundPage() {
  return (
    <>
      <section className="bg-gray-100 flex items-center justify-center h-screen">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-8">
            <FaExclamationTriangle />
            Oops! The page you're looking for doesn't exist.
          </p>
          <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">Go Home</Link>
        </div>
      </section>
    </>
  )
}

export default NotFoundPage