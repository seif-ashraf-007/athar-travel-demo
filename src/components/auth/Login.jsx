import { useState, useEffect } from 'react';

export default function Login() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <div className="absolute inset-0 blur-3xl opacity-50"
        style={{
          background: 'radial-gradient(circle, rgba(192, 132, 252, 0.3) 0%, rgba(232, 121, 249, 0.3) 50%, rgba(204, 171, 238, 0.3) 100%)',
        }}></div>
      <div className={`relative w-full max-w-md mx-auto p-8 bg-white rounded-xl shadow-lg transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
        <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>
        <form className="mt-8 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
