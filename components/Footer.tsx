import Image from 'next/image';

import { HeartIcon } from '@/components/ui/heart';
import { CoffeeIcon } from '@/components/ui/coffee';
import { ThemeToggle } from '@/components/ThemeToggle';

export default function Footer(): React.ReactElement {
    return (
        <footer
            data-testid="footer"
            className="group mt-14 flex flex-col items-center justify-center w-full border-t border-border bg-background text-foreground pb-10 pt-10">
            <div className="sm:text-xl flex items-center justify-center gap-1 mt-4 text-base cursor-default text-foreground">
                Made with{' '}
                <span className="inline-flex hover:text-red-600" aria-hidden="true">
                    <HeartIcon size={20} className="shrink-0" />
                </span>{' '}
                and flat whites{' '}
                <span className="inline-flex hover:text-amber-800" aria-hidden="true">
                    <CoffeeIcon size={20} className="shrink-0" />
                </span>{' '}
                in Spain, {new Date().getFullYear()}™
            </div>
            <div className="flex items-center justify-center mt-4 dark:[&_img]:invert">
                <a
                    className="mr-3.5 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    href="https://medium.com/@pablo.porto"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Pablo on Medium">
                    <Image
                        src="/images/logos/medium.svg"
                        alt=""
                        role="presentation"
                        width="20"
                        height="20"
                    />
                </a>
                <a
                    className="mr-3 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    href="https://github.com/portovep"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile">
                    <Image
                        src="/images/logos/github.svg"
                        alt=""
                        role="presentation"
                        width="20"
                        height="20"
                    />
                </a>
                <a
                    className="mr-3 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    href="https://www.instagram.com/porto.vga"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram profile">
                    <Image
                        src="/images/logos/instagram.svg"
                        alt=""
                        role="presentation"
                        width="20"
                        height="20"
                    />
                </a>
                <a
                    className="mr-3 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    href="https://linkedin.com/in/pabloportoveloso"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profile">
                    <Image
                        src="/images/logos/linkedin.svg"
                        alt=""
                        role="presentation"
                        width="28"
                        height="28"
                    />
                </a>
            </div>
            <div className="mt-4 flex items-center justify-center">
                <ThemeToggle />
            </div>
        </footer>
    );
}
