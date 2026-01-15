import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-7xl md:text-9xl font-bold text-white mb-4">404</h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">Page Not Found</p>
        <Link
          to="/"
          className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white text-lg font-bold hover:scale-105 transition-transform whitespace-nowrap cursor-pointer"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
