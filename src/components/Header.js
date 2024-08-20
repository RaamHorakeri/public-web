'use client'

import { useState } from 'react';
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
} from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const handleMenuItemClick = (item) => {
    setActiveItem(item);
    
  };

  return (
    <header className="bg-white shadow">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5 flex items-center">
            <img src="/path-to-logo/logo.png" alt="Logo" className="h-10 w-10 mr-3" />
            <span className="text-xl font-semibold text-[#7C56CF]">Brand Name</span>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          {['Home', 'Courses', 'Consultation', 'Community', 'Terms & Policy'].map((item) => (
            <Link
            href={`/features/${item.toLowerCase()}`}
              key={item}
              onClick={() => handleMenuItemClick(item)}
              className={`text-sm font-semibold leading-6 ${activeItem === item ? 'text-[#7C56CF]' : 'text-[#868686]'}`}
            >
              {item}
            </Link>
          ))}
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end flex space-x-4">
          <Link href="/features/auth/login" className="text-sm px-4 py-2 text-[#7C56CF] border-2 border-[#7C56CF] rounded">
            Log in
          </Link>
          <Link href="/features/auth/signup"  className="text-sm px-4 py-2 bg-[#7C56CF] text-white rounded hover:bg-blue-700">
            Sign Up
          </Link>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <img src="/path-to-logo/logo.png" alt="Logo" className="h-10 w-10 mr-3" />
              <span className="text-xl font-semibold">Brand Name</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {['Home', 'Courses', 'Consultation', 'Community', 'Terms & Policy'].map((item) => (
                  <a
                   
                    key={item}
                    onClick={() => handleMenuItemClick(item)}
                    href={`/features/${item.toLowerCase()}`}
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${activeItem === item ? 'text-[#7C56CF] bg-gray-50' : 'text-gray-900 hover:bg-gray-50'}`}
                  >
                    {item}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <Link
                  href="/features/auth/login"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </Link>
                <Link
                  href="/features/auth/signup"
                  className="-mx-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
