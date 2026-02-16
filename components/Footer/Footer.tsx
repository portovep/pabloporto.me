import React from 'react';
import Image from 'next/image';

import { HeartIcon } from '@/components/ui/heart';
import { CoffeeIcon } from '@/components/ui/coffee';

export default function Footer(): React.ReactElement {
    return (
        <footer
            data-testid="footer"
            className="group h-28 mt-14 items-center justify-center w-full bg-white border-t border-gray-300 border-solid">
            <div className="sm:text-xl flex items-center justify-center gap-1 mt-4 text-base cursor-default">
                Made with{' '}
                <span className="inline-flex cursor-pointer hover:text-red-600" aria-hidden="true">
                    <HeartIcon size={20} className="shrink-0" />
                </span>{' '}
                and flat whites{' '}
                <span
                    className="inline-flex cursor-pointer hover:text-amber-800"
                    aria-hidden="true">
                    <CoffeeIcon size={20} className="shrink-0" />
                </span>{' '}
                in Spain, {new Date().getFullYear()}™
            </div>
            <div className="flex items-center justify-center mt-4">
                <a
                    className="mr-3.5"
                    href="https://medium.com/@pablo.porto"
                    target="_blank"
                    rel="noopener noreferrer">
                    <Image
                        src="/images/logos/medium.svg"
                        alt="Medium Logo"
                        width="20"
                        height="20"
                    />
                </a>

                <a
                    className="mr-3"
                    href="https://github.com/portovep"
                    target="_blank"
                    rel="noopener noreferrer">
                    <Image
                        src="/images/logos/github.svg"
                        alt="Github Logo"
                        width="20"
                        height="20"
                    />
                </a>

                <a
                    className="mr-3"
                    href="https://www.instagram.com/porto.vga"
                    target="_blank"
                    rel="noopener noreferrer">
                    <Image
                        src="/images/logos/instagram.svg"
                        alt="Instagram Logo"
                        width="20"
                        height="20"
                    />
                </a>

                <a
                    className="mr-3"
                    href="https://linkedin.com/in/pabloportoveloso"
                    target="_blank"
                    rel="noopener noreferrer">
                    <Image
                        src="/images/logos/linkedin.svg"
                        alt="Linkedin Logo"
                        width="28"
                        height="28"
                    />
                </a>
            </div>
        </footer>
    );
}
