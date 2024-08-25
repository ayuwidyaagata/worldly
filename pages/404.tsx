import Link from "next/link";

const Custom404 = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-center">
      <h1 className="text-9xl font-bold text-lime-500 mb-4">404</h1>
      <p className="text-2xl text-gray-700 mb-8">Oops! Page not found.</p>
      <Link href="/home">
        <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full">
          Go to Home
        </button>
      </Link>
    </div>
  );
};

export default Custom404;
