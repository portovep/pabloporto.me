import React from 'react';
import Link from 'next/link';
import Meta from '../Meta/Meta';

type LayoutProps = {
    children: React.ReactNode;
    home?: boolean;
    wide?: boolean;
    pageTitle?: string;
};

export default function Layout({
    children,
    home,
    wide,
    pageTitle
}: LayoutProps): React.ReactElement {
    return (
        <main
            className={`${wide ? 'max-w-6xl' : 'max-w-4xl'} px-4 sm:px-6 py-0 mx-auto grow antialiased`}>
            <Meta pageTitle={pageTitle} />
            <section>{children}</section>
            {!home && (
                <div className="mt-12 text-lg">
                    <Link href="/" rel="noopener noreferrer">
                        <span className="hover:text-emerald-600 font-medium">
                            <span aria-hidden="true" className="mr-2">
                                ←
                            </span>
                            Back to home
                        </span>
                    </Link>
                </div>
            )}
        </main>
    );
}
