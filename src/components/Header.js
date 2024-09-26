"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("access_token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    Cookies.remove("access_token");
    setIsLoggedIn(false);

    router.push("/");
  };

  const handleMenuItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div>
      <header className="bg-[#01010C] flex h-[120px]">
        <nav
          aria-label="Global"
          className="flex w-full mx-[100px] items-center justify-between"
        >
          <div className="flex items-center w-[203px] h-[60px]">
            <Link href="/" className="flex gap-2">
              <Image
                src="/images/headerIcon.svg"
                width={60}
                height={60}
                alt="Logo"
                className=""
              />
              <span className="text-[36px] font-bold text-[#ffffff] w-[198px] h-[38px] leading-[49.1px]">
                Learnix
              </span>
            </Link>
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
          <PopoverGroup className="flex justify-between h-[48px] gap-[44px] items-center">
            {["Home", "Courses", "About Us", "Community", "Resources"].map(
              (item) => (
                <Link
                  href={
                    item === "Community"
                      ? "/community/featuredQuestions"
                      : `/${item.toLowerCase()}`
                  }
                  key={item}
                  onClick={() => handleMenuItemClick(item)}
                  className={`text-[16px] font-bold font-roboto leading-[21.82px] ${
                    activeItem === item ? "text-[#6C63FF]" : "text-[#ffffff]"
                  }`}
                >
                  {item}
                </Link>
              ),
            )}
          </PopoverGroup>

          <div className="lg:flex flex items-center w-[205px] h-[48px]">
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="text-center text-[16px] font-bold leading-[21.82px] font-roboto flex justify-center items-center bg-[#FFFFFF] text-[#1C1C1C] rounded-[20px] w-[92px] h-[38px]"
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-center text-[16px] font-bold leading-[21.82px] font-roboto flex justify-center items-center text-[#ffffff] rounded-[20px] w-[75px] h-[38px]"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="text-center text-[16px] font-bold leading-[21.82px] font-roboto flex justify-center items-center bg-[#FFFFFF] text-[#1C1C1C] rounded-[20px] w-[92px] h-[38px]"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </nav>

        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-10" />
          <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <Image
                  src="/path-to-logo/logo.png"
                  alt="Logo"
                  className="mr-3"
                  width={40}
                  height={40}
                />
                <span className="text-xl font-semibold">Learnix</span>
              </Link>
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
                  {[
                    "Home",
                    "Courses",
                    "Consultation",
                    "Community",
                    "Terms & Policy",
                  ].map((item) => (
                    <Link
                      key={item}
                      onClick={() => handleMenuItemClick(item)}
                      href={`/${item.toLowerCase()}`}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${
                        activeItem === item
                          ? "text-[#7C56CF] bg-gray-50"
                          : "text-gray-900 hover:bg-gray-50"
                      }`}
                    >
                      {item}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    href="/login"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </Link>
                  <Link
                    href="/signup"
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
      <div className="w-full h-[1px] bg-[#393939]"></div>
    </div>
  );
}
