export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-center text-gray-100">
            <h1 className="text-6xl font-extrabold text-red-400 mb-2">404</h1>
            <h3 className="text-2xl font-semibold text-gray-200 mb-3">
                Oops... Something Went Wrong
            </h3>
            <p className="text-lg text-gray-400 mb-6">Page Not Found</p>
            <a
                href="/"
                className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition-colors duration-200"
            >
                Go Home
            </a>
        </div>
    );
}
