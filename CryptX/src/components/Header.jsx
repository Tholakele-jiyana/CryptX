import { useState } from 'react';

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="py-3 mb-3 border-b">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center lg:justify-start">
         
         {/* Search Form */}
          <form className="w-full lg:w-auto mb-3 lg:mb-0 lg:mr-3" role="search">
            <input 
              type="search" 
              className="w-full lg:w-64 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" 
              placeholder="Search..." 
              aria-label="Search"
            />
          </form>

          {/* Logo */}
          <a href="/" className="flex items-center mb-2 lg:mb-0 text-gray-900 no-underline">
            <svg className="mr-2" width="40" height="32" role="img" aria-label="Logo">
              <use xlinkHref="#bootstrap"></use>
            </svg>
          </a>
          

          
          {/* Navigation Links */}
          <ul className="flex flex-wrap col-12 lg:flex-1 lg:ml-8 mb-2 justify-center md:mb-0 gap-2">
            <li><a href="#" className="px-2 text-gray-600 hover:text-gray-900">Overview</a></li>
            <li><a href="#" className="px-2 text-gray-900 hover:text-gray-600">Inventory</a></li>
            <li><a href="#" className="px-2 text-gray-900 hover:text-gray-600">Customers</a></li>
            <li><a href="#" className="px-2 text-gray-900 hover:text-gray-600">Products</a></li>
          </ul>
          
          
          
          {/* User Dropdown */}
          <div className="relative text-right">
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center text-gray-900"
            >
              <img 
                src="https://github.com/mdo.png" 
                alt="User avatar" 
                width="32" 
                height="32" 
                className="rounded-full" 
              />
            </button>
            
            {isDropdownOpen && (
              <ul className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-10">
                <li><a className="block px-4 py-2 text-sm hover:bg-gray-100" href="#">New project...</a></li>
                <li><a className="block px-4 py-2 text-sm hover:bg-gray-100" href="#">Settings</a></li>
                <li><a className="block px-4 py-2 text-sm hover:bg-gray-100" href="#">Profile</a></li>
                <li><hr className="my-1 border-gray-200" /></li>
                <li><a className="block px-4 py-2 text-sm hover:bg-gray-100" href="#">Sign out</a></li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}