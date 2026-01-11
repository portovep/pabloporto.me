'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import websiteLogo from '../../public/android-chrome-192x192.png';

export default function Header(): React.ReactElement {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    return (
        <header
            data-testid="navbar"
            className="border-b sticky top-0 z-20 py-5 mb-6 bg-white border-b border-gray-300 border-solid">
            <div className="lg:max-w-4xl md:px-0 container flex items-center justify-between px-6 mx-auto">
                <Link href="/">
                    <div className="flex justify-start mr-2">
                        <div className="sm:h-10 sm:w-10 relative w-8 h-8">
                            <Image priority alt="Website logo" src={websiteLogo} />
                        </div>
                    </div>
                </Link>
                <Link href="/" className="font-bold tracking-wider text-gray-900 transition-colors">
                    Pablo Porto
                </Link>
                <nav
                    className="md:flex md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex-wrap items-center justify-center hidden text-base"
                    data-testid="desktop-menu">
                    <Link
                        href="/blog"
                        className="hover:text-emerald-600 text-slate-600 sm:text-base mr-5 text-lg font-semibold transition-colors"
                        data-testid="desktop-menu-writing">
                        Writing
                    </Link>
                    <Link
                        href="/reading"
                        className="hover:text-emerald-600 text-slate-600 sm:text-base mr-5 text-lg font-semibold transition-colors"
                        data-testid="desktop-menu-reading">
                        Reading
                    </Link>
                    <Link
                        href="/speaking"
                        className="hover:text-emerald-600 text-slate-600 sm:text-base mr-5 text-lg font-semibold transition-colors"
                        data-testid="desktop-menu-speaking">
                        Speaking
                    </Link>
                    <Link
                        href="/working"
                        className="hover:text-emerald-600 text-slate-600 sm:text-base mr-5 text-lg font-semibold transition-colors"
                        data-testid="desktop-menu-working">
                        Working
                    </Link>
                    <Link
                        href="/traveling"
                        className="hover:text-emerald-600 text-slate-600 sm:text-base mr-5 text-lg font-semibold transition-colors"
                        data-testid="desktop-menu-traveling">
                        Traveling
                    </Link>
                    <Link
                        href="/making"
                        className="hover:text-emerald-600 text-slate-600 sm:text-base mr-5 text-lg font-semibold transition-colors"
                        data-testid="desktop-menu-making">
                        Making
                    </Link>
                    <Link
                        href="/about"
                        className="hover:text-emerald-600 text-slate-600 sm:text-base mr-5 text-lg font-semibold transition-colors"
                        data-testid="desktop-menu-about">
                        About
                    </Link>
                </nav>
                <div className="sm:hidden item-center flex">
                    <button
                        onClick={() => setShowMobileMenu(!showMobileMenu)}
                        type="button"
                        className="focus:outline-none w-8 h-8 ml-1 mr-1 rounded"
                        aria-label="Toggle mobile menu"
                        data-testid="mobile-menu-toggle">
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
                        <nav className="fixed h-full mt-8" data-testid="mobile-menu">
                            <div className="px-12 py-4">
                                <Link
                                    href="/blog"
                                    className="hover:text-emerald-600 mr-5 font-semibold transition-colors"
                                    onClick={() => setShowMobileMenu(!showMobileMenu)}
                                    data-testid="mobile-menu-writing">
                                    Writing
                                </Link>
                            </div>
                            <div className="px-12 py-4">
                                <Link
                                    href="/reading"
                                    className="hover:text-emerald-600 mr-5 font-semibold transition-colors"
                                    onClick={() => setShowMobileMenu(!showMobileMenu)}
                                    data-testid="mobile-menu-reading">
                                    Reading
                                </Link>
                            </div>
                            <div className="px-12 py-4">
                                <Link
                                    href="/speaking"
                                    className="hover:text-emerald-600 mr-5 font-semibold transition-colors"
                                    onClick={() => setShowMobileMenu(!showMobileMenu)}
                                    data-testid="mobile-menu-speaking">
                                    Speaking
                                </Link>
                            </div>
                            <div className="px-12 py-4">
                                <Link
                                    href="/working"
                                    className="hover:text-emerald-600 mr-5 font-semibold transition-colors"
                                    onClick={() => setShowMobileMenu(!showMobileMenu)}
                                    data-testid="mobile-menu-working">
                                    Working
                                </Link>
                            </div>
                            <div className="px-12 py-4">
                                <Link
                                    href="/traveling"
                                    className="hover:text-emerald-600 mr-5 font-semibold transition-colors"
                                    onClick={() => setShowMobileMenu(!showMobileMenu)}
                                    data-testid="mobile-menu-traveling">
                                    Traveling
                                </Link>
                            </div>
                            <div className="px-12 py-4">
                                <Link
                                    href="/making"
                                    className="hover:text-emerald-600 mr-5 font-semibold transition-colors"
                                    onClick={() => setShowMobileMenu(!showMobileMenu)}
                                    data-testid="mobile-menu-making">
                                    Making
                                </Link>
                            </div>
                            <div className="px-12 py-4">
                                <Link
                                    href="/about"
                                    className="focus:text-emerald-600 mr-5 font-semibold transition-colors"
                                    onClick={() => setShowMobileMenu(!showMobileMenu)}
                                    data-testid="mobile-menu-about">
                                    About
                                </Link>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}
