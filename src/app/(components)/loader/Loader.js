// components/loader/Loader.js
export default function Loader() {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
        <div className="w-16 h-16 border-4 border-t-blue-500 border-gray-200 rounded-full animate-spin"></div>
      </div>
    );
  }
  