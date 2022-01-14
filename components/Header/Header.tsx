import Link from 'next/link';
import { useState } from 'react';

export default function Header(): JSX.Element {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    return (
        <div className="border-b-1 sticky top-0 z-20 py-5 mb-6 bg-white border-b border-gray-300 border-solid">
            <div className="lg:max-w-4xl md:px-0 container flex items-center justify-between px-6 mx-auto">
                <Link href="/">
                    <div className="flex justify-start mr-2">
                        <img
                            className="sm:h-10 w-auto h-8"
                            src="android-chrome-192x192.png"
                            alt="website logo"
                        />
                    </div>
                </Link>
                <Link href="/">
                    <a className="font-bold tracking-wider text-gray-900 transition-colors">
                        Pablo Porto
                    </a>
                </Link>
                <nav className="md:flex md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex-wrap items-center justify-center hidden text-base">
                    <Link href="/blog">
                        <a className="hover:text-emerald-600 mr-5 transition-colors">Writing</a>
                    </Link>
                    <Link href="/working">
                        <a className="hover:text-emerald-600 mr-5 transition-colors">Working</a>
                    </Link>
                    <Link href="/traveling">
                        <a className="hover:text-emerald-600 mr-5 transition-colors">Traveling</a>
                    </Link>
                    <Link href="/making">
                        <a className="hover:text-emerald-600 mr-5 transition-colors">Making</a>
                    </Link>
                    <Link href="/about">
                        <a className="hover:text-emerald-600 mr-5 transition-colors">About</a>
                    </Link>
                </nav>
                <div className="sm:hidden item-center flex">
                    <button
                        onClick={() => setShowMobileMenu(!showMobileMenu)}
                        type="button"
                        className="focus:outline-none w-8 h-8 ml-1 mr-1 rounded"
                        aria-label="Toggle mobile menu">
                        {showMobileMenu ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="text-gray-900">
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"></path>
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="text-gray-900">
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"></path>
                            </svg>
                        )}
                    </button>
                    <div
                        className={`top-[73px] opacity-90 fixed right-0 z-10 w-full h-full overflow-y-auto ${
                            showMobileMenu ? 'duration-300' : 'duration-100'
                        } ease-in transform ${
                            showMobileMenu ? 'translate-x-0' : 'translate-x-full'
                        } bg-gray-200`}>
                        <nav className="fixed h-full mt-8">
                            <div className="px-12 py-4">
                                <Link href="/blog">
                                    <button
                                        className="hover:text-emerald-600 mr-5 font-semibold transition-colors"
                                        onClick={() => setShowMobileMenu(!showMobileMenu)}>
                                        Writing
                                    </button>
                                </Link>
                            </div>
                            <div className="px-12 py-4">
                                <Link href="/working">
                                    <button
                                        className="hover:text-emerald-600 mr-5 font-semibold transition-colors"
                                        onClick={() => setShowMobileMenu(!showMobileMenu)}>
                                        Working
                                    </button>
                                </Link>
                            </div>
                            <div className="px-12 py-4">
                                <Link href="/traveling">
                                    <button
                                        className="hover:text-emerald-600 mr-5 font-semibold transition-colors"
                                        onClick={() => setShowMobileMenu(!showMobileMenu)}>
                                        Traveling
                                    </button>
                                </Link>
                            </div>
                            <div className="px-12 py-4">
                                <Link href="/making">
                                    <button
                                        className="hover:text-emerald-600 mr-5 font-semibold transition-colors"
                                        onClick={() => setShowMobileMenu(!showMobileMenu)}>
                                        Making
                                    </button>
                                </Link>
                            </div>
                            <div className="px-12 py-4">
                                <Link href="/about">
                                    <button
                                        className="focus:text-emerald-600 mr-5 font-semibold transition-colors"
                                        onClick={() => setShowMobileMenu(!showMobileMenu)}>
                                        About
                                    </button>
                                </Link>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}
