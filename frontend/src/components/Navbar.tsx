import { BellIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary-600">HostelEase</h1>
        <div className="flex items-center space-x-4">
          <button className="relative">
            <BellIcon className="h-6 w-6 text-gray-600" />
            <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="h-10 w-10 rounded-full border-2 border-primary-500"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;