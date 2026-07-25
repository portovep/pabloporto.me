'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

/**
 * On navigation Next scrolls to the top of the first Page element, skipping sticky ones.
 * The header is sticky and 81px tall, so internal links land just below the top of the
 * document with the header already scrolled off. Pull the document fully up instead.
 *
 * Left alone: hash links (the anchor target wins), /photography (keeps its own position),
 * back/forward (the browser's restored position wins), and the initial page load.
 */
export default function ScrollToTop() {
    const pathname = usePathname();
    const isInitialRender = useRef(true);
    const isHistoryNavigation = useRef(false);

    useEffect(() => {
        const markHistoryNavigation = () => {
            isHistoryNavigation.current = true;
        };
        window.addEventListener('popstate', markHistoryNavigation);
        return () => window.removeEventListener('popstate', markHistoryNavigation);
    }, []);

    useEffect(() => {
        if (isInitialRender.current) {
            isInitialRender.current = false;
            return;
        }
        if (isHistoryNavigation.current) {
            isHistoryNavigation.current = false;
            return;
        }
        if (window.location.hash) return;
        if (pathname.startsWith('/photography')) return;

        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}
